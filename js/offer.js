var scrollIcon=document.querySelector(".totop");
window.onscroll=function(){
    if(window.pageYOffset>80){
    scrollIcon.style.display="block";
    }
    else{
        scrollIcon.style.display="none";
    }
}
scrollIcon.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}