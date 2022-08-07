$(document).ready(function(){
    //AOS
    AOS.init();

    // 섹션별로 헤더 색상 변경해주기
    $(window).scroll(function(){

        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const sec3 = $('.sec-3').offset().top;
        const footer = $('.footer').offset().top;

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

        } else if (ww <= 960) {

            // createDIV();
            // function createDIV(){
            //     var obj = document.getElementById("foot-logo");
            //     var newDIV = document.createElement("div");
            //     newDIV.innerHTML = "";
            //     newDIV.setAttribute("id", "myDiv");
            //     newDIV.style.backgroundColor = "yellow";
            //     newDIV.onclick = function() {
            //         var p = this.parentElement; // 부모 HTML 태그
            //         p.removeChild(this);    // 자신을 부모로부터 제거
            //     };
            //     obj.appendChild(newDIV);
            // }

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