webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/syah/tutorial/nextjs/searchbar/pages/index.tsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    background: #eee;\n    border-radius: 3px 0 0 3px;\n    color: #999;\n    display: inline-block;\n    height: 26px;\n    line-height: 26px;\n    padding: 0 20px 0 23px;\n    position: relative;\n    margin: 0 10px 10px 0;\n    text-decoration: none;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    flex-grow: 1;\n    width: 33%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width:80%;\n    display: flex;\n    overflow: scroll;\n    flex-wrap: wrap;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    border-right: 1px solid #9e9e9e;\n    width:20%;\n    overflow: scroll;\n    word-wrap: break-word;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width :100%;\n    height: 30vh;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background:#fff;\n    display: flex;\n    \n    height: 50vh;\n    width:70vw;\n    border: 2px solid #000;\n    transition: 2s;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    \n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    \n    -webkit-flex-flow: row wrap;\n    justify-content: space-around;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\noverflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center; /*centers items on the line (the x-axis by default)*/\n  align-items: center\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Div = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject2());
var Sugest = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject4());
var Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var TileContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7());
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject8());

var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IndexPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      console.log(event.target.value);

      _this.setState({
        value: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickTag", function (category) {
      console.log(category);

      _this.setState({
        value: category
      });
    });

    return _this;
  }

  _createClass(IndexPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var result = this.props.result;
      var value = this.state.value;
      var categories = [];
      categories = result.map(function (x) {
        var category = x.category;

        if (categories.indexOf(category)) {
          return category;
        }
      });

      var unique = _toConsumableArray(new Set(categories));

      unique = Object.keys(unique).map(function (key) {
        return unique[key];
      });
      var card = result.map(function (x) {
        var name = x.name,
            category = x.category;

        if (name && category && (name.toLowerCase().includes(value.toLocaleLowerCase()) || category.toLowerCase().includes(value.toLocaleLowerCase()))) {
          return x;
        }
      });
      console.log(unique);
      console.log(_typeof(unique));
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
        value: value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Sugest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Category, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Category Found:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), result.map(function (x) {
        var category = x.category;
        return category && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, {
          onClick: function onClick() {
            return _this2.handleClickTag(category);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, category);
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TileContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, card.map(function (x) {
        var name = x.name,
            image_link = x.image_link,
            category = x.category;
        return name && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Img, {
          src: image_link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }), name);
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data, category, result, unique;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../products.json */ "./products.json", 3));

              case 2:
                data = _context.sent;
                console.log(data);
                category = [];
                result = Object.keys(data).map(function (key) {
                  // console.log(data[key].category);
                  if (typeof category[data[key].category] === 'undefined') {
                    category.push(data[key].category);
                  }

                  return data[key];
                });
                unique = _toConsumableArray(new Set(category));
                unique = Object.keys(unique).map(function (key) {
                  return unique[key];
                });
                return _context.abrupt("return", {
                  result: result,
                  unique: unique
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.618a42485c0f819c1047.hot-update.js.map