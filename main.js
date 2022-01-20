const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const btnClose = document.querySelector(".close");
const contentF = document.querySelector("#figure .content");
const changeBtn = document.querySelector("#figure .changeBtn");

btnCall.addEventListener("click",e=>{
    menuMo.style.display="block";
    contentF.style.display="none";
    changeBtn.style.display="none";
})

btnClose.addEventListener("click",e=>{
    menuMo.style.display="none";
    contentF.style.display="block";
    changeBtn.style.display="block";
})

