import UserService from "../services/userService.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.username,
    });
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully created a new user",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unsuccessful signup",
      err: { error },
    });
  }
};
