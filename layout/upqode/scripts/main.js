"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//? --------------
//? INIT LIBS
//? --------------
AOS.init(); //! ----------------------------------------------------------------------
//! WINDOW EVENT
//! ----------------------------------------------------------------------

window.addEventListener('scroll', function () {// SCROLL
  // CALL FUNCTION
  // fixedNav()
});
window.addEventListener('load', function () {// LOAD
  // CALL FUNCTION
  // fixedNav()
  // navbar();
}); //! ----------------------------------------------------------------------
//! CODE
//! ----------------------------------------------------------------------

var Animation = /*#__PURE__*/function () {
  function Animation() {
    _classCallCheck(this, Animation);
  }

  _createClass(Animation, [{
    key: "menu",
    value: function menu() {
      var list = document.querySelector('.list').children;

      var _iterator = _createForOfIteratorHelper(list),
          _step;

      try {
        var _loop = function _loop() {
          var li = _step.value;
          li.addEventListener('click', function () {
            li.classList.add('list__li_active');
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "slider",
    value: function slider() {
      var arrowLeft = document.querySelector('.arrow-left img');
    }
  }]);

  return Animation;
}();
"use strict";

var mapCoordinates = [{
  lat: 34.052235,
  lng: -118.243683
}, {
  lat: 40.730610,
  lng: -73.935242
}, {
  lat: 42.361145,
  lng: -71.057083
}, {
  lat: 42.331429,
  lng: -83.045753
}];

var getMapData = function getMapData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var listMap = document.querySelector('.map__locations').children;
  var li = listMap[state];
  var titleOfActiveState = listMap[state].children[1].children[0];
  var subtitleOfActiveState = listMap[state].children[1].children[1];

  for (var i = 0; i < listMap.length; i++) {
    // remove style for not active
    if (i !== state) {
      listMap[i].children[1].children[0].classList.remove('description__title_active');
      listMap[i].classList.remove('map__location_active');
      document.querySelectorAll('.map-icon')[i].children[0].classList.remove('location__icon_svg');
    }

    if (i === state) {
      listMap[i].classList.add('map__location_active');
      document.querySelectorAll('.map-icon')[i].children[0].classList.add('location__icon_svg');
    }
  } // Set style for active state


  titleOfActiveState.classList.add('description__title_active');
  var subtitleInfo = document.getElementById('map-subtitle');
  subtitleInfo.textContent = subtitleOfActiveState.textContent;
  var titleInfo = document.querySelector('.map-details__title');
  titleInfo.textContent = titleOfActiveState.textContent;
  initMap(state);
};

var initMap = function initMap() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  // The location of Uluru
  var uluru = {
    lat: 49.84,
    lng: 24.031111
  };
  var image = 'https://firebasestorage.googleapis.com/v0/b/la-piec-f604d.appspot.com/o/1.svg?alt=media&token=52105278-04c6-4f3e-a21e-922b6a615f8b'; // The map, centered at Uluru

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    scaleControl: false,
    zoomControl: false,
    center: mapCoordinates[state],
    styles: [{
      "featureType": "administrative.country",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e6e6e6"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e6e6e6"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e6e6e6"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e6e6e6"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e9e9e9"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#88eaad"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [{
        "color": "#9ca09a"
      }]
    }, {
      "featureType": "poi.attraction",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.attraction",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.business",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.government",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.medical",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.park",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.school",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#ef4b91"
      }, {
        "visibility": "off"
      }]
    }]
  }); // The marker, positioned at Uluru

  var marker = new google.maps.Marker({
    position: mapCoordinates[state],
    map: map,
    icon: image
  });
};
"use strict";

//! ----------------------------------------------------------------------
//! CODE
//! ----------------------------------------------------------------------
gsap.to("#service_point_oval_1", {
  duration: 0.5,
  repeatDelay: 0.001,
  repeat: -1,
  opacity: 0,
  fill: '#00A031'
}); //percents

gsap.to("#service_point_oval_2", {
  duration: 0.5,
  repeatDelay: 0.004,
  repeat: -1,
  opacity: 0,
  fill: '#00A031'
}); //percents

gsap.to("#service_point_oval_3", {
  duration: 0.5,
  repeatDelay: 0.007,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_4", {
  duration: 0.5,
  repeatDelay: 0.010,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_5", {
  duration: 0.5,
  repeatDelay: 0.013,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_6", {
  duration: 0.5,
  repeatDelay: 0.017,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_7", {
  duration: 0.5,
  repeatDelay: 0.02,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_8", {
  duration: 0.5,
  repeatDelay: 0.023,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_9", {
  duration: 0.5,
  repeatDelay: 0.027,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_10", {
  duration: 0.5,
  repeatDelay: 0.030,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_11", {
  duration: 0.5,
  repeatDelay: 0.033,
  repeat: -1,
  opacity: 0
}); //percents

gsap.to("#service_point_oval_12", {
  duration: 0.5,
  repeatDelay: 0.037,
  repeat: -1,
  opacity: 0
}); //percents
"use strict";

//! ----------------------------------------------------------------------
//! WINDOW EVENT
//! ----------------------------------------------------------------------
window.addEventListener('scroll', function () {
  // SCROLL
  // CALL FUNCTION
  animateRoad(); // assignScrollForAnimatePoint()
});
window.addEventListener('load', function () {
  // LOAD
  // GET SOME INFO
  previousScroll = window.pageYOffset; // CALL FUNCTION

  animateRoad();
}); //! ----------------------------------------------------------------------
//! CODE
//! ----------------------------------------------------------------------

var sizeRoadInPX = 1216;
var road = document.getElementById('service_road');
var point = document.getElementById('service_point');
var previousScroll = window.pageYOffset;
var durationForAnimateOfPoint = 3;
gsap.registerPlugin(MotionPathPlugin);
var tween = gsap.to("#service_point", {
  // TWEEN SETTINGS
  duration: 3,
  repeat: 0,
  repeatDelay: 10,
  yoyo: true,
  startAt: -200,
  reversed: false,
  ease: "power1.inOut",
  motionPath: {
    path: "#service_road",
    align: "#service_road",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
}).pause();

var animateRoad = function animateRoad() {
  var newScrollTop = window.pageYOffset;
  var positionRoadBottom = road.getBoundingClientRect().bottom;
  var positionRoadTop = road.getBoundingClientRect().top;

  if (positionRoadBottom > 0 && positionRoadTop < 700) {
    // GET POSITION FOR START AND FINISH ROAD SVG 
    if (previousScroll < newScrollTop) {
      // SCROLLED DOWN
      tween.play();
      setTimeout(function () {
        tween.pause();
      }, 50);
    } else {
      // SCROLLED UP
      tween.reverse();
      setTimeout(function () {
        tween.pause();
      }, 50);
    }
  }

  previousScroll = newScrollTop;
};
"use strict";

var selectLi = undefined;
var savedHash = undefined;
var home = document.getElementById('home-nav'); //! ----------------------------------------------------------------------
//! WINDOW EVENT
//! ----------------------------------------------------------------------

window.addEventListener('scroll', function () {
  // SCROLL
  // CALL FUNCTION
  fixedNav();
  closeMenu();
  resizeDropDownMenu();
  navigateURL();
});
window.addEventListener('load', function () {
  // LOAD
  // CALL FUNCTION
  fixedNav();
  resizeDropDownMenu();
  dropDownMenu();
  home.click();
});
window.addEventListener('resize', function () {
  // CALL FUNCTION
  fixedNav();
  resizeDropDownMenu();
  closeMenu();
}); //! ----------------------------------------------------------------------
//! CODE
//! ----------------------------------------------------------------------

var fixedNav = function fixedNav() {
  var scroll = window.pageYOffset;
  var navbar = document.querySelector('.nav');
  var container = document.querySelectorAll('.container');
  var list = document.querySelector('.list');
  var windowWidth = window.innerWidth;

  if (windowWidth >= 1024) {}

  if (scroll > 0) {
    // SCROLLED DOWN
    navbar.classList.add('nav-fixed');
    list.setAttribute('style', 'align-items: center;');

    for (var i = 0; i < container.length; i++) {
      if (i !== 0) container[i].setAttribute('style', 'padding-top: 93px;');
    }
  } else {
    // SCROLLED UP
    navbar.classList.remove('nav-fixed');

    if (windowWidth > 1023) {
      list.setAttribute('style', 'top: -9px;');
    }

    for (var _i = 0; _i < container.length; _i++) {
      if (_i !== 0) container[_i].setAttribute('style', 'padding-top: 0;');
    }
  }
};

var navbar = function navbar() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  navigateByURL = false;
  var li = document.querySelectorAll('.navbar_li');

  for (var i = 0; i < li.length; i++) {
    if (item === i) {
      li[i].classList.add('list__li_active');
      selectLi = li[i];
      savedHash = li[i].children[0].textContent.toLocaleLowerCase();
      dropDownMenu();
      setTimeout(function () {
        navigateByURL = true;
      }, 2000);
    } else li[i].classList.remove('list__li_active');
  }
};

var closeDropDownMenu = true;

var dropDownMenu = function dropDownMenu() {
  var windowWidth = window.innerWidth;

  if (windowWidth < 1024) {
    if (closeDropDownMenu) {
      //OPEN DROP MENU
      gsap.to('list', {
        top: 0
      });
      document.getElementById('drop-menu').classList.remove('list__drop-down-menu_hiden');
      animateNavBtn().setStyle();
      closeDropDownMenu = false;
    } else {
      // CLOSE DROP MENU
      gsap.to('list', {
        top: 0
      });
      document.getElementById('drop-menu').classList.add('list__drop-down-menu_hiden');
      animateNavBtn().resetStyle();
      closeDropDownMenu = true;
    }
  }
};

var animateNavBtn = function animateNavBtn() {
  var setStyle = function setStyle() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    gsap.to(".list__li-drop-down_row-2", {
      duration: duration,
      opacity: 0
    });
    gsap.to(".list__li-drop-down_row-1, .list__li-drop-down_row-3", {
      duration: duration,
      backgroundColor: '#d35c5c'
    });
    gsap.to(".list__li-drop-down_row-1", {
      duration: duration,
      rotate: '45deg',
      x: 0,
      y: 10
    });
    gsap.to(".list__li-drop-down_row-3", {
      duration: duration,
      rotate: '-45deg',
      x: 0,
      y: -10
    });
  };

  var resetStyle = function resetStyle() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    closeDropDownMenu = false;
    gsap.to(".list__li-drop-down_row-1, .list__li-drop-down_row-3", {
      duration: duration,
      backgroundColor: '#fff',
      rotate: '0',
      x: 0,
      y: 0
    });
    gsap.to(".list__li-drop-down_row-2", {
      duration: duration,
      opacity: 1
    });
  };

  return {
    resetStyle: resetStyle,
    setStyle: setStyle
  };
};

var resizeDropDownMenu = function resizeDropDownMenu() {
  var windowWidth = window.innerWidth;

  if (windowWidth < 1024) {
    document.getElementById('drop-menu').classList.add('list__drop-down-menu_hiden', 'list__drop-down-menu_open');
  } else if (windowWidth >= 1024) {
    document.getElementById('drop-menu').classList.remove('list__drop-down-menu_hiden', 'list__drop-down-menu_open');
  }
};

var closeMenu = function closeMenu() {
  var windowWidth = window.innerWidth;

  if (windowWidth < 1024) {
    animateNavBtn().resetStyle();
    dropDownMenu();
  }
};

var navigateByURL = true;

var navigateURL = function navigateURL() {
  if (navigateByURL) {
    var windowHeight = window.innerHeight;
    var nav = document.querySelector('.list').children;
    var headerTop = document.querySelector('.header').getBoundingClientRect().top;
    var servicesTop = document.querySelector('.services').getBoundingClientRect().top;
    var teamTop = document.querySelector('.team').getBoundingClientRect().top;
    var mapTop = document.querySelector('.map').getBoundingClientRect().top;
    var headerBotom = document.querySelector('.header').getBoundingClientRect().bottom;
    var servicesBotom = document.querySelector('.services').getBoundingClientRect().bottom;
    var teamBotom = document.querySelector('.team').getBoundingClientRect().bottom;
    var mapBotom = document.querySelector('.map').getBoundingClientRect().bottom;

    if (headerTop < windowHeight && headerBotom > 0) {
      window.location.hash = '#home';
    } else if (servicesTop < windowHeight && servicesBotom > 0) {
      window.location.hash = '#services';
    } else if (teamTop < windowHeight && teamBotom > 0) {
      window.location.hash = '#team';
    } else if (mapTop < windowHeight && mapBotom > 0) {
      window.location.hash = '#contact';
    }

    var locationHash = window.location.hash.slice(1);

    for (var i = 0; i < nav.length; i++) {
      var li = nav[i];
      var a = nav[i].children[0].textContent.toLocaleLowerCase();

      if (a.includes(locationHash)) {
        navigateByURL = false;
        nav[i].classList.add('list__li_active');
        navigateByURL = true;
      } else {
        nav[i].classList.remove('list__li_active');
      }
    }
  }
}; // const fullHeightNavbar = () => {
//     const scroll = window.pageYOffset;
//     if (scroll) {
//     }
// }
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getRadioIndex() {
  var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'slider';
  var nextSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var getClassName = event.path[2].className; // if click on errows

  if (getClassName === section) {
    var i = 0;
    var sliderRadio = event.path[2].children[4].children;

    var _iterator = _createForOfIteratorHelper(sliderRadio),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var radio = _step.value;
        var prevousRadio = radio.children[0].checked;
        i++;

        if (prevousRadio) {
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (nextSlide) {
      // next slide
      if (sliderRadio.length > i) {
        // check nextSlide
        sliderRadio[i].children[0].checked = true;
      } else {
        // return to start of slider
        i = 0;
        sliderRadio[i].children[0].checked = true;
      }
    } else {
      // back
      i -= 2; // get previous radio

      if (i < 0) {
        // get last radio
        i = sliderRadio.length - 1;
      }

      sliderRadio[i].children[0].checked = true;
    }

    return i;
  }
}

function workWithHeader(section) {
  var nextSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var radioIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getRadioIndex(section, nextSlide);
  var title = document.querySelector('.slider__title');
  var subTitle = document.querySelector('.slider__subtitle');

  switch (radioIndex) {
    case 0:
      title.textContent = 'Slide 1';
      subTitle.textContent = 'Subtitle of Slider 1';
      break;

    case 1:
      title.textContent = 'Mileage Made Simple';
      subTitle.textContent = 'otivation And Your Personal Vision An Unbeatable Force';
      break;

    case 2:
      title.textContent = 'Slide 3';
      subTitle.textContent = 'Subtitle of Slider 3';
      break;
  }
}
//# sourceMappingURL=main.js.map
