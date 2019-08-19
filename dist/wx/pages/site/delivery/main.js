require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(259);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6abdbd0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(262);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(260)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6abdbd0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6abdbd0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\site\\delivery\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6abdbd0c", Component.options)
  } else {
    hotAPI.reload("data-v-6abdbd0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 260:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 261:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {},
    components: {},
    data: function data() {
        return {};
    },

    computed: {},
    methods: {
        changbtn: function changbtn() {
            wx.navigateTo({
                url: "/pages/site/sitelist/main"
            });
        },
        created: function created() {},
        mounted: function mounted() {}
    }
});

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    attrs: {
      "report-submit": "",
      "eventid": '1'
    },
    on: {
      "submit": _vm.submit
    }
  }, [_c('div', {
    staticClass: "outbox"
  }, [_c('div', {
    staticClass: "chagne_add_data"
  }, [_c('div', {
    staticClass: "user_change_data"
  }, [_c('input', {
    staticClass: "user_address_data",
    attrs: {
      "type": "text",
      "placeholder": "收货人"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "user_address_right"
  }, [_c('img', {
    attrs: {
      "src": "../../../../static/images/lt.svg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "user_change_data"
  }, [_c('input', {
    staticClass: "user_address_data",
    attrs: {
      "type": "text",
      "placeholder": "手机号码"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "user_address_right user_address_right2"
  }, [_c('i', [_vm._v("+ 86")]), _c('img', {
    attrs: {
      "src": "../../../../static/images/lt.svg",
      "alt": ""
    }
  })], 1)]), _vm._v(" "), _c('view', {
    staticClass: "user_change_data"
  }, [_c('picker', [_c('view', {
    staticClass: "user_change_data"
  }, [_c('input', {
    staticClass: "user_address_data",
    attrs: {
      "type": "text",
      "placeholder": "所在地区"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "user_address_right"
  }, [_c('img', {
    attrs: {
      "src": "../../../../static/images/lt.svg",
      "alt": ""
    }
  })])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "user_change_data user_textarea"
  }, [_c('textarea', {
    attrs: {
      "placeholder": "详细地址：如道路、门牌号、小区、楼栋号、单元 室等"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "user_data_title"
  }, [_c('div', {
    staticClass: "user_title_type"
  }, [_c('p', {
    staticClass: "title_type_tit"
  }, [_vm._v("标签")]), _vm._v(" "), _c('div', {
    staticClass: "user_every_type"
  }, [_c('span', [_vm._v("家")]), _vm._v(" "), _c('span', [_vm._v("公司")]), _vm._v(" "), _c('span', [_vm._v("学校")]), _vm._v(" "), _c('span', [_vm._v("其他")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "user_default_address"
  }, [_c('p', {
    staticClass: "set_default_address"
  }, [_vm._v("设为默认地址")]), _vm._v(" "), _c('switch')], 1)]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "form-type": "submit",
      "eventid": '0'
    },
    on: {
      "click": _vm.changbtn
    }
  }, [_vm._v("保存")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6abdbd0c", esExports)
  }
}

/***/ })

},[258]);