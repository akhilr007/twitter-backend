import CrudRepository from "./crudRepository.js";
import Comment from "../models/Comment.js";

class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }
}

export default CommentRepository;
