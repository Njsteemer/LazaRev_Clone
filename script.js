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

// navAnimation();

