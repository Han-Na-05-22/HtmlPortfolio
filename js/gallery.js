const body = document.querySelector("body");
const main = document.querySelector("#main_sub");
const frame = document.querySelector("#list");
const input = document.querySelector("#search");
const btn = document.querySelector(".btnSearch");

const base = "https://www.flickr.com/services/rest/?";
const method1 = "flickr.interestingness.getList";
const method2 = "flickr.photos.search";
const key = "8fa271bedd4a017590060c13ebf89615";
const per_page = 50;
const format = "json";

let tag ="ARCHITECTURE";
let tag1 ="INTERIOR";
let tag2 ="FURNITURE";

const url = `${base}method=${method1}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;


const url1 = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`;


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

    }else{
        alert("검색하신 이미지의 데이터가 없습니다.");
    }
})

function createList(items){
    let htmls="";

    items.map(data=>{
        console.log(data);

        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
        
        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        htmls +=`
                    <li class="item">
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


window.addEventListener("load",()=>{
        new Isotope("#list",{
            itemSelector : ".item",
            columnWidth : ".item",
            transitionDuration : "0.5s"
        })
})


const imgs = document.querySelectorAll("img");
const len = imgs.length;
let count = 0;

for(let el of imgs){
    el.onload=()=>{
        count++;

        if(count==len)
        isoLayout();
    }
}
