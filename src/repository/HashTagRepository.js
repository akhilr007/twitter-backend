import Hashtag from "../models/HashTag.js";

class HashTagRepository {
  async create(data) {
    try {
      const hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data) {
    try {
      const hashtags = await Hashtag.insertMany(data);
      return hashtags;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const hashtag = await Hashtag.findById(id);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const hashtag = await Hashtag.findByIdAndRemove(id);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(hashtagTitleList) {
    try {
      const tags = await Hashtag.find({
        title: hashtagTitleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HashTagRepository;
