import { getTweet } from "../../src/controllers/tweetController.js";
import { mockRequest, mockResponse } from "../mocker.js";
import TweetService from "../../src/services/TweetService.js";

jest.mock("../../src/services/TweetService.js");

test("should return tweets", async () => {
  const req = mockRequest();
  const res = mockResponse();

  const response = [
    {
      content: "Tweet1",
    },
    {
      content: "Tweet2",
    },
  ];

  TweetService.prototype.get.mockReturnValue(response);
  await getTweet(req, res);
  expect(res.json).toHaveBeenCalledWith({
    success: true,
    message: "Successfully fetched a tweet",
    err: {},
    data: response,
  });
});
