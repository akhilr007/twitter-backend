import express from "express";
import connect from "./config/database.js";

const app = express();

const setUpAndStartServer = () => {
  const PORT = process.env.PORT;

  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connect();
  });
};

setUpAndStartServer();
