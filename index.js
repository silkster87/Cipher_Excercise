'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26; // Might be useful

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let shiftNo = 2; //Number of places to shift

rl.question("Enter No. of places to shift: ", answer => {
  shiftNo = Number(answer);
  console.log(encrypt("abc"))
  rl.close();
});

function shiftChar(char){

  if(char != ' '){ //No spaces and is a letter
      const charInt = charToInt(char)
    if(charInt <= N - 1 - shiftNo && charInt >=0){ 
      return intToChar(charInt + shiftNo)
  }else if(charInt >= N - shiftNo){
      return intToChar(charInt-(N - shiftNo)) //Loop back to start charCode
  } 
  }else if(char == ' '){
    return char
  }
}

function unShiftChar(char){
  
  if(char != ' '){
    const charInt = charToInt(char)
    if(charInt <=25 && charInt >=shiftNo){
      return intToChar(charInt - shiftNo)
    }else if(charInt <= shiftNo-1){
      return intToChar(charInt + (N - shiftNo)) //Loop back to end
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
