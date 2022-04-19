this.x = 10;

const arrowFunction = () => {
  return this.x;
}

const normalFunction = function() {
  return this.x;
}

const objNormalFunc = {
  x: 20,
  returnThisX: normalFunction,
}

const objArrowFunc = {
  x: 30,
  returnThisX: arrowFunction,
}

console.log('global          : ' + this.x);
console.log('normal function : ' + objNormalFunc.returnThisX());
console.log('arrow function  : ' + objArrowFunc.returnThisX());
