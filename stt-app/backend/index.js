import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import { OpenAI } from "openai";
import { toFile } from "openai/uploads";

const app = express();


app.use(cors());
app.use(express.json()); 

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

app.post("/api/generate-emojis", async (req, res) => {
  try {
    console.log("POST /api/generate-emojis");
    const { transcript } = req.body || {};
    console.log("transcript:", transcript);

    if (!transcript || typeof transcript !== "string" || !transcript.trim()) {
      return res.status(400).json({ error: "Transcript is required" });
    }

    const EMOJI_SYSTEM_INSTRUCTIONS = `
You are an emoji recommender for diary entries.
Rules:
- Return ONLY emojis capturing the overall feelings, events, and vibes of the diary (no words).
- 1 to 10 unique emojis total. Deduplicate similar ones (e.g., 😀 vs 😃).
- Balance emotions (positive/negative/mixed); include context emojis (e.g., ☕️, 🌧️) only if clearly mentioned.
- Reflect the whole day, not just one sentence.
- Output as JSON that matches the given schema.
`;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      instructions: EMOJI_SYSTEM_INSTRUCTIONS,
      input: `DIARY:\n${transcript}`,      
    });

    let emojis = [];
    console.log(response);
    let raw = response.output_text.trim();
    raw = raw.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
    console.log(raw);
    console.log(JSON.parse(raw));
    const parsed = JSON.parse(raw);
    emojis = parsed.emojis;
    return res.json(emojis);
  } catch (err) {
    console.error("generate-emojis error:", err);
    return res.status(500).json({ error: err?.message ?? "internal error" });
  }
});

app.listen(3001, () => console.log("Backend running on 3001"));
