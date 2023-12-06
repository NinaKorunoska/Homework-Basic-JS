let radius = 20;
let area = Math.PI * radius*2;
console.log(area)

console.log(parseInt(area))

//------------------------------------------------------------

let a = prompt("Enter the radius of the circle you would like to calculate:");

let radiusA = parseInt(a);
console.log(typeof(radiusA)); //za licna proverka

let areaOne = Math.PI * radiusA*2;
console.log(areaOne);

