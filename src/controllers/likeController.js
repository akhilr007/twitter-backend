import LikeService from "../services/likeService.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(201).json({
      success: true,
      data: response,
      message: "successfully toggled the like",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: error,
    });
  }
};
