import express from "express";
import bodyParser from "body-parser";

import connect from "./config/database.js";
import { PORT } from "./config/serverConfig.js";

const app = express();

const setUpAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connect();
  });
};

setUpAndStartServer();
