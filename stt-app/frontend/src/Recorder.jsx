import React, { useRef, useState } from "react";
import axios from "axios";
import { VscDebugStart, VscDebugPause, VscDebugStop } from "react-icons/vsc";

export default function Recorder() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]); 
  const lastServerTextRef = useRef("");

  async function start() {
    if (listening) return;
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const preferred = "audio/webm;codecs=opus";
      const mimeType = MediaRecorder.isTypeSupported(preferred)
        ? preferred
        : (MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "");

      const mr = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      recorderRef.current = mr;
      chunksRef.current = [];
      lastServerTextRef.current = "";
      setTranscript("");
      setListening(true);

      mr.ondataavailable = async (e) => {
        if (!e.data || e.data.size === 0) return;
        chunksRef.current.push(e.data);
      };

      mr.onstop = async () => {
        const fullBlob = new Blob(chunksRef.current, { type: "audio/webm" });

        const form = new FormData();
        form.append("file", fullBlob, "sofar.webm");
        try {
          const res = await axios.post("http://localhost:3001/api/transcribe", form);

          const serverAllText = (res.data?.transcript ?? "").trim();
          setTranscript(res.data.transcript);

          console.log(transcript);
        } catch (error) {
          console.error("Upload failed:", error?.response?.data || error);
        }
      };
      mr.start();
      console.log("STARTED");
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
    <div className="flex flex-col items-center w-full max-w-screen h-full">
      <div>
        <button onClick={start} className={listening ? 'hidden' : 'visible'}><VscDebugStart className="w-16 h-16 text-blue-600 bg-black p-3 rounded-full"/></button>
        <button onClick={stop} className={listening ? 'visible' : 'hidden'}><VscDebugStop className="w-16 h-16 text-blue-600 bg-black p-3 rounded-full"/></button>
        <div>
          <pre style={{ whiteSpace: "pre-wrap" }}>{transcript}</pre>
        </div>
      </div>
    </div>
  );
}
