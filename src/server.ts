import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  const url = req.url ?? "/";

  if (url === "/") {
    const html = fs.readFileSync(
      path.join(__dirname, "../ui/index.html"),
      "utf8"
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  }

  if (url.endsWith(".js")) {
    const filePath = path.join(__dirname, url.slice(1));

    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const js = fs.readFileSync(filePath, "utf8");
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(js);
    return;
  }

  if (url.endsWith(".mp3")) {
    const filePath = path.join(__dirname, url.slice(1));

    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const stat = fs.statSync(filePath);
    res.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "Content-Length": stat.size,
    });
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
    return;
  }

  // 404 fallback
  res.writeHead(404);
  res.end("Not found");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
