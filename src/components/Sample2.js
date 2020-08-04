"use strict";
document.write("Hello from TS");
var isActive = true;
var isActiveStuden = false;
var g;
var h;
g = "jjjjj";
h = "gggg";
var c = g + h;
console.log(c);
// Find Even Number
function evenNumber(num) {
    return num % 2 === 0;
}
console.log("Even Number: ", evenNumber(56));
var z;
z = 5;
z = "jjjj";
z = [1, 2, 3, 4];
console.log("Any type", z);
var y = 30;
var x = y === 123;
// let w= y+10;
if (typeof y === 'number') {
    var w = y + 10;
    console.log(w);
}
