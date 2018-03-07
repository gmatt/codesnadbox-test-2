import { expect } from "chai";
import add from "./add";

describe("Add", () => {
    it("should work", () => {
        expect(add(1, 2)).to.equal(3);
    });

    test("should do something else", () => {
        expect(add(1, 3)).to.eq(4);
    });
});
