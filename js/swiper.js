var swiper = new Swiper(".mySwiper", {

    observer: true,  
    observeParents: true,

    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        // 반응형 사이즈로 적용해주기
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3,
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
        },
        760: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
        }
    },
    autoplay: {

        // 자동으로 넘어가는 슬라이드 만들기
        delay: 3000,
        disableOnInteraction: true,

    }

});