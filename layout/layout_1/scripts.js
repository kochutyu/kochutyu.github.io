$(window).on('resize', function () {
    window.location.reload()
    // checkWidthWindow();
});


function notMobile() {
    $(window).on('load', function () {
        $('.section_up').css({
            height: '0px',
            overflow: 'hidden'
        });
        $('.text_nav').animate({
            position: 'relative',
            left: '-1000px',
        }, 500);

        $('.phone_nav').animate({
            position: 'relative',
            right: "-1000px"
        }, 700)
        setTimeout(function () {
            $('.text_nav').animate({
                left: "0px",
            }, 1000, function () {
                // Animation complete.
                $('.phone_nav').animate({
                    right: "280px",
                }, 1000, function () {
                    // Animation complete.
                    $('.phone_nav img:nth-child(1)').animate({
                        left: "100px",
                    }, 1000, function () {
                        // Animation complete.
                    });
                });
            });
        }, 500);
    });
    $(window).scroll(function () {

        const scroll = window.pageYOffset;
        console.log(scroll);


        if (scroll >= 134) {

            $('.figure_main_block_1:nth-child(1)').animate({
                top: "0"
            }, 1000)
            $('.figure_main_block_1:nth-child(2)').animate({
                top: "0"
            }, 1000)
            $('.figure_main_block_1:nth-child(3)').animate({
                top: "0"
            }, 1000)
        }

        if (scroll >= 789) {
            $('.section_up').animate({
                height: '500px'
            }, 300, () => {
                $('.PingbulLer').animate({
                    top: '0px'
                }, 400, () => {
                    $('.Updates h1').animate({
                        top: '0px'
                    }, 200, () => {
                        $('.Updates1').animate({
                            left: '0px'
                        }, 100, () => {
                            $('.Updates2').animate({
                                left: '0px'
                            }, 100, () => {
                                $('.Updates3').animate({
                                    left: '0px'
                                }, 100, () => {
                                    $('.Updates4').animate({
                                        bottom: '0px'
                                    }, 400)
                                })
                            })
                        })
                    });
                })
            });
        }


        if (scroll >= 1020) {
            $('.partners').animate({
                left: '0px',
                height: '66px'
            }, 400, () => {
                $('.partners_block:nth-child(1)').animate({
                    top: '0px'
                }, 350, () => {
                    $('.partners_block:nth-child(2)').animate({
                        top: '0px'
                    }, 300, () => {
                        $('.partners_block:nth-child(3)').animate({
                            top: '0px'
                        }, 250, () => {
                            $('.partners_block:nth-child(4)').animate({
                                top: '0px'
                            }, 200, () => {
                                $('.partners_block:nth-child(5)').animate({
                                    top: '0px'
                                }, 150, () => {
                                    $('.partners_block:nth-child(6)').animate({
                                        top: '0px'
                                    }, 100, () => {

                                    })
                                })
                            })
                        })
                    })
                })
            })
        }

        if (scroll >= 1287) {
            $('.pig1').animate({
                top: "0"
            }, 1000)
            $('.pig2').animate({
                top: "0"
            }, 1000)
            $('.pig3').animate({
                top: "0"
            }, 1000)
        }

    });
}

function mobile() {
    count = 0;
    $(window).on('load', function () {
        if (count === 0) {
            $('.text_nav').css({
                display: 'none'
            })

            $('.nav_content').css({
                'justify-content': 'center'
            })
        }
        $('.section_up').css({
            height: '0px',
            overflow: 'hidden'
        });
        // setTimeout(function () {
        $('.text_nav').css({
            position: 'relative',
            left: '-1000px',
        });
        setTimeout(function () {
            $('.text_nav').animate({
                left: "0px",
            }, 1000, function () {
                // Animation complete.
            });
            $('.phone_nav').animate({
                right: "100px",
            }, 1000, function () {
                // Animation complete.
                $('.phone_nav img:nth-child(1)').animate({
                    left: "100px",
                }, 1000, function () {
                    // Animation complete.
                });
            });
        }, 500);
    });
    $(window).scroll(function () {
        const scroll = window.pageYOffset;
        console.log(scroll);

        if (scroll >= 134) {

            $('.figure_main_block_1:nth-child(1)').animate({
                top: "0"
            }, 1000)
            $('.figure_main_block_1:nth-child(2)').animate({
                top: "0"
            }, 1000)
            $('.figure_main_block_1:nth-child(3)').animate({
                top: "0"
            }, 1000)
        }

        if (scroll >= 789) {
            if (count === 0) {
                $('.Updates').css({
                    'margin-top': '50px'
                })
                $('.Updates h1, .PingbulLer_content h1').css({
                    'text-align': 'center'
                });
                $('.Updates4').css({
                    right: '50%',
                    transform: 'translate(50%, 0)'
                });
                $('.pingbuler_logo').css({
                    display: 'none'
                })
            }
            $('.section_up').animate({
                height: '750px'
            }, 300, () => {
                $('.PingbulLer').animate({
                    top: '0px'
                }, 400, () => {
                    $('.Updates h1').animate({
                        top: '0px'
                    }, 200, () => {
                        $('.Updates1').animate({
                            left: '0px'
                        }, 100, () => {
                            $('.Updates2').animate({
                                left: '0px'
                            }, 100, () => {
                                $('.Updates3').animate({
                                    left: '0px'
                                }, 100, () => {
                                    $('.Updates4').animate({
                                        bottom: '0px'
                                    }, 400)
                                })
                            })
                        })
                    });
                })
            });
        }


        if (scroll >= 1794) {
            if (count === 0) {
                $('.partners_block:nth-child(4), .partners_block:nth-child(5), .partners_block:nth-child(6)').css({
                    top: '100px'
                });
                $('.partners_block:nth-child(1), .partners_block:nth-child(2), .partners_block:nth-child(3)').css({
                    top: '-200px'
                });
                count++;
            }
            $('.partners').animate({
                left: '0px',
                height: '192px',
                marginBottom: '20px'
            }, 400, () => {
                $('.partners_block:nth-child(1)').animate({
                    top: '0px'
                }, 350, () => {
                    $('.partners_block:nth-child(2)').animate({
                        top: '0px'
                    }, 300, () => {
                        $('.partners_block:nth-child(3)').animate({
                            top: '0px'
                        }, 250, () => {
                            $('.partners_block:nth-child(4)').animate({
                                top: '0px'
                            }, 200, () => {
                                $('.partners_block:nth-child(5)').animate({
                                    top: '0px'
                                }, 150, () => {
                                    $('.partners_block:nth-child(6)').animate({
                                        top: '0px'
                                    }, 100, () => {

                                    })
                                })
                            })
                        })
                    })
                })
            })
        }

        if (scroll >= 2211) {
            $('.pig1').animate({
                top: "0"
            }, 1000)
            $('.pig2').animate({
                top: "0"
            }, 1000)
            $('.pig3').animate({
                top: "0"
            }, 1000)
        }

        // if (window.clientWidth) {

        // }
    });
}

function smallMobile() {
    count = 0;
    $(window).on('load', function () {
        if (count === 0) {
            $('.text_nav').css({
                display: 'none'
            })

            $('.nav_content').css({
                width: '100%',
                'justify-content': 'center'
            })
        }
        $('.section_up').css({
            height: '0px',
            overflow: 'hidden'
        });
        // setTimeout(function () {
        $('.text_nav').css({
            position: 'relative',
            left: '-1000px',
        });
        setTimeout(function () {
            $('.phone_nav').animate({
                right: "0px",
            }, 1000, function () {
                // Animation complete.
                $('.phone_nav').animate({
                    right: "100px",
                }, 700, function () {
                    // Animation complete.
                    $('.phone_nav img:nth-child(1)').animate({
                        left: "100px",
                    }, 300)
                });
            });
        }, 500);
    });
    $(window).scroll(function () {
        const scroll = window.pageYOffset;
        console.log(scroll);

        if (scroll >= 134) {

            $('.figure_main_block_1:nth-child(1)').animate({
                top: "0"
            }, 1000)
            $('.figure_main_block_1:nth-child(2)').animate({
                top: "0"
            }, 1000)
            $('.figure_main_block_1:nth-child(3)').animate({
                top: "0"
            }, 1000)
        }

        if (scroll >= 789) {
            if (count === 0) {
                $('.Updates').css({
                    'margin-top': '50px'
                })
                $('.Updates h1, .PingbulLer_content h1').css({
                    'text-align': 'center'
                });
                $('.Updates4').css({
                    right: '50%',
                    transform: 'translate(50%, 0)'
                });
                $('.pingbuler_logo').css({
                    display: 'none'
                })
            }
            $('.section_up').animate({
                height: '750px'
            }, 300, () => {
                $('.PingbulLer').animate({
                    top: '0px'
                }, 400, () => {
                    $('.Updates h1').animate({
                        top: '0px'
                    }, 200, () => {
                        $('.Updates1').animate({
                            left: '0px'
                        }, 100, () => {
                            $('.Updates2').animate({
                                left: '0px'
                            }, 100, () => {
                                $('.Updates3').animate({
                                    left: '0px'
                                }, 100, () => {
                                    $('.Updates4').animate({
                                        bottom: '0px'
                                    }, 400)
                                })
                            })
                        })
                    });
                })
            });
        }


        if (scroll >= 1794) {
            if (count === 0) {
                $('.partners_block:nth-child(4), .partners_block:nth-child(5), .partners_block:nth-child(6)').css({
                    top: '100px'
                });
                $('.partners_block:nth-child(1), .partners_block:nth-child(2), .partners_block:nth-child(3)').css({
                    top: '-200px'
                });
                count++;
            }
            $('.partners').animate({
                left: '0px',
                height: '270px',
                marginBottom: '20px'
            }, 400, () => {
                $('.partners_block:nth-child(1)').animate({
                    top: '0px'
                }, 350, () => {
                    $('.partners_block:nth-child(2)').animate({
                        top: '0px'
                    }, 300, () => {
                        $('.partners_block:nth-child(3)').animate({
                            top: '0px'
                        }, 250, () => {
                            $('.partners_block:nth-child(4)').animate({
                                top: '0px'
                            }, 200, () => {
                                $('.partners_block:nth-child(5)').animate({
                                    top: '0px'
                                }, 150, () => {
                                    $('.partners_block:nth-child(6)').animate({
                                        top: '0px'
                                    }, 100, () => {

                                    })
                                })
                            })
                        })
                    })
                })
            })
        }

        if (scroll >= 2211) {
            $('.pig1').animate({
                top: "0"
            }, 1000)
            $('.pig2').animate({
                top: "0"
            }, 1000)
            $('.pig3').animate({
                top: "0"
            }, 1000)
        }

        // if (window.clientWidth) {

        // }
    });
}

function checkWidthWindow() {
    if (window.innerWidth >= 768) {
        notMobile()
    } else if (window.innerWidth < 768 && window.innerWidth >= 551) {
        mobile()
    } else {
        smallMobile();
    }
}

checkWidthWindow();