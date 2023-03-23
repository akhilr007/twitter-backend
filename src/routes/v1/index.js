import express from "express";

import { createTweet, getTweet } from "../../controllers/tweetController.js";
import { toggleLike } from "../../controllers/likeController.js";
import { createComment } from "../../controllers/commentController.js";
import { signup, signin } from "../../controllers/userController.js";
import { authenticate } from "../../middlewares/authenticate.js";

const router = express.Router();

router.post("/tweets", authenticate, createTweet);
router.get("/tweets/:id", getTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comments", createComment);

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
