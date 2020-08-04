document.write("Hello from TS")

const isActive: boolean = true;
let isActiveStuden: boolean = false;

let g:string;
let h;
g="jjjjj";
h="gggg";
let c = g+h;
console.log(c);

// Find Even Number
function evenNumber(num:number) {
    return num % 2 === 0;
}
console.log("Even Number: ",evenNumber(56));

let z:any;
z=5;
z="jjjj";
z=[1,2,3,4]
console.log("Any type", z);

let y: unknown =30;
let x=y ===123;
// let w= y+10;
if (typeof y === 'number' ) {
    let w= y+10;
    console.log(w);
}