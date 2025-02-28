let r = prompt("Nhập vào bán kính (r):");
let pi = Math.PI;
let theTich = (4 / 3) * pi * Math.pow(r, 3);
let dienTichBeMat = 4 * pi * Math.pow(r, 2);
let cv = 2 * pi * r;

console.log(`Thể tích hình cầu: ${theTich.toFixed(2)}`);
console.log(`Diện tích bề mặt: ${dienTichBeMat.toFixed(2)}`);
console.log(`Chu vi lớn nhất: ${cv.toFixed(2)}`);