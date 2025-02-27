let number = +prompt("Nhập số");
let sqrtN = Math.sqrt(number);
Number.isInteger(sqrtN) ? console.log(`${number} là số chính phương`) : console.log(`${number} không phải số chính phương`);