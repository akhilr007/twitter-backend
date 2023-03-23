import User from "../models/User.js";
import CrudRepository from "./crudRepository.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.findOne({ email: data });
      return response;
    } catch (error) {
      console.log("something wrong in the user repo");
      throw error;
    }
  }
}

export default UserRepository;
