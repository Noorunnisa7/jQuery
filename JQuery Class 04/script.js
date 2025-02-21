
$(document).ready(function(){
    $('#dbl').dblclick(function(){
        $(this).css('background' , 'black')
        $(this).css('color' , 'white')

    })

    $('.mouseEvent').mousedown(function(){
        $(this).css('color' , 'blue')
    })
    $('.mouseEvent').mouseup(function(){
        $(this).css('color' , 'red')
    })


    $('.mouse').mouseenter(function(){
        $(this).css('color' , 'green')
    })
    $('.mouse').mouseleave(function(){
        $(this).css('color' , 'orange')
    })

    // $('body').keypress(function(){
    //    $('p').css("color" , 'red')
    // })
    $('body').keyup(function(){
        $('p').css("color" , 'black')
     })
     $('body').keydown(function(){
        $('p').css("color" , 'red')
     })

     $(window).scroll(function(){
        // let scrollY = window.scrollY;
        // console.log(scrollY)

        // let scrollX = window.scrollX;
        // console.log(scrollX)

     })


     $(window).scroll(function(){
        let scrollvalue = window.scrollY;
        console.log(scrollvalue)
        if(scrollvalue > 400){
            $('header').css({
                'background':'grey',
                'color':'black'
            })
        }
        else{
            $('header').css({
                'background':'black',
                'color':'wheat'
            }) 
        }
     })
})



console.log("Hello Javascript and jquery")  // testing