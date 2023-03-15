import Like from "../models/Like.js";
import CrudRepository from "./crudRepository";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
}

export default LikeRepository;
