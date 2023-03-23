import CommentService from "../services/commentService.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const response = await commentService.createComment(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    return res.status(201).json({
      success: true,
      message: "Successfully created a new comment",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: error,
    });
  }
};