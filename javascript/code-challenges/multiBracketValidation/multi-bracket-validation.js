
"use strict";

function multiBracketValidation(input) {
  let rndBracket = 0;
  let sqrBracket = 0;
  let crlBracket = 0;


  for(let i = 0; i < input.length; i++){
    if(input.charAt(i) === '{') {
      sqrBracket +=1
    }
    if(input.charAt(i) === '}') {
      sqrBracket  -=1
    }
    if(input.charAt(i) === '(') {
      rndBracket +=1
    }
    if(input.charAt(i) === ')') {
      rndBracket  -=1
    }
    if(input.charAt(i) === '[') {
      crlBracket +=1
    }
    if(input.charAt(i) === ']') {
      crlBracket  -=1
    }

    
  }
  return (rndBracket === 0 && sqrBracket === 0 && crlBracket === 0)
}

module.exports = multiBracketValidation;
