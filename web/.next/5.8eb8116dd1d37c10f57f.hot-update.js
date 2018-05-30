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
        }, 40);

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
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-462698131{font-family:\'Open Sans\',sans-serif;color:#333;}h1.jsx-462698131{font-size:4em;font-weight:400;margin:1em 0 1em 0;}h2.jsx-462698131{margin:0 0 1em 0;font-weight:300;}h3.jsx-462698131{margin-top:1em;}div.nodesLoadingInfo.jsx-462698131{position:absolute;bottom:2em;right:2em;width:240px;}.rangeslider__handle-tooltip.jsx-462698131{width:200px!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtdWxhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Z0JvQixBQUV1RixBQUN4QyxBQUlwQixBQU1HLEFBS0YsQUFJRyxBQU9JLGNBckJOLENBV2xCLEVBTGtCLENBU0wsSUFPYixPQU5ZLENBZlUsR0FNdEIsRUFYVyxJQXFCRyxPQU9oQixHQXRCRSxFQWdCQSIsImZpbGUiOiJwYWdlcy9lbXVsYXRpb24uanMiLCJzb3VyY2VSb290IjoiL29wdC93ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgR21hcHMsIE1hcmtlciwgSW5mb1dpbmRvdywgQ2lyY2xlIH0gZnJvbSAncmVhY3QtZ21hcHMnO1xuaW1wb3J0IHsgR3JpZCwgUm93LCBDb2wsIEFsZXJ0LCBCdXR0b25Hcm91cCwgQnV0dG9uLCBNZW51SXRlbSwgRHJvcGRvd25CdXR0b24sIEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXJhbmdlc2xpZGVyJztcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJ3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3MnXG4vLyBpbXBvcnQgc3R5bGVzaGVldCBmcm9tICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAncmVhY3QtZ29vZ2xlLWNoYXJ0cyc7XG5cblxuY29uc3QgcGFyYW1zID0ge3Y6ICczLmV4cCcsIGtleTogJ0FJemFTeURyMllGZHpUVk01SkpzYVljRmN1WHBjNHVKQmFJY2t0ayd9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLm9uTWFya2VyQ2xpY2sgPSB0aGlzLm9uTWFya2VyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZFRpbWVDbGljayA9IHRoaXMuYWRkVGltZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJUaW1lQ2xpY2sgPSB0aGlzLnN1YlRpbWVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVGltZVNjYWxlID0gdGhpcy51cGRhdGVUaW1lU2NhbGUuYmluZCh0aGlzKVxuXG4gICAgdGhpcy50b2dnbGVQbGF5aW5nID0gdGhpcy50b2dnbGVQbGF5aW5nLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5zdGFydFBsYXlpbmcgPSB0aGlzLnN0YXJ0UGxheWluZy5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuc3RvcFBsYXlpbmcgPSB0aGlzLnN0b3BQbGF5aW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVSZXBlYWVkID0gdGhpcy50b2dnbGVSZXBlYWVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b1N0YXJ0ID0gdGhpcy50b1N0YXJ0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uU2xpZGUgPSB0aGlzLm9uU2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFzZCA9IHRoaXMuYXNkLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW11bGF0aW9uSWQ6IHByb3BzLnVybC5xdWVyeS5pZCxcbiAgICAgIGVtdWxhdGlvbjogZmFsc2UsXG4gICAgICBub2Rlc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgdGltZVNjYWxlOiAxMDAsXG4gICAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgICAgcmVwZWF0ZWQ6IGZhbHNlLFxuICAgICAgcGxheWVyOiBmYWxzZSxcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IGZhbHNlLFxuICAgICAgICBtYXg6IGZhbHNlLFxuICAgICAgICBzdGVwOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgYmxvY2tzOiB7XG4gICAgICAgIGxpc3Q6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgcHJvdmlkZXJzOiBmYWxzZSxcbiAgICAgIG1heExvY2FsRGlmZjogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uU2xpZGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IHRoaXMuc3RhdGUuc2xpZGVyLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLnN0YXRlLnNsaWRlci5tYXgsXG4gICAgICAgIHN0ZXA6IHRoaXMuc3RhdGUuc2xpZGVyLnN0ZXAsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhc2QodmFsdWUpIHtcbiAgICByZXR1cm4oXG4gICAgICA8cD4re01hdGgucm91bmQodmFsdWUtdGhpcy5zdGF0ZS5zbGlkZXIubWluKX0gbXM8L3A+XG4gICAgKVxuICB9XG5cbiAgLy8gb25NYXJrZXJDbGljayhibG9ja0lkKSB7ICAgIFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RbaV0uYmxvY2suaWQgPT09IGJsb2NrSWQpIHtcbiAgLy8gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5ibG9ja3MubGlzdFtpXS5ibG9jayk7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgIGJsb2NrOiB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0W2ldLmJsb2NrXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG5cbiAgdXBkYXRlVGltZVNjYWxlKHZhbHVlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpbWVTY2FsZTogdmFsdWVcbiAgICB9KVxuICB9XG5cblxuICBhZGRUaW1lQ2xpY2soKSB7ICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVyOiB7XG4gICAgICAgIG1pbjogdGhpcy5zdGF0ZS5zbGlkZXIubWluLFxuICAgICAgICBtYXg6IHRoaXMuc3RhdGUuc2xpZGVyLm1heCxcbiAgICAgICAgc3RlcDogdGhpcy5zdGF0ZS5zbGlkZXIuc3RlcCxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlICsgdGhpcy5zdGF0ZS50aW1lU2NhbGVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdG9nZ2xlUGxheWluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzUGxheWluZzogIXRoaXMuc3RhdGUuaXNQbGF5aW5nXG4gICAgfSlcblxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGxheWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUucGxheWVyKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBsYXllcjogZmFsc2VcbiAgICAgIH0pXG4gICAgfSBlbHNle1xuICAgICAgY29uc3QgcGxheWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlID49IHRoaXMuc3RhdGUuc2xpZGVyLm1heCkgeyAgICAgXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVwZWF0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzbGlkZXI6IHtcbiAgICAgICAgICAgICAgICBtaW46IHRoaXMuc3RhdGUuc2xpZGVyLm1pbixcbiAgICAgICAgICAgICAgICBtYXg6IHRoaXMuc3RhdGUuc2xpZGVyLm1heCxcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnN0YXRlLnNsaWRlci5zdGVwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnNsaWRlci5taW5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLnBsYXllcilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBwbGF5ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICBpc1BsYXlpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNsaWRlcjoge1xuICAgICAgICAgICAgbWluOiB0aGlzLnN0YXRlLnNsaWRlci5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMuc3RhdGUuc2xpZGVyLm1heCxcbiAgICAgICAgICAgIHN0ZXA6IHRoaXMuc3RhdGUuc2xpZGVyLnN0ZXAsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zbGlkZXIudmFsdWUgKyB0aGlzLnN0YXRlLnNsaWRlci5zdGVwLzJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgfSwgNDApXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwbGF5ZXI6IHBsYXllclxuICAgICAgfSlcbiAgICB9XG4gICAgXG4gIH1cblxuICB0b2dnbGVSZXBlYWVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVwZWF0ZWQ6ICF0aGlzLnN0YXRlLnJlcGVhdGVkXG4gICAgfSlcbiAgfVxuXG4gIHRvU3RhcnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbGlkZXI6IHtcbiAgICAgICAgbWluOiB0aGlzLnN0YXRlLnNsaWRlci5taW4sXG4gICAgICAgIG1heDogdGhpcy5zdGF0ZS5zbGlkZXIubWF4LFxuICAgICAgICBzdGVwOiB0aGlzLnN0YXRlLnNsaWRlci5zdGVwLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zbGlkZXIubWluXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN1YlRpbWVDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IHRoaXMuc3RhdGUuc2xpZGVyLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLnN0YXRlLnNsaWRlci5tYXgsXG4gICAgICAgIHN0ZXA6IHRoaXMuc3RhdGUuc2xpZGVyLnN0ZXAsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnNsaWRlci52YWx1ZSAtIHRoaXMuc3RhdGUudGltZVNjYWxlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bm9kZXNMb2FkaW5nOiB0cnVlfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjc1MDAvYXBpL3YxLjAvZW11bGF0aW9ucy8ke3RoaXMuc3RhdGUuZW11bGF0aW9uSWR9YCk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIGNvbnN0IGZpcnN0VGltZXN0YW1wID0gcGFyc2VGbG9hdChyZXMuZGF0YS5ibG9ja3NbMF0uYmxvY2suYWRvcHRlZCk7XG4gICAgY29uc3QgbGFzdFRpbWVzdGFtcCA9IHBhcnNlRmxvYXQocmVzLmRhdGEuYmxvY2tzW3Jlcy5kYXRhLmJsb2Nrcy5sZW5ndGgtMV0uYmxvY2suYWRvcHRlZCk7XG4gICAgY29uc3QgZGlmZiA9IGxhc3RUaW1lc3RhbXAgLSBmaXJzdFRpbWVzdGFtcDtcblxuICAgIGxldCBtYXhMb2NhbERpZmYgPSAwO1xuICAgIGZvciAobGV0IGhlaWdodCA9IDA7IGhlaWdodCA8IHJlcy5kYXRhLmVtdWxhdGlvbi5pdGVyYXRpb25zOyBoZWlnaHQgKz0gMSkge1xuICAgICAgY29uc3QgYmxvY2tzID0gcmVzLmRhdGEuYmxvY2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5oZWlnaHQgPT09IGhlaWdodCk7XG4gICAgICBjb25zdCBsb2NhbERpZmYgPSBibG9ja3NbYmxvY2tzLmxlbmd0aCAtIDFdLmJsb2NrLmFkb3B0ZWQgLSBibG9ja3NbMF0uYmxvY2suYWRvcHRlZDsgICAgICBcbiAgICAgIG1heExvY2FsRGlmZiA9IGxvY2FsRGlmZiA+IG1heExvY2FsRGlmZiA/IGxvY2FsRGlmZiA6IG1heExvY2FsRGlmZjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnbWF4TG9jYWxEaWZmJywgbWF4TG9jYWxEaWZmKTtcbiAgICBcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIG5vZGVzTG9hZGluZzogZmFsc2UsXG4gICAgICBlbXVsYXRpb246IHJlcy5kYXRhLmVtdWxhdGlvbixcbiAgICAgIHByb3ZpZGVyczogcmVzLmRhdGEucHJvdmlkZXJzLFxuICAgICAgc2xpZGVyOiB7XG4gICAgICAgIG1pbjogZmlyc3RUaW1lc3RhbXAsXG4gICAgICAgIG1heDogbGFzdFRpbWVzdGFtcCxcbiAgICAgICAgc3RlcDogZGlmZi8xMDAsXG4gICAgICAgIHZhbHVlOiBmaXJzdFRpbWVzdGFtcCxcbiAgICAgIH0sXG4gICAgICBtYXhMb2NhbERpZmY6IG1heExvY2FsRGlmZixcbiAgICAgIGJsb2Nrczoge1xuICAgICAgICBsaXN0OiByZXMuc3RhdHVzID09PSAyMDQgPyBbXSA6IHJlcy5kYXRhLmJsb2Nrc1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWFya2VycyA9IHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QgPT09IGZhbHNlID8gbnVsbCA6XG4gICAgICB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0XG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suYWRvcHRlZCA8PSB0aGlzLnN0YXRlLnNsaWRlci52YWx1ZSlcbiAgICAgICAgLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gLTE7XG4gICAgICAgICAgXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QubGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0W2ldLmJsb2NrLm5vZGVJZCA9PT0gaXRlbS5ibG9jay5ub2RlSWQgJiYgXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RbaV0uYmxvY2suYWRvcHRlZCA8PSB0aGlzLnN0YXRlLnNsaWRlci52YWx1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG1heEhlaWdodCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpdGVtLmJsb2NrLmhlaWdodCA9PT0gbWF4SGVpZ2h0O1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgIGtleT17YG1hcmtlcl8ke2luZGV4fWB9XG4gICAgICAgICAgICBsYXQ9e2l0ZW0uY2l0eS5sYXR9XG4gICAgICAgICAgICBsbmc9e2l0ZW0uY2l0eS5sbmd9XG4gICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgY29udGVudD17J0hlbGxvLCBSZWFjdCA6KSd9XG4gICAgICAgICAgICBpY29uPXtpdGVtLmJsb2NrLnByb3ZpZGVyID09PSBpdGVtLmJsb2NrLm5vZGVJZCA/XG4gICAgICAgICAgICAgICdodHRwOi8vY2hhcnQuYXBpcy5nb29nbGUuY29tL2NoYXJ0P2Noc3Q9ZF9tYXBfeHBpbl9sZXR0ZXImY2hsZD1waW5fc3RhcnwnICsgaXRlbS5ibG9jay5oZWlnaHQgKyAnfCcgKyB0aGlzLnN0YXRlLnByb3ZpZGVyc1tpdGVtLmJsb2NrLnByb3ZpZGVyXVtpdGVtLmJsb2NrLmhlaWdodF0gKyAnfDAwMHxGRjAnIDogXG4gICAgICAgICAgICAgICdodHRwOi8vY2hhcnQuYXBpcy5nb29nbGUuY29tL2NoYXJ0P2Noc3Q9ZF9tYXBfcGluX2xldHRlciZjaGxkPScgKyBpdGVtLmJsb2NrLmhlaWdodCArICd8JyArIHRoaXMuc3RhdGUucHJvdmlkZXJzW2l0ZW0uYmxvY2sucHJvdmlkZXJdW2l0ZW0uYmxvY2suaGVpZ2h0XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gICAgKVxuICAgIFxuICAgIC8vIGNvbnN0IExpbmVDaGFydCA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzXCIpLkxpbmU7XG4gICAgXG5cbiAgICAvLyBsZXQgbWluWmVyb0hlaWdodEFkb3B0ZWQgPSAwO1xuICAgIC8vIGxldCBtYXhaZXJvSGVpZ2h0QWRvcHRlZCA9IDA7XG4gICAgLy8gbGV0IHplcm9EYXRhID0gW107XG5cbiAgICAvLyBsZXQgaGVpZ2h0RGF0YSA9IHRoaXMuc3RhdGUuZW11bGF0aW9uID8gQXJyYXkodGhpcy5zdGF0ZS5lbXVsYXRpb24uaXRlcmF0aW9ucykuZmlsbCgwKTogbnVsbFxuICAgIC8vIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QgPyBcbiAgICAvLyAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RcbiAgICAvLyAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5oZWlnaHQgPT09IDApXG4gICAgLy8gICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgLy8gICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgLy8gICAgICAgICBtaW5aZXJvSGVpZ2h0QWRvcHRlZCA9IGl0ZW0uYmxvY2suYWRvcHRlZDtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgbWluWmVyb0hlaWdodEFkb3B0ZWQgPSBtaW5aZXJvSGVpZ2h0QWRvcHRlZCA8IGl0ZW0uYmxvY2suYWRvcHRlZCA/IG1pblplcm9IZWlnaHRBZG9wdGVkIDogaXRlbS5ibG9jay5hZG9wdGVkO1xuICAgIC8vICAgICAgIG1heFplcm9IZWlnaHRBZG9wdGVkID0gbWluWmVyb0hlaWdodEFkb3B0ZWQgPiBpdGVtLmJsb2NrLmFkb3B0ZWQgPyBtaW5aZXJvSGVpZ2h0QWRvcHRlZCA6IGl0ZW0uYmxvY2suYWRvcHRlZDtcbiAgICAgICAgICBcbiAgICAvLyB9KSA6IG51bGxcblxuICAgIC8vIGNvbnN0IGRpZmYgPSBtYXhaZXJvSGVpZ2h0QWRvcHRlZC1taW5aZXJvSGVpZ2h0QWRvcHRlZDtcbiAgICBcbiAgICBcbiAgICAvLyBpZiAodGhpcy5zdGF0ZS5ibG9ja3MubGlzdCkge1xuICAgIC8vICAgbGV0IGJsb2Nrc1F0eSA9IDA7XG4gICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IChkaWZmLzEwKSs0OyBpICs9IDEpIHtcbiAgICAvLyAgICAgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdFxuICAgIC8vICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suaGVpZ2h0ID09PSAwKVxuICAgIC8vICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suYWRvcHRlZCA+IG1pblplcm9IZWlnaHRBZG9wdGVkICsgaSoxMClcbiAgICAvLyAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmJsb2NrLmFkb3B0ZWQgPD0gbWluWmVyb0hlaWdodEFkb3B0ZWQgKyAoaSsxKSoxMClcbiAgICAvLyAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIC8vICAgICAgICAgYmxvY2tzUXR5ICs9IDE7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICApXG4gICAgLy8gICAgIHplcm9EYXRhLnB1c2goYmxvY2tzUXR5KVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBcblxuICAgIC8vIGNvbnN0IHplcm9IZWlnaHQgPSB0aGlzLnN0YXRlLmVtdWxhdGlvbiA/IHtcbiAgICAvLyAgIGxhYmVsczogQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogKGRpZmYvMTApKzR9KS5tYXAoTnVtYmVyLmNhbGwsIE51bWJlciksXG4gICAgLy8gICBkYXRhc2V0czogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgZmlsbENvbG9yOiBcInJnYmEoMTUxLDE4NywyMDUsMC4yKVwiLFxuICAgIC8vICAgICAgIHN0cm9rZUNvbG9yOiBcInJnYmEoMTUxLDE4NywyMDUsMSlcIixcbiAgICAvLyAgICAgICBwb2ludENvbG9yOiBcInJnYmEoMTUxLDE4NywyMDUsMSlcIixcbiAgICAvLyAgICAgICBwb2ludFN0cm9rZUNvbG9yOiBcIiNmZmZcIixcbiAgICAvLyAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6IFwiI2ZmZlwiLFxuICAgIC8vICAgICAgIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiBcInJnYmEoMTUxLDE4NywyMDUsMSlcIixcbiAgICAvLyAgICAgICBkYXRhOiB6ZXJvRGF0YVxuICAgIC8vICAgICB9XG4gICAgLy8gICBdXG4gICAgLy8gfSA6IG51bGxcblxuXG4gICAgbGV0IGdIZWlnaHREYXRhID0gW1tcIkhlaWdodFwiLFwiQmxvY2tzXCIsIHtyb2xlOidzdHlsZSd9XV1cbiAgICBsZXQgZ0xpbmVEYXRhID0gW1snVGltZSBEaWZmJywgJ0hlaWdodCAwJ11dXG4gICAgXG4gICAgaWYgKHRoaXMuc3RhdGUuZW11bGF0aW9uKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZW11bGF0aW9uLml0ZXJhdGlvbnM7IGkgKz0gMSkge1xuICAgICAgICBnSGVpZ2h0RGF0YS5wdXNoKFsnSGVpZ2h0ICcgKyBpLCAwLCAnc3Ryb2tlLWNvbG9yOiAjMEQ0N0ExOyBzdHJva2Utb3BhY2l0eTogMC42OyBzdHJva2Utd2lkdGg6IDE7IGZpbGwtY29sb3I6ICMyMTk2RjM7IGZpbGwtb3BhY2l0eTogMC4yJ10pXG4gICAgICAgIC8vIGdMaW5lRGF0YVswXS5wdXNoKCdIZWlnaHQgJyArIGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIGdIZWlnaHREYXRhICYmIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QgPyBcbiAgICAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5hZG9wdGVkIDw9IHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlKVxuICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGdIZWlnaHREYXRhW2l0ZW0uYmxvY2suaGVpZ2h0KzFdWzFdICs9IDFcbiAgICAgICAgICBpZiAoaXRlbS5ibG9jay5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBnSGVpZ2h0RGF0YVtpdGVtLmJsb2NrLmhlaWdodF1bMV0gLT0gMVxuICAgICAgICAgIH1cbiAgICB9KSA6IG51bGxcblxuICAgIC8vIGNvbnNvbGUubG9nKGdMaW5lRGF0YSk7XG4gICAgLy8gY29uc3QgZGlmZiA9IHRoaXMuc3RhdGUuc2xpZGVyLm1heC10aGlzLnN0YXRlLnNsaWRlci5taW47XG4gICAgbGV0IGJsb2Nrc1F0eSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGhpcy5zdGF0ZS5tYXhMb2NhbERpZmYpLzEwOyBpICs9IDEpIHtcbiAgICAgIGxldCByb3cgPSBbaSoxMF07XG4gICAgLy8gICBmb3IgKGxldCBoZWlnaHQgPSAwOyBoZWlnaHQgPCB0aGlzLnN0YXRlLmVtdWxhdGlvbi5pdGVyYXRpb25zOyBoZWlnaHQgKz0gMSkge1xuICAgICAgICAvLyBsZXQgYmxvY2tzUXR5ID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdFxuICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suaGVpZ2h0ID09PSAwKVxuICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suYWRvcHRlZCA+IHRoaXMuc3RhdGUuc2xpZGVyLm1pbiArIGkqMTApXG4gICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5hZG9wdGVkIDw9IHRoaXMuc3RhdGUuc2xpZGVyLm1pbiArIChpKzEpKjEwKVxuICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBibG9ja3NRdHkgKz0gMTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhibG9ja3NRdHkpO1xuICAgICAgICBcbiAgICAgICAgcm93LnB1c2goYmxvY2tzUXR5KTtcbiAgICAvLyAgIH1cbiAgICAgIGdMaW5lRGF0YS5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coZ0xpbmVEYXRhKTtcbiAgICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cbiAgICAgICAgXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxoMT5FbXVsYXRpb24gbWFwPC9oMT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlc0xvYWRpbmcgPT09IGZhbHNlID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25vZGVzTG9hZGluZ0luZm8nfT5cbiAgICAgICAgICAgICAgICAgIDxBbGVydCBic1N0eWxlPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2Ugd2FpdC4gTG9hZGluZyBub2RlcyBsaXN0IGluIHByb2dyZXNzLi4uXG4gICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbGc9ezh9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0ID09PSBmYWxzZSB8fCB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0Lmxlbmd0aCA9PT0gMCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2xpZGVyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2xpZGV9XG4gICAgICAgICAgICAgICAgICBtaW49e3RoaXMuc3RhdGUuc2xpZGVyLm1pbn1cbiAgICAgICAgICAgICAgICAgIG1heD17dGhpcy5zdGF0ZS5zbGlkZXIubWF4fVxuICAgICAgICAgICAgICAgICAgc3RlcD17dGhpcy5zdGF0ZS5zbGlkZXIuc3RlcH1cbiAgICAgICAgICAgICAgICAgIGZvcm1hdD17dGhpcy5hc2R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbGc9ezR9IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogJzJlbSd9fT5cbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBic1NpemU9XCJsYXJnZVwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDIwfX0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBcbiAgICAgICAgICAgICAgICB0aXRsZT17PEdseXBoaWNvbiBnbHlwaD1cInRpbWVcIj48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6IDIwfX0+e3RoaXMuc3RhdGUudGltZVNjYWxlfSBtczwvc3Bhbj48L0dseXBoaWNvbj59IFxuICAgICAgICAgICAgICAgIGJzU2l6ZT1cImxhcmdlXCIgXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMudXBkYXRlVGltZVNjYWxlfVxuICAgICAgICAgICAgICAgIGlkPVwidGltZS1zY2FsZS1kcm9wZG93blwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezEwfT4xMCBtczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXs1MH0+NTAgbXM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17MTAwfT4xMDAgbXM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17MjAwfT4yMDAgbXM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17NTAwfT41MDAgbXM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17MTAwMH0+MTAwMCBtczwvTWVudUl0ZW0+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3ViVGltZUNsaWNrfT48R2x5cGhpY29uIGdseXBoPVwibWludXNcIiAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVGltZUNsaWNrfT48R2x5cGhpY29uIGdseXBoPVwicGx1c1wiIC8+PC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuXG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgYnNTaXplPVwibGFyZ2VcIiA+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zdWJUaW1lQ2xpY2t9IG9uQ2xpY2s9e3RoaXMudG9TdGFydH0+PEdseXBoaWNvbiBnbHlwaD1cInN0ZXAtYmFja3dhcmRcIiAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVGltZUNsaWNrfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVBsYXlpbmd9PjxHbHlwaGljb24gZ2x5cGg9e3RoaXMuc3RhdGUuaXNQbGF5aW5nID8gJ3BhdXNlJyA6ICdwbGF5J30gLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRpbWVDbGlja30gb25DbGljaz17dGhpcy50b2dnbGVSZXBlYWVkfSBhY3RpdmU9e3RoaXMuc3RhdGUucmVwZWF0ZWR9PjxHbHlwaGljb24gZ2x5cGg9XCJyZXBlYXRcIiAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBsZz17OH0+XG4gICAgICAgICAgICA8R21hcHNcbiAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgICAgICAgaGVpZ2h0PXsnNjAwcHgnfVxuICAgICAgICAgICAgICBsYXQ9ezIwfVxuICAgICAgICAgICAgICBsbmc9ezIwfVxuICAgICAgICAgICAgICB6b29tPXsyfVxuICAgICAgICAgICAgICBsb2FkaW5nTWVzc2FnZT17J0xvYWRpbmcuLi4nfVxuICAgICAgICAgICAgICBwYXJhbXM9e3BhcmFtc31cbiAgICAgICAgICAgICAgb25NYXBDcmVhdGVkPXt0aGlzLm9uTWFwQ3JlYXRlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21hcmtlcnN9XG4gICAgICAgICAgICA8L0dtYXBzPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbGc9ezR9ID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbXVsYXRpb24gPyAoXG4gICAgICAgICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJDb2x1bW5DaGFydFwiXG4gICAgICAgICAgICAgICAgICBkYXRhPXtnSGVpZ2h0RGF0YX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJCbG9ja3MgYnkgaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhcjp7XG4gICAgICAgICAgICAgICAgICAgICAgZ3JvdXBXaWR0aDpcIjkwJVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODAlJywgXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOlwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOntcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ291dCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZBeGlzOiB7bWluVmFsdWU6IHRoaXMuc3RhdGUuZW11bGF0aW9uLm5vZGVzUXR5fVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eycyNTBweCd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVtdWxhdGlvbiA/IChcbiAgICAgICAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkxpbmVDaGFydFwiXG4gICAgICAgICAgICAgICAgICBkYXRhPXtnTGluZURhdGF9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIkJsb2NrIGFkb3B0aW9uIGJ5IGhlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBiYXI6e1xuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwV2lkdGg6XCI5MCVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGFydEFyZWE6IHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzkwJScsIFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOntcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjp7XG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdvdXQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBoQXhpczp7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdkF4aXM6e1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWluVmFsdWU6IHRoaXMuc3RhdGUuZW11bGF0aW9uLm5vZGVzUXR5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMjUwcHgnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbXVsYXRpb24gPyAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMj5CbG9ja3MgYWRvcHRpb248L2gyPlxuICAgICAgICAgICAgICAgICAgPExpbmVDaGFydCBcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17emVyb0hlaWdodH0gXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogJ0xvYWRpbmcgY2hhcnQuLi4nXG4gICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDcwMCcpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogIzMzMztcblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIDAgMWVtIDAgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxZW0gMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdi5ub2Rlc0xvYWRpbmdJbmZvIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmFuZ2VzbGlkZXJfX2hhbmRsZS10b29sdGlwIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/emulation.js */'
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
//# sourceMappingURL=5.8eb8116dd1d37c10f57f.hot-update.js.map