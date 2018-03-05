module.exports = function getZerosCount(number, base) {
  let fact = Math.floor(number / base);
  let result = 0;
  
  while(fact !== 0) {
    result = result + fact;
    fact = Math.floor(fact / base);
  }
  return result;
}