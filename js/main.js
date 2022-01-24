
// header
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const btnClose = document.querySelector(".close");
const logo = document.querySelector(".logo");

// figure
const contentF = document.querySelector("#figure .content");
const changeBtn = document.querySelector("#figure .changeBtn");
const imgF = document.querySelector("#figure img");

// Provide
const contentGroup = document.querySelectorAll(".contentGroup");
const contentBack = document.querySelectorAll(".contentBack");
const contentBackI = document.querySelectorAll(".contentBack i");
const contentFront = document.querySelectorAll(".contentFront");
const ProvideBtn = document.querySelector(".ProvideBtn");


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



contentBack.forEach((btn,index)=>{
    btn.addEventListener("click",e=>{
        ProvideBtn.style.display="block";
        for(let i=0; i<contentBack.length; i++){
            contentBack[i].classList.remove("on");
            contentBackI[i].classList.remove("on");
            contentGroup[i].style.display = "none";
            contentFront[i].style.display="none";
        }
        contentBack[index].classList.add("on");
        contentBackI[index].classList.add("on");
        contentGroup[index].style.display="block";
    })
})



ProvideBtn.addEventListener("click",e=>{
    e.preventDefault();
    ProvideBtn.style.display="none";

    for(let i=0; i<contentBack.length; i++){
        contentBack[i].classList.remove("on");
        contentBackI[i].classList.remove("on");
        contentGroup[i].style.display = "block";
        contentFront[i].style.display="flex";
        ProvideBtn.style.display = "none";
    }
})






