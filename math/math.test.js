const {
   add,
   subtract,
   multiply,
   divide,
   squareRoot,
   max
} = require("./math");

describe("Testing the math objects", () => {
    test("should take 2 numbers and return the sum", () => {
        const result = add();
        expect(result).toBe();
    });

    test("should take 2 parameters and return the difference", () => {
        expect(subtract()).toBe();
    });

    test("should take 2 numbers and return the product", () => {
        expect(multiply()).toBe();
    });

    test("should take 2 parameters and return the quotient", () => {
        expect(divide()).toBe();
    });


    test("should take a number and return the square root", () => {
        expect(squareRoot()).toBe();
    });


    test("should take 2 numbers and return the max(or highest) number", () => {
        expect(max()).toBe();
    });
});