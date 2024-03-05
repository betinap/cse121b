const PI = 3.14;
let radius = 3;
let area = 0;
area1 = radius * radius * PI;
console.log("Area1:", area)
radius = 4;
area2 = radius * radius * PI;
console.log("Area2:", area)

document.getElementById("result").textContent = "Area1: " + area1;
document.getElementById("result").textContent = "Area2: " + area2;
