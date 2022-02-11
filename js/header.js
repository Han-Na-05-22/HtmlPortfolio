
// header
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const btnClose = document.querySelector(".close");
const logo = document.querySelector(".logo");


btnCall.addEventListener("click",e=>{
    menuMo.classList.add("on");
    logo.classList.add("on");
    btnCall.classList.add("on");

})

btnClose.addEventListener("click",e=>{
    menuMo.classList.remove("on");
    logo.classList.remove("on");
    btnCall.classList.remove("on");
})