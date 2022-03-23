// member

const slider = document.querySelector(".slider");
const ul = slider.querySelector("ul");
const lis2 = slider.querySelectorAll("li");
const prev = document.querySelector("#main_sub .prev");
const next = document.querySelector("#main_sub .next");
const speed = 50;
let enableClick = true;
let len = lis2.length;

init();

next.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(enableClick){
        enableClick = false;
        nextSlide();
    }
});

prev.addEventListener("click",(e)=>{
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        prevSlide();
    }
});


function init(){
    ul.style.left="-100%";
    ul.prepend(ul.lastElementChild);
    
    ul.style.width = `${100 * len}%`;
    
    lis2.forEach(li=>{
        li.style.width = `${100 / len}%`;
    })
}


function nextSlide(){

    new Anim(ul,{
        prop:"left",
        value:"-200%",
        duration:speed,
        callback:()=>{
            ul.style.left="-100%";
            ul.append(ul.firstElementChild);
            enableClick=true;
        }
    })
}

function prevSlide(){

    new Anim(ul,{
        prop:"left",
        value:"0%",
        duration:speed,
        callback:()=>{
            ul.style.left="-100%";
            ul.prepend(ul.lastElementChild);
            enableClick=true;
        }
    })
}

// aboutPic

const pic = document.querySelectorAll(".aboutPic .pic");
const hovers = document.querySelectorAll(".hover");

pic.forEach((hover,index)=>{
    hover.addEventListener("mouseenter",()=>{
        for(let el of hovers){
            el.classList.remove("on");
        }

        for(let el of pic){
            el.classList.remove("on");
        }

        hovers[index].classList.add("on");
        pic[index].classList.add("on");
    })
})

pic.forEach((hover,index)=>{
    hover.addEventListener("mouseleave",()=>{
        for(let el of hovers){
            el.classList.remove("on");
        }

        for(let el of pic){
            el.classList.remove("on");
        }
    })
})

