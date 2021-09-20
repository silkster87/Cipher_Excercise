'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26; // Might be useful

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let shiftNo = 2; //Number of places to shift by default

rl.question("Enter a number: \n1 - encrypt message\n2 - decrpyt message\n3 - quit\n", answer => {
 let userInput = Number(answer);
  switch(userInput){
    case 1:
      rl.question("Enter No. of places to shift: ", shift => {
        shiftNo = Number(shift);
        rl.question("Enter message to encrypt: ", message => {
          let encryptedMsg = encrypt(message, shiftNo);
          console.log(message + " encrypted to: " + encryptedMsg);
          rl.close();
        })
      });
      break;
    case 2:
      rl.question("Enter No. of places to unshift: ", shift => {
        shiftNo = Number(shift);
        rl.question("Enter message to decrypt: ", message => {
          let decryptedMsg = decrypt(message, shiftNo);
          console.log(message + " decrypted to: " + decryptedMsg);
          rl.close();
        })
      });
      break;
    case 3:
      console.log("You have quit application.")
      rl.close();
      break;
    }
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

const encrypt = (message, noOfShifts = 2) => {
  shiftNo = noOfShifts;
  return message.split('').map(shiftChar).join('')
}

const decrypt = (message, noOfShifts = 2) => {
  shiftNo = noOfShifts;
  return message.split('').map(unShiftChar).join('')
}


module.exports = {
  decrypt,
  encrypt,
};
