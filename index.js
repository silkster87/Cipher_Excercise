'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26; // Might be useful

function shiftChar(char){

  if(char != ' '){ //No spaces and is a letter
      const charInt = charToInt(char)
    if(charInt <= 23 && charInt >=0){ 
      return intToChar(charInt + 2)
  }else if(charInt >= 24){
      return intToChar(charInt-24) //Loop back to start charCode
  } 
  }else if(char == ' '){
    return char
  }
}

function unShiftChar(char){
  
  if(char != ' '){
    const charInt = charToInt(char)
    if(charInt <=25 && charInt >=2){
      return intToChar(charInt - 2)
    }else if(charInt <= 1){
      return intToChar(charInt + 24) //Loop back to end
    }
  }else if(char == ' '){
    return char
  }
}

const encrypt = message => (
  message
    .split('')
    .map(shiftChar)
    .join('')
);

const decrypt = message => (
  message
    .split('')
    .map(unShiftChar)
    .join('')

); // Broken!

module.exports = {
  decrypt,
  encrypt
};
