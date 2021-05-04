// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeYRatio = computeYRatio;
exports.computeXRatio = computeXRatio;
exports.toDate = toDate;
exports.isOver = isOver;
exports.line = line;
exports.circle = circle;
exports.boundaries = boundaries;
exports.css = css;
exports.toCoords = toCoords;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function computeYRatio(height, max, min) {
  return (max - min) / height;
}

function computeXRatio(width, length) {
  return width / (length - 2);
}

function toDate(timestamp) {
  var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var date = new Date(timestamp);
  return "".concat(shortMonths[date.getMonth()], " ").concat(date.getDate());
}

function isOver(mouse, x, length, dWidth) {
  if (!mouse) {
    return false;
  }

  var width = dWidth / length;
  return Math.abs(x - mouse.x) < width / 2;
}

function line(ctx, coords, _ref) {
  var color = _ref.color,
      _ref$translate = _ref.translate,
      translate = _ref$translate === void 0 ? 0 : _ref$translate;
  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = 4;
  ctx.translate(translate, 0);
  ctx.strokeStyle = color;

  var _iterator = _createForOfIteratorHelper(coords),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          x = _step$value[0],
          y = _step$value[1];

      ctx.lineTo(x, y);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ctx.stroke();
  ctx.restore();
  ctx.closePath();
}

function circle(ctx, _ref2, color) {
  var _ref3 = _slicedToArray(_ref2, 2),
      x = _ref3[0],
      y = _ref3[1];

  var CIRCLE_RADIUS = 8;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.fillStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.arc(x, y, CIRCLE_RADIUS, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function boundaries(_ref4) {
  var columns = _ref4.columns,
      types = _ref4.types;
  var min;
  var max;
  columns.forEach(function (col) {
    if (types[col[0]] !== 'line') {
      return;
    }

    if (typeof min !== 'number') min = col[1];
    if (typeof max !== 'number') max = col[1];
    if (min > col[1]) min = col[1];
    if (max < col[1]) max = col[1];

    for (var i = 2; i < col.length; i++) {
      if (min > col[i]) min = col[i];
      if (max < col[i]) max = col[i];
    }
  });
  return [min, max];
}

function css(el) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object.assign(el.style, styles);
}

function toCoords(xRatio, yRatio, DPI_HEIGHT, PADDING, yMin) {
  return function (col) {
    return col.map(function (y, i) {
      return [Math.floor((i - 1) * xRatio), Math.floor(DPI_HEIGHT - PADDING - (y - yMin) / yRatio)];
    }).filter(function (_, i) {
      return i !== 0;
    });
  };
}
},{}],"tooltip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltip = tooltip;

var _utils = require("./utils");

var template = function template(data) {
  return "\n  <div class=\"tooltip-title\">".concat(data.title, "</div>\n  <ul class=\"tooltip-list\">\n    ").concat(data.items.map(function (item) {
    return "<li class=\"tooltip-list-item\">\n        <div class=\"value\" style=\"color: ".concat(item.color, "\">").concat(item.value, "</div>\n        <div class=\"name\" style=\"color: ").concat(item.color, "\">").concat(item.name, "</div>\n      </li>");
  }).join('\n'), "\n  </ul>\n");
};

function tooltip(el) {
  var clear = function clear() {
    return el.innerHTML = '';
  };

  return {
    show: function show(_ref, data) {
      var left = _ref.left,
          top = _ref.top;

      var _el$getBoundingClient = el.getBoundingClientRect(),
          height = _el$getBoundingClient.height,
          width = _el$getBoundingClient.width;

      clear();
      (0, _utils.css)(el, {
        display: 'block',
        top: top - height + 'px',
        left: left + width / 2 + 'px'
      });
      el.insertAdjacentHTML('afterbegin', template(data));
    },
    hide: function hide() {
      (0, _utils.css)(el, {
        display: 'none'
      });
    }
  };
}
},{"./utils":"utils.js"}],"slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderChart = sliderChart;

var _utils = require("./utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function noop() {}

var HEIGHT = 40;
var DPI_HEIGHT = HEIGHT * 2;

function sliderChart(root, data, DPI_WIDTH) {
  var WIDTH = DPI_WIDTH / 2;
  var MIN_WIDTH = WIDTH * 0.05;
  var canvas = root.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var nextFn = noop;
  canvas.width = DPI_WIDTH;
  canvas.height = DPI_HEIGHT;
  (0, _utils.css)(canvas, {
    width: WIDTH + 'px',
    height: HEIGHT + 'px'
  });
  var $left = root.querySelector('[data-el="left"]');
  var $window = root.querySelector('[data-el="window"]');
  var $right = root.querySelector('[data-el="right"]');

  function next() {
    nextFn(getPosition());
  }

  function mousedown(event) {
    var type = event.target.dataset.type;
    var dimensions = {
      left: parseInt($window.style.left),
      right: parseInt($window.style.right),
      width: parseInt($window.style.width)
    };

    if (type === 'window') {
      var startX = event.pageX;

      document.onmousemove = function (e) {
        var delta = startX - e.pageX;

        if (delta === 0) {
          return;
        }

        var left = dimensions.left - delta;
        var right = WIDTH - left - dimensions.width;
        setPosition(left, right);
        next();
      };
    } else if (type === 'left' || type === 'right') {
      var _startX = event.pageX;

      document.onmousemove = function (e) {
        var delta = _startX - e.pageX;

        if (delta === 0) {
          return;
        }

        if (type === 'left') {
          var left = WIDTH - (dimensions.width + delta) - dimensions.right;
          var right = WIDTH - (dimensions.width + delta) - left;
          setPosition(left, right);
        } else {
          var _right = WIDTH - (dimensions.width - delta) - dimensions.left;

          setPosition(dimensions.left, _right);
        }

        next();
      };
    }
  }

  function mouseup() {
    document.onmousemove = null;
  }

  root.addEventListener('mousedown', mousedown);
  document.addEventListener('mouseup', mouseup);
  var defaultWidth = WIDTH * 0.3;
  setPosition(0, WIDTH - defaultWidth);

  function setPosition(left, right) {
    var w = WIDTH - right - left;

    if (w < MIN_WIDTH) {
      (0, _utils.css)($window, {
        width: MIN_WIDTH + 'px'
      });
      return;
    }

    if (left < 0) {
      (0, _utils.css)($window, {
        left: '0px'
      });
      (0, _utils.css)($left, {
        width: '0px'
      });
      return;
    }

    if (right < 0) {
      (0, _utils.css)($window, {
        right: '0px'
      });
      (0, _utils.css)($right, {
        width: '0px'
      });
      return;
    }

    (0, _utils.css)($window, {
      width: w + 'px',
      left: left + 'px',
      right: right + 'px'
    });
    (0, _utils.css)($right, {
      width: right + 'px'
    });
    (0, _utils.css)($left, {
      width: left + 'px'
    });
  }

  function getPosition() {
    var left = parseInt($left.style.width);
    var right = WIDTH - parseInt($right.style.width);
    return [left * 100 / WIDTH, right * 100 / WIDTH];
  }

  var _boundaries = (0, _utils.boundaries)(data),
      _boundaries2 = _slicedToArray(_boundaries, 2),
      yMin = _boundaries2[0],
      yMax = _boundaries2[1];

  var yRatio = (0, _utils.computeYRatio)(DPI_HEIGHT, yMax, yMin);
  var xRatio = (0, _utils.computeXRatio)(DPI_WIDTH, data.columns[0].length);
  var yData = data.columns.filter(function (col) {
    return data.types[col[0]] === 'line';
  });
  yData.map((0, _utils.toCoords)(xRatio, yRatio, DPI_HEIGHT, 0, yMin)).forEach(function (coords, idx) {
    var color = data.colors[yData[idx][0]];
    (0, _utils.line)(ctx, coords, {
      color: color
    });
  });
  return {
    subscribe: function subscribe(fn) {
      nextFn = fn;
      fn(getPosition());
    }
  };
}
},{"./utils":"utils.js"}],"chart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chart = chart;

var _tooltip = require("./tooltip");

var _utils = require("./utils");

var _slider = require("./slider");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WIDTH = 600;
var HEIGHT = 200;
var PADDING = 40;
var DPI_WIDTH = WIDTH * 2;
var DPI_HEIGHT = HEIGHT * 2;
var VIEW_HEIGHT = DPI_HEIGHT - PADDING * 2;
var VIEW_WIDTH = DPI_WIDTH;
var ROWS_COUNT = 5;
var SPEED = 300;

function chart(root, data) {
  var canvas = root.querySelector('[data-el="main"]');
  var tip = (0, _tooltip.tooltip)(root.querySelector('[data-el="tooltip"]'));
  var slider = (0, _slider.sliderChart)(root.querySelector('[data-el="slider"]'), data, DPI_WIDTH);
  var ctx = canvas.getContext('2d');
  var raf;
  var prevMax;
  canvas.width = DPI_WIDTH;
  canvas.height = DPI_HEIGHT;
  (0, _utils.css)(canvas, {
    width: WIDTH + 'px',
    height: HEIGHT + 'px'
  });
  var proxy = new Proxy({}, {
    set: function set() {
      var result = Reflect.set.apply(Reflect, arguments);
      raf = requestAnimationFrame(paint);
      return result;
    }
  });
  slider.subscribe(function (pos) {
    proxy.pos = pos;
  });
  canvas.addEventListener('mousemove', mousemove);
  canvas.addEventListener('mouseleave', mouseleave);

  function mousemove(_ref) {
    var clientX = _ref.clientX,
        clientY = _ref.clientY;

    var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
        left = _canvas$getBoundingCl.left,
        top = _canvas$getBoundingCl.top;

    proxy.mouse = {
      x: (clientX - left) * 2,
      tooltip: {
        left: clientX - left,
        top: clientY - top
      }
    };
  }

  function mouseleave() {
    proxy.mouse = null;
    tip.hide();
  }

  function clear() {
    ctx.clearRect(0, 0, DPI_WIDTH, DPI_HEIGHT);
  } // function getMax(yMax) {
  //   const step = (yMax - prevMax) / SPEED
  //   if (proxy.max < yMax) {
  //     proxy.max += step
  //   } else if (proxy.max > yMax) {
  //     proxy.max = yMax
  //     prevMax = yMax
  //   }
  //   return proxy.max
  // }
  // function translateX(length, xRatio, left) {
  //   return -1 * Math.round((left * length * xRatio) / 100)
  // }


  function paint() {
    clear();
    var length = data.columns[0].length;
    var leftIndex = Math.round(length * proxy.pos[0] / 100);
    var rightIndex = Math.round(length * proxy.pos[1] / 100);
    var columns = data.columns.map(function (col) {
      var res = col.slice(leftIndex, rightIndex);

      if (typeof res[0] !== 'string') {
        res.unshift(col[0]);
      }

      return res;
    });

    var _boundaries = (0, _utils.boundaries)({
      columns: columns,
      types: data.types
    }),
        _boundaries2 = _slicedToArray(_boundaries, 2),
        yMin = _boundaries2[0],
        yMax = _boundaries2[1];

    if (!prevMax) {
      prevMax = yMax;
      proxy.max = yMax;
    } // const max = getMax(yMax)


    var yRatio = (0, _utils.computeYRatio)(VIEW_HEIGHT, yMax, yMin);
    var xRatio = (0, _utils.computeXRatio)(VIEW_WIDTH, columns[0].length); // const translate = translateX(data.columns[0].length, xRatio, proxy.pos[0])

    var yData = columns.filter(function (col) {
      return data.types[col[0]] === 'line';
    });
    var xData = columns.filter(function (col) {
      return data.types[col[0]] !== 'line';
    })[0];
    yAxis(yMin, yMax);
    xAxis(xData, yData, xRatio);
    yData.map((0, _utils.toCoords)(xRatio, yRatio, DPI_HEIGHT, PADDING, yMin)).forEach(function (coords, idx) {
      var color = data.colors[yData[idx][0]];
      (0, _utils.line)(ctx, coords, {
        color: color
      });

      var _iterator = _createForOfIteratorHelper(coords),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              x = _step$value[0],
              y = _step$value[1];

          if ((0, _utils.isOver)(proxy.mouse, x, coords.length, DPI_WIDTH)) {
            (0, _utils.circle)(ctx, [x, y], color);
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  function xAxis(xData, yData, xRatio) {
    var colsCount = 6;
    var step = Math.round(xData.length / colsCount);
    ctx.beginPath();

    var _loop = function _loop(i) {
      var x = i * xRatio;

      if ((i - 1) % step === 0) {
        var text = (0, _utils.toDate)(xData[i]);
        ctx.fillText(text.toString(), x, DPI_HEIGHT - 10);
      }

      if ((0, _utils.isOver)(proxy.mouse, x, xData.length, DPI_WIDTH)) {
        ctx.save();
        ctx.moveTo(x, PADDING / 2);
        ctx.lineTo(x, DPI_HEIGHT - PADDING);
        ctx.restore();
        tip.show(proxy.mouse.tooltip, {
          title: (0, _utils.toDate)(xData[i]),
          items: yData.map(function (col) {
            return {
              color: data.colors[col[0]],
              name: data.names[col[0]],
              value: col[i + 1]
            };
          })
        });
      }
    };

    for (var i = 1; i < xData.length; i++) {
      _loop(i);
    }

    ctx.stroke();
    ctx.closePath();
  }

  function yAxis(yMin, yMax) {
    var step = VIEW_HEIGHT / ROWS_COUNT;
    var textStep = (yMax - yMin) / ROWS_COUNT;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#bbb';
    ctx.font = 'normal 20px Helvetica,sans-serif';
    ctx.fillStyle = '#96a2aa';

    for (var i = 1; i <= ROWS_COUNT; i++) {
      var y = step * i;
      var text = Math.round(yMax - textStep * i);
      ctx.fillText(text.toString(), 5, y + PADDING - 10);
      ctx.moveTo(0, y + PADDING);
      ctx.lineTo(DPI_WIDTH, y + PADDING);
    }

    ctx.stroke();
    ctx.closePath();
  }

  return {
    init: function init() {
      paint();
    },
    destroy: function destroy() {
      cancelAnimationFrame(raf);
      canvas.removeEventListener('mousemove', mousemove);
      canvas.removeEventListener('mouseleave', mouseleave);
    }
  };
}
},{"./tooltip":"tooltip.js","./utils":"utils.js","./slider":"slider.js"}],"data.json":[function(require,module,exports) {
module.exports = [{
  "columns": [["x", 1542412800000, 1542499200000, 1542585600000, 1542672000000, 1542758400000, 1542844800000, 1542931200000, 1543017600000, 1543104000000, 1543190400000, 1543276800000, 1543363200000, 1543449600000, 1543536000000, 1543622400000, 1543708800000, 1543795200000, 1543881600000, 1543968000000, 1544054400000, 1544140800000, 1544227200000, 1544313600000, 1544400000000, 1544486400000, 1544572800000, 1544659200000, 1544745600000, 1544832000000, 1544918400000, 1545004800000, 1545091200000, 1545177600000, 1545264000000, 1545350400000, 1545436800000, 1545523200000, 1545609600000, 1545696000000, 1545782400000, 1545868800000, 1545955200000, 1546041600000, 1546128000000, 1546214400000, 1546300800000, 1546387200000, 1546473600000, 1546560000000, 1546646400000, 1546732800000, 1546819200000, 1546905600000, 1546992000000, 1547078400000, 1547164800000, 1547251200000, 1547337600000, 1547424000000, 1547510400000, 1547596800000, 1547683200000, 1547769600000, 1547856000000, 1547942400000, 1548028800000, 1548115200000, 1548201600000, 1548288000000, 1548374400000, 1548460800000, 1548547200000, 1548633600000, 1548720000000, 1548806400000, 1548892800000, 1548979200000, 1549065600000, 1549152000000, 1549238400000, 1549324800000, 1549411200000, 1549497600000, 1549584000000, 1549670400000, 1549756800000, 1549843200000, 1549929600000, 1550016000000, 1550102400000, 1550188800000, 1550275200000, 1550361600000, 1550448000000, 1550534400000, 1550620800000, 1550707200000, 1550793600000, 1550880000000, 1550966400000, 1551052800000, 1551139200000, 1551225600000, 1551312000000, 1551398400000, 1551484800000, 1551571200000, 1551657600000, 1551744000000, 1551830400000, 1551916800000, 1552003200000], ["y0", 37, 20, 32, 39, 32, 35, 19, 65, 36, 62, 113, 69, 120, 60, 51, 49, 71, 122, 149, 69, 57, 21, 33, 55, 92, 62, 47, 50, 56, 116, 63, 60, 55, 65, 76, 33, 45, 64, 54, 81, 180, 123, 106, 37, 60, 70, 46, 68, 46, 51, 33, 57, 75, 70, 95, 70, 50, 68, 63, 66, 53, 38, 52, 109, 121, 53, 36, 71, 96, 55, 58, 29, 31, 55, 52, 44, 126, 191, 73, 87, 255, 278, 219, 170, 129, 125, 126, 84, 65, 53, 154, 57, 71, 64, 75, 72, 39, 47, 52, 73, 89, 156, 86, 105, 88, 45, 33, 56, 142, 124, 114, 64], ["y1", 22, 12, 30, 40, 33, 23, 18, 41, 45, 69, 57, 61, 70, 47, 31, 34, 40, 55, 27, 57, 48, 32, 40, 49, 54, 49, 34, 51, 51, 51, 66, 51, 94, 60, 64, 28, 44, 96, 49, 73, 30, 88, 63, 42, 56, 67, 52, 67, 35, 61, 40, 55, 63, 61, 105, 59, 51, 76, 63, 57, 47, 56, 51, 98, 103, 62, 54, 104, 48, 41, 41, 37, 30, 28, 26, 37, 65, 86, 70, 81, 54, 74, 70, 50, 74, 79, 85, 62, 36, 46, 68, 43, 66, 50, 28, 66, 39, 23, 63, 74, 83, 66, 40, 60, 29, 36, 27, 54, 89, 50, 73, 52]],
  "types": {
    "y0": "line",
    "y1": "line",
    "x": "x"
  },
  "names": {
    "y0": "#0",
    "y1": "#1"
  },
  "colors": {
    "y0": "#3DC23F",
    "y1": "#F34C44"
  }
}, {
  "columns": [["x", 1542412800000, 1542499200000, 1542585600000, 1542672000000, 1542758400000, 1542844800000, 1542931200000, 1543017600000, 1543104000000, 1543190400000, 1543276800000, 1543363200000, 1543449600000, 1543536000000, 1543622400000, 1543708800000, 1543795200000, 1543881600000, 1543968000000, 1544054400000, 1544140800000, 1544227200000, 1544313600000, 1544400000000, 1544486400000, 1544572800000, 1544659200000, 1544745600000, 1544832000000, 1544918400000, 1545004800000, 1545091200000, 1545177600000, 1545264000000, 1545350400000, 1545436800000, 1545523200000, 1545609600000, 1545696000000, 1545782400000, 1545868800000, 1545955200000, 1546041600000, 1546128000000, 1546214400000, 1546300800000, 1546387200000, 1546473600000, 1546560000000, 1546646400000, 1546732800000, 1546819200000, 1546905600000, 1546992000000, 1547078400000, 1547164800000, 1547251200000, 1547337600000, 1547424000000, 1547510400000, 1547596800000, 1547683200000, 1547769600000, 1547856000000, 1547942400000, 1548028800000, 1548115200000, 1548201600000, 1548288000000, 1548374400000, 1548460800000, 1548547200000, 1548633600000, 1548720000000, 1548806400000, 1548892800000, 1548979200000, 1549065600000, 1549152000000, 1549238400000, 1549324800000, 1549411200000, 1549497600000, 1549584000000, 1549670400000, 1549756800000, 1549843200000, 1549929600000, 1550016000000, 1550102400000, 1550188800000, 1550275200000, 1550361600000, 1550448000000, 1550534400000, 1550620800000, 1550707200000, 1550793600000, 1550880000000, 1550966400000, 1551052800000, 1551139200000, 1551225600000, 1551312000000, 1551398400000, 1551484800000, 1551571200000, 1551657600000, 1551744000000, 1551830400000, 1551916800000, 1552003200000], ["y0", 6706, 7579, 7798, 8307, 7866, 7736, 7816, 7630, 7536, 7105, 7178, 7619, 7917, 7483, 5772, 5700, 5435, 4837, 4716, 4890, 4753, 4820, 4538, 12162, 39444, 25765, 18012, 14421, 13249, 11310, 10377, 9399, 8917, 8259, 7902, 9442, 47596, 36160, 23866, 18500, 15488, 13722, 12270, 13413, 10574, 7092, 7159, 7880, 8821, 8306, 7780, 7963, 7837, 7611, 7334, 7413, 7015, 6742, 6557, 6593, 6680, 6725, 6345, 5988, 6365, 9911, 28833, 19694, 14873, 11911, 10498, 9708, 8893, 8365, 7960, 7694, 45529, 42858, 31508, 23289, 19147, 15874, 14551, 13124, 11778, 10809, 10522, 9918, 9436, 8617, 8765, 8194, 8035, 7865, 7573, 7422, 7047, 7147, 6861, 6669, 6363, 12073, 32381, 21390, 15311, 12819, 11655, 10696, 9678, 9143, 8296, 7852], ["y1", 3522, 4088, 4146, 4477, 4202, 4157, 4177, 4203, 4223, 3948, 3946, 3898, 3979, 4052, 3279, 3229, 3302, 3040, 3054, 2982, 3077, 2965, 2973, 5148, 22485, 13077, 9055, 7446, 6824, 5995, 5787, 5367, 4997, 4689, 4630, 4785, 22365, 15244, 10626, 8666, 7681, 6929, 6219, 6367, 5402, 4932, 4844, 5146, 5265, 4887, 4714, 4722, 4718, 4693, 4746, 4819, 4455, 4419, 4323, 4407, 4277, 11589, 6100, 5076, 4769, 8929, 14002, 9756, 7520, 6343, 5633, 5415, 5052, 4850, 4624, 4480, 14102, 24005, 14263, 10845, 9028, 7755, 7197, 7001, 6737, 6254, 6150, 5922, 5603, 5048, 5423, 5003, 5035, 4747, 4814, 4661, 4462, 4516, 4221, 4111, 4053, 12515, 15781, 10499, 8175, 6831, 6287, 5990, 5590, 5148, 4760, 4809]],
  "types": {
    "y0": "line",
    "y1": "line",
    "x": "x"
  },
  "names": {
    "y0": "#0",
    "y1": "#1"
  },
  "colors": {
    "y0": "#3DC23F",
    "y1": "#F34C44"
  }
}, {
  "columns": [["x", 1542412800000, 1542499200000, 1542585600000, 1542672000000, 1542758400000, 1542844800000, 1542931200000, 1543017600000, 1543104000000, 1543190400000, 1543276800000, 1543363200000, 1543449600000, 1543536000000, 1543622400000, 1543708800000, 1543795200000, 1543881600000, 1543968000000, 1544054400000, 1544140800000, 1544227200000, 1544313600000, 1544400000000, 1544486400000, 1544572800000, 1544659200000, 1544745600000, 1544832000000, 1544918400000, 1545004800000, 1545091200000, 1545177600000, 1545264000000, 1545350400000, 1545436800000, 1545523200000, 1545609600000, 1545696000000, 1545782400000, 1545868800000, 1545955200000, 1546041600000, 1546128000000, 1546214400000, 1546300800000, 1546387200000, 1546473600000, 1546560000000, 1546646400000, 1546732800000, 1546819200000, 1546905600000, 1546992000000, 1547078400000, 1547164800000, 1547251200000, 1547337600000, 1547424000000, 1547510400000, 1547596800000, 1547683200000, 1547769600000, 1547856000000, 1547942400000, 1548028800000, 1548115200000, 1548201600000, 1548288000000, 1548374400000, 1548460800000, 1548547200000, 1548633600000, 1548720000000, 1548806400000, 1548892800000, 1548979200000, 1549065600000, 1549152000000, 1549238400000, 1549324800000, 1549411200000, 1549497600000, 1549584000000, 1549670400000, 1549756800000, 1549843200000, 1549929600000, 1550016000000, 1550102400000, 1550188800000, 1550275200000, 1550361600000, 1550448000000, 1550534400000, 1550620800000, 1550707200000, 1550793600000, 1550880000000, 1550966400000, 1551052800000, 1551139200000, 1551225600000, 1551312000000, 1551398400000, 1551484800000, 1551571200000, 1551657600000, 1551744000000, 1551830400000, 1551916800000, 1552003200000], ["y0", 4747, 4849, 5045, 5184, 5746, 5400, 5424, 5576, 6436, 5337, 4840, 5379, 4678, 4736, 5074, 4897, 4349, 5089, 4543, 5033, 5047, 4871, 4812, 4723, 4545, 4723, 4721, 4384, 4277, 4682, 4805, 4001, 4610, 5241, 5113, 4059, 4529, 4673, 5291, 5154, 5123, 5535, 5540, 5161, 5666, 5584, 6999, 6854, 5083, 5361, 5863, 5792, 5586, 6106, 5481, 5532, 5853, 5809, 6244, 6156, 5596, 5426, 5422, 5413, 4795, 5113, 5279, 5530, 4939, 4983, 4984, 5527, 5765, 5001, 5818, 6061, 5956, 5288, 5837, 5703, 5440, 5238, 5957, 6432, 6389, 6064, 7065, 5981, 5779, 6567, 6320, 5634, 6023, 5702, 6066, 5797, 6163, 6182, 4906, 5637, 7073, 6679, 5831, 6015, 6266, 6128, 6156, 6218, 6050, 6140, 5877, 7147], ["y1", 4605, 5036, 4956, 5168, 5008, 5069, 5223, 5360, 5695, 5209, 4796, 5028, 4931, 5123, 4987, 4964, 4982, 5037, 5050, 5144, 5049, 4971, 4911, 4792, 4562, 4597, 4759, 4761, 4646, 4543, 4597, 4428, 4213, 4270, 3961, 4784, 4699, 4711, 4855, 4717, 4563, 4923, 5041, 4895, 4877, 5001, 5410, 5033, 5045, 5184, 4976, 5207, 5354, 5205, 4887, 4831, 5083, 5148, 5369, 5176, 5022, 4880, 4969, 5135, 4836, 4764, 4782, 4783, 4646, 4755, 4744, 4932, 5059, 4851, 4614, 4718, 5018, 5034, 5223, 5007, 4839, 4763, 4761, 5048, 5330, 5106, 5956, 5135, 5006, 4919, 5511, 5114, 5122, 5314, 5089, 5022, 4918, 4986, 4626, 4675, 4951, 4921, 5173, 5145, 5209, 4967, 5030, 5120, 5030, 4946, 4795, 5224]],
  "types": {
    "y0": "line",
    "y1": "line",
    "x": "x"
  },
  "names": {
    "y0": "#0",
    "y1": "#1"
  },
  "colors": {
    "y0": "#3DC23F",
    "y1": "#F34C44"
  }
}, {
  "columns": [["x", 1542412800000, 1542499200000, 1542585600000, 1542672000000, 1542758400000, 1542844800000, 1542931200000, 1543017600000, 1543104000000, 1543190400000, 1543276800000, 1543363200000, 1543449600000, 1543536000000, 1543622400000, 1543708800000, 1543795200000, 1543881600000, 1543968000000, 1544054400000, 1544140800000, 1544227200000, 1544313600000, 1544400000000, 1544486400000, 1544572800000, 1544659200000, 1544745600000, 1544832000000, 1544918400000, 1545004800000, 1545091200000, 1545177600000, 1545264000000, 1545350400000, 1545436800000, 1545523200000, 1545609600000, 1545696000000, 1545782400000, 1545868800000, 1545955200000, 1546041600000, 1546128000000, 1546214400000, 1546300800000, 1546387200000, 1546473600000, 1546560000000, 1546646400000, 1546732800000, 1546819200000, 1546905600000, 1546992000000, 1547078400000, 1547164800000, 1547251200000, 1547337600000, 1547424000000, 1547510400000, 1547596800000, 1547683200000, 1547769600000, 1547856000000, 1547942400000, 1548028800000, 1548115200000, 1548201600000, 1548288000000, 1548374400000, 1548460800000, 1548547200000, 1548633600000, 1548720000000, 1548806400000, 1548892800000, 1548979200000, 1549065600000, 1549152000000, 1549238400000, 1549324800000, 1549411200000, 1549497600000, 1549584000000, 1549670400000, 1549756800000, 1549843200000, 1549929600000, 1550016000000, 1550102400000, 1550188800000, 1550275200000, 1550361600000, 1550448000000, 1550534400000, 1550620800000, 1550707200000, 1550793600000, 1550880000000, 1550966400000, 1551052800000, 1551139200000, 1551225600000, 1551312000000, 1551398400000, 1551484800000, 1551571200000, 1551657600000, 1551744000000, 1551830400000, 1551916800000, 1552003200000], ["y0", 41, 31, 62, 65, 66, 79, 52, 26, 42, 68, 71, 86, 65, 54, 33, 70, 52, 68, 75, 92, 69, 28, 33, 84, 65, 56, 42, 44, 26, 34, 45, 49, 83, 83, 66, 31, 43, 55, 57, 55, 54, 45, 51, 64, 27, 19, 38, 38, 44, 49, 42, 50, 60, 73, 86, 65, 51, 54, 48, 61, 82, 83, 53, 52, 48, 64, 96, 103, 68, 73, 58, 42, 81, 80, 76, 106, 93, 65, 69, 104, 75, 79, 92, 73, 49, 63, 76, 79, 83, 70, 55, 47, 42, 111, 93, 74, 99, 107, 52, 65, 80, 82, 74, 154, 106, 39, 40, 77, 85, 66, 52, 25], ["y1", 19, 10, 36, 41, 28, 39, 24, 16, 14, 40, 39, 37, 47, 28, 16, 32, 25, 29, 36, 45, 38, 11, 25, 37, 35, 22, 25, 30, 16, 20, 32, 34, 37, 26, 31, 10, 19, 32, 34, 23, 25, 22, 21, 18, 11, 18, 18, 23, 11, 18, 22, 19, 27, 27, 30, 25, 27, 23, 28, 30, 23, 31, 27, 16, 30, 21, 36, 33, 25, 34, 16, 24, 37, 33, 26, 24, 31, 21, 37, 32, 35, 31, 30, 27, 15, 17, 38, 40, 32, 34, 30, 17, 21, 28, 36, 30, 24, 25, 20, 24, 22, 42, 34, 47, 40, 29, 29, 31, 39, 30, 29, 18]],
  "types": {
    "y0": "line",
    "y1": "line",
    "x": "x"
  },
  "names": {
    "y0": "#0",
    "y1": "#1"
  },
  "colors": {
    "y0": "#3DC23F",
    "y1": "#F34C44"
  }
}, {
  "columns": [["x", 1520035200000, 1520121600000, 1520208000000, 1520294400000, 1520380800000, 1520467200000, 1520553600000, 1520640000000, 1520726400000, 1520812800000, 1520899200000, 1520985600000, 1521072000000, 1521158400000, 1521244800000, 1521331200000, 1521417600000, 1521504000000, 1521590400000, 1521676800000, 1521763200000, 1521849600000, 1521936000000, 1522022400000, 1522108800000, 1522195200000, 1522281600000, 1522368000000, 1522454400000, 1522540800000, 1522627200000, 1522713600000, 1522800000000, 1522886400000, 1522972800000, 1523059200000, 1523145600000, 1523232000000, 1523318400000, 1523404800000, 1523491200000, 1523577600000, 1523664000000, 1523750400000, 1523836800000, 1523923200000, 1524009600000, 1524096000000, 1524182400000, 1524268800000, 1524355200000, 1524441600000, 1524528000000, 1524614400000, 1524700800000, 1524787200000, 1524873600000, 1524960000000, 1525046400000, 1525132800000, 1525219200000, 1525305600000, 1525392000000, 1525478400000, 1525564800000, 1525651200000, 1525737600000, 1525824000000, 1525910400000, 1525996800000, 1526083200000, 1526169600000, 1526256000000, 1526342400000, 1526428800000, 1526515200000, 1526601600000, 1526688000000, 1526774400000, 1526860800000, 1526947200000, 1527033600000, 1527120000000, 1527206400000, 1527292800000, 1527379200000, 1527465600000, 1527552000000, 1527638400000, 1527724800000, 1527811200000, 1527897600000, 1527984000000, 1528070400000, 1528156800000, 1528243200000, 1528329600000, 1528416000000, 1528502400000, 1528588800000, 1528675200000, 1528761600000, 1528848000000, 1528934400000, 1529020800000, 1529107200000, 1529193600000, 1529280000000, 1529366400000, 1529452800000, 1529539200000, 1529625600000, 1529712000000, 1529798400000, 1529884800000, 1529971200000, 1530057600000, 1530144000000, 1530230400000, 1530316800000, 1530403200000, 1530489600000, 1530576000000, 1530662400000, 1530748800000, 1530835200000, 1530921600000, 1531008000000, 1531094400000, 1531180800000, 1531267200000, 1531353600000, 1531440000000, 1531526400000, 1531612800000, 1531699200000, 1531785600000, 1531872000000, 1531958400000, 1532044800000, 1532131200000, 1532217600000, 1532304000000, 1532390400000, 1532476800000, 1532563200000, 1532649600000, 1532736000000, 1532822400000, 1532908800000, 1532995200000, 1533081600000, 1533168000000, 1533254400000, 1533340800000, 1533427200000, 1533513600000, 1533600000000, 1533686400000, 1533772800000, 1533859200000, 1533945600000, 1534032000000, 1534118400000, 1534204800000, 1534291200000, 1534377600000, 1534464000000, 1534550400000, 1534636800000, 1534723200000, 1534809600000, 1534896000000, 1534982400000, 1535068800000, 1535155200000, 1535241600000, 1535328000000, 1535414400000, 1535500800000, 1535587200000, 1535673600000, 1535760000000, 1535846400000, 1535932800000, 1536019200000, 1536105600000, 1536192000000, 1536278400000, 1536364800000, 1536451200000, 1536537600000, 1536624000000, 1536710400000, 1536796800000, 1536883200000, 1536969600000, 1537056000000, 1537142400000, 1537228800000, 1537315200000, 1537401600000, 1537488000000, 1537574400000, 1537660800000, 1537747200000, 1537833600000, 1537920000000, 1538006400000, 1538092800000, 1538179200000, 1538265600000, 1538352000000, 1538438400000, 1538524800000, 1538611200000, 1538697600000, 1538784000000, 1538870400000, 1538956800000, 1539043200000, 1539129600000, 1539216000000, 1539302400000, 1539388800000, 1539475200000, 1539561600000, 1539648000000, 1539734400000, 1539820800000, 1539907200000, 1539993600000, 1540080000000, 1540166400000, 1540252800000, 1540339200000, 1540425600000, 1540512000000, 1540598400000, 1540684800000, 1540771200000, 1540857600000, 1540944000000, 1541030400000, 1541116800000, 1541203200000, 1541289600000, 1541376000000, 1541462400000, 1541548800000, 1541635200000, 1541721600000, 1541808000000, 1541894400000, 1541980800000, 1542067200000, 1542153600000, 1542240000000, 1542326400000, 1542412800000, 1542499200000, 1542585600000, 1542672000000, 1542758400000, 1542844800000, 1542931200000, 1543017600000, 1543104000000, 1543190400000, 1543276800000, 1543363200000, 1543449600000, 1543536000000, 1543622400000, 1543708800000, 1543795200000, 1543881600000, 1543968000000, 1544054400000, 1544140800000, 1544227200000, 1544313600000, 1544400000000, 1544486400000, 1544572800000, 1544659200000, 1544745600000, 1544832000000, 1544918400000, 1545004800000, 1545091200000, 1545177600000, 1545264000000, 1545350400000, 1545436800000, 1545523200000, 1545609600000, 1545696000000, 1545782400000, 1545868800000, 1545955200000, 1546041600000, 1546128000000, 1546214400000, 1546300800000, 1546387200000, 1546473600000, 1546560000000, 1546646400000, 1546732800000, 1546819200000, 1546905600000, 1546992000000, 1547078400000, 1547164800000, 1547251200000, 1547337600000, 1547424000000, 1547510400000, 1547596800000, 1547683200000, 1547769600000, 1547856000000, 1547942400000, 1548028800000, 1548115200000, 1548201600000, 1548288000000, 1548374400000, 1548460800000, 1548547200000, 1548633600000, 1548720000000, 1548806400000, 1548892800000, 1548979200000, 1549065600000, 1549152000000, 1549238400000, 1549324800000, 1549411200000, 1549497600000, 1549584000000, 1549670400000, 1549756800000, 1549843200000, 1549929600000, 1550016000000, 1550102400000, 1550188800000, 1550275200000, 1550361600000, 1550448000000, 1550534400000, 1550620800000, 1550707200000, 1550793600000, 1550880000000, 1550966400000, 1551052800000, 1551139200000, 1551225600000, 1551312000000, 1551398400000, 1551484800000, 1551571200000, 1551657600000, 1551744000000, 1551830400000, 1551916800000, 1552003200000, 1552089600000], ["y0", 2298660, 2253410, 2515820, 2506600, 2460240, 2408400, 2317430, 2240100, 2295900, 2609800, 2594200, 2626400, 2615000, 2617800, 2394500, 2391100, 2608300, 2676000, 2637700, 2766600, 3186500, 3067700, 2570700, 2935000, 2949200, 2913500, 2763600, 3216300, 2343500, 2361000, 2580000, 2591800, 2595200, 2569500, 2587700, 2372500, 2351200, 2465600, 2625100, 2651300, 2686700, 2783300, 2417400, 2383800, 2736300, 2751100, 2678900, 2622300, 2586000, 2365700, 2407700, 2541300, 2600400, 2581500, 2576200, 2550100, 2334500, 2139400, 2015400, 2019900, 2210100, 2191800, 2240700, 2107400, 2026900, 2258000, 2255200, 2123200, 2267800, 2236100, 2065700, 2093300, 2315300, 2333200, 2349800, 2318300, 2275000, 2110300, 2077100, 2335200, 2357400, 2350000, 2293800, 2303600, 2118700, 2100300, 2219700, 2361100, 2349500, 2347800, 2318400, 2141600, 2178600, 2432500, 2448700, 2440300, 2450100, 2424100, 2229900, 2152400, 2402600, 2401000, 2418100, 2408600, 2408400, 2212600, 2189000, 2450800, 2444500, 2451900, 2451000, 2442600, 2287900, 2221100, 2451900, 2460200, 2460900, 2319900, 2270300, 2183800, 2195300, 2485000, 2460900, 2500600, 2495300, 2479100, 2290600, 2235800, 2459900, 2484500, 2491000, 2525600, 2477300, 2223700, 2146700, 2528200, 2567800, 2556300, 2540700, 2503000, 2301200, 2251600, 2538600, 2596500, 2553900, 2534200, 2527300, 2337400, 2332900, 2688500, 2585700, 2559600, 2651600, 2586800, 2445700, 2472300, 2633000, 2664600, 2649400, 2648900, 2644600, 2406400, 2426200, 2694000, 2740600, 2711800, 2700900, 2645800, 2422800, 2438500, 2697500, 2712500, 2690300, 2684400, 2517300, 2435300, 2444300, 2781800, 2807800, 2804500, 2771300, 2798800, 2633300, 2597100, 2946300, 2889800, 2949600, 2951400, 2928800, 2701400, 2709900, 3012900, 3019100, 2977200, 3012400, 2989800, 2752100, 2749100, 3033300, 3050400, 3023800, 3066400, 3047800, 2792200, 2799300, 3096100, 3132500, 3082400, 3071200, 3021400, 2818300, 2737500, 3037800, 3123700, 3138900, 3181800, 3118500, 2834500, 2826900, 3171000, 3175900, 3184300, 3195800, 3129100, 2834100, 2876800, 3019000, 3214000, 3227900, 3189600, 3187800, 2886800, 2880500, 3218200, 3253700, 3260400, 3243300, 3204000, 2962700, 2968600, 3282100, 3618900, 3017000, 3037300, 3044500, 2758900, 2784600, 3032900, 3132400, 3075800, 3108200, 3076200, 2851800, 2837800, 3107500, 3146800, 3145100, 3145300, 3158400, 2872100, 2823800, 3190400, 3209300, 3170800, 3195300, 3183000, 2910300, 2937400, 3297100, 3293600, 3278400, 3234200, 3224000, 3013900, 2955300, 3303900, 3323300, 3352600, 3348400, 3340600, 3110600, 3066400, 3409200, 3462100, 3394200, 3383100, 3433700, 3184000, 3092700, 3417400, 4505200, 3094500, 3106100, 3083200, 3005600, 2866700, 2984100, 2954200, 3086800, 3070500, 3040900, 2903500, 3592500, 3316200, 2930500, 2961900, 3009600, 3027200, 2871600, 2831600, 2881700, 3054200, 3116600, 3120800, 3157300, 2950700, 2982700, 3192800, 3223300, 3219500, 3235900, 3214100, 3004400, 2963500, 3280400, 3262400, 3256000, 3258400, 3264900, 3107500, 3057400, 3326600, 3332400, 3357000, 3365100, 3359500, 3127400, 3130200, 3367100, 3422700, 3436400, 3431100, 3600000, 3146100, 3170900, 3467300, 3483400, 3473600, 3454700, 3390200, 3213600, 3188800, 3498200, 3498600, 3493500, 3478900, 3446400, 3239200, 3229100, 3559600, 3563600, 3549800, 3577300, 3524400, 3282500, 3271300, 3599200, 3575200, 3554400, 3540300, 3450600, 2812000], ["y1", 1130400, 1065370, 1211030, 1215590, 1206540, 1206720, 1085450, 1047320, 1071720, 1253170, 1261050, 1264660, 1260240, 1264840, 1130440, 1121660, 1294120, 1290780, 1284540, 1302860, 1296810, 1165450, 1128830, 1302070, 1304470, 1307090, 1268000, 1302160, 1159330, 1163530, 1327140, 1320680, 1319200, 1306810, 1287990, 1121240, 1145070, 1132400, 1310310, 1329340, 1340060, 1333530, 1167040, 1153260, 1356930, 1366500, 1375970, 1378570, 1357460, 1192240, 1188650, 1386450, 1400570, 1395730, 1404160, 1378120, 1195410, 1082000, 1189660, 1197540, 1367850, 1389070, 1386300, 1282240, 1209450, 1409070, 1409450, 1271120, 1424860, 1399990, 1240640, 1248530, 1451770, 1460240, 1466100, 1460990, 1446730, 1268830, 1263270, 1473530, 1476230, 1480760, 1460520, 1454730, 1263910, 1227240, 1303900, 1474760, 1473400, 1477380, 1466790, 1285620, 1280100, 1491820, 1499660, 1496260, 1485990, 1473140, 1301290, 1273440, 1487420, 1494560, 1500790, 1508660, 1489400, 1301960, 1297680, 1501170, 1503000, 1488980, 1501170, 1479060, 1367980, 1296050, 1493920, 1487830, 1479120, 1338410, 1318550, 1266620, 1285640, 1487970, 1489080, 1489580, 1475400, 1471140, 1316010, 1271940, 1476160, 1480670, 1491030, 1480940, 1477640, 1305750, 1296770, 1483400, 1494440, 1495740, 1485900, 1484400, 1319160, 1284010, 1488140, 1502910, 1503450, 1485410, 1498200, 1323200, 1303150, 1506840, 1523440, 1521490, 1516770, 1504300, 1327520, 1307630, 1518100, 1521370, 1521280, 1521660, 1517700, 1349880, 1333010, 1543800, 1553730, 1546490, 1541710, 1532690, 1367020, 1354040, 1560080, 1564990, 1565050, 1561110, 1406570, 1340850, 1368550, 1600180, 1630760, 1621360, 1636580, 1652580, 1489550, 1465750, 1731080, 1730190, 1732260, 1730210, 1724800, 1519480, 1520490, 1758280, 1774530, 1770690, 1781100, 1762270, 1551690, 1541620, 1787290, 1795490, 1802940, 1799130, 1778850, 1560040, 1564580, 1822410, 1819680, 1812390, 1814100, 1798060, 1587880, 1589320, 1833920, 1843420, 1851460, 1845550, 1822980, 1596860, 1595900, 1866000, 1860480, 1862600, 1863950, 1827540, 1585280, 1588970, 1683930, 1879500, 1883300, 1879040, 1846160, 1639090, 1632580, 1895780, 1897620, 1906000, 1906730, 1895290, 1670120, 1670190, 1914360, 1932890, 1933160, 1921800, 1898720, 1673530, 1685190, 1937730, 1951850, 1949900, 1949020, 1923160, 1718450, 1704040, 1964800, 1975140, 2002510, 1985340, 1959000, 1736810, 1727670, 2006070, 2013910, 2012460, 1999630, 1977020, 1754720, 1778560, 2060360, 2057730, 2055990, 2036720, 2027870, 1824680, 1794140, 2067460, 2078290, 2094100, 2080950, 2062080, 1836850, 1828130, 2102920, 2112450, 2098790, 2116900, 2080290, 1863760, 1841050, 2105790, 2106420, 2151300, 2098890, 2085380, 1955580, 1819790, 1916140, 1913670, 2080350, 2058160, 2034960, 1911480, 1823940, 2087990, 1774260, 1833950, 1906680, 1902490, 1760460, 1748060, 1775740, 1974730, 2013790, 2026250, 2022210, 1835820, 1835930, 2096230, 2098020, 2095770, 2114060, 2099370, 1902800, 1854380, 2132520, 2143600, 2146120, 2143820, 2157910, 1929390, 1905550, 2183760, 2185970, 2198030, 2198160, 2182120, 1950150, 1931800, 2215380, 2216240, 2226480, 2220480, 2208790, 1972190, 1957520, 2253470, 2247170, 2245720, 2285890, 2220730, 1986340, 1967720, 2264340, 2270140, 2267210, 2268950, 2246450, 2048760, 1994100, 2288680, 2296010, 2313730, 2311290, 2293790, 2034250, 2025380, 2326190, 2323990, 2320790, 2271600, 2244270, 1663290], ["y2", 820900, 766050, 894390, 894540, 887590, 814490, 786610, 744660, 770920, 930330, 930190, 942060, 933690, 922280, 810770, 809760, 952010, 959070, 957020, 955890, 948250, 825710, 804970, 958480, 959090, 970200, 907010, 950150, 825240, 820890, 971020, 973560, 967940, 960360, 931820, 795020, 753860, 808740, 970000, 981020, 979810, 975840, 829690, 819300, 992290, 998040, 1006540, 1013790, 995130, 848190, 851890, 1024210, 1032210, 1032290, 1027510, 1010090, 850110, 741740, 844400, 850410, 1006690, 1018470, 1011630, 916990, 861050, 1039650, 1032640, 904200, 1045560, 1022330, 888970, 896300, 1073460, 1074860, 1074820, 1074880, 1057340, 909410, 906710, 1078860, 1092760, 1083360, 1078680, 1067310, 903090, 858360, 947540, 1089590, 1095060, 1093130, 1070660, 915380, 916530, 1108410, 1109460, 1097230, 1094520, 1074630, 915520, 915750, 1101730, 1104580, 1107930, 1116850, 1106360, 928500, 928210, 1110530, 1103230, 1099970, 1106180, 1096060, 982050, 932620, 1100880, 1099970, 1080040, 959480, 951360, 902160, 916070, 1094120, 1092530, 1089290, 1081760, 1073320, 937320, 900010, 1084910, 1082620, 1080960, 1074050, 1077810, 925090, 913970, 1082900, 1089240, 1088890, 1088720, 1084170, 938750, 904060, 1091540, 1093660, 1104520, 1085860, 1091880, 939720, 919790, 1098590, 1110310, 1105580, 1105220, 1096580, 940670, 923480, 1102360, 1102760, 1102280, 1108680, 1109210, 955490, 944730, 1125380, 1127440, 1123070, 1123910, 1121160, 966340, 946940, 1141980, 1146790, 1147420, 1132920, 990870, 946370, 964610, 1171550, 1187000, 1186370, 1199100, 1213000, 1062280, 1035740, 1274070, 1276740, 1280670, 1282770, 1257200, 1085370, 1080510, 1293120, 1308880, 1302170, 1317570, 1298110, 1111780, 1106410, 1317620, 1318010, 1332680, 1328530, 1305330, 1113540, 1119830, 1340410, 1348770, 1346910, 1352950, 1324040, 1139450, 1136680, 1355970, 1364950, 1377510, 1375770, 1338490, 1140310, 1151830, 1374520, 1374330, 1378990, 1372390, 1347390, 1135560, 1121640, 1217410, 1390340, 1392710, 1383070, 1372400, 1170430, 1169550, 1404540, 1412720, 1414110, 1417200, 1388240, 1194260, 1188850, 1416140, 1425890, 1426380, 1410520, 1388600, 1197940, 1197680, 1432620, 1448350, 1436320, 1438890, 1412650, 1222040, 1215220, 1454190, 1456740, 1490670, 1470910, 1438940, 1243620, 1241210, 1483460, 1489950, 1488440, 1482490, 1465050, 1261450, 1281800, 1552680, 1527050, 1526500, 1511360, 1497560, 1302860, 1292930, 1547830, 1550610, 1546490, 1547790, 1525750, 1324580, 1321580, 1576620, 1575060, 1570240, 1574670, 1543830, 1341780, 1341710, 1577840, 1565630, 1580460, 1569570, 1543390, 1431880, 1301600, 1401500, 1401040, 1530910, 1526670, 1498750, 1383070, 1284000, 1401510, 1189880, 1309810, 1380230, 1383630, 1254140, 1216830, 1243860, 1442240, 1481680, 1480680, 1490700, 1315410, 1300930, 1530520, 1532340, 1539150, 1541510, 1532770, 1344910, 1325530, 1563330, 1568490, 1580110, 1575130, 1564880, 1369810, 1359060, 1608230, 1605640, 1605970, 1601640, 1590810, 1381740, 1375190, 1625850, 1621800, 1629910, 1628510, 1609760, 1397880, 1392180, 1647700, 1646770, 1644200, 1667150, 1610910, 1408450, 1395010, 1652870, 1658870, 1660310, 1659060, 1629490, 1435450, 1407720, 1675610, 1682450, 1682070, 1693010, 1669030, 1448500, 1439490, 1710110, 1702690, 1707000, 1662770, 1512800, 1101660], ["y3", 409540, 377260, 456380, 460230, 452020, 389350, 397230, 369000, 382180, 473570, 477470, 477550, 478030, 466150, 397480, 406380, 494570, 494680, 482810, 487700, 475090, 400520, 397940, 484160, 487740, 493260, 434500, 475410, 398650, 404690, 491980, 493410, 485250, 484740, 465490, 377460, 353960, 396390, 493300, 497560, 495110, 485260, 394770, 402910, 500540, 506260, 509680, 514010, 494350, 405360, 412560, 513030, 521320, 515730, 518170, 499850, 394960, 328510, 406450, 408080, 501980, 507800, 496990, 442530, 414260, 525770, 513440, 442660, 526810, 500190, 426220, 436110, 546820, 543480, 545420, 540530, 527770, 431050, 443100, 549550, 551600, 548120, 542290, 528810, 435370, 407250, 463200, 553640, 554110, 555820, 536470, 440460, 447740, 563330, 561850, 556430, 550910, 539440, 441200, 442310, 563100, 563760, 559230, 570870, 555280, 447750, 455570, 564630, 562510, 556050, 555560, 556470, 484080, 451320, 561060, 553630, 540660, 473500, 472500, 438550, 447590, 548670, 549580, 539920, 541510, 540380, 450260, 432260, 535950, 545160, 543810, 536990, 539680, 446570, 444470, 543450, 549070, 547840, 541430, 540200, 450080, 431800, 549290, 545890, 556300, 536500, 543890, 450890, 440180, 550850, 554740, 553460, 553440, 546420, 446710, 436640, 553270, 547750, 551920, 547610, 545500, 449220, 447510, 560050, 561560, 561560, 556630, 559340, 461630, 456300, 569070, 574800, 575220, 566180, 472200, 450530, 462960, 590290, 597250, 592970, 604870, 613050, 512200, 495980, 649860, 645070, 636950, 647120, 630390, 518820, 525990, 661700, 659770, 660650, 669560, 644510, 529610, 539520, 673850, 668530, 673770, 669480, 654540, 536090, 548400, 690100, 684900, 687040, 685940, 666360, 560140, 553050, 696740, 694490, 703000, 697980, 674460, 548230, 557370, 697150, 700110, 701170, 695810, 669780, 543500, 540170, 597430, 711500, 699770, 698520, 682170, 568380, 572950, 715580, 716050, 720770, 720660, 695220, 572970, 578170, 722280, 724280, 727910, 719820, 699840, 580870, 586270, 729850, 733680, 726590, 731270, 709330, 593070, 600500, 743590, 743690, 767660, 747140, 730510, 607540, 610480, 762440, 772960, 763480, 758490, 741090, 614450, 645760, 831130, 792100, 780410, 778620, 761000, 643620, 650320, 802640, 805900, 803960, 800580, 783660, 648310, 668150, 825940, 818650, 816630, 821000, 782790, 657850, 671660, 817660, 816020, 821380, 816280, 800240, 712510, 648060, 711170, 709110, 802240, 792710, 772260, 691490, 636050, 649450, 566120, 651310, 701910, 702270, 627880, 605290, 621710, 744830, 762830, 765640, 764140, 648720, 642430, 786580, 778790, 780060, 789170, 772600, 652160, 648950, 795360, 802250, 808010, 801890, 793490, 669240, 665310, 814370, 810880, 814580, 813950, 802070, 670450, 674250, 823010, 820620, 821400, 820760, 804300, 681870, 681460, 831580, 835600, 835390, 840770, 810700, 675170, 680870, 832000, 836790, 845630, 844560, 821810, 690310, 683810, 851150, 848090, 846480, 858340, 831290, 696470, 695540, 866980, 868190, 861720, 834530, 706650, 439140]],
  "types": {
    "y0": "line",
    "y1": "line",
    "y2": "line",
    "y3": "line",
    "x": "x"
  },
  "names": {
    "y0": "#0",
    "y1": "#1",
    "y2": "#2",
    "y3": "#3"
  },
  "colors": {
    "y0": "#cb513a",
    "y1": "#73c03a",
    "y2": "#65b9ac",
    "y3": "#4682b4"
  }
}];
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _chart = require("./chart");

var _data = _interopRequireDefault(require("./data.json"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// default chart
var dataTypeId = 0;
var tgChart = renderChart(dataTypeId); // helper method for get button

function getChartButton(index) {
  return document.getElementById("chart-".concat(index, "-btn"));
} // init click handler for button item


for (var i = 0; i < 5; i++) {
  var button = getChartButton(i);
  handleButtonClick(button);
} // render new chart


function renderChart(chartId) {
  if (tgChart) {
    tgChart.destroy();
  }

  tgChart = (0, _chart.chart)(document.getElementById('chart'), _data.default[chartId]);
  tgChart.init();
} // set handler for button


function handleButtonClick(button) {
  button.addEventListener('click', function (e) {
    dataTypeId = +button.getAttribute('data-id');
    renderChart(dataTypeId);
  });
}
},{"./chart":"chart.js","./data.json":"data.json","./styles.scss":"styles.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64637" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map