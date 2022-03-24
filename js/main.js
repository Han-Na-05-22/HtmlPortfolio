// figure
const contentF = document.querySelector("#figure .content");
const changeBtn = document.querySelector("#figure .changeBtn");
const imgF = document.querySelectorAll("#figure img");
const lis = document.querySelectorAll("#figure .changeBtn li");


lis.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        for(let i=0; i<lis.length; i++){
            lis[i].classList.remove("on");
            imgF[i].classList.remove("on");

        }
        lis[index].classList.add("on");
        imgF[index].classList.add("on");
    })
})



// scroll
const sections = document.querySelectorAll("#main section");
const Introduction = document.querySelector("#main .Introduction");
const Provide = document.querySelector("#main .Provide");
// const contents = Introduction.querySelector(".content");
let posArr = [];
const baseNum = -300;


for(let el of sections){
    posArr.push(el.offsetTop);
}

console.log(posArr);

window.addEventListener("scroll",e=>{
    
    let scroll = window.scrollY || window.pageY0ffset;

    if(scroll >= posArr[1]){
        Introduction.classList.remove("on");
    }else{
        Introduction.classList.add("on");
    }



    if(scroll >= posArr[2] && scroll <=posArr[6]){
        Provide.classList.remove("on");
    }else{
        Provide.classList.add("on");
    }
})


const Projects = document.querySelector("#main .Projects");
const ProList = Projects.querySelectorAll(".pic li");
const ProVid = Projects.querySelectorAll(".pic li>div");
const ProClose = Projects.querySelector("button");
console.log(ProClose);

ProList.forEach((btn,index)=>{
    btn.addEventListener("click",e=>{
        e.preventDefault();

        ProClose.classList.add("on");

        for(let el of ProVid){
            el.classList.remove("on");
        }
        ProVid[index].classList.add("on");
    })

    ProClose.addEventListener("click",()=>{
        ProVid[index].classList.remove("on");
        ProClose.classList.remove("on");
    })
})



