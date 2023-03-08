import Tweet from "../models/Tweet.js";

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweets = await Tweet.find().skip(offset).limit(limit);
      return tweets;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(tweet);
    }
  }
}

export default TweetRepository;