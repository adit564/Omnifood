$(document).ready(function(){
  
//    sticky nav
    $('.js--section-1').waypoint(function(direction){
       if(direction=="down"){
           $('nav').addClass('sticky');
       }
       else{
           $('nav').removeClass('sticky');
       }
       },{
       offset:"60px;"
   }); 
    
//    for scrolling via buttons
   $('.js--scroll-to-plan').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-plan').offset().top},1000);
   });
    
    $('.js--scroll-to-start').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-1').offset().top},1000);
   });

     $('.js--scroll-to-section-1').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-1').offset().top},1000);
   });
    
     $('.js--scroll-to-steps').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-steps').offset().top},1000);
   });
     $('.js--scroll-to-cities').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-cities').offset().top},1000);
   });
     $('.js--scroll-to-plan-box').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-plan').offset().top},1000);
   });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
//    mobile nav
    $('.js--nav-icon').click(function(){
        var nav=$('.js--main-nav');
        nav.slideToggle(200);
    })
});