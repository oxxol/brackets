module.exports = function check(str, bracketsConfig) {
  
let openBrackets = [];
  let bracketsPair ={}
  for (let i = 0; i < bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0]);
    bracketsPair[bracketsConfig[i][1]] =bracketsConfig[i][0];
  };
  let stack = [];
  
  for (let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
    if (openBrackets.includes(currentSymbol)) {
      let topStackElement = stack[stack.length - 1]
      if (topStackElement === '|' && currentSymbol === '|' || topStackElement === '7' && currentSymbol === '7' || topStackElement === '8' && currentSymbol === '8') {
        stack.pop()
      }
      else {
        stack.push(currentSymbol)
      }
    } else {
      if (stack.length === 0) {
        return false        
      }
      
      topStackElement = stack[stack.length - 1]
      if (bracketsPair[currentSymbol] === topStackElement) {
        stack.pop();
      }
      
      else {
        return false;
      }
    }
  
  }
  return stack.length === 0;

}
