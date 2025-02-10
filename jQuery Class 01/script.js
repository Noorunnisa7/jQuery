// $(document).ready(function(){
//     alert("Hello JQuery");
// })

$(document).ready(function(){
    // $('button').click(function(){
    //     alert("Clicked");
    // })

    $('#clickbtn1').click(function(){
        alert("Hello Jquery");
    })

    $('.clickbtn2').click(function(){
        alert("Hello Javascript")
    })

    $('.colorBtn').click(function(){
        // $('.box').css("background"  , "black")
        // $('.box').css("color" , 'white')
        $('.box').css({
            'background': 'black' , 
            'color': 'white' , 
            'font-size': '25px'
        })
    })

    $('.changeColor').click(function(){
        $(this).css({
            'background': 'black' , 
            'color': 'white' , 
            'font-size': '18px'
        })
    })
})