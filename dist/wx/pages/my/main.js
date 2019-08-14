require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

<<<<<<< HEAD
/***/ 163:
=======
/***/ 167:
>>>>>>> hn
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(164);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(168);
>>>>>>> hn



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

<<<<<<< HEAD
/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_30d2de04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(167);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
=======
/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_30d2de04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(171);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(169)
>>>>>>> hn
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-30d2de04"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_30d2de04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30d2de04", Component.options)
  } else {
    hotAPI.reload("data-v-30d2de04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

<<<<<<< HEAD
/***/ 165:
=======
/***/ 169:
>>>>>>> hn
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

<<<<<<< HEAD
/***/ 166:
=======
/***/ 170:
>>>>>>> hn
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: "",
      inviteCode: "",
      boo: false,
      trackId: ""
    };
  },

  components: {},
  onShow: function onShow() {},

  methods: {
    copy: function copy() {},
    goTolist: function goTolist() {},
    goto: function goto() {}
  }
});

/***/ }),

<<<<<<< HEAD
/***/ 167:
=======
/***/ 171:
>>>>>>> hn
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('header', [_c('dl', [_c('dt', [_c('img', {
    attrs: {
      "src": "/static/my/user.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_c('p', {
    staticClass: "name"
  }, [_vm._v("\n         dhsjfhjsdhfjd\n        ")]), _vm._v(" "), _c('p', {
    staticClass: "codeNum"
  }, [_vm._v("\n          邀请码：gfghhhh\n          "), _c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.copy()
      }
    }
  }, [_vm._v("复制")])])], 1)], 1)], 1), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "sec-top"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('h3', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.goTolist
    }
  }, [_vm._v("我的订单")]), _c('div', [_vm._v("查看所有的订单"), _c('img', {
    attrs: {
      "src": "/static/my/next.svg",
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "wallet"
  }, [_c('dl', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.goTolist
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": "/static/my/payment.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_vm._v("待付款")])], 1), _vm._v(" "), _c('dl', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.goTolist
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": "/static/my/shipments.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_vm._v("待发货")])], 1), _vm._v(" "), _c('dl', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.goTolist
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": "/static/my/receiving.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_vm._v("待收货")])], 1), _vm._v(" "), _c('dl', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.goTolist
    }
  }, [_c('dt', [_c('img', {
    attrs: {
      "src": "/static/my/refund.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', [_vm._v("退款退货")])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "msg"
  }, [_c('ul', [_c('li', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.goto(1)
      }
    }
  }, [_c('div', [_c('img', {
    staticClass: "img1",
    attrs: {
      "src": "/static/my/tp1.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("我的优惠卷")])]), _vm._v(" "), _c('img', {
    staticClass: "img2",
    attrs: {
      "src": "/static/my/next.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('li', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.goto(2)
      }
    }
  }, [_c('div', [_c('img', {
    staticClass: "img1",
    attrs: {
      "src": "/static/my/tp2.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("收货地址")])]), _vm._v(" "), _c('img', {
    staticClass: "img2",
    attrs: {
      "src": "/static/my/next.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('li', {
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.goto(3)
      }
    }
  }, [_c('div', [_c('img', {
    staticClass: "img1",
    attrs: {
      "src": "/static/my/tp3.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("联系客服")])]), _vm._v(" "), _c('img', {
    staticClass: "img2",
    attrs: {
      "src": "/static/my/next.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('li', {
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.goto(4)
      }
    }
  }, [_c('div', [_c('img', {
    staticClass: "img1",
    attrs: {
      "src": "/static/my/tp5.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("实名认证")])]), _vm._v(" "), _c('img', {
    staticClass: "img2",
    attrs: {
      "src": "/static/my/next.svg",
      "alt": ""
    }
  })])], 1)], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-30d2de04", esExports)
  }
}

/***/ })

<<<<<<< HEAD
},[163]);
=======
},[167]);
>>>>>>> hn
