require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(173);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6f3cdac2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(176);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f3cdac2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6f3cdac2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\hotimgDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f3cdac2", Component.options)
  } else {
    hotAPI.reload("data-v-6f3cdac2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 175:
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
    methods: {
        changcommoddity: function changcommoddity() {
            wx.navigateTo({
                url: "/pages/commodityDetail/main"
            });
        }
    },
    created: function created() {},
    mounted: function mounted() {}
});

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "toy"
  }, [_c('h2', [_vm._v("玩具专区")])], 1), _vm._v(" "), _c('scroll-view', {
    staticClass: "list",
    attrs: {
      "scroll-y": ""
    }
  }, [_c('p', [_vm._v("-------●  玩具专区  ●-------")]), _vm._v(" "), _c('div', {
    staticClass: "list_L",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.changcommoddity
    }
  }, [_c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "../../../static/images/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("超级飞侠如玩家较为爱车腐恶啊和覅发挥全程")]), _vm._v(" "), _c('b', [_vm._v("￥25")])], 1)], 1), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "../../../static/images/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("超级飞侠如玩家较为爱车腐恶啊和覅发挥全程")]), _vm._v(" "), _c('b', [_vm._v("￥25")])], 1)], 1), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "../../../static/images/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("超级飞侠如玩家较为爱车腐恶啊和覅发挥全程")]), _vm._v(" "), _c('b', [_vm._v("￥25")])], 1)], 1), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "../../../static/images/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("超级飞侠如玩家较为爱车腐恶啊和覅发挥全程")]), _vm._v(" "), _c('b', [_vm._v("￥25")])], 1)], 1), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "../../../static/images/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("超级飞侠如玩家较为爱车腐恶啊和覅发挥全程")]), _vm._v(" "), _c('b', [_vm._v("￥25")])], 1)], 1), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "../../../static/images/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("超级飞侠如玩家较为爱车腐恶啊和覅发挥全程")]), _vm._v(" "), _c('b', [_vm._v("￥25")])], 1)], 1), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "../../../static/images/2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v("超级飞侠如玩家较为爱车腐恶啊和覅发挥全程")]), _vm._v(" "), _c('b', [_vm._v("￥25")])], 1)], 1)], 1)], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tupian"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/1.jpg",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6f3cdac2", esExports)
  }
}

/***/ })

},[172]);