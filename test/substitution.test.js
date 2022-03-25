// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
	
	it ("All the characters in the alphabet parameter must be unique or return false.", () => {
		
		const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
		
		expect(actual).to.be.false;
		
	});
	
	it ("The alphabet parameter must be a string of exactly 26 characters or return false.", () => {
		
		const actual = substitution("thinkful", "short");
		
		expect(actual).to.be.false;
		
	});//end int()

    it ("Spaces should be maintained when encoding.", () => {

        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");

        const expected = "elp xhm xf mbymwwmfj dne";
        
        expect(actual).to.equal(expected);

    });//end it()

    it ("Spaces should be maintained when decoding.", () => {

        const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);

        const expected = "you are an excellent spy";
        
        expect(actual).to.equal(expected);

    });//end it()

});//end describe()