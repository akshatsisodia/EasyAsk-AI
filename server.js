import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";

const PORT = process.env.PORT || 3000;

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
