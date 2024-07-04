const title = document.querySelector(".title")

console.log(title);

function clock(){
    let date = new Date()
let hour = date.getHours().toString().padStart(2, "0")
let minute = date.getMinutes()
let second = date.getSeconds()
let result = [hour, minute, second].map(i => i.toString().padStart(2, "0")).join(":")
console.log(result);
title.textContent = result
}
clock()

setInterval(()=>{
    clock()
}, 1000)