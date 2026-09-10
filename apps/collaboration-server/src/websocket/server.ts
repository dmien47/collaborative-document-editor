import type { Server } from "node:http";

import { WebSocketServer } from "ws";

export function createCollaborationWebSocketServer(server: Server) {
  const websocketServer = new WebSocketServer({ server, path: "/collaboration" });

  websocketServer.on("connection", (socket) => {
    socket.send(
      JSON.stringify({
        type: "hello",
        message: "Collaboration server scaffold is running.",
      }),
    );
  });

  return websocketServer;
}
