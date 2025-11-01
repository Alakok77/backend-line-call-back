import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ ให้เสิร์ฟไฟล์ static ทั้งหมดในโฟลเดอร์นี้ (index.html, css, js ฯลฯ)
app.use(express.static(__dirname));

// ✅ ถ้ามีการเข้า / หรือ /liff.html ให้ส่ง index.html กลับไป
app.get(["/", "/liff.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
