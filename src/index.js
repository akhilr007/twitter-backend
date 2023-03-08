import express from "express";
import bodyParser from "body-parser";

import connect from "./config/database.js";
import { PORT } from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const setUpAndStartServer = () => {
  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connect();
  });
};

setUpAndStartServer();
