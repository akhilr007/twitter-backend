import UserRepository from "../repository/userRepository.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in user-service");
      throw error;
    }
  }
}

export default UserService;
