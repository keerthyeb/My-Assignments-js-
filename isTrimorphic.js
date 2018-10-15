const isTrimorphic = function(number){
  let cube = Math.pow(number,3);
  let divisor = findDivisor(number);
  return cube%divisor == number
}

const findDivisor = function(number){
  let divisor = 1;
  while(number>0){
    divisor *= 10;
    number = Math.floor(number / 10);
  }
  return divisor;
}
exports.isTrimorphic = isTrimorphic;
