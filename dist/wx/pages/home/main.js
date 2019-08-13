require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(121);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7ec8f392_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(131);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ec8f392"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7ec8f392_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ec8f392", Component.options)
  } else {
    hotAPI.reload("data-v-7ec8f392", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(25);

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
    return {};
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])({
    homeLists: function homeLists(state) {
      return state.home.homeLists;
    },
    categories: function categories(state) {
      return state.home.categories;
    }
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    getCategoryLists: "home/getCategoryLists",
    getProductLists: "home/getProductLists",
    getHomeList: "home/getHomeList"
  }), {
    goToSearch: function goToSearch() {}
  }),
  created: function created() {},
  mounted: function mounted() {
    this.getCategoryLists();
    this.getProductLists();
    this.getHomeList();
  }
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('MySearch', {
    attrs: {
      "homePage": "1",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('TapTitle', {
    attrs: {
      "titles": _vm.categories,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('MySwiper', {
    attrs: {
      "swiperList": _vm.homeLists[0] && _vm.homeLists[0].items,
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "introduce"
  }, _vm._l((_vm.homeLists[1] && _vm.homeLists[1].items), function(item, index) {
    return _c('dl', {
      key: index
    }, [_c('dt', [_c('img', {
      attrs: {
        "src": item.imgUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('dd', [_vm._v(_vm._s(item.title))])], 1)
  })), _vm._v(" "), _c('HotImg', {
    attrs: {
      "hotimg": _vm.homeLists[2] && _vm.homeLists[2],
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('HomeRecommend', {
    attrs: {
      "hotimg": _vm.homeLists[4] && _vm.homeLists[4],
      "homeLi": _vm.homeLists[5] && _vm.homeLists[5].items,
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('HomeRecommend', {
    attrs: {
      "hotimg": _vm.homeLists[6] && _vm.homeLists[6],
      "homeLi": _vm.homeLists[7] && _vm.homeLists[7].items,
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('HomeRecommend', {
    attrs: {
      "hotimg": _vm.homeLists[8] && _vm.homeLists[8],
      "homeLi": _vm.homeLists[9] && _vm.homeLists[9].items,
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('HomeRecommend', {
    attrs: {
      "hotimg": _vm.homeLists[10] && _vm.homeLists[10],
      "homeLi": _vm.homeLists[11] && _vm.homeLists[11].items,
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('HomeRecommend', {
    attrs: {
      "hotimg": _vm.homeLists[12] && _vm.homeLists[12],
      "homeLi": _vm.homeLists[13] && _vm.homeLists[13].items,
      "mpcomid": '8'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7ec8f392", esExports)
  }
}

/***/ })

},[120]);