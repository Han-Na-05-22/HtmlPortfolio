// member

const slider = document.querySelector(".slider");
const ul = slider.querySelector("ul");
const lis2 = ul.querySelectorAll("li");
const prev = document.querySelector("#main_sub .prev");
const next = document.querySelector("#main_sub .next");
const speed = 50;
let enableClick = true;
let len = lis2.length;
let testss = slider.querySelector("#dd");
console.log(testss.style.width);

// 초기화 함수 호출

window.addEventListener("resize",()=>{
    let windows = window.innerWidth;
    console.log(windows);

    if(windows < 780){
  

        next.addEventListener("click",(e)=>{
            e.preventDefault();
            
            if(enableClick){
                enableClick = false;
                nextSlide2();
            }
        });

        // prev 버튼을 클릭했을 때
        prev.addEventListener("click",(e)=>{
            e.preventDefault();

            if(enableClick){
                enableClick = false;
                prevSlide2();
            }
        });
        init3();
    }

})
let windows = window.innerWidth;
console.log(windows);
  
    if(windows >= 780){
        init();

        // next 버튼을 클릭했을 떄
        next.addEventListener("click",(e)=>{
            e.preventDefault();
            
            if(enableClick){
                enableClick = false;
                nextSlide();
            }
        });

        // prev 버튼을 클릭했을 때
        prev.addEventListener("click",(e)=>{
            e.preventDefault();

            if(enableClick){
                enableClick = false;
                prevSlide();
            }
        });

    }else{
        if(windows < 780){
            init2();

                    // next 버튼을 클릭했을 떄
        next.addEventListener("click",(e)=>{
            e.preventDefault();
            
            if(enableClick){
                enableClick = false;
                nextSlide2();
            }
        });

        // prev 버튼을 클릭했을 때
        prev.addEventListener("click",(e)=>{
            e.preventDefault();

            if(enableClick){
                enableClick = false;
                prevSlide2();
            }
        });



        }
    }



// 초기화 스타일 설정 함수
function init(){
    ul.style.left="-100%";
    ul.prepend(ul.lastElementChild);
    

}

// 초기화 스타일 설정 함수
function init2(){
    ul.style.left="0%";
    // ul.prepend(ul.lastElementChild);
    
}

function init3(){
    ul.style.left="0%";
    // ul.prepend(ul.lastElementChild);
    
}

function init4(){
    ul.style.left="0%";
    // ul.prepend(ul.lastElementChild);
    
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
function nextSlide2(){

    new Anim(ul,{
        prop:"left",
        value:"-100%",
        duration:1,
        callback:()=>{
            ul.style.left="0%";
            ul.append(ul.firstElementChild);
            enableClick=true;
        }
    })
}

function prevSlide2(){

    new Anim(ul,{
        prop:"left",
        value:"100%",
        duration:1,
        callback:()=>{
            ul.style.left="0%";
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




