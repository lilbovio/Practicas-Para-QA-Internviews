import { describe, it, expect } from "vitest";
import { findPairs } from "./k-diffInPairs.js";

describe("findPairs", () => {
    it("should return the number of unique k-diff pairs", () => {
        expect(findPairs([3, 1, 4, 1, 5], 2)).toBe(2);
        expect(findPairs([1, 2, 3, 4, 5], 1)).toBe(4);
        expect(findPairs([1, 3, 1, 5, 4], 0)).toBe(1);
        expect(findPairs([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(findPairs([1, 2, 3, 4, 5], -1)).toBe(0);
    });

    it("should return 0 for empty array", () => {
        expect(findPairs([], 1)).toBe(0);
    });

    it("should return 0 for k = 0 and no duplicates", () => {
        expect(findPairs([1, 2, 3, 4, 5], 0)).toBe(0);
    });

    it("should return 0 for k = 0 and no duplicates", () => {
        expect(findPairs([1, 2, 3, 4, 5], 0)).toBe(0);
    });

    it("should return 0 for an empty array", () => {
        expect(findPairs([], 0)).toBe(0);
    });
});      