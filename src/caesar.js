// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift < -25 || shift === 0 || shift > 25)
      return false;

    if (!encode)
      shift *= -1;

    input = input.toLowerCase();

    let result = "";

    for (let index = 0; index < input.length; index++)
    {

      const code = input.charCodeAt(index);

      if (code >= 97 && code <= 122){
        if (code + shift > 122)
          result += String.fromCharCode(code + shift - 26);
        else if (code + shift < 97)
          result += String.fromCharCode(code + shift + 26);
        else 
          result += String.fromCharCode(code + shift);
      }//end outer if

      else
        result += String.fromCharCode(code);

    }//end for

    return result;

  }//end caesar()

  return {
    caesar,
  };//end return

})();//end caesarModule

module.exports = { caesar: caesarModule.caesar };
