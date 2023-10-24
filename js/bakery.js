   // DOM READY EVENT//


   $(document).ready(function(){
         //section1//
         $(".logo4").click(function(){
         $(".smain1").toggleClass("hide");
         })



         $(".bars").click(function(){
         $(".lists").toggle();
         })   

        /*section 2*/
            $('.owl-carousel').owlCarousel({
               loop:true,
               items:1,
               
               nav:true,
               autoplay:false,
               autoplayTimeout:1000,
            
         })
                 


     
         //section 4//
      $(".menucon .menucon1").click(function(){
      $(".popup").show();
      $(".menucon2").show();
      })
      $(".menucon2 .cross").click(function(){
      $(".popup").hide();
      })

   // section 5//
   $(".prodb1").click(function(){
   $(".prodbimg1").toggle();    
   })

   $(".prodb2").click(function(){
   $(".prodbimg2").toggle();    
   })

   $(".prodb3").click(function(){
   $(".prodbimg3").toggle();    
   })

   $(".prodb4").click(function(){
   $(".prodbimg4").toggle();    
   })
 
   $(".prodb5").click(function(){
   $(".prodbimg5").toggle();    
   })

   $(".prodb6").click(function(){
   $(".prodbimg6").toggle();    
   })

   $(".prodb7").click(function(){
   $(".prodbimg7").toggle();    
   })

   $(".prodb8").click(function(){
   $(".prodbimg8").toggle();    
   })

   $(".prodb9").click(function(){
   $(".prodbimg9").toggle();    
   })

   
   
})