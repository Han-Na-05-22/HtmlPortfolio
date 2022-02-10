var mapContainer = document.getElementById('map'); 
const branch_btns = document.querySelectorAll(".branch li");

let zoom = true;
let drag = true;

mapOption = { 
    center: new kakao.maps.LatLng(37.5672860138561,126.9789351051943), 
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption); 

var markerOptions =[
    {
        title:"HEAD OFFICE",
        latlng : new kakao.maps.LatLng(37.5672860138561,126.9789351051943),
        imgSrc : '../img/map.png',
        imgSize : new kakao.maps.Size(30),
        imgPos : {offset : new kakao.maps.Point(25,30)},
        button:branch_btns[0]
    },
    {
        title:"BRANCH OFFICE",
        latlng : new kakao.maps.LatLng(35.17934061206215,129.07666570805762),
        imgSrc : '../img/map.png',
        imgSize : new kakao.maps.Size(30),
        imgPos : {offset : new kakao.maps.Point(15,30)},
        button:branch_btns[1]
    }
];

for(let i =0; i<markerOptions.length; i++){
    new kakao.maps.Marker({
        map : map, 
        position: markerOptions[i].latlng, 
        title : markerOptions[i].title, 
        image : new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos) 
    });

    markerOptions[i].button.onclick = e=>{
        e.preventDefault(); 

        for(let k=0; k<markerOptions.length; k++){
            markerOptions[k].button.classList.remove("on"); 
        }
        markerOptions[i].button.classList.add("on"); 

        moveTo(markerOptions[i].latlng); 
    }    
}

window.onresize = ()=>{
    let active_btn = document.querySelector(".branch li.on"); 
    let active_index = active_btn.getAttribute("data-index"); 
    
    map.setCenter(markerOptions[active_index].latlng);
}


var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

setDraggable(drag);
function setDraggable(draggable) {
    map.setDraggable(draggable);    
}

setZoomable(zoom); 
function setZoomable(zoomable) {
    map.setZoomable(zoomable);    
}

function moveTo(target) {   
    var moveLatLon = target;   
    map.setCenter(moveLatLon);
}