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

})


