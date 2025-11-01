import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// ✅ แปลง __dirname สำหรับ ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ เสิร์ฟไฟล์ static (liff.html, js, css, etc.)
app.use(express.static(__dirname));

// ✅ ถ้ามีการเข้าหน้า root ("/") หรือ "/liff.html" → ให้ส่งไฟล์ liff.html
app.get(["/", "/liff.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "liff.html"));
});

// ✅ start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
