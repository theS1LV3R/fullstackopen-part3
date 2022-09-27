import express from "express";
import http from "node:http";

import api from "./api/index.mjs";

// TODO: Add these to a config file later
const PORT = 3001;
const HOST = "0.0.0.0";

const app = express();

app.use((req, res, next) => {
  console.log(req);
  console.log(res)
  next();
});

app.use(api);

function listen() {
  const server = http.createServer(app);

  server
    .listen(PORT, HOST)
    .on("listening", () => {
      console.log(`Listening on ${HOST}:${PORT}`);
    })
    .on("error", (e) => {
      console.error(e);
      process.exit(1);
    });
}

listen();
