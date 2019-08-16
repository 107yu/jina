require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([4],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tap_tapTitle_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mySwiper_mySwiper_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_homeBar_homeBar_vue__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dlList_dlList_vue__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_hotImg_hotImg_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_homeRecommend_homeRecommend_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_search_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_oriderList_oriderList_vue__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_oriderList_oriderDl_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_specialItem__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_recommendItem__ = __webpack_require__(177);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

//引入组件












//挂载：
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("TapTitle", __WEBPACK_IMPORTED_MODULE_3__components_tap_tapTitle_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("MySwiper", __WEBPACK_IMPORTED_MODULE_4__components_mySwiper_mySwiper_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("HomeBar", __WEBPACK_IMPORTED_MODULE_5__components_homeBar_homeBar_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("DlList", __WEBPACK_IMPORTED_MODULE_6__components_dlList_dlList_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("HotImg", __WEBPACK_IMPORTED_MODULE_7__components_hotImg_hotImg_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("HomeRecommend", __WEBPACK_IMPORTED_MODULE_8__components_homeRecommend_homeRecommend_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("MySearch", __WEBPACK_IMPORTED_MODULE_9__components_search_search_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("OriderList", __WEBPACK_IMPORTED_MODULE_10__components_oriderList_oriderList_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("OriderDl", __WEBPACK_IMPORTED_MODULE_11__components_oriderList_oriderDl_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('specialItem', __WEBPACK_IMPORTED_MODULE_12__components_specialItem__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('recommendItem', __WEBPACK_IMPORTED_MODULE_13__components_recommendItem__["a" /* default */]);

//挂载store
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(7);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-631928f2", Component.options)
  } else {
    hotAPI.reload("data-v-631928f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);



/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    var _this = this;

    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    wx.login({
      success: function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(res) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (res.code) {
                    //发起网络请求
                    // let data = await login(res.code);
                    // // console.log('res...', data);
                    // wx.setStorageSync('openid', data.data.openid);
                  } else {
                      // console.log('登录失败！' + res.errMsg)
                    }

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function success(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    });
  }
});

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(73);

var Fly = __webpack_require__(112);
var fly = new Fly();

//定义公共headers
fly.config.headers = {
    "content-type": "application/x-www-form-urlencoded"
    //设置超时
};fly.config.timeout = 10000;
//设置请求基地址
// fly.config.baseURL = "https://sign.jasonandjay.com"
fly.config.baseURL = "https://upapi.jinaup.com";
//添加请求拦截器
fly.interceptors.request.use(function (request) {
    //给所有请求添加自定义header
    request.headers["trackId"] = 'F649B34989975F268EA5BC4927E7C2365DBB8293767D955992FF410009F6B2DE301BCDFBE166230EBF083C72B5B6A948277C0041980DAC5E46FA1EF475B12D4773F05A5E984CF1D814817C9546DF831BF9D9BD6C1F2231AFA450731B6837E7084E77DC9918A436BC';
    // F649B34989975F2672F778DFE1F6CC7C0A012572F93A8D44E9E2E6A43B0D64EF5B753BD95E281A12FB6E2657CA3C322C8EDD48AD88C1D895AA882EE69AF51E209A101AD4A318BF41E54B13C189A368B3080D4CB37654208721AA2141D76141878B4F2F23C363A567319335B0AF520D12

    //打印出请求体
    // console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
    //只将请求结果的data字段返回
    return response.data;
}, function (err) {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
});

/* harmony default export */ __webpack_exports__["a"] = (fly);

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(111);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(113);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getSwiperDetail", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(114);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getSearch", function() { return __WEBPACK_IMPORTED_MODULE_2__search_search__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sepcialList_sepcialList__ = __webpack_require__(115);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getSepcial", function() { return __WEBPACK_IMPORTED_MODULE_3__sepcialList_sepcialList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productCoupon_productCoupon__ = __webpack_require__(116);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getProductCoupon", function() { return __WEBPACK_IMPORTED_MODULE_4__productCoupon_productCoupon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__special_special__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__special_special___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__special_special__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__special_special__, "getComNav")) __webpack_require__.d(__webpack_exports__, "getComNav", function() { return __WEBPACK_IMPORTED_MODULE_5__special_special__["getComNav"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__special_special__, "getCount")) __webpack_require__.d(__webpack_exports__, "getCount", function() { return __WEBPACK_IMPORTED_MODULE_5__special_special__["getCount"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recommend_recommend__ = __webpack_require__(118);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getComNav", function() { return __WEBPACK_IMPORTED_MODULE_6__recommend_recommend__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "getCount", function() { return __WEBPACK_IMPORTED_MODULE_6__recommend_recommend__["b"]; });








/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_special__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_search__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_orider__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_sepcialList__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_productCoupon__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_recommend__ = __webpack_require__(130);




//引入模块：








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    modules: {
        home: __WEBPACK_IMPORTED_MODULE_3__modules_home__["a" /* default */],
        special: __WEBPACK_IMPORTED_MODULE_4__modules_special__["a" /* default */],
        search: __WEBPACK_IMPORTED_MODULE_5__modules_search__["a" /* default */],
        orider: __WEBPACK_IMPORTED_MODULE_6__modules_orider__["a" /* default */],
        sepcialList: __WEBPACK_IMPORTED_MODULE_7__modules_sepcialList__["a" /* default */],
        productCoupon: __WEBPACK_IMPORTED_MODULE_8__modules_productCoupon__["a" /* default */],
        recommend: __WEBPACK_IMPORTED_MODULE_9__modules_recommend__["a" /* default */]
    },
    plugins: [__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default()()]
}));

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_index__ = __webpack_require__(43);



/* harmony default export */ __webpack_exports__["a"] = ({
    //命名空间
    namespaced: true,
    state: {
        homeLists: [],
        homeProducts: [],
        categories: [], //分类标题
        swiperDetailInfo: {} //轮播图详情
    },
    mutations: {
        categoryList: function categoryList(state, payload) {
            payload.unshift({ cname: "今日推荐" });
            state.categories = payload;
            // console.log(" categories",state.categories)
        },
        homeList: function homeList(state, payload) {
            state.homeLists = payload;
            console.log("homeLists", state.homeLists);
        },
        homeProducts: function homeProducts(state, payload) {
            state.homeProducts = payload;
            // console.log("homeProducts",state.homeProducts)
        },
        swiperDetail: function swiperDetail(state, payload) {
            //轮播图的详细信息
            state.swiperDetailInfo = payload;
            console.log("state.swiperDetailInfo", state.swiperDetailInfo);
        }
    },
    actions: {
        getCategoryLists: function getCategoryLists(_ref, payload) {
            var _this = this;

            var commit = _ref.commit;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__service_index__["getCategories"])(payload);

                            case 2:
                                data = _context.sent;


                                if (data.res_code === 1) {
                                    commit("categoryList", data.result);
                                }

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },
        getProductLists: function getProductLists(_ref2) {
            var _this2 = this;

            var commit = _ref2.commit;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__service_index__["getProducts"])();

                            case 2:
                                data = _context2.sent;

                                if (data.res_code === 1) {
                                    commit("homeProducts", data.result);
                                }

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }))();
        },
        getHomeList: function getHomeList(_ref3) {
            var _this3 = this;

            var commit = _ref3.commit;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__service_index__["getList"])();

                            case 2:
                                data = _context3.sent;

                                console.log(data.result, "404040404");
                                if (data.res_code === 1) {
                                    commit("homeList", data.result);
                                }

                            case 5:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this3);
            }))();
        },
        swiperDetail: function swiperDetail(_ref4, payload) {
            var _this4 = this;

            var commit = _ref4.commit;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__service_index__["getSwiperDetail"])(payload);

                            case 2:
                                data = _context4.sent;

                                commit("swiperDetail", data);

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this4);
            }))();
        }
    }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export login */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(38);


//添加面试：
var login = function login(code) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/getUserInfo', code);
};

/***/ }),
/* 112 */,
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSwiperDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(38);


//获取首页头部：
var getCategories = function getCategories(code) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/open/product/category/query/1.0.0');
};

//获取首页为你精选的数据
var getProducts = function getProducts(code) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/open/page/home/products/1.0.0');
};

//获取首页大部分数据
var getList = function getList(code) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/open/page/home/list/1.0.0');
};

//获取购物车详情
var getSwiperDetail = function getSwiperDetail(code) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/open/sepcial/query/1.0.0', code);
};

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(38);


//搜索
var getSearch = function getSearch(code) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/open/search/query/1.0.0', code);
};

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSepcial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(38);


//专题详情
var getSepcial = function getSepcial(params) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/open/sepcial/query/1.0.0', {
        siid: params
    });
};

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductCoupon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(38);
// 


//获取首页头部：
var getProductCoupon = function getProductCoupon(code) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/product/coupon/productCouponList/1.0.0');
};

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// import fly from '@/utils/request';

// //获取首页头部：
// export let getProduct = code=>{
//     return fly.post('/api/open/product/category/sub/1',{parentId:0});
// }

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(38);


//获取头部
var getComNav = function getComNav(code) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/open/product/category/query/1.0.0');
};

//获取分类列表
var getCount = function getCount(params) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].post('/api/open/product/category/productList/1.0.0', params);
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    //命名空间
    namespaced: true,
    state: {
        navData: [{
            title: '爆款专区'
        }, {
            title: '衣物清洁'
        }, {
            title: '家庭清洁'
        }, {
            title: '清洁工具'
        }, {
            title: '家庭清洁'
        }],
        ind: 0
    },
    mutations: {
        //tab切换
        tabNav: function tabNav(state, payload) {
            state.ind = payload.index;
        }
    },
    actions: {}
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_index__ = __webpack_require__(43);



var state = {
    searchList: {}, //搜索的数据
    searchVal: '', //当前长在搜索的值
    page: 1,
    searchTitle: [{
        "title": "综合",
        queryType: 0
    }, {
        "title": "最新",
        queryType: 1
    }, {
        "title": "价格",
        queryType: 2
    }],
    currenType: 0,
    currentValue: ""
};

var mutations = {
    searchList: function searchList(state, payload) {
        //获取搜索的列表
        state.searchList = payload;
        // console.log(" state.searchList", state.searchList)
    },
    getSearchVal: function getSearchVal(state, payload) {
        //获取正在输入的值---时时触发
        if (!payload) {
            state.searchList = {};
        }
        state.searchVal = payload;
    },
    changeType: function changeType(state, payload) {
        //当前搜索的排序类型
        state.currenType = payload;
    },
    currentVal: function currentVal(state, payload) {
        //当前搜索的值
        state.currentValue = payload;
    }
};

var actions = {
    sendSearch: function sendSearch(_ref, payload) {
        var _this = this;

        var commit = _ref.commit;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var data;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return Object(__WEBPACK_IMPORTED_MODULE_2__service_index__["getSearch"])(payload);

                        case 2:
                            data = _context.sent;

                            commit("searchList", data);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
    title: ["全部", "待付款", "待发货", "待收货"]
};

var mutations = {};

var actions = {};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_index__ = __webpack_require__(43);




/* harmony default export */ __webpack_exports__["a"] = ({
    //命名空间
    namespaced: true,
    state: {
        list: [],
        banner: null,
        title: null
    },
    mutations: {
        upstate: function upstate(state, payload) {
            state.list = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, payload.list.anchors);
            state.banner = payload.list.specialImg;
            state.title = payload.list.specialName;
        }
    },
    actions: {
        getSepcialData: function getSepcialData(_ref, payload) {
            var _this = this;

            var commit = _ref.commit;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Object(__WEBPACK_IMPORTED_MODULE_3__service_index__["getSepcial"])(payload.siid);

                            case 2:
                                data = _context.sent;

                                console.log(data.result, "2222222222222222222222222222222222");
                                if (data.res_code == "1") {
                                    commit('upstate', { list: data.result });
                                }

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    }
});

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_index__ = __webpack_require__(43);



var state = {};

var mutations = {};

var actions = {
    ProductCouponDetail: function ProductCouponDetail(_ref, payload) {
        var _this = this;

        var commit = _ref.commit;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var data;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return Object(__WEBPACK_IMPORTED_MODULE_2__service_index__["getProductCoupon"])(payload);

                        case 2:
                            data = _context.sent;

                            console.log(data);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service___ = __webpack_require__(43);



/* harmony default export */ __webpack_exports__["a"] = ({
    //命名空间
    namespaced: true,
    state: {
        navData: [],
        ind: 0,
        headData: [],
        newNav: [{
            cname: '综合',
            sortType: 1
        }, {
            cname: '最新',
            sortType: 2
        }, {
            cname: '价格',
            sortType: 3
        }],
        countData: [],
        current: {
            pageIndex: 1,
            cid: 1,
            sortType: 1
        }
    },
    mutations: {
        //顶部tab切换
        tabNav: function tabNav(state, payload) {
            state.ind = payload.index;
            //第二块
            state.headData = state.navData.find(function (item) {
                return item.cid === payload.id;
            }).childs;
        },

        //头部nav数据
        updateNav: function updateNav(state, payload) {
            state.navData = payload;
            state.headData = payload[0].childs;
        },

        //列表数据
        updatecountData: function updatecountData(state, payload) {
            state.countData = payload;
        },

        //综合价格切换
        sortTabs: function sortTabs(state, payload) {
            if (payload.sortType === 3) {
                payload.sortType = 4;
                state.newNav[2].sortType = 4;
            } else if (payload.sortType === 4) {
                payload.sortType = 3;
                state.newNav[2].sortType = 3;
            }
            state.current.sortType = payload.sortType;
            state.current.cid = state.navData.find(function (item, index) {
                return state.ind === index;
            }).cid;
            state.current.pageIndex;
        },

        //上拉加载
        updatepull: function updatepull(state, payload) {
            // ++state.current.pageIndex
        }
    },
    getters: {},
    actions: {
        getNavData: function getNavData(_ref, payload) {
            var _this = this;

            var commit = _ref.commit;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__service___["getComNav"])(payload);

                            case 2:
                                data = _context.sent;

                                if (data.res_code === 1) {
                                    commit('updateNav', data.result);
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },
        getCountData: function getCountData(_ref2, payload) {
            var _this2 = this;

            var commit = _ref2.commit;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__service___["getCount"])(payload);

                            case 2:
                                data = _context2.sent;

                                if (data.res_code === 1) {
                                    commit('updatecountData', data.result);
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }))();
        }
    }
});

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_tapTitle_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6e1c0dc0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_tapTitle_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e1c0dc0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_tapTitle_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6e1c0dc0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_tapTitle_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tap\\tapTitle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tapTitle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e1c0dc0", Component.options)
  } else {
    hotAPI.reload("data-v-6e1c0dc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["titles"],
  components: {},
  data: function data() {
    return {
      ind: 0
    };
  },

  computed: {},
  methods: {
    //tap切换
    changeTitle: function changeTitle(index) {
      this.ind = index;
      if (index !== 0) {
        wx.navigateTo({
          url: '/pages/recommend/main'
        });
      }
    }
  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-x": ""
    }
  }, [_c('ul', _vm._l((_vm.titles), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeTitle(index)
        }
      }
    }, [_c('span', {
      class: {
        'strong': index === _vm.ind
      }
    }, [_vm._v(_vm._s(item.cname))]), _vm._v(" "), _c('b', {
      class: {
        'show': index === _vm.ind
      }
    })], 1)
  }))], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6e1c0dc0", esExports)
  }
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_mySwiper_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_53687ae0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_mySwiper_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-53687ae0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_mySwiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_53687ae0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_mySwiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\mySwiper\\mySwiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mySwiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53687ae0", Component.options)
  } else {
    hotAPI.reload("data-v-53687ae0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(42);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    props: ["swiperList"],
    components: {},
    data: function data() {
        return {};
    },

    computed: {},
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
        getSwiperDeatil: "home/swiperDetail"
    }), {
        goToDetail: function goToDetail(id) {
            wx.navigateTo({
                url: '/pages/swiperDetail/main'
            });
            this.getSwiperDeatil({
                siid: id
            });
        }
    }),
    created: function created() {},
    mounted: function mounted() {}
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiperBox"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "2000",
      "duration": "1000",
      "indicator-active-color": "#fff"
    }
  }, _vm._l((_vm.swiperList), function(val, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "eventid": '0_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToDetail(val.contentValue)
        }
      }
    }, [_c('image', {
      staticClass: "slide-image",
      staticStyle: {
        "overflow": "show"
      },
      attrs: {
        "src": val.imgUrl
      }
    })])], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-53687ae0", esExports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_homeBar_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_86853e6c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_homeBar_vue__ = __webpack_require__(142);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-86853e6c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_homeBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_86853e6c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_homeBar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\homeBar\\homeBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] homeBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86853e6c", Component.options)
  } else {
    hotAPI.reload("data-v-86853e6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ["homeBarHot", "describe", "more"],
    components: {},
    data: function data() {
        return {};
    },

    computed: {},
    methods: {},
    created: function created() {},
    mounted: function mounted() {}
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('div', [_c('b', [_vm._v(_vm._s(_vm.homeBarHot))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.describe))])], 1), _vm._v(" "), (_vm.more) ? _c('span', [_vm._v("更多"), _c('i')], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-86853e6c", esExports)
  }
}

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_dlList_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_c3a7b040_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_dlList_vue__ = __webpack_require__(146);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(144)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c3a7b040"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_dlList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_c3a7b040_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_dlList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\dlList\\dlList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dlList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3a7b040", Component.options)
  } else {
    hotAPI.reload("data-v-c3a7b040", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["title", "img", "price", "earnMoney", "id"],
  components: {},
  data: function data() {
    return {};
  },

  computed: {},
  methods: {
    showcommodity: function showcommodity() {
      wx.navigateTo({
        url: "/pages/commodityDetail/main"
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.showcommodity
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": _vm.img,
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('b', [_vm._v("￥" + _vm._s(_vm.price))]), _vm._v(" "), _c('span', [_vm._v("赚" + _vm._s(_vm.earnMoney))]), _vm._v(" "), _vm._t("default", null, {
    mpcomid: '0'
  })], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c3a7b040", esExports)
  }
}

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_hotImg_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7a6779e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_hotImg_vue__ = __webpack_require__(150);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a6779e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_hotImg_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7a6779e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_hotImg_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\hotImg\\hotImg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hotImg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a6779e0", Component.options)
  } else {
    hotAPI.reload("data-v-7a6779e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ["hotimg"],
    components: {},
    data: function data() {
        return {};
    },

    computed: {},
    methods: {
        showhotImg: function showhotImg() {
            wx.navigateTo({
                url: '/pages/hotimgDetail/main'
            });
        }
    },
    created: function created() {},
    mounted: function mounted() {}
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hotInfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.showhotImg
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.hotimg && _vm.hotimg.pictUrl,
      "alt": ""
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7a6779e0", esExports)
  }
}

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_homeRecommend_vue__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_79ad3e9c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_homeRecommend_vue__ = __webpack_require__(154);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(152)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79ad3e9c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_homeRecommend_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_79ad3e9c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_homeRecommend_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\homeRecommend\\homeRecommend.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] homeRecommend.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79ad3e9c", Component.options)
  } else {
    hotAPI.reload("data-v-79ad3e9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 152 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(42);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["hotimg", "homeLi"],
  components: {},
  data: function data() {
    return {};
  },

  computed: {},
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    ProductCouponDetail: function ProductCouponDetail(state) {
      return state.productCoupon.ProductCouponDetail;
    }
  }), {
    showcommodity: function showcommodity() {
      wx.navigateTo({
        url: "/pages/commodityDetail/main"
      });
      // this.productCoupon({pid:,bid:,uid:,usiid:})
      // pid:549
      // bid:13357
      // uid:23
    }
  }),
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('HotImg', {
    attrs: {
      "hotimg": _vm.hotimg,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('HomeBar', {
    attrs: {
      "homeBarHot": "精品好物",
      "describe": "等你来抢",
      "more": "true",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "boutique",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.showcommodity
    }
  }, _vm._l((_vm.homeLi), function(item, index) {
    return _c('DlList', {
      key: index,
      attrs: {
        "img": item.imgUrl,
        "title": item.title,
        "price": item.vipPrice,
        "mpcomid": '2_' + index
      }
    })
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-79ad3e9c", esExports)
  }
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_search_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7f1914c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_search_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(156)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f1914c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_search_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7f1914c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_search_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\search\\search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f1914c0", Component.options)
  } else {
    hotAPI.reload("data-v-7f1914c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_index_vue__ = __webpack_require__(9);


//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {},
  components: {},
  data: function data() {
    return {
      value: ""
    };
  },

  computed: {},
  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    sendSearch: "search/sendSearch"
  }), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapMutations */])({
    getSearchVal: "search/getSearchVal",
    currentVal: "search/currentVal"
  }), {
    search: function search(value) {
      this.currentVal(this.value);
      var arr = [];
      wx.getStorage({
        key: 'history',
        success: function success(res) {
          arr = JSON.parse(res.data);
          var ind = arr.findIndex(function (item) {
            return item === value;
          });
          if (ind === -1) {
            arr.push(value);
          }
          wx.setStorage({
            key: "history",
            data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arr)
          });
        },
        fail: function fail() {
          arr.push(value);
          wx.setStorage({
            key: "history",
            data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(arr)
          });
        }
      });

      this.sendSearch({
        "queryWord": this.value,
        "queryType": 0,
        "querySort": "desc",
        "pageIndex": 1
      });
    }
  }),
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "search",
    attrs: {
      "type": "text",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "blur": function($event) {
        _vm.search(_vm.value)
      },
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }, function($event) {
        _vm.getSearchVal(_vm.value)
      }]
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/搜索.svg",
      "alt": ""
    }
  }), _vm._v(" "), _vm._t("default", null, {
    mpcomid: '0'
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7f1914c0", esExports)
  }
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_oriderList_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7393e680_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_oriderList_vue__ = __webpack_require__(168);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(166)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7393e680"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_oriderList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7393e680_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_oriderList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\oriderList\\oriderList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] oriderList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7393e680", Component.options)
  } else {
    hotAPI.reload("data-v-7393e680", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 166 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {},
    components: {},
    data: function data() {
        return {};
    },

    computed: {},
    methods: {},
    created: function created() {},
    mounted: function mounted() {}
});

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "menu"
  }, [_c('OriderDl', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('OriderDl', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "computed"
  }, [_vm._v("\n       共计；2件商品，合计：￥53.5\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('p'), _vm._v(" "), _vm._t("default", null, {
    mpcomid: '2'
  })], 2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top"
  }, [_c('span', [_vm._v("2019-01-17 17:18:50")]), _vm._v(" "), _c('span', [_vm._v("待付款")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7393e680", esExports)
  }
}

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_oriderDl_vue__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b825702c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_oriderDl_vue__ = __webpack_require__(172);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(170)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b825702c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_oriderDl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b825702c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_oriderDl_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\oriderList\\oriderDl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] oriderDl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b825702c", Component.options)
  } else {
    hotAPI.reload("data-v-b825702c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {},
    components: {},
    data: function data() {
        return {};
    },

    computed: {},
    methods: {},
    created: function created() {},
    mounted: function mounted() {}
});

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "/static/images/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("哈哈哈哈哈哈哈哈哈哈哈")]), _vm._v(" "), _c('span', {
    staticClass: "size"
  }, [_vm._v("规格：XL")]), _vm._v(" "), _c('div', [_c('b', [_vm._v("￥52.5")]), _vm._v(" "), _c('span', [_vm._v("X1")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b825702c", esExports)
  }
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_648b34c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(176);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-648b34c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_648b34c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\specialItem\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-648b34c0", Component.options)
  } else {
    hotAPI.reload("data-v-648b34c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {},
  components: {},
  data: function data() {
    return {};
  },

  computed: {},
  methods: {},
  created: function created() {
    wx.setNavigationBarTitle({ title: "惊喜特惠 致敬新年" });
  },
  mounted: function mounted() {}
});

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_c('div', {
    staticClass: "small_img"
  })]), _vm._v(" "), _c('dd', [_c('h1', [_vm._v("家宝 Gerber HDN+ 益生菌大米米粉4M+ 227g")]), _vm._v(" "), _c('h2', [_c('h3', [_vm._v("\n        ￥\n        "), _c('span', [_vm._v("22")]), _vm._v(".90\n      ")]), _vm._v(" "), _c('h4', [_vm._v("￥216")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-648b34c0", esExports)
  }
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_c6695bba_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(180);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(178)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c6695bba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_c6695bba_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\recommendItem\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6695bba", Component.options)
  } else {
    hotAPI.reload("data-v-c6695bba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    item: Object
  },
  components: {},
  data: function data() {
    return {};
  },

  computed: {},
  methods: {},
  created: function created() {
    // wx.setNavigationBarTitle({ title: "惊喜特惠 致敬新年" });
  },
  mounted: function mounted() {
    console.log();
  }
});

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": _vm.item.mainImgUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('h1', [_vm._v(_vm._s(_vm.item.title))]), _vm._v(" "), _c('p', [_vm._v("包税")]), _vm._v(" "), _c('h2', [_c('h3', [_c('span', [_vm._v("￥" + _vm._s(_vm.item.salesPrice))])]), _vm._v(" "), _c('h4', [_c('h5', [_vm._v("￥" + _vm._s(_vm.item.vipPrice))]), _vm._v(" "), _c('span', [_vm._v("赚￥" + _vm._s(_vm.item.memberDiscountPrice))])], 1)], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c6695bba", esExports)
  }
}

/***/ })
],[2]);