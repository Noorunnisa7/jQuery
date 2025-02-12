$(document).ready(function(){
    $('.ClickBtn').click(function(){
        alert("Hello JQuery")
        $(this).css({
            'color':'white',
            'background-color':'black'
        })
    })



    $('.heading1').click(function(){
        $('.heading').hide()
    })

    // hide 
    $('.hide').click(function(){
        $('.mybox').hide()
    })
    //show 
    $('.show').click(function(){
        $('.mybox').show()
    })

    //toggle 
    $('.read').click(function(){
        $('.content').toggle()
    })

    //popup 
    $('.viewbtn').click(function(){
        $('popup').show()
    })
    $('.close_btn').click(function(){
        $('.popup').hide()
    })
    // fade function
    // $('.viewbtn').click(function(){
    //     $('popup').fadeIn()
    // })
    // $('.close_btn').click(function(){
    //     $('.popup').fadeOut()
    // })
})