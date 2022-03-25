// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {

    //When encoding, your output should still be a string.
    it ("Your output should still be a string.", () => {

        const actual = polybius("Hello world");
        
        expect(actual).to.be.a("string");

    });//end it()

    //When decoding, the number of characters in the string
    //excluding spaces should be even.
    //Otherwise it should return false.
    it ("The number of characters in the string excluding spaces should be even.", () =>{

        const actual = polybius("44324233521254134", false);

        expect(actual).to.be.false;

    });//end it()

    it ("Spaces should be maintained throughout.", () => {

        const actual = polybius("Hello world");

        const expected = "3251131343 2543241341";

        expect(actual).to.equal(expected);

    });//end it
    
    //When encoding, both letters can be converted to 42.
    it ("The letters I/i and J/j should be encoded to 42.", () => {

        const actual = polybius("ijIJi");

        const expected = "4242424242";

        expect(actual).to.equal(expected);

    });//end it()

        /*
The letters I and J share a space.

but when decoding, both letters should somehow be shown.
*/
    it ("42 should be docoded to (i/j).", () => {

        const actual = polybius("4242", false);

        const expected = "(i/j)(i/j)";

        expect(actual).to.equal(expected);

    });//end it()

});//end describe()