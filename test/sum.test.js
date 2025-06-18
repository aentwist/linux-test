import { describe, it } from "mocha";
import { expect } from "chai";
import { sum } from "../src/sum.js";

describe("sum", () => {
    it("sums 1, 2, and 3 to 6", () => {
        const s = sum(1, 2, 3);
        expect(s).to.equal(6);
    });
});
