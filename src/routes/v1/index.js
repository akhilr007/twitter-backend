import express from "express";

import { createTweet, getTweet } from "../../controllers/tweetController.js";
import { toggleLike } from "../../controllers/likeController.js";
import { createComment } from "../../controllers/commentController.js";
import { signup } from "../../controllers/userController.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.get("/tweets/:id", getTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comments", createComment);

router.post("/signup", signup);

export default router;
