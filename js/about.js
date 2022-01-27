// member

const slider = document.querySelector(".slider");
const ul = slider.querySelector("ul");
const lis = ul.querySelectorAll("li");
const prev = document.querySelector("#main_sub .prev");
const next = document.querySelector("#main_sub .next");
const speed = 500;
let enableClick = true;
let len = lis.length;


// if(ul.style.width = 500){
//     init();
// }
// }else(ul.style.width == "100%")
//     init2();





next.addEventListener("click",(e)=>{
    e.preventDefault();

    if(ul.style.width == "500%"){
        if(enableClick){
            enableClick = false;
            nextSlide();
        }
    }


    if(ul.style.width == "100%"){
        if(enableClick){
            enableClick = false;
            nextSlide2();
        }
    }

});

prev.addEventListener("click",(e)=>{
    e.preventDefault();

    if(ul.style.width == "500%"){
        if(enableClick){
            enableClick = false;
            prevSlide();
        }
    }

    if(ul.style.width == "100%"){
        if(enableClick){
            enableClick = false;
            prevSlide2();
        }
    }
});



function init(){
        ul.style.left="-100%";
        ul.prepend(ul.lastElementChild);

    // ul.style.width = `${100 * len}%`;
    
    // lis.forEach(li=>{
    //     li.style.width = `${100 / len}%`;
    // })
}

function init2(){
    ul.style.top="-100%";
    ul.prepend(ul.lastElementChild);
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

function nextSlide2(){

    new Anim(ul,{
        prop:"top",
        value:"-200%",
        duration:speed,
        callback:()=>{
            ul.style.top="-100%";
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

function prevSlide2(){

    new Anim(ul,{
        prop:"top",
        value:"0%",
        duration:speed,
        callback:()=>{
            ul.style.top="-100%";
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




