import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

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

  if (url === "/client.js") {
    const js = fs.readFileSync(
      path.join(__dirname, "./client.js"),
      "utf8"
    );
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(js);
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
