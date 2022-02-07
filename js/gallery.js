const body = document.querySelector("body");
const main = document.querySelector("#main_sub");

const frame = document.querySelector("#list");
const frame2 = document.querySelector("#list2");
const frame3 = document.querySelector("#list3");

const lis01 = frame.querySelector("#list li");
const lis02 = frame2.querySelector("#list2 li");
const lis03 = frame3.querySelector("#list3 li");

const input = document.querySelector("#search");
const btn = document.querySelector(".btnSearch");

const base = "https://www.flickr.com/services/rest/?";
const method1 = "flickr.interestingness.getList";
const method2 = "flickr.photos.search";
const key = "8fa271bedd4a017590060c13ebf89615";
const per_page = 100;
const format = "json";

let tag ="ARCHITECTURE";
let tag1 ="INTERIOR";
let tag2 ="FURNITURE";

// const url = `${base}method=${method1}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

// const url1 = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag1}&privacy_filter=1`;


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

function callData(url){

    fetch(url)
    .then(data=>{
        let result = data.json();
        return result;
    })
    
    .then(json=>{
        let items = json.photos.photo;
    
        createList(items);
    
        if(items.length>0){
            createList(items);
            isoLayout();
            // delayLoading();
    
        }else{
            alert("검색하신 이미지의 데이터가 없습니다.");
        }
    })
}

function callData2(url2){

    fetch(url2)
    .then(data=>{
        let result = data.json();
        return result;
    })
    
    .then(json=>{
        let items2 = json.photos.photo;
    
        createList2(items2);
    
        if(items2.length>0){
            createList2(items2);
            isoLayout2();
            // delayLoading();
    
        }else{
            alert("검색하신 이미지의 데이터가 없습니다.");
        }
    })
}

function callData3(url3){

    fetch(url3)
    .then(data=>{
        let result = data.json();
        return result;
    })
    
    .then(json=>{
        let items3 = json.photos.photo;
    
        createList3(items3);
    
        if(items3.length>0){
            createList3(items3);
            isoLayout3();
            // delayLoading();
    
        }else{
            alert("검색하신 이미지의 데이터가 없습니다.");
        }
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


// function delayLoading(){
//     const imgs = document.querySelectorAll("img");
//     const len = imgs.length;
//     let count = 0;
    
//     for(let el of imgs){
//         el.onload=()=>{
//             count++;
    
//             if(count==len)
//             isoLayout();
//         }
//     }
// }

function isoLayout(){
    frame.classList.add("on");

    new Isotope("#list",{
        itemSelector : ".architecture",
        columnWidth : ".architecture",
        transitionDuration : "0.5s"
    })
}

function isoLayout2(){
    frame2.classList.add("on");

    new Isotope("#list2",{
        itemSelector : ".interior",
        columnWidth : ".interior",
        transitionDuration : "0.5s"
    })
}


function isoLayout3(){
    frame3.classList.add("on");

    new Isotope("#list3",{
        itemSelector : ".furniture",
        columnWidth : ".furniture",
        transitionDuration : "0.5s"
    })
}

