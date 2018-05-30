webpackHotUpdate(4,{

/***/ "./pages/run.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _jsxFileName = '/opt/web/pages/run.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// pages/about.js







var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.createEmulation = _this.createEmulation.bind(_this);
    _this.deleteEmulation = _this.deleteEmulation.bind(_this);

    _this.state = {
      visible: false,
      txPending: false,
      emulations: {
        list: false
      },
      nodesQty: 5,
      ping: 0.00002,
      validationTime: 0.25,
      blockSize: 1,
      blockFreq: 60,
      description: '',
      bandwidth: 1,
      iterations: 3,
      withForks: true,
      colors: ['F44336', 'E91E63', '9C27B0', '673AB7', '3F51B5', '2196F3', '03A9F4', '00BCD4', '009688', '4CAF50', '8BC34A', 'CDDC39', 'FFEB3B', 'FFC107', 'FF9800', 'FF5722', '795548', '9E9E9E', '607D8B']
    };
    return _this;
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get('http://127.0.0.1:7500/api/v1.0/emulations');

              case 2:
                res = _context.sent;

                this.setState({
                  emulations: {
                    list: res.data
                  }
                });

              case 4:
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
    key: 'toggleModal',
    value: function toggleModal(e) {
      this.setState({
        visible: !this.state.visible
      });
    }
  }, {
    key: 'createEmulation',
    value: function createEmulation(e) {
      var _this2 = this;

      this.setState({
        txPending: true
      });

      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('http://127.0.0.1:7500/api/v1.0/emulations', {
        nodesQty: this.state.nodesQty,
        ping: this.state.ping,
        validationTime: this.state.validationTime,
        blockSize: this.state.blockSize,
        blockFreq: this.state.blockFreq,
        bandwidth: this.state.bandwidth,
        description: this.state.description,
        iterations: this.state.iterations,
        withForks: this.state.withForks
      }).then(function (res) {
        _this2.setState({
          txPending: false,
          visible: false,
          emulations: {
            list: _this2.state.emulations.list.length === 0 ? new Array(res.data) : [res.data].concat(_this2.state.emulations.list)
          }
        });
      });
    }
  }, {
    key: 'deleteEmulation',
    value: function deleteEmulation(e) {
      var _this3 = this;

      var emulationId = e.target.dataset.emulationid;
      console.log(emulationId);

      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.delete('http://127.0.0.1:7500/api/v1.0/emulations/' + emulationId, {}).then(function (res) {
        var emultions = _this3.state.emulations.list;
        var index = 0;
        for (var i = 0; i < emultions.length; i += 1) {
          if (emultions[i].id === emulationId) {
            index = i;
            break;
          }
        }

        emultions.splice(index, 1);
        _this3.setState({
          emulations: {
            list: emultions
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-3377870734',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          },
          'Run emulation'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h2',
          {
            className: 'jsx-3377870734',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            }
          },
          'Emulations'
        ),
        this.state.emulations.list === false ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Alert */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          },
          'Loading...'
        ) : this.state.emulations.list.length === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Alert */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          },
          'No emulations'
        ) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["n" /* Table */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'thead',
            {
              className: 'jsx-3377870734',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'tr',
              {
                className: 'jsx-3377870734',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  }
                },
                'Nodes qty'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                  }
                },
                'Ping, sec/km'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                  }
                },
                'Validation time, sec'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  }
                },
                'Block size, MB'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                  }
                },
                'Block freq, sec'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                  }
                },
                'Iterations'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                  }
                },
                'With forks'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                  }
                },
                'Bandwidth, MB/sec'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                  }
                },
                'Description'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('th', {
                className: 'jsx-3377870734',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'tbody',
            {
              className: 'jsx-3377870734',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              }
            },
            this.state.emulations.list.map(function (item, index) {
              return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'tr',
                { key: 'emulation_' + index, className: 'jsx-3377870734',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 154
                    }
                  },
                  item.nodesQty
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 155
                    }
                  },
                  item.ping
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 156
                    }
                  },
                  item.validationTime
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 157
                    }
                  },
                  item.blockSize
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 158
                    }
                  },
                  item.blockFreq
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 159
                    }
                  },
                  item.iterations
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 160
                    }
                  },
                  item.withForks === true ? 'Yes' : 'No'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 161
                    }
                  },
                  item.bandwidth
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 162
                    }
                  },
                  item.description === '' ? '-' : item.description
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  { style: { textAlign: 'center' }, className: 'jsx-3377870734',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 163
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                    { href: '/emulation?id=' + item.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["m" /* SplitButton */],
                      {
                        bsStyle: 'default',
                        title: 'Inspect',
                        key: '1',
                        id: 'split-button-basic-1',

                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 165
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["j" /* MenuItem */],
                        { header: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 172
                          }
                        },
                        'Actions'
                      ),
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["j" /* MenuItem */],
                        { eventKey: '1', 'data-emulationid': item.id, onClick: _this4.deleteEmulation, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 173
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["i" /* Glyphicon */], { glyph: 'trash', className: 'asd', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 173
                          }
                        }),
                        ' Delete'
                      )
                    )
                  )
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Button */],
          { bsStyle: 'primary', onClick: this.toggleModal, __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            }
          },
          'New emulation'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Modal */],
          { show: this.state.visible, onHide: this.toggleModal, __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Modal */].Header,
            { closeButton: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 190
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Modal */].Title,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 191
                }
              },
              'New emulation'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Modal */].Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 195
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                  }
                },
                'Nodes qty'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormControl */], {
                type: 'text',
                value: this.state.nodesQty,
                placeholder: 'Enter nodes quantity',
                onChange: function onChange(e) {
                  return _this4.setState({ nodesQty: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 197
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 204
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                  }
                },
                'Iterations'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormControl */], {
                type: 'text',
                value: this.state.iterations,
                placeholder: 'Enter iterations quantity',
                onChange: function onChange(e) {
                  return _this4.setState({ iterations: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 206
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 213
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                  }
                },
                'Block size, MB'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormControl */], {
                type: 'text',
                value: this.state.blockSize,
                placeholder: 'Enter block size',
                onChange: function onChange(e) {
                  return _this4.setState({ blockSize: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 215
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 222
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                  }
                },
                'Block generation frequency, sec'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormControl */], {
                type: 'text',
                value: this.state.blockFreq,
                placeholder: 'Enter block generation frequeny',
                onChange: function onChange(e) {
                  return _this4.setState({ blockFreq: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 224
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 231
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 232
                  }
                },
                'Ping, sec/1km'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormControl */], {
                type: 'text',
                value: this.state.ping,
                placeholder: 'Enter ping',
                onChange: function onChange(e) {
                  return _this4.setState({ ping: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 233
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 240
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                  }
                },
                'Validation time, sec'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormControl */], {
                type: 'text',
                value: this.state.validationTime,
                placeholder: 'Enter average validation time',
                onChange: function onChange(e) {
                  return _this4.setState({ validationTime: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 242
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 249
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 250
                  }
                },
                'Bandwidth, MB/sec'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormControl */], {
                type: 'text',
                value: this.state.bandwidth,
                placeholder: 'Enter bandwidth',
                onChange: function onChange(e) {
                  return _this4.setState({ bandwidth: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 251
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 258
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                  }
                },
                'Description'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormControl */], {
                componentClass: 'textarea',
                value: this.state.description,
                placeholder: 'Enter description',
                onChange: function onChange(e) {
                  return _this4.setState({ description: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 260
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Modal */].Footer,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 269
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Button */],
              { onClick: this.toggleModal, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 270
                }
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Button */],
              {
                bsStyle: 'primary',
                onClick: this.createEmulation,
                disabled: this.state.txPending === true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 271
                }
              },
              'Create'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '3377870734',
          css: '@import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700\');.jsx-3377870734{font-family:\'IBM Plex Sans\',sans-serif;}h1.jsx-3377870734{font-size:4em;font-weight:300;margin:1.4em 0;display:block;border-radius:4px;}h2.jsx-3377870734{font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3J1bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwUnNCLEFBRTZGLEFBQ3hDLEFBR3hCLEFBUUUsY0FQQSxFQVFsQixjQVBpQixTQVFuQixNQVBrQixjQUNJLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9ydW4uanMiLCJzb3VyY2VSb290IjoiL29wdC93ZWIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hYm91dC5qc1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBBbGVydCwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgQ29udHJvbExhYmVsLCBJbnB1dEdyb3VwLCBUYWJsZSwgR2x5cGhpY29uLCBTcGxpdEJ1dHRvbiwgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY3JlYXRlRW11bGF0aW9uID0gdGhpcy5jcmVhdGVFbXVsYXRpb24uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuZGVsZXRlRW11bGF0aW9uID0gdGhpcy5kZWxldGVFbXVsYXRpb24uYmluZCh0aGlzKTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHR4UGVuZGluZzogZmFsc2UsXG4gICAgICAgIGVtdWxhdGlvbnM6IHtcbiAgICAgICAgICBsaXN0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbm9kZXNRdHk6IDUsXG4gICAgICAgIHBpbmc6IDAuMDAwMDIsXG4gICAgICAgIHZhbGlkYXRpb25UaW1lOiAwLjI1LFxuICAgICAgICBibG9ja1NpemU6IDEsXG4gICAgICAgIGJsb2NrRnJlcTogNjAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgYmFuZHdpZHRoOiAxLFxuICAgICAgICBpdGVyYXRpb25zOiAzLFxuICAgICAgICB3aXRoRm9ya3M6IHRydWUsXG4gICAgICAgIGNvbG9yczogW1xuICAgICAgICAgICdGNDQzMzYnLFxuICAgICAgICAgICdFOTFFNjMnLFxuICAgICAgICAgICc5QzI3QjAnLFxuICAgICAgICAgICc2NzNBQjcnLFxuICAgICAgICAgICczRjUxQjUnLFxuICAgICAgICAgICcyMTk2RjMnLFxuICAgICAgICAgICcwM0E5RjQnLFxuICAgICAgICAgICcwMEJDRDQnLFxuICAgICAgICAgICcwMDk2ODgnLFxuICAgICAgICAgICc0Q0FGNTAnLFxuICAgICAgICAgICc4QkMzNEEnLFxuICAgICAgICAgICdDRERDMzknLFxuICAgICAgICAgICdGRkVCM0InLFxuICAgICAgICAgICdGRkMxMDcnLFxuICAgICAgICAgICdGRjk4MDAnLFxuICAgICAgICAgICdGRjU3MjInLFxuICAgICAgICAgICc3OTU1NDgnLFxuICAgICAgICAgICc5RTlFOUUnLFxuICAgICAgICAgICc2MDdEOEInXG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NzUwMC9hcGkvdjEuMC9lbXVsYXRpb25zJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgIGVtdWxhdGlvbnM6IHtcbiAgICAgICAgICBsaXN0OiByZXMuZGF0YVxuICAgICAgICB9IFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG4gICAgdG9nZ2xlTW9kYWwoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGUsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZUVtdWxhdGlvbihlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHhQZW5kaW5nOiB0cnVlLFxuICAgICAgfSlcblxuICAgICAgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo3NTAwL2FwaS92MS4wL2VtdWxhdGlvbnMnLCB7XG4gICAgICAgIG5vZGVzUXR5OiB0aGlzLnN0YXRlLm5vZGVzUXR5LFxuICAgICAgICBwaW5nOiB0aGlzLnN0YXRlLnBpbmcsXG4gICAgICAgIHZhbGlkYXRpb25UaW1lOiB0aGlzLnN0YXRlLnZhbGlkYXRpb25UaW1lLFxuICAgICAgICBibG9ja1NpemU6IHRoaXMuc3RhdGUuYmxvY2tTaXplLFxuICAgICAgICBibG9ja0ZyZXE6IHRoaXMuc3RhdGUuYmxvY2tGcmVxLFxuICAgICAgICBiYW5kd2lkdGg6IHRoaXMuc3RhdGUuYmFuZHdpZHRoLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgaXRlcmF0aW9uczogdGhpcy5zdGF0ZS5pdGVyYXRpb25zLFxuICAgICAgICB3aXRoRm9ya3M6IHRoaXMuc3RhdGUud2l0aEZvcmtzXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0eFBlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgIGVtdWxhdGlvbnM6IHtcbiAgICAgICAgICAgIGxpc3Q6IHRoaXMuc3RhdGUuZW11bGF0aW9ucy5saXN0Lmxlbmd0aCA9PT0gMCA/IFxuICAgICAgICAgICAgICBuZXcgQXJyYXkocmVzLmRhdGEpIDogW3Jlcy5kYXRhXS5jb25jYXQodGhpcy5zdGF0ZS5lbXVsYXRpb25zLmxpc3QpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlRW11bGF0aW9uKGUpIHtcbiAgICAgIGNvbnN0IGVtdWxhdGlvbklkID0gZS50YXJnZXQuZGF0YXNldC5lbXVsYXRpb25pZDtcbiAgICAgIGNvbnNvbGUubG9nKGVtdWxhdGlvbklkKTtcbiAgICAgIFxuICAgICAgYXhpb3MuZGVsZXRlKGBodHRwOi8vMTI3LjAuMC4xOjc1MDAvYXBpL3YxLjAvZW11bGF0aW9ucy8ke2VtdWxhdGlvbklkfWAsIHtcbiAgICAgICAgXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBlbXVsdGlvbnMgPSB0aGlzLnN0YXRlLmVtdWxhdGlvbnMubGlzdDtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXVsdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoZW11bHRpb25zW2ldLmlkID09PSBlbXVsYXRpb25JZCkge1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW11bHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVtdWxhdGlvbnM6IHtcbiAgICAgICAgICAgIGxpc3Q6IGVtdWx0aW9uc1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGgxPlJ1biBlbXVsYXRpb248L2gxPlxuICAgICAgICAgIDxoMj5FbXVsYXRpb25zPC9oMj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmVtdWxhdGlvbnMubGlzdCA9PT0gZmFsc2UgPyAoPEFsZXJ0PkxvYWRpbmcuLi48L0FsZXJ0PikgOlxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVtdWxhdGlvbnMubGlzdC5sZW5ndGggPT09IDAgPyAoPEFsZXJ0Pk5vIGVtdWxhdGlvbnM8L0FsZXJ0PikgOlxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob2RlcyBxdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBpbmcsIHNlYy9rbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VmFsaWRhdGlvbiB0aW1lLCBzZWM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJsb2NrIHNpemUsIE1CPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5CbG9jayBmcmVxLCBzZWM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZXJhdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPldpdGggZm9ya3M8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJhbmR3aWR0aCwgTUIvc2VjPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbXVsYXRpb25zLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgZW11bGF0aW9uXyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLm5vZGVzUXR5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnBpbmd9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udmFsaWRhdGlvblRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uYmxvY2tTaXplfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmJsb2NrRnJlcX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5pdGVyYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLndpdGhGb3JrcyA9PT0gdHJ1ZSA/ICdZZXMnIDogJ05vJ308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5iYW5kd2lkdGh9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZGVzY3JpcHRpb24gPT09ICcnID8gJy0nIDogaXRlbS5kZXNjcmlwdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VtdWxhdGlvbj9pZD0ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGxpdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9eydkZWZhdWx0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0luc3BlY3QnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17JzEnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgc3BsaXQtYnV0dG9uLWJhc2ljLTFgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBoZWFkZXI+QWN0aW9uczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PVwiMVwiIGRhdGEtZW11bGF0aW9uaWQ9e2l0ZW0uaWR9IG9uQ2xpY2s9e3RoaXMuZGVsZXRlRW11bGF0aW9ufT48R2x5cGhpY29uIGdseXBoPVwidHJhc2hcIiBjbGFzc05hbWU9eydhc2QnfSAvPiBEZWxldGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwbGl0QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT5cbiAgICAgICAgICAgIE5ldyBlbXVsYXRpb25cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnZpc2libGV9IG9uSGlkZT17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+TmV3IGVtdWxhdGlvbjwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cblxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5Ob2RlcyBxdHk8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub2Rlc1F0eX0gXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5vZGVzIHF1YW50aXR5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7bm9kZXNRdHk6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5JdGVyYXRpb25zPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlcmF0aW9uc30gXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGl0ZXJhdGlvbnMgcXVhbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHtpdGVyYXRpb25zOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+QmxvY2sgc2l6ZSwgTUI8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ibG9ja1NpemV9IFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBibG9jayBzaXplXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7YmxvY2tTaXplOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+QmxvY2sgZ2VuZXJhdGlvbiBmcmVxdWVuY3ksIHNlYzwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJsb2NrRnJlcX0gXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGJsb2NrIGdlbmVyYXRpb24gZnJlcXVlbnlcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHtibG9ja0ZyZXE6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5QaW5nLCBzZWMvMWttPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGluZ30gXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBpbmdcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5nOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+VmFsaWRhdGlvbiB0aW1lLCBzZWM8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWxpZGF0aW9uVGltZX0gXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGF2ZXJhZ2UgdmFsaWRhdGlvbiB0aW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGlvblRpbWU6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5CYW5kd2lkdGgsIE1CL3NlYzwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhbmR3aWR0aH0gXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGJhbmR3aWR0aFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe2JhbmR3aWR0aDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPkRlc2NyaXB0aW9uPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiIFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe2Rlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuXG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZUVtdWxhdGlvbn1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnR4UGVuZGluZyA9PT0gdHJ1ZSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JQk0rUGxleCtTYW5zOjMwMCw0MDAsNzAwJyk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDEuNGVtIDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKVxuICAgIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/run.js */'
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

  reactHotLoader.register(_default, 'default', '/opt/web/pages/run.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/run")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.dcdf2a5c024f9bad0997.hot-update.js.map