// document.getElementById("header").addEventListener("click",prohead);
// function prohead(){
//    var hooo= document.getElementsByTagName("header");
//    hooo.ClassList.remove("headerr")
//    hooo.ClassList.add("proheaderstyle");

// }

window.addEventListener("scroll",()=>{
    let a = document.querySelector("header");

    if (window.pageYOffset > a.clientHeight){
        a.classList.replace("header","scroll_header")
    }
    else{
        a.classList.replace("scroll_header","header")
    }
})