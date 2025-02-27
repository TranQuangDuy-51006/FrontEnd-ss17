let cash = +prompt("Nhập số tiền ");
let month = +prompt("Nhập số tháng");

let laiCoDinhTheoNam = 0.043;
let tienLaiThang = laiCoDinhTheoNam / month;
let tienLai = cash * tienLaiThang * month;
console.log(cash);
console.log(cash+tienLai);