import { createServer } from "node:http";

import { config } from "./config.js";
import { createCollaborationWebSocketServer } from "./websocket/server.js";

const server = createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  response.writeHead(404, { "content-type": "application/json" });
  response.end(JSON.stringify({ error: "Not found" }));
});

createCollaborationWebSocketServer(server);

server.listen(config.port, () => {
  console.log(`Collaboration server listening on port ${config.port}`);
});
