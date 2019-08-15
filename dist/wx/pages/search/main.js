require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(218);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_62000480_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(221);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(219)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62000480"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_62000480_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62000480", Component.options)
  } else {
    hotAPI.reload("data-v-62000480", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 219:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);

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
    return {
      history: [],
      flag: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
    searchList: function searchList(state) {
      return state.search.searchList;
    },
    searchVal: function searchVal(state) {
      return state.search.searchVal;
    },
    searchTitle: function searchTitle(state) {
      return state.search.searchTitle;
    },
    currenType: function currenType(state) {
      return state.search.currenType;
    },
    currentValue: function currentValue(state) {
      return state.search.currentValue;
    }
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    scroll: function scroll(e) {
      if (e.target.scrollTop >= 60) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])({
    changeType: "search/changeType"

  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    sendSearch: "search/sendSearch"
  }), {
    changeTitle: function changeTitle(index) {
      this.sendSearch({
        "queryWord": this.currentValue,
        "queryType": this.currenType,
        "querySort": "desc",
        "pageIndex": 1
      });
      this.changeType(index);
    }
  }),
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    wx.getStorage({
      key: 'history',
      success: function success(res) {
        _this.history = JSON.parse(res.data);
      }

    });
  }
});

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": "",
      "eventid": '1'
    },
    on: {
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    staticClass: "main"
  }, [_c('MySearch', {
    attrs: {
      "searchPage": "searchPage",
      "mpcomid": '0'
    }
  }, [_c('span', {
    staticClass: "cancel"
  }, [_vm._v("取消")])]), _vm._v(" "), (!_vm.searchVal) ? _c('div', {
    staticClass: "historySearch"
  }, [_c('div', {
    staticClass: "historyTop"
  }, [_c('span', [_vm._v("历史记录")]), _vm._v(" "), _c('span', [_c('img', {
    attrs: {
      "src": "/static/images/删除.svg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "historyContent"
  }, _vm._l((_vm.history), function(item, index) {
    return _c('span', {
      key: index
    }, [_vm._v(_vm._s(item))])
  }))]) : _vm._e(), _vm._v(" "), (_vm.searchList.message === '成功' && _vm.searchVal) ? _c('div', {
    staticClass: "content "
  }, [_c('div', {
    class: ['title', {
      'fixed': _vm.flag
    }]
  }, _vm._l((_vm.searchTitle), function(item, index) {
    return _c('span', {
      key: index,
      class: {
        'titleShow': index === _vm.currenType
      },
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeTitle(index)
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  })), _vm._v(" "), _c('div', {
    staticClass: "contentList"
  }, _vm._l((_vm.searchList.result), function(item, index) {
    return _c('dl', {
      key: index
    }, [_c('dt', [_c('img', {
      attrs: {
        "src": item.mainImgUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', [_c('b', [_vm._v("￥" + _vm._s(item.salesPrice))]), _vm._v(" "), _c('span', [_vm._v("￥" + _vm._s(item.vipPrice))])], 1)], 1), _vm._v(" "), _c('strong', {
      staticClass: "newBtn"
    }, [_vm._v("NEW")])], 1)
  }))]) : _vm._e(), _vm._v(" "), (_vm.searchList.message === '未查询到' && _vm.searchVal) ? _c('div', {
    staticClass: "noGoods"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/nogoods.png",
      "alt": ""
    }
  })]) : _vm._e()], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-62000480", esExports)
  }
}

/***/ })

},[217]);