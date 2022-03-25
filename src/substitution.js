// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function isCorrectLength (alphabet) {

    return alphabet.length === 26;
  
  }//end isAlphabetLength()
  
  function isThereARepeat(alphaChars) {
  
    for (let indexA = 0; indexA < alphaChars.length; indexA++) {
      
      for (let indexB = indexA + 1; indexB < alphaChars.length; indexB++){
  
        if (alphaChars[indexA] === alphaChars[indexB])
  
          return true;
  
      }//end inner for
  
    }//end for outer
  
    return false;
  
  }//end isThereARepeat()
  
  function encoding (input, chars) {

    let result = "";
  
    for (let index = 0; index < input.length; index++) {

      //represents the integer-value of the UTF-16 char code
      const charCode = input.charCodeAt(index);

      //if it is a lowercase letter, the difference between
      //charCode and 97 will be [0,25] and represent
      //the index value of the char to use from chars2.
      if (charCode >= 97 && charCode <= 122){

        result += chars[charCode - 97];
      
      }//end if

      //if the char code is outside the [97,122] range,
      //it is a space, so just contactinate it
      else
        result += input.charAt(index);

    }//end for
        
  
    return result;
  
  }//end encoding

  function decoding (chars1, chars2) {

    let result = "";

    for (let index = 0; index < chars1.length; index++) {

      if (chars1[index] === " ")
        result += " ";
      
      else{

        const newIndex = chars2.findIndex((char) => chars1[index] ===  char);

        result += String.fromCharCode(97 + newIndex);
        
      }//end else

    }//end for

    return result;

  }//end decoding()
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase();
  
    //if the alphabet isn't 26 chars long or
    //if there is a repeat
    if (alphabet === undefined || !isCorrectLength(alphabet) || isThereARepeat(alphabet))
      return false;
  
    const inputChars = input.split("");
  
    const alphaChars = alphabet.split("");
  
    let result;
  
    if (encode)
      result = encoding(input, alphaChars);
  
    else
      result = decoding(inputChars, alphaChars);
  
    return result;
  
  }//end substitution()

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
