import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { SALT, SECRET } from "../config/serverConfig.js";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

userSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.genJWT = function generate() {
  return jwt.sign(
    {
      id: this.id,
      email: this.email,
    },
    SECRET,
    { expiresIn: "1h" }
  );
};

const User = mongoose.model("User", userSchema);
export default User;
