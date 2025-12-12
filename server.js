import fs from "fs";
import http from "http";
import url from "url";
import query from "querystring";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function server(routes = {}) {
  const port = 8080;

  let mimetypes = {
    html: "text/html",
    js: "application/javascript",
    css: "text/css",
    jpg: "image/jpg",
    png: "image/png",
    jpeg: "image/jpeg",
    svg: "image/svg+xml",
    ico: "image/x-icon",
  };

  const server = http.createServer((req, res) => {
    //get the parsed url of the requested url.
    let parsedURL = url.parse(req.url);
    let dynamicRoutes = parsedURL.pathname;

    //define the filepath;
    //if url equals to '/' serve the index.html, otherwise server the requested url
    //better to separate the diskpath and the routekeys.
    let filepath = path.join(
      __dirname,
      "public",
      req.url === "/" ? "index.html" : req.url
    );

    //if file doenst exists. serve the index html.
    if (!fs.existsSync(filepath)) {
      filepath = path.join(__dirname, "public", "index.html");
    }

    //use the dynamic routing (dynamicRoutes)
    //this is my endpoint receivinbg fetches from the client.
    if (routes[dynamicRoutes]) {
      if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          let queryData;
          try {
            queryData = JSON.parse(body);
          } catch (error) {
            queryData = {};
            console.log("The data is not parsed succesfully.");
          }
          //POST method if succesffuly.
          routes[dynamicRoutes](req, res, queryData);
        });
        return;
      } else {
        //serve the GET
        routes[dynamicRoutes](req, res, query.parse(parsedURL.query));
      }
    }
    //remove the dot. extensions starts at dot eg. .html, .js etc, here we slice it to one so it
    //becomes html, js etc.
    const extractfile = path.extname(filepath).slice(1);
    const mimetype = mimetypes[extractfile] || "application/octet-stream";

    fs.readFile(filepath, (error, content) => {
      if (error) {
        console.log(`error at: ${error}`);
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("file not found");
      }
      res.writeHead(200, { "Content-Type": mimetype });
      res.end(content);
    });
  });
  server.listen(port, () => {
    console.log(`server started at port number: ${port}`);
  });
}
