var array =[1,2,3,4]

var reducer=(previousValue,currentValue)=> previousValue + currentValue
var sum=array.reduce(reducer)
console.log(sum)