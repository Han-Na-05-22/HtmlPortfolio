const sections = document.querySelectorAll("#main_sub section");

const lis3 = document.querySelectorAll("#figure_sub ul .communityList");

lis3.forEach((btn,index)=>{
    btn.addEventListener("click",e=>{
        e.preventDefault();

        for(let i=0; i<sections.length; i++){
            sections[i].classList.remove("on");
        }
        sections[index].classList.add("on");
    })
})