webpackHotUpdate(5,{

/***/ "./pages/emulation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header_js__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_gmaps__ = __webpack_require__("./node_modules/react-gmaps/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_gmaps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_gmaps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_rangeslider__ = __webpack_require__("./node_modules/react-rangeslider/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_rangeslider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_rangeslider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_rangeslider_lib_index_css__ = __webpack_require__("./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_rangeslider_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_rangeslider_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_google_charts__ = __webpack_require__("./node_modules/react-google-charts/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_google_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_google_charts__);

var _jsxFileName = '/opt/web/pages/emulation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










// import stylesheet from 'rc-slider/assets/index.css';



var params = { v: '3.exp', key: 'AIzaSyDr2YFdzTVM5JJsaYcFcuXpc4uJBaIcktk' };

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    // this.toggleModal = this.toggleModal.bind(this);
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.addTimeClick = _this.addTimeClick.bind(_this);
    _this.subTimeClick = _this.subTimeClick.bind(_this);
    _this.updateTimeScale = _this.updateTimeScale.bind(_this);

    _this.togglePlaying = _this.togglePlaying.bind(_this);
    // this.startPlaying = this.startPlaying.bind(this);
    // this.stopPlaying = this.stopPlaying.bind(this);
    _this.toggleRepeaed = _this.toggleRepeaed.bind(_this);
    _this.toStart = _this.toStart.bind(_this);

    _this.onSlide = _this.onSlide.bind(_this);
    _this.asd = _this.asd.bind(_this);

    _this.state = {
      emulationId: props.url.query.id,
      emulation: false,
      nodesLoading: false,
      timeScale: 100,
      isPlaying: false,
      repeated: false,
      player: false,
      slider: {
        min: false,
        max: false,
        step: false,
        value: 0
      },
      blocks: {
        list: false
      },
      block: false,
      providers: false,
      maxLocalDiff: false
    };
    return _this;
  }

  _createClass(_default, [{
    key: 'onSlide',
    value: function onSlide(value) {
      this.setState({
        slider: {
          min: this.state.slider.min,
          max: this.state.slider.max,
          step: this.state.slider.step,
          value: value
        }
      });
    }
  }, {
    key: 'asd',
    value: function asd(value) {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        '+',
        Math.round(value - this.state.slider.min),
        ' ms'
      );
    }

    // onMarkerClick(blockId) {    
    //   for (let i = 0; i < this.state.blocks.list.length; i += 1) {
    //     if (this.state.blocks.list[i].block.id === blockId) {
    //       // console.log(this.state.blocks.list[i].block);
    //       this.setState({
    //         block: this.state.blocks.list[i].block
    //       })
    //       break;
    //     }
    //   }
    // }


  }, {
    key: 'updateTimeScale',
    value: function updateTimeScale(value) {
      this.setState({
        timeScale: value
      });
    }
  }, {
    key: 'addTimeClick',
    value: function addTimeClick() {
      this.setState({
        slider: {
          min: this.state.slider.min,
          max: this.state.slider.max,
          step: this.state.slider.step,
          value: this.state.slider.value + this.state.timeScale
        }
      });
    }
  }, {
    key: 'togglePlaying',
    value: function togglePlaying() {
      var _this2 = this;

      this.setState({
        isPlaying: !this.state.isPlaying
      });

      if (this.state.player) {
        clearInterval(this.state.player);
        this.setState({
          player: false
        });
      } else {
        var player = setInterval(function () {

          if (_this2.state.slider.value >= _this2.state.slider.max) {
            if (_this2.state.repeated === true) {
              _this2.setState({
                slider: {
                  min: _this2.state.slider.min,
                  max: _this2.state.slider.max,
                  step: _this2.state.slider.step,
                  value: _this2.state.slider.min
                }
              });
            } else {
              clearInterval(_this2.state.player);
              _this2.setState({
                player: false,
                isPlaying: false
              });
            }
          }

          _this2.setState({
            slider: {
              min: _this2.state.slider.min,
              max: _this2.state.slider.max,
              step: _this2.state.slider.step,
              value: _this2.state.slider.value + _this2.state.slider.step / 2
            }
          });
        }, 100);

        this.setState({
          player: player
        });
      }
    }
  }, {
    key: 'toggleRepeaed',
    value: function toggleRepeaed() {
      this.setState({
        repeated: !this.state.repeated
      });
    }
  }, {
    key: 'toStart',
    value: function toStart() {
      this.setState({
        slider: {
          min: this.state.slider.min,
          max: this.state.slider.max,
          step: this.state.slider.step,
          value: this.state.slider.min
        }
      });
    }
  }, {
    key: 'subTimeClick',
    value: function subTimeClick() {
      this.setState({
        slider: {
          min: this.state.slider.min,
          max: this.state.slider.max,
          step: this.state.slider.step,
          value: this.state.slider.value - this.state.timeScale
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, firstTimestamp, lastTimestamp, diff, maxLocalDiff, _loop, height;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({ nodesLoading: true });
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get('http://127.0.0.1:7500/api/v1.0/emulations/' + this.state.emulationId);

              case 3:
                res = _context.sent;

                console.log(res);

                firstTimestamp = parseFloat(res.data.blocks[0].block.adopted);
                lastTimestamp = parseFloat(res.data.blocks[res.data.blocks.length - 1].block.adopted);
                diff = lastTimestamp - firstTimestamp;
                maxLocalDiff = 0;

                _loop = function _loop(height) {
                  var blocks = res.data.blocks.filter(function (item) {
                    return item.block.height === height;
                  });
                  var localDiff = blocks[blocks.length - 1].block.adopted - blocks[0].block.adopted;
                  maxLocalDiff = localDiff > maxLocalDiff ? localDiff : maxLocalDiff;
                };

                for (height = 0; height < res.data.emulation.iterations; height += 1) {
                  _loop(height);
                }

                console.log('maxLocalDiff', maxLocalDiff);

                this.setState({
                  nodesLoading: false,
                  emulation: res.data.emulation,
                  providers: res.data.providers,
                  slider: {
                    min: firstTimestamp,
                    max: lastTimestamp,
                    step: diff / 100,
                    value: firstTimestamp
                  },
                  maxLocalDiff: maxLocalDiff,
                  blocks: {
                    list: res.status === 204 ? [] : res.data.blocks
                  }
                });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this,
          _React$createElement,
          _React$createElement2,
          _React$createElement3;

      var markers = this.state.blocks.list === false ? null : this.state.blocks.list.filter(function (item) {
        return item.block.adopted <= _this3.state.slider.value;
      }).filter(function (item, index) {
        var maxHeight = -1;

        for (var i = 0; i < _this3.state.blocks.list.length; i += 1) {
          if (_this3.state.blocks.list[i].block.nodeId === item.block.nodeId && _this3.state.blocks.list[i].block.adopted <= _this3.state.slider.value) {
            maxHeight += 1;
          }
        }

        return item.block.height === maxHeight;
      }).map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_gmaps__["Marker"], {
          key: 'marker_' + index,
          lat: item.city.lat,
          lng: item.city.lng,
          draggable: false,
          content: 'Hello, React :)',
          icon: item.block.provider === item.block.nodeId ? 'http://chart.apis.google.com/chart?chst=d_map_xpin_letter&chld=pin_star|' + item.block.height + '|' + _this3.state.providers[item.block.provider][item.block.height] + '|000|FF0' : 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + item.block.height + '|' + _this3.state.providers[item.block.provider][item.block.height],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        });
      });

      // const LineChart = require("react-chartjs").Line;


      // let minZeroHeightAdopted = 0;
      // let maxZeroHeightAdopted = 0;
      // let zeroData = [];

      // let heightData = this.state.emulation ? Array(this.state.emulation.iterations).fill(0): null
      // this.state.blocks.list ? 
      //   this.state.blocks.list
      //     .filter((item) => item.block.height === 0)
      //     .map((item, index) => {
      //       if (index === 0) {
      //         minZeroHeightAdopted = item.block.adopted;
      //       }
      //       minZeroHeightAdopted = minZeroHeightAdopted < item.block.adopted ? minZeroHeightAdopted : item.block.adopted;
      //       maxZeroHeightAdopted = minZeroHeightAdopted > item.block.adopted ? minZeroHeightAdopted : item.block.adopted;

      // }) : null

      // const diff = maxZeroHeightAdopted-minZeroHeightAdopted;


      // if (this.state.blocks.list) {
      //   let blocksQty = 0;
      //   for (let i = 0; i < (diff/10)+4; i += 1) {
      //     this.state.blocks.list
      //       .filter((item) => item.block.height === 0)
      //       .filter((item) => item.block.adopted > minZeroHeightAdopted + i*10)
      //       .filter((item) => item.block.adopted <= minZeroHeightAdopted + (i+1)*10)
      //       .map((item, index) => {
      //         blocksQty += 1;
      //       }
      //     )
      //     zeroData.push(blocksQty)
      //   }
      // }


      // const zeroHeight = this.state.emulation ? {
      //   labels: Array.apply(null, {length: (diff/10)+4}).map(Number.call, Number),
      //   datasets: [
      //     {
      //       fillColor: "rgba(151,187,205,0.2)",
      //       strokeColor: "rgba(151,187,205,1)",
      //       pointColor: "rgba(151,187,205,1)",
      //       pointStrokeColor: "#fff",
      //       pointHighlightFill: "#fff",
      //       pointHighlightStroke: "rgba(151,187,205,1)",
      //       data: zeroData
      //     }
      //   ]
      // } : null


      var gHeightData = [["Height", "Blocks", { role: 'style' }]];
      var gLineData = [['Time Diff', 'Height 0']];

      if (this.state.emulation) {
        for (var i = 0; i < this.state.emulation.iterations; i += 1) {
          gHeightData.push(['Height ' + i, 0, 'stroke-color: #0D47A1; stroke-opacity: 0.6; stroke-width: 1; fill-color: #2196F3; fill-opacity: 0.2']);
          // gLineData[0].push('Height ' + i);
        }
      }

      gHeightData && this.state.blocks.list ? this.state.blocks.list.filter(function (item) {
        return item.block.adopted <= _this3.state.slider.value;
      }).map(function (item, index) {
        gHeightData[item.block.height + 1][1] += 1;
        if (item.block.height > 0) {
          gHeightData[item.block.height][1] -= 1;
        }
      }) : null;

      // console.log(gLineData);
      // const diff = this.state.slider.max-this.state.slider.min;
      var blocksQty = 0;

      var _loop2 = function _loop2(_i) {
        var row = [_i * 10];
        //   for (let height = 0; height < this.state.emulation.iterations; height += 1) {
        // let blocksQty = 0;
        _this3.state.blocks.list.filter(function (item) {
          return item.block.height === 0;
        }).filter(function (item) {
          return item.block.adopted > _this3.state.slider.min + _i * 10;
        }).filter(function (item) {
          return item.block.adopted <= _this3.state.slider.min + (_i + 1) * 10;
        }).map(function (item, index) {
          blocksQty += 1;
        });

        console.log(blocksQty);

        row.push(blocksQty);
        //   }
        gLineData.push(row);
      };

      for (var _i = 0; _i < this.state.maxLocalDiff / 10; _i += 1) {
        _loop2(_i);
      }

      // console.log(gLineData);


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_10_react_rangeslider_lib_index_css___default.a }, __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          }
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 364
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-462698131',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 365
                }
              },
              'Emulation map'
            ),
            this.state.nodesLoading === false ? null : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-462698131' + ' ' + 'nodesLoadingInfo',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 368
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["a" /* Alert */],
                { bsStyle: 'warning', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 369
                  }
                },
                'Please wait. Loading nodes list in progress...'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 377
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 378
              }
            },
            this.state.blocks.list === false || this.state.blocks.list.length === 0 ? null : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_rangeslider___default.a, {
              value: this.state.slider.value,
              orientation: 'horizontal',
              onChange: this.onSlide,
              min: this.state.slider.min,
              max: this.state.slider.max,
              step: this.state.slider.step,
              format: this.asd,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 381
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            { lg: 4, style: { paddingBottom: '2em' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 393
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["c" /* ButtonGroup */],
              { bsSize: 'large', style: { marginRight: 20 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 394
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["f" /* DropdownButton */],
                {
                  title: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */],
                    { glyph: 'time', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 396
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'span',
                      { style: { marginLeft: 20 }, className: 'jsx-462698131',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 396
                        }
                      },
                      this.state.timeScale,
                      ' ms'
                    )
                  ),
                  bsSize: 'large',
                  onSelect: this.updateTimeScale,
                  id: 'time-scale-dropdown',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 395
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 10, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 401
                    }
                  },
                  '10 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 50, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 402
                    }
                  },
                  '50 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 100, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 403
                    }
                  },
                  '100 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 200, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 404
                    }
                  },
                  '200 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 500, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 405
                    }
                  },
                  '500 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 1000, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 406
                    }
                  },
                  '1000 ms'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                { onClick: this.subTimeClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 408
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: 'minus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 408
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                { onClick: this.addTimeClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 409
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: 'plus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 409
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["c" /* ButtonGroup */],
              { bsSize: 'large', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 412
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                (_React$createElement = { onClick: this.subTimeClick }, _defineProperty(_React$createElement, 'onClick', this.toStart), _defineProperty(_React$createElement, '__source', {
                  fileName: _jsxFileName,
                  lineNumber: 413
                }), _React$createElement),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: 'step-backward', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 413
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                (_React$createElement2 = { onClick: this.addTimeClick }, _defineProperty(_React$createElement2, 'onClick', this.togglePlaying), _defineProperty(_React$createElement2, '__source', {
                  fileName: _jsxFileName,
                  lineNumber: 414
                }), _React$createElement2),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: this.state.isPlaying ? 'pause' : 'play', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 414
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                (_React$createElement3 = { onClick: this.addTimeClick }, _defineProperty(_React$createElement3, 'onClick', this.toggleRepeaed), _defineProperty(_React$createElement3, 'active', this.state.repeated), _defineProperty(_React$createElement3, '__source', {
                  fileName: _jsxFileName,
                  lineNumber: 415
                }), _React$createElement3),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: 'repeat', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 415
                  }
                })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 419
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 420
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_react_gmaps__["Gmaps"],
              {
                width: '100%',
                height: '600px',
                lat: 20,
                lng: 20,
                zoom: 2,
                loadingMessage: 'Loading...',
                params: params,
                onMapCreated: this.onMapCreated,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 421
                }
              },
              markers
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            { lg: 4, __source: {
                fileName: _jsxFileName,
                lineNumber: 434
              }
            },
            this.state.emulation ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_google_charts__["Chart"], {
              chartType: 'ColumnChart',
              data: gHeightData,
              options: {
                title: "Blocks by height",
                bar: {
                  groupWidth: "90%"
                },
                chartArea: {
                  width: '80%',
                  height: '80%'
                },
                legend: {
                  position: "top"
                },
                animation: {
                  duration: 400,
                  easing: 'out'
                },
                vAxis: { minValue: this.state.emulation.nodesQty }
              },
              width: '100%',
              height: '250px',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 437
              }
            }) : null,
            this.state.emulation ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_google_charts__["Chart"], {
              chartType: 'LineChart',
              data: gLineData,
              options: {

                title: "Block adoption by height",
                bar: {
                  groupWidth: "90%"
                },
                chartArea: {
                  width: '90%',
                  height: '80%'
                },
                legend: {
                  position: "top"
                },
                animation: {
                  duration: 400,
                  easing: 'out'
                },
                hAxis: {
                  title: "Time"
                },
                vAxis: {
                  title: "blocks",
                  minValue: this.state.emulation.nodesQty
                }
              },
              width: '100%',
              height: '250px',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 466
              }
            }) : null
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 521
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 522
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '462698131',
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-462698131{font-family:\'Open Sans\',sans-serif;color:#333;}h1.jsx-462698131{font-size:4em;font-weight:400;margin:1em 0 1em 0;}h2.jsx-462698131{margin:0 0 1em 0;font-weight:300;}h3.jsx-462698131{margin-top:1em;}div.nodesLoadingInfo.jsx-462698131{position:absolute;bottom:2em;right:2em;width:240px;}.rangeslider__handle-tooltip.jsx-462698131{width:200px!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtdWxhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Z0JvQixBQUV1RixBQUN4QyxBQUlwQixBQU1HLEFBS0YsQUFJRyxBQU9JLGNBckJOLENBV2xCLEVBTGtCLENBU0wsSUFPYixPQU5ZLENBZlUsR0FNdEIsRUFYVyxJQXFCRyxPQU9oQixHQXRCRSxFQWdCQSIsImZpbGUiOiJwYWdlcy9lbXVsYXRpb24uanMiLCJzb3VyY2VSb290IjoiL29wdC93ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgR21hcHMsIE1hcmtlciwgSW5mb1dpbmRvdywgQ2lyY2xlIH0gZnJvbSAncmVhY3QtZ21hcHMnO1xuaW1wb3J0IHsgR3JpZCwgUm93LCBDb2wsIEFsZXJ0LCBCdXR0b25Hcm91cCwgQnV0dG9uLCBNZW51SXRlbSwgRHJvcGRvd25CdXR0b24sIEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXJhbmdlc2xpZGVyJztcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJ3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3MnXG4vLyBpbXBvcnQgc3R5bGVzaGVldCBmcm9tICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAncmVhY3QtZ29vZ2xlLWNoYXJ0cyc7XG5cblxuY29uc3QgcGFyYW1zID0ge3Y6ICczLmV4cCcsIGtleTogJ0FJemFTeURyMllGZHpUVk01SkpzYVljRmN1WHBjNHVKQmFJY2t0ayd9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLm9uTWFya2VyQ2xpY2sgPSB0aGlzLm9uTWFya2VyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZFRpbWVDbGljayA9IHRoaXMuYWRkVGltZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJUaW1lQ2xpY2sgPSB0aGlzLnN1YlRpbWVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVGltZVNjYWxlID0gdGhpcy51cGRhdGVUaW1lU2NhbGUuYmluZCh0aGlzKVxuXG4gICAgdGhpcy50b2dnbGVQbGF5aW5nID0gdGhpcy50b2dnbGVQbGF5aW5nLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5zdGFydFBsYXlpbmcgPSB0aGlzLnN0YXJ0UGxheWluZy5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuc3RvcFBsYXlpbmcgPSB0aGlzLnN0b3BQbGF5aW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVSZXBlYWVkID0gdGhpcy50b2dnbGVSZXBlYWVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b1N0YXJ0ID0gdGhpcy50b1N0YXJ0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uU2xpZGUgPSB0aGlzLm9uU2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFzZCA9IHRoaXMuYXNkLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW11bGF0aW9uSWQ6IHByb3BzLnVybC5xdWVyeS5pZCxcbiAgICAgIGVtdWxhdGlvbjogZmFsc2UsXG4gICAgICBub2Rlc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgdGltZVNjYWxlOiAxMDAsXG4gICAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgICAgcmVwZWF0ZWQ6IGZhbHNlLFxuICAgICAgcGxheWVyOiBmYWxzZSxcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IGZhbHNlLFxuICAgICAgICBtYXg6IGZhbHNlLFxuICAgICAgICBzdGVwOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgYmxvY2tzOiB7XG4gICAgICAgIGxpc3Q6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgcHJvdmlkZXJzOiBmYWxzZSxcbiAgICAgIG1heExvY2FsRGlmZjogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uU2xpZGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IHRoaXMuc3RhdGUuc2xpZGVyLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLnN0YXRlLnNsaWRlci5tYXgsXG4gICAgICAgIHN0ZXA6IHRoaXMuc3RhdGUuc2xpZGVyLnN0ZXAsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhc2QodmFsdWUpIHtcbiAgICByZXR1cm4oXG4gICAgICA8cD4re01hdGgucm91bmQodmFsdWUtdGhpcy5zdGF0ZS5zbGlkZXIubWluKX0gbXM8L3A+XG4gICAgKVxuICB9XG5cbiAgLy8gb25NYXJrZXJDbGljayhibG9ja0lkKSB7ICAgIFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RbaV0uYmxvY2suaWQgPT09IGJsb2NrSWQpIHtcbiAgLy8gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5ibG9ja3MubGlzdFtpXS5ibG9jayk7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgIGJsb2NrOiB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0W2ldLmJsb2NrXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG5cbiAgdXBkYXRlVGltZVNjYWxlKHZhbHVlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpbWVTY2FsZTogdmFsdWVcbiAgICB9KVxuICB9XG5cblxuICBhZGRUaW1lQ2xpY2soKSB7ICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVyOiB7XG4gICAgICAgIG1pbjogdGhpcy5zdGF0ZS5zbGlkZXIubWluLFxuICAgICAgICBtYXg6IHRoaXMuc3RhdGUuc2xpZGVyLm1heCxcbiAgICAgICAgc3RlcDogdGhpcy5zdGF0ZS5zbGlkZXIuc3RlcCxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlICsgdGhpcy5zdGF0ZS50aW1lU2NhbGVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdG9nZ2xlUGxheWluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzUGxheWluZzogIXRoaXMuc3RhdGUuaXNQbGF5aW5nXG4gICAgfSlcblxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGxheWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUucGxheWVyKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBsYXllcjogZmFsc2VcbiAgICAgIH0pXG4gICAgfSBlbHNle1xuICAgICAgY29uc3QgcGxheWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlID49IHRoaXMuc3RhdGUuc2xpZGVyLm1heCkgeyAgICAgXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVwZWF0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzbGlkZXI6IHtcbiAgICAgICAgICAgICAgICBtaW46IHRoaXMuc3RhdGUuc2xpZGVyLm1pbixcbiAgICAgICAgICAgICAgICBtYXg6IHRoaXMuc3RhdGUuc2xpZGVyLm1heCxcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnN0YXRlLnNsaWRlci5zdGVwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnNsaWRlci5taW5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLnBsYXllcilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBwbGF5ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNsaWRlcjoge1xuICAgICAgICAgICAgbWluOiB0aGlzLnN0YXRlLnNsaWRlci5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMuc3RhdGUuc2xpZGVyLm1heCxcbiAgICAgICAgICAgIHN0ZXA6IHRoaXMuc3RhdGUuc2xpZGVyLnN0ZXAsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zbGlkZXIudmFsdWUgKyB0aGlzLnN0YXRlLnNsaWRlci5zdGVwLzJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgfSwgMTAwKVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGxheWVyOiBwbGF5ZXJcbiAgICAgIH0pXG4gICAgfVxuICAgIFxuICB9XG5cbiAgdG9nZ2xlUmVwZWFlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlcGVhdGVkOiAhdGhpcy5zdGF0ZS5yZXBlYXRlZFxuICAgIH0pXG4gIH1cblxuICB0b1N0YXJ0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVyOiB7XG4gICAgICAgIG1pbjogdGhpcy5zdGF0ZS5zbGlkZXIubWluLFxuICAgICAgICBtYXg6IHRoaXMuc3RhdGUuc2xpZGVyLm1heCxcbiAgICAgICAgc3RlcDogdGhpcy5zdGF0ZS5zbGlkZXIuc3RlcCxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2xpZGVyLm1pblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdWJUaW1lQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbGlkZXI6IHtcbiAgICAgICAgbWluOiB0aGlzLnN0YXRlLnNsaWRlci5taW4sXG4gICAgICAgIG1heDogdGhpcy5zdGF0ZS5zbGlkZXIubWF4LFxuICAgICAgICBzdGVwOiB0aGlzLnN0YXRlLnNsaWRlci5zdGVwLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zbGlkZXIudmFsdWUgLSB0aGlzLnN0YXRlLnRpbWVTY2FsZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe25vZGVzTG9hZGluZzogdHJ1ZX0pO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo3NTAwL2FwaS92MS4wL2VtdWxhdGlvbnMvJHt0aGlzLnN0YXRlLmVtdWxhdGlvbklkfWApO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICBjb25zdCBmaXJzdFRpbWVzdGFtcCA9IHBhcnNlRmxvYXQocmVzLmRhdGEuYmxvY2tzWzBdLmJsb2NrLmFkb3B0ZWQpO1xuICAgIGNvbnN0IGxhc3RUaW1lc3RhbXAgPSBwYXJzZUZsb2F0KHJlcy5kYXRhLmJsb2Nrc1tyZXMuZGF0YS5ibG9ja3MubGVuZ3RoLTFdLmJsb2NrLmFkb3B0ZWQpO1xuICAgIGNvbnN0IGRpZmYgPSBsYXN0VGltZXN0YW1wIC0gZmlyc3RUaW1lc3RhbXA7XG5cbiAgICBsZXQgbWF4TG9jYWxEaWZmID0gMDtcbiAgICBmb3IgKGxldCBoZWlnaHQgPSAwOyBoZWlnaHQgPCByZXMuZGF0YS5lbXVsYXRpb24uaXRlcmF0aW9uczsgaGVpZ2h0ICs9IDEpIHtcbiAgICAgIGNvbnN0IGJsb2NrcyA9IHJlcy5kYXRhLmJsb2Nrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suaGVpZ2h0ID09PSBoZWlnaHQpO1xuICAgICAgY29uc3QgbG9jYWxEaWZmID0gYmxvY2tzW2Jsb2Nrcy5sZW5ndGggLSAxXS5ibG9jay5hZG9wdGVkIC0gYmxvY2tzWzBdLmJsb2NrLmFkb3B0ZWQ7ICAgICAgXG4gICAgICBtYXhMb2NhbERpZmYgPSBsb2NhbERpZmYgPiBtYXhMb2NhbERpZmYgPyBsb2NhbERpZmYgOiBtYXhMb2NhbERpZmY7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ21heExvY2FsRGlmZicsIG1heExvY2FsRGlmZik7XG4gICAgXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICBub2Rlc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgZW11bGF0aW9uOiByZXMuZGF0YS5lbXVsYXRpb24sXG4gICAgICBwcm92aWRlcnM6IHJlcy5kYXRhLnByb3ZpZGVycyxcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IGZpcnN0VGltZXN0YW1wLFxuICAgICAgICBtYXg6IGxhc3RUaW1lc3RhbXAsXG4gICAgICAgIHN0ZXA6IGRpZmYvMTAwLFxuICAgICAgICB2YWx1ZTogZmlyc3RUaW1lc3RhbXAsXG4gICAgICB9LFxuICAgICAgbWF4TG9jYWxEaWZmOiBtYXhMb2NhbERpZmYsXG4gICAgICBibG9ja3M6IHtcbiAgICAgICAgbGlzdDogcmVzLnN0YXR1cyA9PT0gMjA0ID8gW10gOiByZXMuZGF0YS5ibG9ja3NcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1hcmtlcnMgPSB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0ID09PSBmYWxzZSA/IG51bGwgOlxuICAgICAgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdFxuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmJsb2NrLmFkb3B0ZWQgPD0gdGhpcy5zdGF0ZS5zbGlkZXIudmFsdWUpXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IG1heEhlaWdodCA9IC0xO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0Lmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdFtpXS5ibG9jay5ub2RlSWQgPT09IGl0ZW0uYmxvY2subm9kZUlkICYmIFxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0W2ldLmJsb2NrLmFkb3B0ZWQgPD0gdGhpcy5zdGF0ZS5zbGlkZXIudmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBtYXhIZWlnaHQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaXRlbS5ibG9jay5oZWlnaHQgPT09IG1heEhlaWdodDtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICBrZXk9e2BtYXJrZXJfJHtpbmRleH1gfVxuICAgICAgICAgICAgbGF0PXtpdGVtLmNpdHkubGF0fVxuICAgICAgICAgICAgbG5nPXtpdGVtLmNpdHkubG5nfVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9eydIZWxsbywgUmVhY3QgOiknfVxuICAgICAgICAgICAgaWNvbj17aXRlbS5ibG9jay5wcm92aWRlciA9PT0gaXRlbS5ibG9jay5ub2RlSWQgP1xuICAgICAgICAgICAgICAnaHR0cDovL2NoYXJ0LmFwaXMuZ29vZ2xlLmNvbS9jaGFydD9jaHN0PWRfbWFwX3hwaW5fbGV0dGVyJmNobGQ9cGluX3N0YXJ8JyArIGl0ZW0uYmxvY2suaGVpZ2h0ICsgJ3wnICsgdGhpcy5zdGF0ZS5wcm92aWRlcnNbaXRlbS5ibG9jay5wcm92aWRlcl1baXRlbS5ibG9jay5oZWlnaHRdICsgJ3wwMDB8RkYwJyA6IFxuICAgICAgICAgICAgICAnaHR0cDovL2NoYXJ0LmFwaXMuZ29vZ2xlLmNvbS9jaGFydD9jaHN0PWRfbWFwX3Bpbl9sZXR0ZXImY2hsZD0nICsgaXRlbS5ibG9jay5oZWlnaHQgKyAnfCcgKyB0aGlzLnN0YXRlLnByb3ZpZGVyc1tpdGVtLmJsb2NrLnByb3ZpZGVyXVtpdGVtLmJsb2NrLmhlaWdodF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgKVxuICAgIClcbiAgICBcbiAgICAvLyBjb25zdCBMaW5lQ2hhcnQgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqc1wiKS5MaW5lO1xuICAgIFxuXG4gICAgLy8gbGV0IG1pblplcm9IZWlnaHRBZG9wdGVkID0gMDtcbiAgICAvLyBsZXQgbWF4WmVyb0hlaWdodEFkb3B0ZWQgPSAwO1xuICAgIC8vIGxldCB6ZXJvRGF0YSA9IFtdO1xuXG4gICAgLy8gbGV0IGhlaWdodERhdGEgPSB0aGlzLnN0YXRlLmVtdWxhdGlvbiA/IEFycmF5KHRoaXMuc3RhdGUuZW11bGF0aW9uLml0ZXJhdGlvbnMpLmZpbGwoMCk6IG51bGxcbiAgICAvLyB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0ID8gXG4gICAgLy8gICB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0XG4gICAgLy8gICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suaGVpZ2h0ID09PSAwKVxuICAgIC8vICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIC8vICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgbWluWmVyb0hlaWdodEFkb3B0ZWQgPSBpdGVtLmJsb2NrLmFkb3B0ZWQ7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICAgIG1pblplcm9IZWlnaHRBZG9wdGVkID0gbWluWmVyb0hlaWdodEFkb3B0ZWQgPCBpdGVtLmJsb2NrLmFkb3B0ZWQgPyBtaW5aZXJvSGVpZ2h0QWRvcHRlZCA6IGl0ZW0uYmxvY2suYWRvcHRlZDtcbiAgICAvLyAgICAgICBtYXhaZXJvSGVpZ2h0QWRvcHRlZCA9IG1pblplcm9IZWlnaHRBZG9wdGVkID4gaXRlbS5ibG9jay5hZG9wdGVkID8gbWluWmVyb0hlaWdodEFkb3B0ZWQgOiBpdGVtLmJsb2NrLmFkb3B0ZWQ7XG4gICAgICAgICAgXG4gICAgLy8gfSkgOiBudWxsXG5cbiAgICAvLyBjb25zdCBkaWZmID0gbWF4WmVyb0hlaWdodEFkb3B0ZWQtbWluWmVyb0hlaWdodEFkb3B0ZWQ7XG4gICAgXG4gICAgXG4gICAgLy8gaWYgKHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QpIHtcbiAgICAvLyAgIGxldCBibG9ja3NRdHkgPSAwO1xuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZGlmZi8xMCkrNDsgaSArPSAxKSB7XG4gICAgLy8gICAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RcbiAgICAvLyAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmJsb2NrLmhlaWdodCA9PT0gMClcbiAgICAvLyAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmJsb2NrLmFkb3B0ZWQgPiBtaW5aZXJvSGVpZ2h0QWRvcHRlZCArIGkqMTApXG4gICAgLy8gICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5hZG9wdGVkIDw9IG1pblplcm9IZWlnaHRBZG9wdGVkICsgKGkrMSkqMTApXG4gICAgLy8gICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAvLyAgICAgICAgIGJsb2Nrc1F0eSArPSAxO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgKVxuICAgIC8vICAgICB6ZXJvRGF0YS5wdXNoKGJsb2Nrc1F0eSlcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgXG5cbiAgICAvLyBjb25zdCB6ZXJvSGVpZ2h0ID0gdGhpcy5zdGF0ZS5lbXVsYXRpb24gPyB7XG4gICAgLy8gICBsYWJlbHM6IEFycmF5LmFwcGx5KG51bGwsIHtsZW5ndGg6IChkaWZmLzEwKSs0fSkubWFwKE51bWJlci5jYWxsLCBOdW1iZXIpLFxuICAgIC8vICAgZGF0YXNldHM6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGZpbGxDb2xvcjogXCJyZ2JhKDE1MSwxODcsMjA1LDAuMilcIixcbiAgICAvLyAgICAgICBzdHJva2VDb2xvcjogXCJyZ2JhKDE1MSwxODcsMjA1LDEpXCIsXG4gICAgLy8gICAgICAgcG9pbnRDb2xvcjogXCJyZ2JhKDE1MSwxODcsMjA1LDEpXCIsXG4gICAgLy8gICAgICAgcG9pbnRTdHJva2VDb2xvcjogXCIjZmZmXCIsXG4gICAgLy8gICAgICAgcG9pbnRIaWdobGlnaHRGaWxsOiBcIiNmZmZcIixcbiAgICAvLyAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogXCJyZ2JhKDE1MSwxODcsMjA1LDEpXCIsXG4gICAgLy8gICAgICAgZGF0YTogemVyb0RhdGFcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXVxuICAgIC8vIH0gOiBudWxsXG5cblxuICAgIGxldCBnSGVpZ2h0RGF0YSA9IFtbXCJIZWlnaHRcIixcIkJsb2Nrc1wiLCB7cm9sZTonc3R5bGUnfV1dXG4gICAgbGV0IGdMaW5lRGF0YSA9IFtbJ1RpbWUgRGlmZicsICdIZWlnaHQgMCddXVxuICAgIFxuICAgIGlmICh0aGlzLnN0YXRlLmVtdWxhdGlvbikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmVtdWxhdGlvbi5pdGVyYXRpb25zOyBpICs9IDEpIHtcbiAgICAgICAgZ0hlaWdodERhdGEucHVzaChbJ0hlaWdodCAnICsgaSwgMCwgJ3N0cm9rZS1jb2xvcjogIzBENDdBMTsgc3Ryb2tlLW9wYWNpdHk6IDAuNjsgc3Ryb2tlLXdpZHRoOiAxOyBmaWxsLWNvbG9yOiAjMjE5NkYzOyBmaWxsLW9wYWNpdHk6IDAuMiddKVxuICAgICAgICAvLyBnTGluZURhdGFbMF0ucHVzaCgnSGVpZ2h0ICcgKyBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBnSGVpZ2h0RGF0YSAmJiB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0ID8gXG4gICAgICB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0XG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suYWRvcHRlZCA8PSB0aGlzLnN0YXRlLnNsaWRlci52YWx1ZSlcbiAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBnSGVpZ2h0RGF0YVtpdGVtLmJsb2NrLmhlaWdodCsxXVsxXSArPSAxXG4gICAgICAgICAgaWYgKGl0ZW0uYmxvY2suaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgZ0hlaWdodERhdGFbaXRlbS5ibG9jay5oZWlnaHRdWzFdIC09IDFcbiAgICAgICAgICB9XG4gICAgfSkgOiBudWxsXG5cbiAgICAvLyBjb25zb2xlLmxvZyhnTGluZURhdGEpO1xuICAgIC8vIGNvbnN0IGRpZmYgPSB0aGlzLnN0YXRlLnNsaWRlci5tYXgtdGhpcy5zdGF0ZS5zbGlkZXIubWluO1xuICAgIGxldCBibG9ja3NRdHkgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRoaXMuc3RhdGUubWF4TG9jYWxEaWZmKS8xMDsgaSArPSAxKSB7XG4gICAgICBsZXQgcm93ID0gW2kqMTBdO1xuICAgIC8vICAgZm9yIChsZXQgaGVpZ2h0ID0gMDsgaGVpZ2h0IDwgdGhpcy5zdGF0ZS5lbXVsYXRpb24uaXRlcmF0aW9uczsgaGVpZ2h0ICs9IDEpIHtcbiAgICAgICAgLy8gbGV0IGJsb2Nrc1F0eSA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RcbiAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmJsb2NrLmhlaWdodCA9PT0gMClcbiAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmJsb2NrLmFkb3B0ZWQgPiB0aGlzLnN0YXRlLnNsaWRlci5taW4gKyBpKjEwKVxuICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suYWRvcHRlZCA8PSB0aGlzLnN0YXRlLnNsaWRlci5taW4gKyAoaSsxKSoxMClcbiAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYmxvY2tzUXR5ICs9IDE7XG4gICAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coYmxvY2tzUXR5KTtcbiAgICAgICAgXG4gICAgICAgIHJvdy5wdXNoKGJsb2Nrc1F0eSk7XG4gICAgLy8gICB9XG4gICAgICBnTGluZURhdGEucHVzaChyb3cpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKGdMaW5lRGF0YSk7XG4gICAgXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XG4gICAgICAgIFxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8aDE+RW11bGF0aW9uIG1hcDwvaDE+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9kZXNMb2FkaW5nID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydub2Rlc0xvYWRpbmdJbmZvJ30+XG4gICAgICAgICAgICAgICAgICA8QWxlcnQgYnNTdHlsZT1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHdhaXQuIExvYWRpbmcgbm9kZXMgbGlzdCBpbiBwcm9ncmVzcy4uLlxuICAgICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIGxnPXs4fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdCA9PT0gZmFsc2UgfHwgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdC5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNsaWRlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNsaWRlfVxuICAgICAgICAgICAgICAgICAgbWluPXt0aGlzLnN0YXRlLnNsaWRlci5taW59XG4gICAgICAgICAgICAgICAgICBtYXg9e3RoaXMuc3RhdGUuc2xpZGVyLm1heH1cbiAgICAgICAgICAgICAgICAgIHN0ZXA9e3RoaXMuc3RhdGUuc2xpZGVyLnN0ZXB9XG4gICAgICAgICAgICAgICAgICBmb3JtYXQ9e3RoaXMuYXNkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPXs0fSBzdHlsZT17e3BhZGRpbmdCb3R0b206ICcyZW0nfX0+XG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgYnNTaXplPVwibGFyZ2VcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAyMH19PlxuICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gXG4gICAgICAgICAgICAgICAgdGl0bGU9ezxHbHlwaGljb24gZ2x5cGg9XCJ0aW1lXCI+PHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OiAyMH19Pnt0aGlzLnN0YXRlLnRpbWVTY2FsZX0gbXM8L3NwYW4+PC9HbHlwaGljb24+fSBcbiAgICAgICAgICAgICAgICBic1NpemU9XCJsYXJnZVwiIFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnVwZGF0ZVRpbWVTY2FsZX1cbiAgICAgICAgICAgICAgICBpZD1cInRpbWUtc2NhbGUtZHJvcGRvd25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsxMH0+MTAgbXM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17NTB9PjUwIG1zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezEwMH0+MTAwIG1zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezIwMH0+MjAwIG1zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezUwMH0+NTAwIG1zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezEwMDB9PjEwMDAgbXM8L01lbnVJdGVtPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1YlRpbWVDbGlja30+PEdseXBoaWNvbiBnbHlwaD1cIm1pbnVzXCIgLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRpbWVDbGlja30+PEdseXBoaWNvbiBnbHlwaD1cInBsdXNcIiAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cblxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGJzU2l6ZT1cImxhcmdlXCIgPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3ViVGltZUNsaWNrfSBvbkNsaWNrPXt0aGlzLnRvU3RhcnR9PjxHbHlwaGljb24gZ2x5cGg9XCJzdGVwLWJhY2t3YXJkXCIgLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRpbWVDbGlja30gb25DbGljaz17dGhpcy50b2dnbGVQbGF5aW5nfT48R2x5cGhpY29uIGdseXBoPXt0aGlzLnN0YXRlLmlzUGxheWluZyA/ICdwYXVzZScgOiAncGxheSd9IC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRUaW1lQ2xpY2t9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlUmVwZWFlZH0gYWN0aXZlPXt0aGlzLnN0YXRlLnJlcGVhdGVkfT48R2x5cGhpY29uIGdseXBoPVwicmVwZWF0XCIgLz48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbGc9ezh9PlxuICAgICAgICAgICAgPEdtYXBzXG4gICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgICAgIGhlaWdodD17JzYwMHB4J31cbiAgICAgICAgICAgICAgbGF0PXsyMH1cbiAgICAgICAgICAgICAgbG5nPXsyMH1cbiAgICAgICAgICAgICAgem9vbT17Mn1cbiAgICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2U9eydMb2FkaW5nLi4uJ31cbiAgICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICAgIG9uTWFwQ3JlYXRlZD17dGhpcy5vbk1hcENyZWF0ZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttYXJrZXJzfVxuICAgICAgICAgICAgPC9HbWFwcz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPXs0fSA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuZW11bGF0aW9uID8gKFxuICAgICAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiQ29sdW1uQ2hhcnRcIlxuICAgICAgICAgICAgICAgICAgZGF0YT17Z0hlaWdodERhdGF9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiQmxvY2tzIGJ5IGhlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBiYXI6e1xuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwV2lkdGg6XCI5MCVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGFydEFyZWE6IHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwJScsIFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOntcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjp7XG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdvdXQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2QXhpczoge21pblZhbHVlOiB0aGlzLnN0YXRlLmVtdWxhdGlvbi5ub2Rlc1F0eX1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMjUwcHgnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbXVsYXRpb24gPyAoXG4gICAgICAgICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJMaW5lQ2hhcnRcIlxuICAgICAgICAgICAgICAgICAgZGF0YT17Z0xpbmVEYXRhfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJCbG9jayBhZG9wdGlvbiBieSBoZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYmFyOntcbiAgICAgICAgICAgICAgICAgICAgICBncm91cFdpZHRoOlwiOTAlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRBcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLCBcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDp7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246e1xuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaEF4aXM6e1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiVGltZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZBeGlzOntcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcImJsb2Nrc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlOiB0aGlzLnN0YXRlLmVtdWxhdGlvbi5ub2Rlc1F0eVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzI1MHB4J31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuZW11bGF0aW9uID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDI+QmxvY2tzIGFkb3B0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3plcm9IZWlnaHR9IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfSBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6ICdMb2FkaW5nIGNoYXJ0Li4uJ1xuICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDAnKTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW46IDFlbSAwIDFlbSAwIDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYubm9kZXNMb2FkaW5nSW5mbyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAyZW07XG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJhbmdlc2xpZGVyX19oYW5kbGUtdG9vbHRpcCB7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHghaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=pages/emulation.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(params, 'params', '/opt/web/pages/emulation.js');
  reactHotLoader.register(_default, 'default', '/opt/web/pages/emulation.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/emulation")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.2315978795c4047c343a.hot-update.js.map