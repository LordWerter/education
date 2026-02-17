const http = require("http");
const fs = require("fs");
const path = require("path");

const routing = require('./routing');

http
  .createServer(function (request, response) {
    // console.log("request ", request.url);

    if (request.url.startsWith('/api')) { 
        let jsonString = '';
        response.setHeader('Content-Type', 'application/json');
        request.on('data', (data) => { // Пришла информация - записали.
            jsonString += data;
        });

        request.on('end', () => {// Информации больше нет - передаём её дальше.
            routing.define(request, response, jsonString); // Функцию define мы ещё не создали.
        });
    } else {

        let filePath = "." + request.url;
        if (filePath == "./") {
            filePath = "./static/index.html";
        }
        if(
            filePath.startsWith('./css') 
            || filePath.startsWith('./images') 
            || filePath.startsWith('./fonts') 
            || filePath.startsWith('./js')
            || filePath.startsWith('./about')
            || filePath.startsWith('./game')
            || filePath.startsWith('./contacts')
        ) {
            filePath = './static' + request.url;
        }

        const extname = String(path.extname(filePath)).toLowerCase();
        const mimeTypes = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".wav": "audio/wav",
        ".mp4": "video/mp4",
        ".woff": "application/font-woff",
        ".ttf": "application/font-ttf",
        ".eot": "application/vnd.ms-fontobject",
        ".otf": "application/font-otf",
        ".wasm": "application/wasm",
        };

        var contentType = mimeTypes[extname] || "application/octet-stream";

        fs.readFile(filePath, function (error, content) {
            if (error) {
                if (error.code == "ENOENT") {
                fs.readFile("./static/404.html", function (error, content) {
                    response.writeHead(404, { "Content-Type": "text/html" });
                    response.end(content, "utf-8");
                });
                } else {
                response.writeHead(500);
                response.end(
                    "Sorry, check with the site admin for error: " +
                    error.code +
                    " ..\n",
                );
                }
            } else {
                response.writeHead(200, { "Content-Type": contentType });
                response.end(content, "utf-8");
            }
        });
    }
  })
  .listen(3000);
console.log("Server running at http://127.0.0.1:3000/");