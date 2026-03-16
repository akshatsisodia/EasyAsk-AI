import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import { chatAI } from "./src/services/ai.service.js";

const PORT = process.env.PORT || 3000;

chatAI();

async function start() {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

  process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
    server.close(() => process.exit(1));
  });
}

start();
