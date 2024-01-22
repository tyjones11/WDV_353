const {
   sum,
   sub,
   mult,
   div,
   sqrt,
   max
} = require("./math");

describe("Testing the math objects", () => {
    test("should take 2 numbers and return the sum", () => {
        expect(sum(2,2)).toBe(4);
    });

    test("should take 2 parameters and return the difference", () => {
        expect(sub(3,2)).toBe(1);
    });

    test("should take 2 numbers and return the product", () => {
        expect(mult(2,4)).toBe(8); 
    });

    test("should take 2 parameters and return the quotient", () => {
        expect(div(10,2)).toBe(5);
    });


    test("should take a number and return the square root", () => {
        expect(sqrt(20)).toBe(5);
    });


    test("should take 2 numbers and return the max(or highest) number", () => {
        expect(max(1, 9)).toBe(9);
    });
});