$(document).ready(function(){
    $('#formSubmit').submit(function(event){
        event.preventDefault();

      let name =  $('.nameInput').val()
      console.log(name);
      $('.formText').text(name)

      $('.nameInput').val("")
        // $('.formText')
    })


    // Change Event

    $('#selectData').change(function(){
        let selData =  $(this).val()
        console.log(selData)
        $('.seltext').text(selData)
    })

    $('.resizeImage').click(function(){
        $('.myImg').attr('width','30%')
    })


    // hide and show password
    $('.showpass').click(function(){
        let inputattr = $('#password').attr('type')
        console.log(inputattr)
        if(inputattr == 'password'){
            $('#password').attr('type' , 'text')
            $(this).addClass('fa-eye-slash')
            $(this).removeClass('fa-eye')

        }
        else{
            $('#password').attr('type' , 'password')
            $(this).addClass('fa-eye')
            $(this).removeClass('fa-eye-slash')
        }
    })
})