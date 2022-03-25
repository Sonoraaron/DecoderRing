// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

//If a letter is shifted so that it goes "off" the alphabet
//(e.g., a shift of 3 on the letter z),
//it should wrap around to the front of the alphabet (e.g., z becomes c).
//Spaces should be maintained throughout, as should other nonalphabetic symbols.
//Capital letters can be ignored.
describe("caesar", () => {

    it("It should maintain spaces and nonalphabetic symbols.", () => {

        const expected = "bpqa qa i amkzmb umaaiom!";

        expect(caesar("This is a secret message!", 8)).to.equal(expected);

    });//end it()

    it("It should maintain spaces and nonalphabetic symbols.", () => {

        const expected = "this is a secret message!";

        expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal(expected);

    });//end it()

});//end describe()



//If the shift value isn't present, equal to 0, less than -25, or greater than 25,
//the function should return false.
describe("caesar", () => {

    it("Should return `false` for `shift` < -25", () => {

          expect(caesar("thinkful", -26)).to.be.false;

    });//end it()

    it("Should return `false` for `shift` > 25", () => {

        expect(caesar("thinkful", 99)).to.be.false;

    });//end it()

    it("Should return `false` for `shift` = 0", () => {

        expect(caesar("thinkful", 0)).to.be.false;

    });//end it()

    it("Should return `false` for `shift` = undefined", () => {

    expect(caesar("thinkful")).to.be.false;

    });//end it()

});//end describe()