import { sum } from "../../src/services/dummy-service.js";

test("test addition of two numbers", () => {
  expect(sum(2, 5)).toBe(7);
});
