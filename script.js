function navAnimation(){
    var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function(){
   let tl = gsap.timeline()  // 02
    tl.to(".nav_bottom",{
        height: "12vw",
        duration:0.35
    })
    tl.to(".nav_labels h5",{
        display:"block"
    })
    tl.to(".nav_labels h5 span",{
        y:0,
        stagger:{
            amount:0.6
        }
    })
});

nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()  
    tl.to(".nav_labels h5 span",{
         y:20,
         stagger:{
             amount:0.2
            }
        })
        tl.to(".nav_labels h5",{
            display:"none",
            duration:0.1
        })
        tl.to(".nav_bottom",{
            height: 0,
            duration:0.25
        })
 });
}

function page2Animation(){
    var rightContainer = document.querySelectorAll(".page2_container-right-elem");

rightContainer.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
        
    })
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x - 75,
            y:dets.y - elem.getBoundingClientRect().y - 95,
            borderBottom:"2px solid #fff"
        })
    })
});
}

function page3Animation(){
    var page3Center = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video");

page3Center.addEventListener("click", function() {
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}

function page6animation(){
    var sections = document.querySelectorAll(".section-right");

 sections.forEach(function(element) {
    element.addEventListener("mousemove", function(){
        element.childNodes[3].style.opacity = 1 ;
        element.childNodes[3].play();
    });

    element.addEventListener("mouseleave", function(){
        element.childNodes[3].style.opacity = 0 ;
        element.childNodes[3].load();
    })
 });
}


navAnimation();

page2Animation();

page3Animation();



page6animation();
 