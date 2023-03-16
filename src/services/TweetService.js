import { TweetRepository, HashTagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashTagRepository = new HashTagRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hash tags

    // creating a new tweet
    const tweet = await this.tweetRepository.create(data);

    // finding out the already present hashtags
    let alreadyPresentTags = await this.hashTagRepository.findByName(tags);

    // extracting the title of already present hashtags
    let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);

    // getting all the new hashtags
    let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return {
        title: tag,
        tweets: [tweet.id],
      };
    });

    // creating all the new hashtags
    await this.hashTagRepository.bulkCreate(newTags);

    // for already present hashtags we are updating the tags
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }

  async get(tweetId) {
    const tweet = await this.tweetRepository.getWithComments(tweetId);
    return tweet;
  }
}

export default TweetService;
