$(function(){


    circleMotion=gsap.to('.btn-area .circle',{
        scale:40,
        ease:'none',
        paused:true,
    })
    $('.sc-main .group-main__text-box .btn-area').mousemove(function(e){
        x=e.offsetX;
        y=e.offsetY;
        gsap.set('.btn-area .circle',{
            left:x,
            top:y
        })
      
        // setTimeout(() => {
            
            // circleMotion.play();
            
        // }, 100);
       
    })

    // $('.sc-main .group-main__text-box .btn-area').mouseout(function(){
    //     circleMotion.reverse();
    // })

    // const locoScroll = new LocomotiveScroll({
    //     el: document.querySelector("[data-scroll-container]"),
    //     smooth: true, 
    //     smoothMobile: true,
    //     lerp: .07, 
    //   });
    

    //   locoScroll.on("scroll", ScrollTrigger.update);
    //     ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    //     scrollTop(value) {
    //         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    //     }, 
    //     getBoundingClientRect() {
    //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    //     },
    //     pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    //     });


    //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    //     ScrollTrigger.refresh(); 


// gsap.registerPlugin(ScrollTrigger);
// let bodyScrollBar = Scrollbar.init(document.body, { 
//     damping: 0.05, 
//     delegateTo: document 
// });

// ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//   scrollTop(value) {
//     if (arguments.length) {
//       locoScroll.scrollTop = value;
//     }
//     return locoScroll.scrollTop;
//   }
// });
// locoScroll.addListener(ScrollTrigger.update);



// window.addEventListener("refresh", () =>scrollbar.update());
// ScrollTrigger.refresh();
// bodyScrollBar.update()
// bodyScrollBar.refresh()

    //모바일 메뉴
    $('.nav-all-btn').click(function(){
        $('.nav-allmenu').css('right','0');
    })
    $('.close-btn').click(function(){
        $('.nav-allmenu').css('right','100vw');
    })



    $('[data-fade]').each(function(i,el){
        gsap.from($(this).find('>*'),{
            scrollTrigger:{
                trigger:el,
                // scroller: "[data-scroll-container]",
                start:"0% 80%",
                end:"100% 0%",
                scrub:1,
                // markers:true,
            },
            opacity:0,
            y:50,
            stagger:0.1,
        })

    })






    load=gsap.timeline({
        onComplete:function(){
            $('.load').addClass('hide');
        }
    })
    load.to('.load .item',{delay:1,yPercent:-100})
    load.to('.load .item',{yPercent:-200})
    load.to('.load .item',{yPercent:-300})


    // 마우스 이벤트
    $(window).mousemove(function(e){
        e.preventDefault();
        gsap.to('.cursor',{
            x:e.clientX,
            y:e.clientY,
            duration:.2,
        })
    })

    $('[data-hover]').hover(function(){
        $('.cursor').addClass('data-hover');
    },function(){
        $('.cursor').removeClass('data-hover')
    })

    // 스크롤이벤트 - sc-main
    scrollMove = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-main",
            // scroller: "[data-scroll-container]",
            start:"0% 0%",
            end:"40% 4%%",
            // markers:true, //끝나면 지우면됨!
            scrub:0,
        },
    })
    
    scrollMove
    .addLabel('text')
    .to('.sc-main .title_text_layer1',{ xPercent:-30 },'text')
    .to('.sc-main .title_text_layer2',{ xPercent:10 },'text')
    .to('.sc-main .desc_text_layer1',{ xPercent:-10 },'text')
    .to('.sc-main .desc_text_layer2',{ xPercent:10 },'text')
    .to('.sc-main .desc_text_layer3',{ xPercent:-10 },'text')


    // 스크롤이벤트 - sc-project__line
    linetext = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-project__line",
            // scroller: "[data-scroll-container]",
            start:"0% 100%",
            end:"100% 0%",
            // markers:true, //끝나면 지우면됨!
            scrub:0,
        },
    })
    
    linetext
    .addLabel('line')
    .to('.sc-project__line .text_1',{ xPercent:20 },'line')
    .to('.sc-project__line .text_2',{ xPercent:-20 },'line')
    .to('.sc-project__line .text_3',{ xPercent:20 },'line')
    

    //스크롤 이벤트 - contact



    gsap.set('.footer .contact',{y:-450})
    gsap.set('.footer__inner',{y:-600})

    scrollUp = gsap.timeline({
        scrollTrigger:{
            trigger:".footer",
            // scroller: "[data-scroll-container]",
            start:"0% 100%",
            end:"100% 100%",
            // markers:true, //끝나면 지우면됨!
            scrub:0,
        },
        defaults:{
            ease:'none'
        }
    })
    
    scrollUp
    .addLabel('scrollUp')
    .to('.footer .contact',{y:0},'scrollUp')
    .to('.footer__inner',{y:0},'scrollUp')



    
})