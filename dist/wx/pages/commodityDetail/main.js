require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([18],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(164);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_f6962b48_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(167);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_f6962b48_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\commodityDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6962b48", Component.options)
  } else {
    hotAPI.reload("data-v-f6962b48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);

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
    return {
      //supplierProductPictureVoList   轮播图
      //warehouseVo   公司信息
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
    goodsDetail: function goodsDetail(state) {
      return state.home.goodsDetail;
    }
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    getGoodsInfo: "home/getGoodsInfo"
  }), {
    changshare: function changshare() {
      wx.navigateTo({
        url: "/pages/share/main"
      });
    }
  }),
  created: function created() {},
  mounted: function mounted() {
    this.getGoodsInfo({
      pid: this.$root.$root.$mp.query.id
    });
  }
});

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": ""
    }
  }, [_c('div', {
    staticClass: "swiper"
  }, [(_vm.goodsDetail.supplierProductPictureVoList && _vm.goodsDetail.supplierProductPictureVoList.length > 0) ? _c('swiper', {
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "2000",
      "duration": "1000",
      "indicator-active-color": "#fff"
    }
  }, _vm._l((_vm.goodsDetail.supplierProductPictureVoList), function(val, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
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
  })) : _vm._e(), _vm._v(" "), (_vm.goodsDetail.supplierProductPictureVoList && _vm.goodsDetail.supplierProductPictureVoList.length === 0) ? _c('img', {
    attrs: {
      "src": _vm.goodsDetail.mainImgUrl,
      "alt": ""
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_c('div', {
    staticClass: "ones"
  }, [_c('p', [_vm._v("￥")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v(_vm._s(_vm.goodsDetail.salesPrice))]), _vm._v(" "), _c('s', {
    staticClass: "num"
  }, [_vm._v("￥" + _vm._s(_vm.goodsDetail.vipPrice))])], 1), _vm._v(" "), _c('p', {
    staticClass: "times",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.changshare
    }
  }, [_vm._v("分享赚：￥" + _vm._s(_vm.goodsDetail.memberDiscountPrice))])], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "names"
  }, [_vm._v(_vm._s(_vm.goodsDetail.title))]), _vm._v(" "), _c('p', [_c('span', [_vm._v("快递包邮")])])], 1), _vm._v(" "), _c('ul', {
    staticClass: "list"
  }, [_c('li', {
    staticClass: "lis"
  }, [_c('span', [_vm._v("选择 规格")]), _vm._v(" "), _c('div', {
    staticClass: "rights",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toShow
    }
  }, [_c('span', [_vm._v("颜色 尺码")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/images/下一步.svg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('li', [_vm._v("\n          说明:" + _vm._s(_vm.goodsDetail.description) + "\n        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.changshare
    }
  }, [_vm._v("分享赚1.98")]), _vm._v(" "), _c('button', [_vm._v("立即购买")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f6962b48", esExports)
  }
}

/***/ })

},[163]);