import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import http from "http";
import { initSocket } from "./src/sockets/server.socket.js";

const PORT = process.env.PORT || 3000;

const httpServer = http.createServer(app);

initSocket(httpServer);

async function start() {
  await connectDB();

  const server = httpServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

  process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
    server.close(() => process.exit(1));
  });
}

start();
