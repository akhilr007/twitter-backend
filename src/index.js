import express from "express";

import connect from "./config/database.js";
import { PORT } from "./config/serverConfig.js";

const app = express();

const setUpAndStartServer = () => {
  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connect();
  });
};

setUpAndStartServer();
