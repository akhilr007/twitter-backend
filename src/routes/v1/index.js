import express from "express";

import { createTweet } from "../../controllers/tweetController.js";
import { toggleLike } from "../../controllers/likeController.js";

const router = express.Router();

router.post("/tweets", createTweet);

router.post("/likes/toggle", toggleLike);

export default router;
