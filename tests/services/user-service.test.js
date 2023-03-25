import UserService from "../../src/services/userService.js";
import UserRepository from "../../src/repository/userRepository.js";

jest.mock("../../src/repository/userRepository.js");

describe("user service signup test", () => {
  test("should successfully create a user", async () => {
    const data = {
      email: "a@b.com",
      password: "123456",
      username: "aab",
    };

    UserRepository.prototype.create.mockReturnValue({
      ...data,
      createdAt: "2022-12-02",
      updatedAt: "2022-12-02",
    });
    const userService = new UserService();
    const response = await userService.signup();
    expect(response.email).toBe(data.email);
    expect(response.password).toBe(data.password);
    expect(response.username).toBe(data.username);
  });
});
