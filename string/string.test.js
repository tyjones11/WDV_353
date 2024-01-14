const {
    uppercase, 
    lowercase
} = require("./string");

describe("Testing the string module", () => {
    test("should uppercase a string input", () => {
        const result = uppercase("bob");
        expect(result).toBe("BOB");

        //can also write it as one line of code
        //expect(uppercase("bob")).toBe("BOB");
    });

    test("should lowercase a string input", () => {
        expect(lowercase("FULL SaiL")).toBe("full sail");
    });
});