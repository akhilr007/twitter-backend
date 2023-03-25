import TweetRepository from "../../src/repository/tweetRepository.js";
import Tweet from "../../src/models/Tweet.js";

jest.mock("../../src/models/Tweet.js");

describe("create tweet tests", () => {
  test("should create a new tweet and return it", async () => {
    const data = {
      content: "Testing tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "2022-12-02", updatedAt: "2022-12-02" };
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);

    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
  });

  test("should not create a new tweet and throw exception", async () => {
    const data = {
      content: "Testing tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("something went wrong");
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("something went wrong");
    });
  });
});

describe("get all tweets test", () => {
  test("testing limit for get all", async () => {
    const data = {
      content: "testing tweet",
    };

    const tweetsArray = [
      {
        ...data,
        createdAt: "2022-12-02",
        updatedAt: "2022-12-02",
      },
      {
        ...data,
        createdAt: "2022-12-02",
        updatedAt: "2022-12-02",
      },
      {
        ...data,
        createdAt: "2022-12-02",
        updatedAt: "2022-12-02",
      },
    ];

    const findResponse = { tweetsArray };
    findResponse.limit = jest.fn((limit) =>
      findResponse.tweetsArray.slice(0, limit)
    );
    findResponse.skip = jest.fn((offset) => findResponse);

    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return findResponse;
    });

    const tweetRepository = new TweetRepository();
    const tweets = await tweetRepository.getAll(0, 2);
    expect(spy).toHaveBeenCalled();
    expect(tweets).toHaveLength(2);
  });
});
