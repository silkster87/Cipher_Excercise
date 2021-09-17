'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26; // Might be useful

function shiftChar(char){

  const charLowCase = char.toLowerCase();

  if(charLowCase != " "){ //No spaces and is a letter
      const charInt = charToInt(charLowCase)
    if(charInt <= 23 && charInt >=0){ 
      return intToChar(charInt + 2)
  }else if(charInt >= 24){
      return intToChar(charInt-24) //Loop back to start charCode
  }
    else{
      return char
    }
  }
}

const encrypt = message => (
  message
    .split('')
    .map(shiftChar)
    .join('')
);

const decrypt = message => 'IMPLEMENT ME'; // Broken!

module.exports = {
  decrypt,
  encrypt
};
