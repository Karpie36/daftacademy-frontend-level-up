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
            $("html, body").animate({ scrollTop: 0 }, "fast", "linear");
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

    const getCarouselParameters = function () {

        const carouselLoadingInterval = setInterval(() => {
            console.log('Loading...')
        }, 100)

        $.ajax(
            {
                url: "/carousel",
                type: 'GET',
                dataType: 'json',
                success: function(json)
                {
                    createCarouselElements(json.carousel_element)
                    makeGliderObject()
                },
                error: function(data)
                {
                    console.error(data)
                },
                complete: function () {
                    clearInterval(carouselLoadingInterval)
                }
            });
    }

    const createCarouselElements = function (newCarouselElement) {


        for(let i=0; i < 8; i++) {
            $(".glider").append(newCarouselElement);
        }
    }

    const getProductParameters = function () {

        const productsLoadingInterval = setInterval(() => {
            console.log('Loading...')
        }, 100)

        $.ajax(
            {
                url: "/all_products",
                type: 'GET',
                dataType: 'json',
                success: function(json)
                {
                    createAllProductsElements(json.product_element)
                },
                error: function(data)
                {
                    console.error(data)
                },
                complete: function () {
                    clearInterval(productsLoadingInterval)
                }
            });
    }

    const createAllProductsElements = function (newProductsElement) {

        for(let i=0; i < 8; i++) {
            $(".products").append(newProductsElement);
        }
    }

    const makeAllProductsBtnListener = function () {
        $(".view-all-products").click(() => {
            getProductParameters();
            $(".view-all-products").hide();
        });
    }

    return {
        resetScroll,
        makeScrollBtnListener,
        controlScrollUpVisible,
        changeYearToPresent,
        getCarouselParameters,
        getProductParameters,
        makeAllProductsBtnListener
    }
})();