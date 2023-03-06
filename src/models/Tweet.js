import mongoose from "mongoose";

const tweetSchema =
  ({
    content: {
      type: String,
      required: true,
      max: [256, "Tweet cannot be more than 256 characters"],
    },
    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
  },
  { timestamps: true });

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
