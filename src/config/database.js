import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect("mongodb://localhost/twitter_dev_db");
  console.log("mongodb database connection established");
};

export default connect;
