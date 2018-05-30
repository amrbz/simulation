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
      adoptions: {
        list: false
      },
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
            lineNumber: 75
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
        var res, firstTimestamp, lastTimestamp, diff, maxLocalDiff, adoptions, _loop, height;

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
                adoptions = [];

                _loop = function _loop(height) {
                  var blocks = res.data.blocks.filter(function (item) {
                    return item.block.height === height;
                  });
                  var localDiff = blocks[blocks.length - 1].block.adopted - blocks[0].block.adopted;
                  maxLocalDiff = localDiff > maxLocalDiff ? localDiff : maxLocalDiff;
                  adoptions.push(blocks[0].block.adopte);
                };

                for (height = 0; height < res.data.emulation.iterations; height += 1) {
                  _loop(height);
                }

                console.log('adoptions', adoptions);

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
                  adoptions: {
                    list: adoptions
                  },
                  blocks: {
                    list: res.status === 204 ? [] : res.data.blocks
                  }
                });

              case 14:
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
            lineNumber: 251
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

      // if (this.state.adoptions.list) {
      // for (let i = 0; i < this.state.adoptions.list.length; i +=1) {
      var blocksQty = 0;

      var _loop2 = function _loop2(_i) {
        var row = [_i * 10];
        _this3.state.blocks.list
        // .filter((item) => item.block.adopted >= this.state.adoptions.list[i])
        .filter(function (item) {
          return item.block.adopted > _this3.state.slider.value + _i * 10;
        }).filter(function (item) {
          return item.block.adopted <= _this3.state.slider.value + (_i + 1) * 10;
        }).map(function (item, index) {
          blocksQty += 1;
        });

        console.log(blocksQty);

        row.push(blocksQty);
        // row.push(blocksQty-5 > 0 ? blocksQty -5 : 0);
        gLineData.push(row);
      };

      for (var _i = 0; _i < this.state.maxLocalDiff / 10; _i += 1) {
        _loop2(_i);
      }
      // }
      // }


      // console.log(gLineData);


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_10_react_rangeslider_lib_index_css___default.a }, __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          }
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 375
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 376
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-462698131',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 377
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
                  lineNumber: 380
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["a" /* Alert */],
                { bsStyle: 'warning', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 381
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
              lineNumber: 389
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 390
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
                lineNumber: 393
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            { lg: 4, style: { paddingBottom: '2em' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 405
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["c" /* ButtonGroup */],
              { bsSize: 'large', style: { marginRight: 20 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 406
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["f" /* DropdownButton */],
                {
                  title: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */],
                    { glyph: 'time', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 408
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'span',
                      { style: { marginLeft: 20 }, className: 'jsx-462698131',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 408
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
                    lineNumber: 407
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 10, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 413
                    }
                  },
                  '10 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 50, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 414
                    }
                  },
                  '50 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 100, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 415
                    }
                  },
                  '100 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 200, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 416
                    }
                  },
                  '200 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 500, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 417
                    }
                  },
                  '500 ms'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["j" /* MenuItem */],
                  { eventKey: 1000, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 418
                    }
                  },
                  '1000 ms'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                { onClick: this.subTimeClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 420
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: 'minus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 420
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                { onClick: this.addTimeClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 421
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: 'plus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 421
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["c" /* ButtonGroup */],
              { bsSize: 'large', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 424
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                (_React$createElement = { onClick: this.subTimeClick }, _defineProperty(_React$createElement, 'onClick', this.toStart), _defineProperty(_React$createElement, '__source', {
                  fileName: _jsxFileName,
                  lineNumber: 425
                }), _React$createElement),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: 'step-backward', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 425
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                (_React$createElement2 = { onClick: this.addTimeClick }, _defineProperty(_React$createElement2, 'onClick', this.togglePlaying), _defineProperty(_React$createElement2, '__source', {
                  fileName: _jsxFileName,
                  lineNumber: 426
                }), _React$createElement2),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: this.state.isPlaying ? 'pause' : 'play', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 426
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["b" /* Button */],
                (_React$createElement3 = { onClick: this.addTimeClick }, _defineProperty(_React$createElement3, 'onClick', this.toggleRepeaed), _defineProperty(_React$createElement3, 'active', this.state.repeated), _defineProperty(_React$createElement3, '__source', {
                  fileName: _jsxFileName,
                  lineNumber: 427
                }), _React$createElement3),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["i" /* Glyphicon */], { glyph: 'repeat', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 427
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
              lineNumber: 431
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 432
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
                  lineNumber: 433
                }
              },
              markers
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */],
            { lg: 4, __source: {
                fileName: _jsxFileName,
                lineNumber: 446
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
                lineNumber: 449
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
                lineNumber: 478
              }
            }) : null
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 533
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["d" /* Col */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 534
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '462698131',
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-462698131{font-family:\'Open Sans\',sans-serif;color:#333;}h1.jsx-462698131{font-size:4em;font-weight:400;margin:1em 0 1em 0;}h2.jsx-462698131{margin:0 0 1em 0;font-weight:300;}h3.jsx-462698131{margin-top:1em;}div.nodesLoadingInfo.jsx-462698131{position:absolute;bottom:2em;right:2em;width:240px;}.rangeslider__handle-tooltip.jsx-462698131{width:200px!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtdWxhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5aEJvQixBQUV1RixBQUN4QyxBQUlwQixBQU1HLEFBS0YsQUFJRyxBQU9JLGNBckJOLENBV2xCLEVBTGtCLENBU0wsSUFPYixPQU5ZLENBZlUsR0FNdEIsRUFYVyxJQXFCRyxPQU9oQixHQXRCRSxFQWdCQSIsImZpbGUiOiJwYWdlcy9lbXVsYXRpb24uanMiLCJzb3VyY2VSb290IjoiL29wdC93ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgR21hcHMsIE1hcmtlciwgSW5mb1dpbmRvdywgQ2lyY2xlIH0gZnJvbSAncmVhY3QtZ21hcHMnO1xuaW1wb3J0IHsgR3JpZCwgUm93LCBDb2wsIEFsZXJ0LCBCdXR0b25Hcm91cCwgQnV0dG9uLCBNZW51SXRlbSwgRHJvcGRvd25CdXR0b24sIEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXJhbmdlc2xpZGVyJztcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJ3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3MnXG4vLyBpbXBvcnQgc3R5bGVzaGVldCBmcm9tICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAncmVhY3QtZ29vZ2xlLWNoYXJ0cyc7XG5cblxuY29uc3QgcGFyYW1zID0ge3Y6ICczLmV4cCcsIGtleTogJ0FJemFTeURyMllGZHpUVk01SkpzYVljRmN1WHBjNHVKQmFJY2t0ayd9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLm9uTWFya2VyQ2xpY2sgPSB0aGlzLm9uTWFya2VyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZFRpbWVDbGljayA9IHRoaXMuYWRkVGltZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJUaW1lQ2xpY2sgPSB0aGlzLnN1YlRpbWVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVGltZVNjYWxlID0gdGhpcy51cGRhdGVUaW1lU2NhbGUuYmluZCh0aGlzKVxuXG4gICAgdGhpcy50b2dnbGVQbGF5aW5nID0gdGhpcy50b2dnbGVQbGF5aW5nLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5zdGFydFBsYXlpbmcgPSB0aGlzLnN0YXJ0UGxheWluZy5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuc3RvcFBsYXlpbmcgPSB0aGlzLnN0b3BQbGF5aW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVSZXBlYWVkID0gdGhpcy50b2dnbGVSZXBlYWVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b1N0YXJ0ID0gdGhpcy50b1N0YXJ0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uU2xpZGUgPSB0aGlzLm9uU2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFzZCA9IHRoaXMuYXNkLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW11bGF0aW9uSWQ6IHByb3BzLnVybC5xdWVyeS5pZCxcbiAgICAgIGVtdWxhdGlvbjogZmFsc2UsXG4gICAgICBub2Rlc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgdGltZVNjYWxlOiAxMDAsXG4gICAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgICAgcmVwZWF0ZWQ6IGZhbHNlLFxuICAgICAgcGxheWVyOiBmYWxzZSxcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IGZhbHNlLFxuICAgICAgICBtYXg6IGZhbHNlLFxuICAgICAgICBzdGVwOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgYmxvY2tzOiB7XG4gICAgICAgIGxpc3Q6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgYWRvcHRpb25zOiB7XG4gICAgICAgIGxpc3Q6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyczogZmFsc2UsXG4gICAgICBtYXhMb2NhbERpZmY6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvblNsaWRlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbGlkZXI6IHtcbiAgICAgICAgbWluOiB0aGlzLnN0YXRlLnNsaWRlci5taW4sXG4gICAgICAgIG1heDogdGhpcy5zdGF0ZS5zbGlkZXIubWF4LFxuICAgICAgICBzdGVwOiB0aGlzLnN0YXRlLnNsaWRlci5zdGVwLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYXNkKHZhbHVlKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPHA+K3tNYXRoLnJvdW5kKHZhbHVlLXRoaXMuc3RhdGUuc2xpZGVyLm1pbil9IG1zPC9wPlxuICAgIClcbiAgfVxuXG4gIC8vIG9uTWFya2VyQ2xpY2soYmxvY2tJZCkgeyAgICBcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmJsb2Nrcy5saXN0W2ldLmJsb2NrLmlkID09PSBibG9ja0lkKSB7XG4gIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RbaV0uYmxvY2spO1xuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgICBibG9jazogdGhpcy5zdGF0ZS5ibG9ja3MubGlzdFtpXS5ibG9ja1xuICAvLyAgICAgICB9KVxuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cblxuXG4gIHVwZGF0ZVRpbWVTY2FsZSh2YWx1ZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lU2NhbGU6IHZhbHVlXG4gICAgfSlcbiAgfVxuXG5cbiAgYWRkVGltZUNsaWNrKCkgeyAgICBcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IHRoaXMuc3RhdGUuc2xpZGVyLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLnN0YXRlLnNsaWRlci5tYXgsXG4gICAgICAgIHN0ZXA6IHRoaXMuc3RhdGUuc2xpZGVyLnN0ZXAsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnNsaWRlci52YWx1ZSArIHRoaXMuc3RhdGUudGltZVNjYWxlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZVBsYXlpbmcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1BsYXlpbmc6ICF0aGlzLnN0YXRlLmlzUGxheWluZ1xuICAgIH0pXG5cblxuICAgIGlmICh0aGlzLnN0YXRlLnBsYXllcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLnBsYXllcilcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwbGF5ZXI6IGZhbHNlXG4gICAgICB9KVxuICAgIH0gZWxzZXtcbiAgICAgIGNvbnN0IHBsYXllciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlci52YWx1ZSA+PSB0aGlzLnN0YXRlLnNsaWRlci5tYXgpIHsgICAgIFxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJlcGVhdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgc2xpZGVyOiB7XG4gICAgICAgICAgICAgICAgbWluOiB0aGlzLnN0YXRlLnNsaWRlci5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiB0aGlzLnN0YXRlLnNsaWRlci5tYXgsXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy5zdGF0ZS5zbGlkZXIuc3RlcCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zbGlkZXIubWluXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5wbGF5ZXIpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgcGxheWVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXNQbGF5aW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzbGlkZXI6IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5zdGF0ZS5zbGlkZXIubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLnN0YXRlLnNsaWRlci5tYXgsXG4gICAgICAgICAgICBzdGVwOiB0aGlzLnN0YXRlLnNsaWRlci5zdGVwLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlICsgdGhpcy5zdGF0ZS5zbGlkZXIuc3RlcC8yXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgIH0sIDEwMClcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBsYXllcjogcGxheWVyXG4gICAgICB9KVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHRvZ2dsZVJlcGVhZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZXBlYXRlZDogIXRoaXMuc3RhdGUucmVwZWF0ZWRcbiAgICB9KVxuICB9XG5cbiAgdG9TdGFydCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBtaW46IHRoaXMuc3RhdGUuc2xpZGVyLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLnN0YXRlLnNsaWRlci5tYXgsXG4gICAgICAgIHN0ZXA6IHRoaXMuc3RhdGUuc2xpZGVyLnN0ZXAsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnNsaWRlci5taW5cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3ViVGltZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVyOiB7XG4gICAgICAgIG1pbjogdGhpcy5zdGF0ZS5zbGlkZXIubWluLFxuICAgICAgICBtYXg6IHRoaXMuc3RhdGUuc2xpZGVyLm1heCxcbiAgICAgICAgc3RlcDogdGhpcy5zdGF0ZS5zbGlkZXIuc3RlcCxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlIC0gdGhpcy5zdGF0ZS50aW1lU2NhbGVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtub2Rlc0xvYWRpbmc6IHRydWV9KTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6NzUwMC9hcGkvdjEuMC9lbXVsYXRpb25zLyR7dGhpcy5zdGF0ZS5lbXVsYXRpb25JZH1gKTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgY29uc3QgZmlyc3RUaW1lc3RhbXAgPSBwYXJzZUZsb2F0KHJlcy5kYXRhLmJsb2Nrc1swXS5ibG9jay5hZG9wdGVkKTtcbiAgICBjb25zdCBsYXN0VGltZXN0YW1wID0gcGFyc2VGbG9hdChyZXMuZGF0YS5ibG9ja3NbcmVzLmRhdGEuYmxvY2tzLmxlbmd0aC0xXS5ibG9jay5hZG9wdGVkKTtcbiAgICBjb25zdCBkaWZmID0gbGFzdFRpbWVzdGFtcCAtIGZpcnN0VGltZXN0YW1wO1xuXG4gICAgbGV0IG1heExvY2FsRGlmZiA9IDA7XG4gICAgbGV0IGFkb3B0aW9ucyA9IFtdO1xuICAgIGZvciAobGV0IGhlaWdodCA9IDA7IGhlaWdodCA8IHJlcy5kYXRhLmVtdWxhdGlvbi5pdGVyYXRpb25zOyBoZWlnaHQgKz0gMSkge1xuICAgICAgY29uc3QgYmxvY2tzID0gcmVzLmRhdGEuYmxvY2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5oZWlnaHQgPT09IGhlaWdodCk7XG4gICAgICBjb25zdCBsb2NhbERpZmYgPSBibG9ja3NbYmxvY2tzLmxlbmd0aCAtIDFdLmJsb2NrLmFkb3B0ZWQgLSBibG9ja3NbMF0uYmxvY2suYWRvcHRlZDsgICAgICBcbiAgICAgIG1heExvY2FsRGlmZiA9IGxvY2FsRGlmZiA+IG1heExvY2FsRGlmZiA/IGxvY2FsRGlmZiA6IG1heExvY2FsRGlmZjtcbiAgICAgIGFkb3B0aW9ucy5wdXNoKGJsb2Nrc1swXS5ibG9jay5hZG9wdGUpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdhZG9wdGlvbnMnLCBhZG9wdGlvbnMpO1xuICAgIFxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgbm9kZXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVtdWxhdGlvbjogcmVzLmRhdGEuZW11bGF0aW9uLFxuICAgICAgcHJvdmlkZXJzOiByZXMuZGF0YS5wcm92aWRlcnMsXG4gICAgICBzbGlkZXI6IHtcbiAgICAgICAgbWluOiBmaXJzdFRpbWVzdGFtcCxcbiAgICAgICAgbWF4OiBsYXN0VGltZXN0YW1wLFxuICAgICAgICBzdGVwOiBkaWZmLzEwMCxcbiAgICAgICAgdmFsdWU6IGZpcnN0VGltZXN0YW1wLFxuICAgICAgfSxcbiAgICAgIG1heExvY2FsRGlmZjogbWF4TG9jYWxEaWZmLFxuICAgICAgYWRvcHRpb25zOiB7XG4gICAgICAgIGxpc3Q6IGFkb3B0aW9uc1xuICAgICAgfSxcbiAgICAgIGJsb2Nrczoge1xuICAgICAgICBsaXN0OiByZXMuc3RhdHVzID09PSAyMDQgPyBbXSA6IHJlcy5kYXRhLmJsb2Nrc1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWFya2VycyA9IHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QgPT09IGZhbHNlID8gbnVsbCA6XG4gICAgICB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0XG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suYWRvcHRlZCA8PSB0aGlzLnN0YXRlLnNsaWRlci52YWx1ZSlcbiAgICAgICAgLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gLTE7XG4gICAgICAgICAgXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QubGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJsb2Nrcy5saXN0W2ldLmJsb2NrLm5vZGVJZCA9PT0gaXRlbS5ibG9jay5ub2RlSWQgJiYgXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RbaV0uYmxvY2suYWRvcHRlZCA8PSB0aGlzLnN0YXRlLnNsaWRlci52YWx1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG1heEhlaWdodCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpdGVtLmJsb2NrLmhlaWdodCA9PT0gbWF4SGVpZ2h0O1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgIGtleT17YG1hcmtlcl8ke2luZGV4fWB9XG4gICAgICAgICAgICBsYXQ9e2l0ZW0uY2l0eS5sYXR9XG4gICAgICAgICAgICBsbmc9e2l0ZW0uY2l0eS5sbmd9XG4gICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgY29udGVudD17J0hlbGxvLCBSZWFjdCA6KSd9XG4gICAgICAgICAgICBpY29uPXtpdGVtLmJsb2NrLnByb3ZpZGVyID09PSBpdGVtLmJsb2NrLm5vZGVJZCA/XG4gICAgICAgICAgICAgICdodHRwOi8vY2hhcnQuYXBpcy5nb29nbGUuY29tL2NoYXJ0P2Noc3Q9ZF9tYXBfeHBpbl9sZXR0ZXImY2hsZD1waW5fc3RhcnwnICsgaXRlbS5ibG9jay5oZWlnaHQgKyAnfCcgKyB0aGlzLnN0YXRlLnByb3ZpZGVyc1tpdGVtLmJsb2NrLnByb3ZpZGVyXVtpdGVtLmJsb2NrLmhlaWdodF0gKyAnfDAwMHxGRjAnIDogXG4gICAgICAgICAgICAgICdodHRwOi8vY2hhcnQuYXBpcy5nb29nbGUuY29tL2NoYXJ0P2Noc3Q9ZF9tYXBfcGluX2xldHRlciZjaGxkPScgKyBpdGVtLmJsb2NrLmhlaWdodCArICd8JyArIHRoaXMuc3RhdGUucHJvdmlkZXJzW2l0ZW0uYmxvY2sucHJvdmlkZXJdW2l0ZW0uYmxvY2suaGVpZ2h0XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gICAgKVxuICAgIFxuICAgIC8vIGNvbnN0IExpbmVDaGFydCA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzXCIpLkxpbmU7XG4gICAgXG5cbiAgICAvLyBsZXQgbWluWmVyb0hlaWdodEFkb3B0ZWQgPSAwO1xuICAgIC8vIGxldCBtYXhaZXJvSGVpZ2h0QWRvcHRlZCA9IDA7XG4gICAgLy8gbGV0IHplcm9EYXRhID0gW107XG5cbiAgICAvLyBsZXQgaGVpZ2h0RGF0YSA9IHRoaXMuc3RhdGUuZW11bGF0aW9uID8gQXJyYXkodGhpcy5zdGF0ZS5lbXVsYXRpb24uaXRlcmF0aW9ucykuZmlsbCgwKTogbnVsbFxuICAgIC8vIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QgPyBcbiAgICAvLyAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RcbiAgICAvLyAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5oZWlnaHQgPT09IDApXG4gICAgLy8gICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgLy8gICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgLy8gICAgICAgICBtaW5aZXJvSGVpZ2h0QWRvcHRlZCA9IGl0ZW0uYmxvY2suYWRvcHRlZDtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgbWluWmVyb0hlaWdodEFkb3B0ZWQgPSBtaW5aZXJvSGVpZ2h0QWRvcHRlZCA8IGl0ZW0uYmxvY2suYWRvcHRlZCA/IG1pblplcm9IZWlnaHRBZG9wdGVkIDogaXRlbS5ibG9jay5hZG9wdGVkO1xuICAgIC8vICAgICAgIG1heFplcm9IZWlnaHRBZG9wdGVkID0gbWluWmVyb0hlaWdodEFkb3B0ZWQgPiBpdGVtLmJsb2NrLmFkb3B0ZWQgPyBtaW5aZXJvSGVpZ2h0QWRvcHRlZCA6IGl0ZW0uYmxvY2suYWRvcHRlZDtcbiAgICAgICAgICBcbiAgICAvLyB9KSA6IG51bGxcblxuICAgIC8vIGNvbnN0IGRpZmYgPSBtYXhaZXJvSGVpZ2h0QWRvcHRlZC1taW5aZXJvSGVpZ2h0QWRvcHRlZDtcbiAgICBcbiAgICBcbiAgICAvLyBpZiAodGhpcy5zdGF0ZS5ibG9ja3MubGlzdCkge1xuICAgIC8vICAgbGV0IGJsb2Nrc1F0eSA9IDA7XG4gICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IChkaWZmLzEwKSs0OyBpICs9IDEpIHtcbiAgICAvLyAgICAgdGhpcy5zdGF0ZS5ibG9ja3MubGlzdFxuICAgIC8vICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suaGVpZ2h0ID09PSAwKVxuICAgIC8vICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suYWRvcHRlZCA+IG1pblplcm9IZWlnaHRBZG9wdGVkICsgaSoxMClcbiAgICAvLyAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmJsb2NrLmFkb3B0ZWQgPD0gbWluWmVyb0hlaWdodEFkb3B0ZWQgKyAoaSsxKSoxMClcbiAgICAvLyAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIC8vICAgICAgICAgYmxvY2tzUXR5ICs9IDE7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICApXG4gICAgLy8gICAgIHplcm9EYXRhLnB1c2goYmxvY2tzUXR5KVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBcblxuICAgIC8vIGNvbnN0IHplcm9IZWlnaHQgPSB0aGlzLnN0YXRlLmVtdWxhdGlvbiA/IHtcbiAgICAvLyAgIGxhYmVsczogQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogKGRpZmYvMTApKzR9KS5tYXAoTnVtYmVyLmNhbGwsIE51bWJlciksXG4gICAgLy8gICBkYXRhc2V0czogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgZmlsbENvbG9yOiBcInJnYmEoMTUxLDE4NywyMDUsMC4yKVwiLFxuICAgIC8vICAgICAgIHN0cm9rZUNvbG9yOiBcInJnYmEoMTUxLDE4NywyMDUsMSlcIixcbiAgICAvLyAgICAgICBwb2ludENvbG9yOiBcInJnYmEoMTUxLDE4NywyMDUsMSlcIixcbiAgICAvLyAgICAgICBwb2ludFN0cm9rZUNvbG9yOiBcIiNmZmZcIixcbiAgICAvLyAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6IFwiI2ZmZlwiLFxuICAgIC8vICAgICAgIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiBcInJnYmEoMTUxLDE4NywyMDUsMSlcIixcbiAgICAvLyAgICAgICBkYXRhOiB6ZXJvRGF0YVxuICAgIC8vICAgICB9XG4gICAgLy8gICBdXG4gICAgLy8gfSA6IG51bGxcblxuXG4gICAgbGV0IGdIZWlnaHREYXRhID0gW1tcIkhlaWdodFwiLFwiQmxvY2tzXCIsIHtyb2xlOidzdHlsZSd9XV1cbiAgICBsZXQgZ0xpbmVEYXRhID0gW1snVGltZSBEaWZmJywgJ0hlaWdodCAwJ11dXG4gICAgXG4gICAgaWYgKHRoaXMuc3RhdGUuZW11bGF0aW9uKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZW11bGF0aW9uLml0ZXJhdGlvbnM7IGkgKz0gMSkge1xuICAgICAgICBnSGVpZ2h0RGF0YS5wdXNoKFsnSGVpZ2h0ICcgKyBpLCAwLCAnc3Ryb2tlLWNvbG9yOiAjMEQ0N0ExOyBzdHJva2Utb3BhY2l0eTogMC42OyBzdHJva2Utd2lkdGg6IDE7IGZpbGwtY29sb3I6ICMyMTk2RjM7IGZpbGwtb3BhY2l0eTogMC4yJ10pXG4gICAgICAgIC8vIGdMaW5lRGF0YVswXS5wdXNoKCdIZWlnaHQgJyArIGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIGdIZWlnaHREYXRhICYmIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QgPyBcbiAgICAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5hZG9wdGVkIDw9IHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlKVxuICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGdIZWlnaHREYXRhW2l0ZW0uYmxvY2suaGVpZ2h0KzFdWzFdICs9IDFcbiAgICAgICAgICBpZiAoaXRlbS5ibG9jay5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBnSGVpZ2h0RGF0YVtpdGVtLmJsb2NrLmhlaWdodF1bMV0gLT0gMVxuICAgICAgICAgIH1cbiAgICB9KSA6IG51bGxcblxuICAgIC8vIGNvbnNvbGUubG9nKGdMaW5lRGF0YSk7XG4gICAgLy8gY29uc3QgZGlmZiA9IHRoaXMuc3RhdGUuc2xpZGVyLm1heC10aGlzLnN0YXRlLnNsaWRlci5taW47XG5cbiAgICAvLyBpZiAodGhpcy5zdGF0ZS5hZG9wdGlvbnMubGlzdCkge1xuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmFkb3B0aW9ucy5saXN0Lmxlbmd0aDsgaSArPTEpIHtcbiAgICAgICAgbGV0IGJsb2Nrc1F0eSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRoaXMuc3RhdGUubWF4TG9jYWxEaWZmKS8xMDsgaSArPSAxKSB7XG4gICAgICAgICAgbGV0IHJvdyA9IFtpKjEwXTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3RcbiAgICAgICAgICAgICAgLy8gLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5hZG9wdGVkID49IHRoaXMuc3RhdGUuYWRvcHRpb25zLmxpc3RbaV0pXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYmxvY2suYWRvcHRlZCA+IHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlICsgaSoxMClcbiAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ibG9jay5hZG9wdGVkIDw9IHRoaXMuc3RhdGUuc2xpZGVyLnZhbHVlICsgKGkrMSkqMTApXG4gICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgYmxvY2tzUXR5ICs9IDE7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coYmxvY2tzUXR5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcm93LnB1c2goYmxvY2tzUXR5KTtcbiAgICAgICAgICAgIC8vIHJvdy5wdXNoKGJsb2Nrc1F0eS01ID4gMCA/IGJsb2Nrc1F0eSAtNSA6IDApO1xuICAgICAgICAgIGdMaW5lRGF0YS5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIC8vIH1cbiAgICAvLyB9XG4gICAgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhnTGluZURhdGEpO1xuICAgIFxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxuICAgICAgICBcbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGgxPkVtdWxhdGlvbiBtYXA8L2gxPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5vZGVzTG9hZGluZyA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbm9kZXNMb2FkaW5nSW5mbyd9PlxuICAgICAgICAgICAgICAgICAgPEFsZXJ0IGJzU3R5bGU9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSB3YWl0LiBMb2FkaW5nIG5vZGVzIGxpc3QgaW4gcHJvZ3Jlc3MuLi5cbiAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBsZz17OH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QgPT09IGZhbHNlIHx8IHRoaXMuc3RhdGUuYmxvY2tzLmxpc3QubGVuZ3RoID09PSAwID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zbGlkZXIudmFsdWV9XG4gICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TbGlkZX1cbiAgICAgICAgICAgICAgICAgIG1pbj17dGhpcy5zdGF0ZS5zbGlkZXIubWlufVxuICAgICAgICAgICAgICAgICAgbWF4PXt0aGlzLnN0YXRlLnNsaWRlci5tYXh9XG4gICAgICAgICAgICAgICAgICBzdGVwPXt0aGlzLnN0YXRlLnNsaWRlci5zdGVwfVxuICAgICAgICAgICAgICAgICAgZm9ybWF0PXt0aGlzLmFzZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBsZz17NH0gc3R5bGU9e3twYWRkaW5nQm90dG9tOiAnMmVtJ319PlxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGJzU2l6ZT1cImxhcmdlXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogMjB9fT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIFxuICAgICAgICAgICAgICAgIHRpdGxlPXs8R2x5cGhpY29uIGdseXBoPVwidGltZVwiPjxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDogMjB9fT57dGhpcy5zdGF0ZS50aW1lU2NhbGV9IG1zPC9zcGFuPjwvR2x5cGhpY29uPn0gXG4gICAgICAgICAgICAgICAgYnNTaXplPVwibGFyZ2VcIiBcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy51cGRhdGVUaW1lU2NhbGV9XG4gICAgICAgICAgICAgICAgaWQ9XCJ0aW1lLXNjYWxlLWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17MTB9PjEwIG1zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezUwfT41MCBtczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsxMDB9PjEwMCBtczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsyMDB9PjIwMCBtczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXs1MDB9PjUwMCBtczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsxMDAwfT4xMDAwIG1zPC9NZW51SXRlbT4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zdWJUaW1lQ2xpY2t9PjxHbHlwaGljb24gZ2x5cGg9XCJtaW51c1wiIC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRUaW1lQ2xpY2t9PjxHbHlwaGljb24gZ2x5cGg9XCJwbHVzXCIgLz48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG5cbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBic1NpemU9XCJsYXJnZVwiID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1YlRpbWVDbGlja30gb25DbGljaz17dGhpcy50b1N0YXJ0fT48R2x5cGhpY29uIGdseXBoPVwic3RlcC1iYWNrd2FyZFwiIC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRUaW1lQ2xpY2t9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlUGxheWluZ30+PEdseXBoaWNvbiBnbHlwaD17dGhpcy5zdGF0ZS5pc1BsYXlpbmcgPyAncGF1c2UnIDogJ3BsYXknfSAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVGltZUNsaWNrfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJlcGVhZWR9IGFjdGl2ZT17dGhpcy5zdGF0ZS5yZXBlYXRlZH0+PEdseXBoaWNvbiBnbHlwaD1cInJlcGVhdFwiIC8+PC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIGxnPXs4fT5cbiAgICAgICAgICAgIDxHbWFwc1xuICAgICAgICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICAgICAgICBoZWlnaHQ9eyc2MDBweCd9XG4gICAgICAgICAgICAgIGxhdD17MjB9XG4gICAgICAgICAgICAgIGxuZz17MjB9XG4gICAgICAgICAgICAgIHpvb209ezJ9XG4gICAgICAgICAgICAgIGxvYWRpbmdNZXNzYWdlPXsnTG9hZGluZy4uLid9XG4gICAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgICBvbk1hcENyZWF0ZWQ9e3RoaXMub25NYXBDcmVhdGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bWFya2Vyc31cbiAgICAgICAgICAgIDwvR21hcHM+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBsZz17NH0gPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVtdWxhdGlvbiA/IChcbiAgICAgICAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkNvbHVtbkNoYXJ0XCJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2dIZWlnaHREYXRhfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIkJsb2NrcyBieSBoZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYmFyOntcbiAgICAgICAgICAgICAgICAgICAgICBncm91cFdpZHRoOlwiOTAlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRBcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MCUnLCBcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDp7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246e1xuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdkF4aXM6IHttaW5WYWx1ZTogdGhpcy5zdGF0ZS5lbXVsYXRpb24ubm9kZXNRdHl9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzI1MHB4J31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuZW11bGF0aW9uID8gKFxuICAgICAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiTGluZUNoYXJ0XCJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2dMaW5lRGF0YX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiQmxvY2sgYWRvcHRpb24gYnkgaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhcjp7XG4gICAgICAgICAgICAgICAgICAgICAgZ3JvdXBXaWR0aDpcIjkwJVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnOTAlJywgXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOlwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOntcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ291dCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhBeGlzOntcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2QXhpczp7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZTogdGhpcy5zdGF0ZS5lbXVsYXRpb24ubm9kZXNRdHlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eycyNTBweCd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVtdWxhdGlvbiA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyPkJsb2NrcyBhZG9wdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IFxuICAgICAgICAgICAgICAgICAgICBkYXRhPXt6ZXJvSGVpZ2h0fSBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH0gXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAnTG9hZGluZyBjaGFydC4uLidcbiAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwJyk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAxZW0gMCAxZW0gMCA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDFlbSAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2Lm5vZGVzTG9hZGluZ0luZm8ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAyZW07XG4gICAgICAgICAgICByaWdodDogMmVtO1xuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yYW5nZXNsaWRlcl9faGFuZGxlLXRvb2x0aXAge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4IWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/emulation.js */'
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
//# sourceMappingURL=5.19153b2e671c118cc4bf.hot-update.js.map