$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });
    //const mainSlide = $('.main_slide').slick({});
    let snum = 1;
    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        autoplay: {
            delay: 1000,
            disableonInteraction: false,
        },
        slideActiveClass: 'on',
        on: {
            init: function () {
                //console.log('왜안나오는겨... 이제나온다', this.realIndex, this.slides.length, this)
                $('.num span').text(this.realIndex + 1);
                $('.num strong').text(this.slides.length);
            },
            slideChangeTransitionEnd: function () {
                $('.num span').text(this.realIndex + 1);
                $('.cicle span:nth-child(1)').css({
                    transform: 'translate(-50%, 0) rotate(' + snum * 45 + 'deg)'
                });
                snum = snum + 1;
            }
        },
    });
    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });
    $('.main_visual  .slide_dots li').on('click', function () {
        let idx = $(this).index();
        mainSlide.slideTo(idx);
        $(this).addClass('on').siblings().removeClass('on');
    });
})