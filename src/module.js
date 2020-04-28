import $ from '../node_modules/jquery/dist/jquery';

export const module = (function () {

    const makeGliderObject = function () {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            draggable: true,
            rewind: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4.5,
                        slidesToScroll: 1,
                        arrows: {
                            prev: '.glider-prev',
                            next: '.glider-next'
                        },
                    }
                }
            ]
        });
    };

    const resetScroll = function () {
        window.scrollTo(0,0);
    };

    const makeScrollBtnListener = function () {
        $(".scroll-up").click(() => {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    };

    const controlScrollUpVisible = function () {
        $(window).scroll(() => {
            if(document.scrollingElement.scrollTop > window.innerHeight / 2) {
                $(".scroll-up").fadeIn();
            }
            else {
                $(".scroll-up").fadeOut();
            }
        });
    };

    const changeYearToPresent = function () {
        const date = new Date();
        const presentYear = date.getFullYear();
        $(".present-year").html(presentYear);
    }

    const makeAllProductsBtnListener = function () {
        $(".view-all-products").click(() => {

            const newProductsElements =  '<div class="pt-4 col-6 col-md-3"><div class="card"><img src="https://via.placeholder.com/309x390" class="item-pic-placeholder card-img-top" alt="Item placeholder"><div class="card-body"> <h5 class="card-title"><img class="icon-placeholder" src="./assets/9 View mobile/kz-number-one.svg" alt="Number One icon">ICON PLACEHOLDER </h5> <p class="card-product__name">PRODUCT NAME PLACEHOLDER</p><p class="card-product__price">PRICE $ <span class="card-product__sale">SALES $</span></p><div class="card-action d-flex justify-content-between"><button class="card-action__buy btn">ADD TO CARD </button><button class="btn card-action__save"><img src="./assets/9 View mobile/-e-kz-heart.svg" alt="Hearth icon"></button></div></div></div></div>';

            for(let i=0; i < 8; i++) {
                $(".products").append(newProductsElements);
            }

            $(".view-all-products").hide();
        });
    }

    return {
        makeGliderObject,
        resetScroll,
        makeScrollBtnListener,
        controlScrollUpVisible,
        changeYearToPresent,
        makeAllProductsBtnListener
    }
})();