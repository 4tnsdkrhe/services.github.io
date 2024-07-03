JQuery(document).ready(function () {
    var fired = false;

    window.addEventListener('scroll', () => {
        if (fired === false) {
            fired = true;

            setTimeout(() => {
                // Здесь все эти тормознутые трекеры, чаты и прочая ересь,
                // без которой жить не может отдел маркетинга, и которые
                // дико бесят разработчиков, когда тот же маркетинг приходит
                // с вопросом "почему сайт медленно грузится, нам гугл сказал"
            }, 1000);
        }
    });
    new Swiper(".partners-slider", {
        spaceBetween: 50,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    }), new Swiper(".expertises-slider", {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    }), new Swiper(".sertificates-slider", {
        slidesPerView: 5,
        spaceBetween: 50,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    }), new Swiper(".reviews-slider", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    $(".feedback-form").sendForm(), $(".callback-form").sendForm({
        successTitle: "Ваша заявка принята!",
        successText: "Наш сотрудник свяжется с Вами в самое ближайшее время.",
        autoClose: !0,
        autoCloseDelay: 3e3
    });
});
