require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(119);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7ec8f392_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(1)
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

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(16);

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
      titles: ["今日推荐", "纸尿裤", "母婴专场", "服装", "家居", "小家电"],
      searchBtn: true
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
    homeLists: function homeLists(state) {
      return state.home.homeLists;
    }
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    search: function search() {
      this.searchBtn = false;
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    getProduct: "home/getProductList",
    getHomeList1: "home/getHomeList",
    getHomeList: "home/getHomeList1"
  })),
  created: function created() {},
  mounted: function mounted() {
    this.getProduct();
    this.getHomeList1();
    this.getHomeList();
  }
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('div', {
    staticClass: "input"
  }, [_c('input', {
    staticClass: "search",
    attrs: {
      "type": "text",
      "eventid": '0'
    },
    on: {
      "focus": _vm.search
    }
  }), _vm._v(" "), (_vm.searchBtn) ? _c('img', {
    attrs: {
      "src": "/static/images/搜索.svg",
      "alt": ""
    }
  }) : _vm._e()]), _vm._v(" "), _c('TapTitle', {
    attrs: {
      "titles": _vm.titles,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('MySwiper', {
    attrs: {
      "swiperList": _vm.homeLists[0] && _vm.homeLists[0].items,
      "mpcomid": '1'
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
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('HotImg', {
    attrs: {
      "hotimg": _vm.homeLists[4] && _vm.homeLists[4],
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('HomeBar', {
    attrs: {
      "homeBarHot": "今日秒杀",
      "describe": "先下单先得",
      "more": "true",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "boutique"
  }, _vm._l((_vm.homeLists[5] && _vm.homeLists[5].items), function(item, index) {
    return _c('DlList', {
      key: index,
      attrs: {
        "item": item,
        "mpcomid": '5_' + index
      }
    })
  })), _vm._v(" "), _c('HomeBar', {
    attrs: {
      "homeBarHot": "精品好物",
      "describe": "等你来抢",
      "more": "true",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "boutique"
  }, _vm._l((_vm.homeLists[7] && _vm.homeLists[7].items), function(item, index) {
    return _c('DlList', {
      key: index,
      attrs: {
        "item": item,
        "mpcomid": '7_' + index
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7ec8f392", esExports)
  }
}

/***/ })

},[118]);