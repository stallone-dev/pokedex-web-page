/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";

require("dotenv").config();
const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.HOSTPORT || 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);

    const home = path.join(__dirname, "..", "public", "index.html");

    if(req.url === "/"){
        res.writeHead(200, {
            "Content-Type": "text/html",
        });

        fs.readFile(home, "utf-8", (err, data) =>{
            if(err){throw err;}
            res.end(data);
        });
    } else {
        if(req.url.includes("scripts")){
            res.writeHead(200, {"Content-Type": "text/javascript",});
        }
        fs.readFile(path.join(__dirname, "..", "public", req.url), "utf-8", (err, data) =>{
            if(err){throw err;}
            res.end(data);
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
