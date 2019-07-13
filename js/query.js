$('.indicator').on('click',function(){
    $(this).toggleClass('indicator1');
    $('.sidenav').toggleClass('sidenav1');
    $('.close').toggleClass('close1');
});

$('.close').on('click',function(){
    $('.sidenav').toggleClass('sidenav1');
    $(this).toggleClass('close1');
    $('.indicator').toggleClass('indicator1').css('display','block');
});

$('.cyr').on('click',function(){
    $(this).css('color', 'rgb(150, 218, 72)');
    $('.lat').css('color','whitesmoke');
});

$('.lat').on('click',function(){
    $(this).css('color','rgb(150, 218, 72)');
    $('.cyr').css('color','whitesmoke');
});

// Scroll from top nav boja

$(window).scroll(function(){
    const scroll = $(window).scrollTop();
    if(scroll > 50){
        $('.nav').css('background','#000');
    }

    else{
        $('.nav').css('background','transparent');
    }
});

// Slider iz Materialize-a

$('.slider').slider();

$('.carousel').carousel();

// Exit za galeriju
 
    $('.closeLink').on('click', function(event){
        event.stopPropagation();
        $.fancybox.close();
    });