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




// navAnimation();

// page2Animation();
