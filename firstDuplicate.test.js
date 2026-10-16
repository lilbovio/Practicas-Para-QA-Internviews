import { describe, it, expect } from "vitest";
import { firstDuplicate } from "./firstDuplicate";

describe("firstDuplicate", () => {
  it("should return the first duplicated number", () => {
    expect(firstDuplicate([4, 2, 7, 2, 4])).toBe(2);
  });

  it("should return null when there are no duplicates", () => {
    expect(firstDuplicate([4, 5, 6])).toBe(null);
  });

  it("should return null when the array is empty", () => {
    expect(firstDuplicate([])).toBe(null);
  });
  it("should return 5 when the array has one or more than one duplicate", () => {
    expect(firstDuplicate([5, 5, 5])).toBe(5);
  });
  it("should return the number 8 first", () => {
    expect(firstDuplicate([8, 3, 8, 3])).toBe(8);
  });
});
