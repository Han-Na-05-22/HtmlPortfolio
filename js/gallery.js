const body = document.querySelector("body");
const main = document.querySelector("#main_sub");
const loading = document.querySelector(".loading");

const frame = document.querySelector("#list");
const frame2 = document.querySelector("#list2");
const frame3 = document.querySelector("#list3");

const lis01 = frame.querySelector("#list li");
const lis02 = frame2.querySelector("#list2 li");
const lis03 = frame3.querySelector("#list3 li");

const galleryInput = document.querySelector("#search");
const gallerySearch = document.querySelector(".btnSearch");

const gallerybtn = document.querySelectorAll(".clickEvent li");

const base = "https://www.flickr.com/services/rest/?";
const method1 = "flickr.interestingness.getList";
const method2 = "flickr.photos.search";
const key = "8fa271bedd4a017590060c13ebf89615";
const per_page = 100;
const format = "json";

let tag ="ARCHITECTURE";
let tag1 ="INTERIOR";
let tag2 ="FURNITURE";


// ------------------------- 갤러리사진 
//Architecture
const method3 = "flickr.galleries.getPhotos";
const username = "194808976@N04";
const gallery = "72157720420913610";
const url =  `${base}method=${method3}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&user_id=${username}&gallery_id=${gallery}`; 

// Interior
const gallery2 = "72157720368150124";
const url2 =  `${base}method=${method3}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&user_id=${username}&gallery_id=${gallery2}`; 

// Furniture
const gallery3 = "72157720420915660";
const url3 =  `${base}method=${method3}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&user_id=${username}&gallery_id=${gallery3}`; 


callData(url);
callData2(url2);
callData3(url3);

gallerySearch.addEventListener("click",e=>{
    
    let tag = galleryInput.value;

    const urls = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`;

    callData(urls);
    frame2.classList.add("hidden");
    frame3.classList.add("hidden");
})

galleryInput.addEventListener("keypress",e=>{
    if(e.keyCode == 13){

        let tag = galleryInput.value;

        const urls = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`;
    
        callData(urls);
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
    }
})


frame.addEventListener("click",e=>{
    e.preventDefault();

    if(e.target == frame) return;

    let target = e.target.closest(".architecture").querySelector(".thumb");

    if(e.target == target){
    let imgSrc = target.parentElement.getAttribute("href");

    let popUp = document.createElement("aside");
    popUp.classList.add("popup");
    let pops = `
                    <img src=${imgSrc}">
                    <span class="closePop">close</span>
                    `;

    popUp.innerHTML = pops;
    main.append(popUp);
    }else{
        return;
    }
});

frame2.addEventListener("click",e=>{
    e.preventDefault();

    if(e.target == frame) return;

    let target = e.target.closest(".interior").querySelector(".thumb");

    if(e.target == target){
    let imgSrc = target.parentElement.getAttribute("href");

    let popUp = document.createElement("aside");
    popUp.classList.add("popup");
    let pops = `
                    <img src=${imgSrc}">
                    <span class="closePop">close</span>
                    `;

    popUp.innerHTML = pops;
    main.append(popUp);
    }else{
        return;
    }
});

frame3.addEventListener("click",e=>{
    e.preventDefault();

    if(e.target == frame) return;

    let target = e.target.closest(".furniture").querySelector(".thumb");

    if(e.target == target){
    let imgSrc = target.parentElement.getAttribute("href");

    let popUp = document.createElement("aside");
    popUp.classList.add("popup");
    let pops = `
                    <img src=${imgSrc}">
                    <span class="closePop">close</span>
                    `;

    popUp.innerHTML = pops;
    main.append(popUp);
    }else{
        return;
    }
});


body.addEventListener("click",e=>{

    let popUp = body.querySelector(".popup");

    if(popUp != null){
        let close = popUp.querySelector(".closePop");
        if(e.target == close) popUp.remove();
    }

})


function callData(url){

    frame.innerHTML = "";
    loading.classList.remove("off");
    frame.classList.remove("on");

    fetch(url)
    .then(data=>{
        let result = data.json();
        return result;
    })
    
    .then(json=>{
        let items = json.photos.photo;
    
        createList(items);
    
        delayLoading();

    })
}

function callData2(url2){

    frame.innerHTML = "";
    loading.classList.remove("off");
    frame2.classList.remove("on");

    fetch(url2)
    .then(data=>{
        let result = data.json();
        return result;
    })
    
    .then(json=>{
        let items2 = json.photos.photo;
    
        createList2(items2);

        delayLoading2();

    })
}

function callData3(url3){

    frame.innerHTML = "";
    loading.classList.remove("off");
    frame3.classList.remove("on");

    fetch(url3)
    .then(data=>{
        let result = data.json();
        return result;
    })
    
    .then(json=>{
        let items3 = json.photos.photo;
    
        createList3(items3);

        delayLoading3();
    })
}


function createList(items){
    let htmls="";

    items.map(data=>{
        console.log(data);

        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
        
        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        htmls +=`
                    <li class="architecture">
                        <div>
                            <a href=${imgSrcBig}>
                                <img class="thumb" src=${imgSrc}>
                            </a>
                            <p>${data.title}</p>
                            <span>Lorem ipsum dolor sit amet</span>
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste nulla necessitatibus ipsa nesciunt laudantium.</strong>
                        </div>
                    </li>
                    `;  
    })

    frame.innerHTML = htmls;
}

function createList2(items){
    let htmls="";

    items.map(data=>{
        console.log(data);

        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
        
        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        htmls +=`
                    <li class="interior">
                        <div>
                            <a href=${imgSrcBig}>
                                <img class="thumb" src=${imgSrc}>
                            </a>
                            <p>${data.title}</p>
                            <span>Lorem ipsum dolor sit amet</span>
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste nulla necessitatibus ipsa nesciunt laudantium.</strong>
                        </div>
                    </li>
                    `;  
    })

    frame2.innerHTML = htmls;
}

function createList3(items){
    let htmls="";

    items.map(data=>{
        console.log(data);

        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
        
        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        htmls +=`
                    <li class="furniture">
                        <div>
                            <a href=${imgSrcBig}>
                                <img class="thumb" src=${imgSrc}>
                            </a>
                            <p>${data.title}</p>
                            <span>Lorem ipsum dolor sit amet</span>
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste nulla necessitatibus ipsa nesciunt laudantium.</strong>
                        </div>
                    </li>
                    `;  
    })

    frame3.innerHTML = htmls;
}


function delayLoading(){

    const imgs = frame.querySelectorAll("img");
    const len = imgs.length;
    let count = 0;

    console.dir(imgs[0]);

    for(let el of imgs){
        el.onload=()=>{
            count++;

            if(count == len) isoLayout();
        }
    }
}

function delayLoading2(){

    const imgs = frame2.querySelectorAll("img");
    const len = imgs.length;
    let count = 0;

    console.dir(imgs[0]);


    for(let el of imgs){

        el.onload=()=>{
            count++;

            if(count == len) isoLayout2();
        }
    }
}

function delayLoading3(){

    const imgs = frame3.querySelectorAll("img");
    const len = imgs.length;
    let count = 0;

    console.dir(imgs[0]);


    for(let el of imgs){
   
        el.onload=()=>{
            count++;

            if(count == len) isoLayout3();
        }
    }
}


function isoLayout(){

    loading.classList.add("off");
    frame.classList.add("on");

    const grid = new Isotope("#list",{
        itemSelector : ".architecture",
        columnWidth : ".architecture",
        transitionDuration : "0.5s"
    })

    for(let el of gallerybtn){

        // sort 버튼 클릭했을 때
        el.addEventListener("click", e=>{
            e.preventDefault();

            // 클릭한 버튼의 a태그에서 href 속성값을 변수로 저장
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            // sort에 따라 재정렬하기
            grid.arrange({
                filter : sort
            });

            // 버튼 활성화
            // 모든 버튼을 순간적으로 비활성화하고
            // 클릭한 버튼만 활성화
            for(let el of gallerybtn){
                el.classList.remove("on");
            }
            e.currentTarget.classList.add("on");
        })
     }
}

function isoLayout2(){
    loading.classList.add("off");
    frame2.classList.add("on");

    const grid2 = new Isotope("#list2",{
        itemSelector : ".interior",
        columnWidth : ".interior",
        transitionDuration : "0.5s"
    })

    for(let el of gallerybtn){

        // sort 버튼 클릭했을 때
        el.addEventListener("click", e=>{
            e.preventDefault();

            // 클릭한 버튼의 a태그에서 href 속성값을 변수로 저장
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            // sort에 따라 재정렬하기
            grid2.arrange({
                filter : sort
            });

            // 버튼 활성화
            // 모든 버튼을 순간적으로 비활성화하고
            // 클릭한 버튼만 활성화
            for(let el of gallerybtn){
                el.classList.remove("on");
            }
            e.currentTarget.classList.add("on");
        })
     }
}

function isoLayout3(){
    loading.classList.add("off");
    frame3.classList.add("on");

    const grid3 = new Isotope("#list3",{
        itemSelector : ".furniture",
        columnWidth : ".furniture",
        transitionDuration : "0.5s"
    })

    for(let el of gallerybtn){

        // sort 버튼 클릭했을 때
        el.addEventListener("click", e=>{
            e.preventDefault();

            // 클릭한 버튼의 a태그에서 href 속성값을 변수로 저장
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            // sort에 따라 재정렬하기
            grid3.arrange({
                filter : sort
            });

            // 버튼 활성화
            // 모든 버튼을 순간적으로 비활성화하고
            // 클릭한 버튼만 활성화
            for(let el of gallerybtn){
                el.classList.remove("on");
            }
            e.currentTarget.classList.add("on");
        })
     }
}

