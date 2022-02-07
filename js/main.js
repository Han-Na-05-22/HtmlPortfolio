
// header
// const header = document.querySelector("#header_sub");
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const btnClose = document.querySelector(".close");
const logo = document.querySelector(".logo");
// const joinLogo = document.querySelector("#header_join h1");

// figure
// const figure = document.querySelector("#figure_sub");
const contentF = document.querySelector("#figure .content");
const changeBtn = document.querySelector("#figure .changeBtn");
const imgF = document.querySelector("#figure img");
const lis = document.querySelectorAll("#figure .changeBtn li");

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
    // joinLogo.classList.add("on");
    // figure.classList.add("on");
    // header.classList.add("on");

})

btnClose.addEventListener("click",e=>{
    menuMo.classList.remove("on");
    logo.classList.remove("on");
    btnCall.classList.remove("on");
    // joinLogo.classList.remove("on");
    // figure.classList.remove("on");
    // header.classList.remove("on");
})


lis.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        for(let i=0; i<lis.length; i++){
            lis[i].classList.remove("on");
            imgF.classList.remove("on");
            imgF.src="../img/figure.png";

        }
        lis[index].classList.add("on");
        imgF.classList.add("on");
        imgF.src=`../img/figure0${index}.png`;
    })
})


// contentBack.forEach((btn,index)=>{
//     btn.addEventListener("click",e=>{
//         ProvideBtn.style.display="block";
//         for(let i=0; i<contentBack.length; i++){
//             contentBack[i].classList.remove("on");
//             contentBackI[i].classList.remove("on");
//             contentGroup[i].style.display = "none";
//             contentFront[i].style.display="none";
//         }
//         contentBack[index].classList.add("on");
//         contentBackI[index].classList.add("on");
//         contentGroup[index].style.display="block";
//     })
// })



// ProvideBtn.addEventListener("click",e=>{
//     e.preventDefault();
//     ProvideBtn.style.display="none";

//     for(let i=0; i<contentBack.length; i++){
//         contentBack[i].classList.remove("on");
//         contentBackI[i].classList.remove("on");
//         contentGroup[i].style.display = "block";
//         contentFront[i].style.display="flex";
//         ProvideBtn.style.display = "none";
//     }
// })






