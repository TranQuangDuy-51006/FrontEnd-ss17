let r = prompt("Nhập vào bán kính (r):");
let h = prompt("Nhập vào chiều cao (h):");

let pi = Math.PI;
let Sxq = 2 * pi * r * h;
let Stq = Sxq + 2 * pi * r * r;
let theTich = pi * r * r * h;
let cv = 2 * pi * r;

console.log(`Diện tích xung quanh: ${Sxq.toFixed(2)}`);
console.log(`Diện tích toàn phần: ${Stq.toFixed(2)}`);
console.log(`Thể tích hình trụ: ${theTich.toFixed(2)}`);
console.log(`Chu vi đáy: ${cv.toFixed(2)}`);