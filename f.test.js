import { describe, it } from "mocha";
import { sum } from "./f.js";

describe("sum", () => {
    it("sums 1, 2, and 3 to 6", () => {
        const s = sum(1, 2, 3);
        expect(s).to.equal(6);
    });
});
