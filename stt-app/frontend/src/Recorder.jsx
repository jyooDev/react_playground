import React, { useRef, useState } from "react";
import axios from "axios";
import { VscDebugStart, VscDebugPause, VscDebugStop } from "react-icons/vsc";
import { TranscriptBox } from "./TranscriptBox.jsx";

export default function Recorder() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recordURL, setRecordURL] = useState("");
  const [translationLoading, setTranslationLoading] = useState(false);
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]); 

  async function start() {
    if (listening) return;
    setRecordURL('');
    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = "audio/webm";
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
        console.log("DATA AVAILABLE CALLED");
        chunksRef.current.push(e.data);
        console.log("DATA IS AVAILABLE");
      };

      recorderRef.current.onstop = async (e) => {
        console.log("DATA ON STOP IS CALLED");
        console.log(chunksRef.current);
        const fullBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        const audioURL = URL.createObjectURL(fullBlob);
        const form = new FormData();
        form.append("file", fullBlob, "sofar.webm");
        try {
          const res = await axios.post("http://localhost:3001/api/transcribe", form);
          setTranscript(res.data.transcript);
          setRecordURL(audioURL);
        } catch (error) {
          console.error("Upload failed:", error?.response?.data || error);
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
    <div className="flex items-center w-full max-w-screen h-full">
      <div className="flex flex-col justify-center items-center w-full gap-5">
        <button onClick={start} className={listening ? 'hidden' : 'visible'}><VscDebugStart className="hover:bg-white/50 transition ease-in-out w-30 h-30 text-white bg-white/30 p-3 rounded-full"/></button>
        <button onClick={stop} className={listening ? 'visible' : 'hidden'}><VscDebugStop className="hover:bg-white/50 w-30 h-30 text-white bg-white/30 p-3 rounded-full"/></button>
        <div>
          {recordURL && <audio controls src={recordURL}/>}
        </div>
        <div>
          <TranscriptBox transcript={transcript}/>
        </div>
      </div>
    </div>
  );
}
