import TweetService from "../services/TweetService.js";
import upload from "../config/file-upload-s3-config.js";

const singleUploader = upload.array("image", 5);

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      const imageFiles = req.files;
      const tweetImages = [];
      for (let i = 0; i < imageFiles.length; i++) {
        tweetImages.push(imageFiles[i].location);
      }
      const payload = { ...req.body };
      payload.images = tweetImages;
      const response = await tweetService.create(payload);
      return res.status(200).json({
        success: true,
        message: "successfully created a new tweet",
        err: {},
        data: response,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: { error },
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: response,
      err: { error },
    });
  }
};
