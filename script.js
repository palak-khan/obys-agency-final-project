function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco()
function page2Animation() {

    var videoC = document.querySelector("#video-container")
    videoC.addEventListener("mouseenter", function () {
        gsap.to(".mousefollower", {
            opacity: 0
        })
    })
    videoC.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1
        })

        gsap.to("#play-btn", {
            left: "70%",
            top: "-15%"
        })
    })

    var videoImage = document.querySelector("#video-container img")
    var videoVideo = document.querySelector("#video-container video")

    var flag = 0

    videoC.addEventListener("click", function () {
        if (flag == 0) {

            gsap.to(videoVideo, {
                opacity: 1
            })

            gsap.to("#play-btn", {
                scale: 0.8
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-pause-line"></i>'
            videoVideo.play()
            flag = 1
        } else {
            gsap.to(videoVideo, {
                opacity: 0
            })
            gsap.to("#play-btn", {
                scale: 1
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-play-fill"></i>'

            videoVideo.pause()
            flag = 0
        }
    })

    videoC.addEventListener("mousemove", function (dets) {
        gsap.to("#play-btn", {
            left: dets.x - 555,
            top: dets.y - 200
        })
    })
}

page2Animation()

function page5Animation() {
    gsap.to(".page-5-1", {
        x: -1000,
        scrollTrigger: {
            trigger: ".page5",
            scroller: "#main",
            start: "top 150%",
            end: "top -50%",
            scrub: 3
            // markers:true
        }
    })

    gsap.from(".page-5-2", {
        x: -1000,
        scrollTrigger: {
            trigger: ".page5",
            scroller: "#main",
            start: "top 150%",
            end: "top -50%",
            scrub: 3,
            // markers:true
        }
    })

}

page5Animation()
const text = new SplitType(".page6-text .text", { types: "chars" });

function page6Animation(){



var text = document.querySelector(".page6-text ")

text.addEventListener("mouseenter",function(){
    gsap.to(".page6-text h1 .char",{
        opacity:0,
        stagger:0.1,
        duration:0.5
    })
    gsap.to(".page6-text h2 .char",{
        opacity:1,
        delay:0.4,
        duration:0.5,
        stagger:0.1
    })
    gsap.to(".page6-svg  svg",{
        transform:"translateX(20%)"
    })
})

text.addEventListener("mouseleave",function(){
    gsap.to(".page6-text h2 .char",{
        opacity:0,
        stagger:0.05,
        duration:0.3
    })
    gsap.to(".page6-text h1 .char",{
        opacity:1,
        delay:0.4,
        duration:0.3,
        stagger:0.05
    })
    gsap.to(".page6-svg svg",{
        transform:"translateX(0%)"
    })
})
}
 page6Animation(); 
