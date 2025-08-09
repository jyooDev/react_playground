import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import { OpenAI } from "openai";
import { toFile } from "openai/uploads"; // ★ 버퍼→File 변환

const app = express();

// CORS (필요 시 origin 제한)
app.use(cors());

// 25MB 제한 예시 (실사용에 맞게 조정)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 },
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


const ALLOWED_MIME = new Set([
  "audio/webm",
  "audio/webm;codecs=opus",
  "audio/ogg",
  "audio/mpeg",
  "audio/wav",
  "audio/mp4",
]);

app.post("/api/transcribe", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "file field missing" });
    }

    const mime = (req.file.mimetype || "").toLowerCase();
    if (![...ALLOWED_MIME].some(t => mime.startsWith(t.split(";")[0]))) {
      return res.status(415).json({ error: `unsupported content-type: ${mime}` });
    }

    
    const file = await toFile(req.file.buffer, "rec.webm", { type: mime });

    const tr = await openai.audio.transcriptions.create({
      file,
      model: "gpt-4o-transcribe",
    });

    return res.json({ transcript: tr.text ?? "" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err?.message ?? "internal error" });
  }
});

app.listen(3001, () => console.log("Backend running on 3001"));
