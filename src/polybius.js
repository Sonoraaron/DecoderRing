// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function decodingValidity(chacters) {

    let spaceCounter = 0;

    for (let char of chacters)
      if (char === " ")
        spaceCounter++;

    return (chacters.length - spaceCounter) % 2 === 0;

  }//end decodingValidity()

  function encodeInput(character) {

    let codedInput;

    switch (character){

      case 'a': codedInput = "11";
      break;

      case 'b': codedInput = "21";
      break;
      
      case 'c': codedInput = "31";
      break;
      
      case 'd': codedInput = "41";
      break;
      
      case 'e': codedInput = "51";
      break;
      
      case 'f' : codedInput = "12";
      break;
      
      case 'g': codedInput = "22";
      break;
      
      case 'h': codedInput = "32";
      break;
      
      case 'i':
      case 'j': codedInput = "42";
      break;
      
      case 'k': codedInput = "52";
      break;
      
      case 'l': codedInput = "13";
      break;
      
      case 'm': codedInput = "23";
      break;
      
      case 'n': codedInput = "33";
      break;
      
      case 'o': codedInput = "43";
      break;
      
      case 'p': codedInput = "53";
      break;
      
      case 'q': codedInput = "14";
      break;
      
      case 'r': codedInput = "24";
      break;
      
      case 's': codedInput = "34";
      break;
      
      case 't': codedInput = "44";
      break;
      
      case 'u': codedInput = "54";
      break;
      
      case 'v': codedInput = "15";
      break;
      
      case 'w': codedInput = "25";
      break;
      
      case 'x': codedInput = "35";
      break;
      
      case 'y': codedInput = "45";
      break;
      
      case 'z': codedInput = "55";
      break;
      
      default: codedInput = " ";
    }//end switch

    return codedInput;

  }//end encodeInput()

  function dencodeInput(character) {

    let decodedInput;
	
	switch (character) {
    case '11': decodedInput = "a";
    break;
    
    case '21': decodedInput = "b";
    break;
    
    case '31': decodedInput = "c";
    break;
    
    case '41': decodedInput = "d";
    break;
    
    case '51': decodedInput = "e";
    break;
    
    case '12': decodedInput = "f";
    break;
    
    case '22': decodedInput = "g";
    break;
    
    case '32': decodedInput = "h";
    break;
    
    case '42': decodedInput = "(i/j)";
    break;
    
    case '52': decodedInput = "k";
    break;
    
    case '13': decodedInput = "l";
    break;
    
    case '23': decodedInput = "m";
    break;
    
    case '33': decodedInput = "n";
    break;
    
    case '43': decodedInput = "o";
    break;
    
    case '53': decodedInput = "p";
    break;
    
    case '14': decodedInput = "q";
    break;
    
    case '24': decodedInput = "r";
    break;
    
    case '34': decodedInput = "s";
    break;
    
    case '44': decodedInput = "t";
    break;
    
    case '54': decodedInput = "u";
    break;
    
    case '15': decodedInput = "v";
    break;
    
    case '25': decodedInput = "w";
    break;
    
    case '35': decodedInput = "x";
    break;
    
    case '45': decodedInput = "y";
    break;
    
    case '55': decodedInput = "z";
    break;
    
    default:
      decodedInput = " ";
		
}//end switch

    return decodedInput;

  }//end encodeInput()

  function polybius(input, encode = true) {
    // your solution code here

    let result = "";

    input = input.toLowerCase();

    const characters = input.split("");

    if(!encode && !decodingValidity(characters)){
      return false;}

    if (encode)
      for (let char of characters)
        result += encodeInput(char);

    else {
      for (let char = 0; char < characters.length; char += 2)
        if (characters[char] === " "){
          result += " ";
          char--;
      }//end if
        else{
          result += dencodeInput(characters[char] + characters[char + 1]);
      }//end else
        }//end for
    
    return result; 

  }//end polybius()

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };