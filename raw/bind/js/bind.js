this.x = 10;

const notBound = {
  x: 20,
  returnThisX: function() {
    return this.x;
  },
}

console.log('global          : ' + this.x)
console.log('not bound       : ' + notBound.returnThisX());
const globalFunction = notBound.returnThisX;
console.log('global function : ' + globalFunction());
console.log(globalFunction);
const boundReturnThisX = notBound.returnThisX.bind({x: 30});
console.log('bound           : ' + boundReturnThisX());
