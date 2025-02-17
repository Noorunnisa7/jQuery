$(document).ready(function(){
//   $('.b1').click(function(){
//     // $('.readContent').slideDown();
//     // $('.readContent').slideUp();
//     $('.r1').slideToggle(2000);
//     // $('.readContent').fadeToggle(4000);
//   })


//   $('.b2').click(function(){
//     $('.r2').slideToggle(2000);
//   })
//   $('.b3').click(function(){
//     $('.r3').slideToggle(2000);
//   })
//   $('.b4').click(function(){
//     $('.r4').slideToggle(2000);
//   })
  for(let i = 1 ; i<=10; i++){
    $('.b'+i).click(function(){
        $('.r'+i).slideToggle(2000);
    })
   }


   $('.modeBtn').click(function(){
    // $('body').addClass("blackColor")
    // $('body').removeClass('xyz')
    $('body').toggleClass("blackColor")
   })
})



