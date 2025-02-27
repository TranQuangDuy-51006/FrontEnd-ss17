let d1 = prompt("Nhập ngày (YYYY-MM-DD)");
let d2 = prompt("Nhập ngày (YYYY-MM-DD)");

let date1 = new Date(d1);
let date2 = new Date(d2);

let milis = date2 - date1;
let day = (milis / (1000*60*60*24));

alert(day)
