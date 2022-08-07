$(document).ready(function(){
    //AOS
    AOS.init();

    // 섹션별로 헤더 색상 변경해주기
    $(window).scroll(function(){

        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;

        const sct = $(window).scrollTop();
        console.log(sct);

        if (sct >= banner && sct < sec1 - 250) {
            $('.header-area').removeClass('active');
        } else if (sct >= sec1 - 250) {
            $('.header-area').addClass('active');
        }

    });

    // 서브메뉴
    media_sub();
    function media_sub() {

        const ww = $(window).width();
        if (ww > 1100) {

            $('.main-menu li').mouseenter(function(){

                const result = $(this).attr('data-alt');
                $('.sub-menu').removeClass('active');
                $(`#${result}`).addClass('active');

                //서브메뉴박스 보이게 처리
                $('.sub-menu-box').addClass('active');

            });

            $('.sub-menu-box').mouseleave(function(){
                
                //서브메뉴박스 안보이게 처리
                $(this).removeClass('active');

            });

        } else {

            $('#hamburger').click(function() {

                $(this).toggleClass('active');
                $('.main-menu').toggleClass('active');

            });

        }
    }

    // 스와이퍼 클릭
    media();
    function media() {

        const ww = $(window).width();
        if (ww > 1100) {

            $('.sec-1-top li').click(function(){

                const result = $(this).attr('data-alt');
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                $('.swiper').removeClass('active');
                $(`#${result}`).addClass('active');

            });

        }

    }

    // 상단이동버튼
    const btn = $('.btn-top');

    btn.on('click', function(e) {

        e.preventDefault(); // 오류를 줄이기 위한 메서드
        $('html,body').animate({

            scrollTop: 0

        },100);

    });

});