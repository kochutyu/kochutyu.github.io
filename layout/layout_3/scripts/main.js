AOS.init();
const navbarLi = $('.navbar-li');
let countLi = 0;
for (const li of navbarLi) {
    countLi++;
    if (countLi % 2 === 0) {
        $(li).css({
            'border-bottom': '5px solid #a34ff0'
        });
        $(li).hover(() => {
            $(li).animate({
                'top': '-10px'
            }, 300, "linear", () => {});
        }, () => {
            $(li).animate({
                'top': '0px'
            }, 300, "linear", () => {});
        });

    } else {
        const preveousBorder = $(li).css({
            'border-bottom': '5px solid #6017a3'
        });
        $(li).hover(() => {
            $(li).animate({
                'top': '-10px'
            }, 300, "linear", () => {});
        }, () => {
            $(li).animate({
                'top': '0px'
            }, 100, "linear", () => {});
        });
    }
}

function paralax() {
    $('.bg-slider-bg').css({
        'top': `${window.pageYOffset/2}px`
    })
}

//! bg-travel-guide

//* MAP ANUMATION
let map1_3 = 90;
let map2_4 = -90;
let checkClick = false;
let onScrollMap = false;

function animateMap() {
    if (checkClick) {
        const inteval1 = setInterval(() => {
            map1_3 -= 1;
            $('.map-1').css({
                'transform': `rotateX(50deg) rotateY(${map1_3}deg) perspective(1100px) skew(-15deg, -15deg)`,
            });
            $('.map-3').css({
                'transform': `rotateX(50deg) rotateY(${map1_3}deg) perspective(1100px) skew(-15deg, -15deg)`,
            });
            if (map1_3 === 0) {
                map1_3 = 90;
                checkClick = false;
                clearInterval(inteval1);
            }
        }, 11);
        const inteval2 = setInterval(() => {
            map2_4 += 1;
            $('.map-2').css({
                'transform': `rotateX(50deg) rotateY(${map2_4}deg) perspective(1100px) skew(-15deg, 15deg)`,
            });
            $('.map-4').css({
                'transform': `rotateX(50deg) rotateY(${map2_4}deg) perspective(1100px) skew(-15deg, 15deg)`,
            });
            if (map2_4 === 0) {
                map2_4 = -90;
                checkClick = false;
                clearInterval(inteval2);
            }
        }, 11.1);

        $('.map-1').animate({
            'left': '0',
            'height': '400px',
        }, 1000, 'linear')
        $('.map-2').animate({
            'left': '10px',
            'height': '400px',
            'transform': 'rotateX(70deg) rotateY(0deg) perspective(1100px) skew(-15deg, -30deg)'
        }, 1000, 'linear')
        $('.map-3').animate({
            'left': '20px',
            'height': '400px',
            'transform': 'rotateX(70deg) rotateY(0deg) perspective(1100px) skew(-15deg, -30deg)'
        }, 1000, 'linear', () => {})
        $('.map-4').animate({
            'left': '30px',
            'height': '400px',
            'transform': 'rotateX(70deg) rotateY(0deg) perspective(1100px) skew(-15deg, -30deg)'
        }, 1000, 'linear')
        $('.here').animate({
            'opacity': 1,
        }, 1000, 'linear')
    }
    console.log(checkClick);

}
let scroll = 0;
$(window).on('scroll', function () {
    adaptive();
    $('.bg-slider-bg').css({
        'top': `${window.pageYOffset/2}px`
    })
    console.log(document.documentElement.clientHeight);
    const clientHeightMin = document.documentElement.clientHeight / 2;
    if (window.pageYOffset < 200) {
        onScrollMap = false;
    }
    if (!checkClick && window.pageYOffset > clientHeightMin && !onScrollMap) {
        checkClick = true;
        onScrollMap = true;
        $('.map-1').css({
            'left': '38%'
        });
        $('.map-2').css({
            'left': '13%'
        });
        $('.map-1').css({
            'right': '12%'
        });
        $('.map-1').css({
            'right': '37%'
        });
        $('.here').css({
            'opacity': '0'
        });
        animateMap()
    }

    paralax()
});
$('.map1, .map2, .map3, .map4').click(function (e) {
    if (!checkClick) {
        checkClick = true;
        $('.map-1').css({
            'left': '38%'
        });
        $('.map-2').css({
            'left': '13%'
        });
        $('.map-1').css({
            'right': '12%'
        });
        $('.map-1').css({
            'right': '37%'
        });
        $('.here').css({
            'opacity': '0'
        });
        animateMap()
    }
});

let widthContainer = window.innerWidth;
$(window).on('resize', function () {
    adaptive()
});

$(window).on('load', function () {
    adaptive()
});


function adaptive() {
    if (window.innerWidth < 1010) {
        $('.container').css({
            width: `100%`
        })
        $('.navbar').css({
            'flex-wrap': 'wrap',
            'left': '0px'
        })
        $('.logo-search').css({
            'align-items': 'center',
            'flex-direction': 'column'
        })

    } else if (window.innerWidth >= 1010) {
        $('.container').css({
            width: `950px`
        })
        $('.navbar').css({
            'flex-wrap': 'nowrap'
        });
        $('.logo-search').css({
            'align-items': 'center',
            'flex-direction': 'row'
        })
    }

    if (window.innerWidth < 820) {
        $('.service-blocks').css({
            'flex-direction': 'column'
        });

        $('.bg-travel-guide h1').css({
            'text-align': 'center',
            'line-height': '35px'
        });
        console.log($('.service-block:nth-child(2)::after'));

    } else if (window.innerWidth >= 820) {
        $('.service-blocks').css({
            'flex-direction': 'row'
        });
    }

    if (window.innerWidth < 610) {
        console.log($('.search-logo::after'));
        
        $('.search').css({
            'flex-direction': 'column'
        });
        $('.search-logo:after').css({
            display: 'none'
        });
    } else if (window.innerWidth >= 610) {
        $('.search').css({
            'flex-direction': 'row'
        });
    }
}