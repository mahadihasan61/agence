$(function(){
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        dots: true,
    })
    $('.review-slider').slick({
        arrows: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        pauseOnHover: false,
        prevArrow: '.rev-slide-btns i.left',
        nextArrow: '.rev-slide-btns i.right'
    })
});
$('.countered').counterUp({
    delay: 10,
    time: 1000,
});