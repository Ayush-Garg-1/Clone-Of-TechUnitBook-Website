const date = new Date();
let y= date.getFullYear();
let m=(date.getMonth()+1);
let d= date.getDate();
document.getElementById('date').innerText=`${d}/${m}/${y}`;