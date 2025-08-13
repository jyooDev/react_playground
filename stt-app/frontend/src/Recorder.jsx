import React, { useRef, useState } from "react";
import axios from "axios";
import { VscDebugStart, VscDebugPause, VscDebugStop } from "react-icons/vsc";
import { TranscriptBox } from "./TranscriptBox.jsx";
import { EmojiBox } from "./EmojiBox.jsx";
export default function Recorder() {

  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recordURL, setRecordURL] = useState("");
  const [translationLoading, setTranslationLoading] = useState(false);
  const [emojiLoading, setEmojiLoading] = useState(false);
  const [emojis, setEmojis] = useState("");
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]); 
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  async function start() {
    if (listening) return;
    setRecordURL('');
    setTranslationLoading(false);
    setEmojiLoading(false);
    setEmojis("");
    setTranscript("");
    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      const options = {
        audioBitsPerSecond: 128000,
        mimeType: "audio/webm;codecs=opus",
      };
      recorderRef.current = new MediaRecorder(streamRef.current, options);
      chunksRef.current = [];
      setTranscript("");
      setListening(true);
      
      recorderRef.current.start();

      recorderRef.current.ondataavailable = async (e) => {
        chunksRef.current.push(e.data);
      };

      recorderRef.current.onstop = async (e) => {
        console.log(chunksRef.current);
        const fullBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        const audioURL = URL.createObjectURL(fullBlob);
        const form = new FormData();
        const apiKey = localStorage.getItem('OPENAI_KEY') || '';
        console.log("API KEY", apiKey);
        let newTranscript = ''
        form.append("file", fullBlob, "sofar.webm");
        try {
          setTranslationLoading(true);
          const trRes = await axios.post(`${API_BASE_URL}/api/transcribe`, 
            form,
          {
            headers: {
              "x-user-api-key": apiKey,
              "Content-Type": "multipart/form-data"
            }
          });         

          newTranscript = trRes.data.transcript || "";
          setTranscript(newTranscript);
          setRecordURL(audioURL);

        } catch (error) {
          const msg1 = error?.response?.data.error;
          const msg2 = error.message;
          console.error("Upload failed:", msg1 || msg2);
          setTranscript(msg1 || msg2);
          return;
        } finally {
          setTranslationLoading(false);
        }

        try{
          setEmojiLoading(true);
          const emojiRes = await axios.post(`${API_BASE_URL}/api/generate-emojis`, 
            { transcript: newTranscript },
            { headers: { 
              "x-user-api-key": apiKey,
              "Content-Type": "application/json" } }
          );
          console.log(emojiRes);
          const emojiStr = emojiRes.data.join(" ");
          setEmojis(emojiStr || "");
        }catch(error){
          const msg1 = error?.response?.data.error;
          const msg2 = error.message;
          console.error("Upload failed:", msg1 || msg2);
          setEmojis(msg1 || msg2);
          return;
        }finally{
          setEmojiLoading(false);
        }
      };
    } catch (err) {
      console.error("Mic/MediaRecorder error:", err);
    }
  }

  function stop() {
    const mr = recorderRef.current;
    if (mr && mr.state !== "inactive") {
      console.log("STOPPED");
      mr.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    recorderRef.current = null;
    setListening(false);
  }

  return (
    <div className="z-20 flex items-center w-full max-w-screen h-full">
      <div className="flex flex-col justify-center items-center w-full gap-5">
        <button onClick={start} className={listening ? 'hidden' : 'visible'}><VscDebugStart className="hover:bg-white/50 transition ease-in-out w-30 h-30 text-white bg-white/30 p-3 rounded-full"/></button>
        <button onClick={stop} className={listening ? 'visible' : 'hidden'}><VscDebugStop className="hover:bg-white/50 w-30 h-30 text-white bg-white/30 p-3 rounded-full"/></button>
        <div>
          {recordURL && <audio controls src={recordURL}/>}
        </div>
        <div>
          <TranscriptBox loading={translationLoading} transcript={transcript}/>
        </div>
        <div>
          { emojis || emojiLoading ? (<EmojiBox loading={emojiLoading} emojis={emojis}/>) : ('')}
        </div>
      </div>
    </div>
  );
}
