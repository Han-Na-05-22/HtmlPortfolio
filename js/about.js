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

// let windSize = window.innerWidth;

// if(windSize >= 780){
//     ul.style.left = "-100%";
//     ul.prepend(ul.lastElementChild);
// }else{
//     if(windSize < 780){
//         ul.style.top = "-100%";
//         ul.prepend(ul.lastElementChild);
//     }
// }

// let cc = console.log(getComputedStyle(lis[0], null)["width"]) - console.log(getComputedStyle(ul, null)["width"]);


// window.addEventListener("resize",()=>{

//     let windows = window.innerWidth;
//     console.log(windows);

  
//     if(windows >= 780){
//         console.log("여기0");

//         let ulWv = ul.style.width="500%";
//         console.log("여기1");

//                 // next 버튼을 클릭했을 떄
//                 next.addEventListener("click",(e)=>{
//                     e.preventDefault();
                    
//                     if(enableClick){
//                         enableClick = false;

//                         new Anim(ul,{
//                             prop:"left",
//                             value:"-200%",
//                             duration:speed,
//                             callback:()=>{
//                                 ul.style.left="-100%";
//                                 ul.append(ul.firstElementChild);
//                                 enableClick=true;
//                                 ul.style.top="0%";
//                                 ul.append(ul.firstElementChild);
//                             }
//                         })
//                     }
//                 });
            
                
//                 // prev 버튼을 클릭했을 때
//                 prev.addEventListener("click",(e)=>{
//                     e.preventDefault();
            
//                     if(enableClick){
//                         enableClick = false;
//                         new Anim(ul,{
//                             prop:"left",
//                             value:"0%",
//                             duration:speed,
//                             callback:()=>{
//                                 ul.style.left="-100%";
//                                 ul.prepend(ul.lastElementChild);
//                                 enableClick=true;
//                                 ul.style.top="0%";
//                                 ul.append(ul.lastElementChild);
//                             }
//                         })
//                     }
//                 });

//         if(ulWv = 500 && ul.style.left >= -762 || ul.style.top == "-100%"){
//             console.log("여기2");
//             ul.style.left="-100%";
//             ul.prepend(ul.lastElementChild);
//             ul.style.top = "0%";
//             ul.prepend(ul.lastElementChild);

            
//         }else{
//             console.log("여기3");
           
//             if(ulWv = 500 && ul.style.left < -762){
//                 console.log("여기4");
//                 return;
//             }
//         } 
// // 초기화먼저!
//     }else if(windows < 780){
//         console.log("용기0");

        
//                     // next 버튼을 클릭했을 떄
//                     next.addEventListener("click",(e)=>{
//                         e.preventDefault();
                        
//                         if(enableClick){
//                             enableClick = false;
//                                 new Anim(ul,{
//                                 prop:"top",
//                                 value:"-200%",
//                                 duration:speed,
//                                 callback:()=>{
//                                     ul.style.top="-100%";
//                                     ul.append(ul.firstElementChild);
//                                     enableClick=true;
//                                     ul.style.left = "0%";
//                                     ul.append(ul.firstElementChild);
//                                 }
//                             })
//                         }
//                     });
            
//                     // prev 버튼을 클릭했을 때
//                     prev.addEventListener("click",(e)=>{
//                         e.preventDefault();
            
//                         if(enableClick){
//                             enableClick = false;
//                             new Anim(ul,{
//                                 prop:"top",
//                                 value:"0%",
//                                 duration:speed,
//                                 callback:()=>{
//                                     ul.style.top="-100%";
//                                     ul.prepend(ul.lastElementChild);
//                                     enableClick=true;
//                                     ul.style.left = "0%";
//                                     ul.append(ul.lastElementChild);
//                                 }
//                             })
//                         }
//                     });

//          let ulWv = ul.style.width="100%";
//          console.log("용기1");

//         if(ulWv = 100 &&  ul.style.left >= -762 || ul.style.left == "-100%"){
//             console.log("용기2");
//             ul.style.top="-100%";
//             ul.prepend(ul.lastElementChild);
//             ul.style.left = "0%";
//             ul.prepend(ul.lastElementChild);
//         }else{
//             console.log("용기3");

//             if(ulWv = 100 && ul.style.top == -100){
//                 console.log("용기4");
//                 return;
//             }
//         }      
//     }



//     console.log("li[0] left:",getComputedStyle(lis[0], null)["left"]);
// console.log("ul left:",getComputedStyle(ul, null)["left"]);
// console.log("li[0] top:",getComputedStyle(lis[0], null)["top"]);
// console.log("ul top:",getComputedStyle(ul, null)["top"]);
// console.log("li[0] 넓이:",getComputedStyle(lis[0], null)["width"]);
// console.log("ul 넓이:",getComputedStyle(ul, null)["width"]);
// });

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

// function nextSlide2(){

//     new Anim(ul,{
//         prop:"top",
//         value:"-200%",
//         duration:speed,
//         callback:()=>{
//             ul.style.top="-100%";
//             ul.append(ul.firstElementChild);
//             enableClick=true;
//         }
//     })
// }


// function prevSlide2(){

//     new Anim(ul,{
//         prop:"top",
//         value:"0%",
//         duration:speed,
//         callback:()=>{
//             ul.style.top="-100%";
//             ul.prepend(ul.lastElementChild);
//             enableClick=true;
//         }
//     })
// }


// function screenSize(a){


    //     let windows = window.innerWidth;
    //     let per = parseInt(windows);
    //     console.log(per);
        // let screens = window.innerWidth - 17;
        // console.log(screens);

       


    
        // if(screens >= 780){
        //             ul.classList.remove("click");
        //             // checkSize();
        //         }else{
        //             if(screens < 780)
        //             ul.classList.add("click");
        //             // checkSize2();
        //         }
    
    //     screens = window.innerWidth;
    //     console.log(screens);
    
    //     if(screens >= 780){
    //         ul.classList.remove(".click");
    //         checkSize();
    //     }else{
    //         if(screens < 780)
    //         ul.classList.add(".click");
    //         checkSize2();

    // });

   

//     return result;
    
// }


// console.log(screenSize());

// })

// console.log(screens);

// function checkSize(){

//     ul.style.left="-100%";
//     ul.style.top="0%";

//     // if(screens >= 780){
//     //     // ul.style.top="0%";
//     //     ul.style.left="-100%";
//     // }else{
//     //     if(screens < 780)
//     //     ul.style.top="-100%";
//     //     ul.style.left="0%";
//     // }
// }

// function checkSize2(){
//     ul.style.top="-100%";
//     ul.style.left="0%";

//     // if(screens < 780){
//     //     ul.style.top="-100%";
//     // }else{
//     //     if(screens >= 780)
//     //     ul.style.left="-100%";
//     //     ul.style.top="0%";
//     // }
// }







// next.addEventListener("click",(e)=>{
//     e.preventDefault();
//     // screens = window.innerWidth;

//     if(screens >= 780){
//         if(enableClick){
//             enableClick = false;
//             nextSlide();
//         }
//     }else{
//         if(screens < 780){
//             if(enableClick){
//                 enableClick = false;
//                 nextSlide2();
//             }
//         }
//     }
// });

// prev.addEventListener("click",(e)=>{
//     e.preventDefault();
//     // screens = window.innerWidth;

//     if(screens >= 780){
//         if(enableClick){
//             enableClick = false;
//             prevSlide();
//         }
//     }else{
//         if(screens < 780){
//             if(enableClick){
//                 enableClick = false;
//                 prevSlide2();
//             }
//         }
//     }
// });

// function init(){
//     if(ul.style.width == "500%"){
//         ul.style.top="0%";
//         ul.prepend(ul.lastElementChild);
//         return;
//     }else{
//         // (!ul.style.left == "-100%")
//         ul.style.left="-100%";
//         ul.prepend(ul.lastElementChild);
//         ul.style.top="0%";
//         ul.prepend(ul.lastElementChild);
//         return;
//     }
    
    
    
// }

// function init2(){
//     if(ul.style.top == "-100%" ){
//         ul.style.left="0%";
//         ul.prepend(ul.lastElementChild);
//         return;
//     }
//     ul.style.top="-100%";
//     ul.prepend(ul.lastElementChild);
//     ul.style.left="0%";
//     ul.prepend(ul.lastElementChild);
//     return;
    
// }

// function init(){
//         ul.style.left="-100%";
//         ul.prepend(ul.lastElementChild);

//     // ul.style.width = `${100 * len}%`;
    
//     // lis.forEach(li=>{
//     //     li.style.width = `${100 / len}%`;
//     // })
// }

// function init2(){
//     ul.style.top="-100%";
//     ul.prepend(ul.lastElementChild);

// }






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




