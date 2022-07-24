module.exports = function check(str, bracketsConfig) {
  
  const stack = [];
  const pairOfBrackets = {}; 
  bracketsConfig.forEach((element)=>{
    pairOfBrackets[element[0]]=element[1]
  })
  
  for(let i=0; i<str.length; i++) {
    let currentBracket = str[i];
    let topBracket = stack[stack.length-1]

    if(pairOfBrackets[currentBracket] === currentBracket){
      if(currentBracket===topBracket){
        stack.pop();
        continue;
      }
      else{
        stack.push(currentBracket);
        continue;
      }
    }
    if(Object.keys(pairOfBrackets).includes(currentBracket)){
      stack.push(currentBracket)
    }

    if(Object.values(pairOfBrackets).includes(currentBracket)){
      if(pairOfBrackets[topBracket]===currentBracket){
        stack.pop()
      }
      else{
        return false
      }
    }
  }
  return stack.length === 0
  }
