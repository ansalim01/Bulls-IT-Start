'use strict'

let num1 = field.offsetLeft + ':' + field.offsetTop;
let num2 = (field.offsetLeft + field.offsetWidth) + ':' + (field.offsetTop + field.offsetHeight);
let num3 = (field.offsetLeft + field.clientLeft) + ':' + (field.offsetTop + field.clientTop);
let num4 = (field.offsetLeft + field.clientLeft + field.clientWidth) + ':' +
    (field.offsetTop + field.clientTop + field.clientHeight);


console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

let xy = field.getBoundingClientRect();

let an1 = [xy.left, xy.top];
let an2 = [xy.right, xy.bottom];
let an3 = [xy.left + field.clientLeft, xy.top + field.clientTop];
let an4 = [
    xy.left + field.clientLeft + field.clientWidth,
    xy.top + field.clientTop + field.clientHeight
];
console.log(an1);
console.log(an2);
console.log(an3);
console.log(an4);