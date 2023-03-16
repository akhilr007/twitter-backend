import { TweetRepository, CommentRepository } from "../repository/index.js";

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async createComment(modelId, modelType, userId, content) {
    if (modelType == "Tweet") {
      var commentableTweet = await this.tweetRepository.get(modelId);
    } else if (modelType == "Comment") {
      var commentableTweet = await this.commentRepository.get(modelId);
    } else {
      throw new Error("unknown model type");
    }

    const comment = await this.commentRepository.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });

    commentableTweet.comments.push(comment);
    await commentableTweet.save();

    return comment;
  }
}

export default CommentService;
