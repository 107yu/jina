require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(13);




// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

//挂载store
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4a74440c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(222);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a74440c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4a74440c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\recommend\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a74440c", Component.options)
  } else {
    hotAPI.reload("data-v-4a74440c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {},
  components: {},
  data: function data() {
    return {};
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
    navData: function navData(state) {
      return state.recommend.navData;
    },
    ind: function ind(state) {
      return state.recommend.ind;
    },
    headData: function headData(state) {
      return state.recommend.headData;
    },
    newNav: function newNav(state) {
      return state.recommend.newNav;
    },
    countData: function countData(state) {
      return state.recommend.countData;
    },
    current: function current(state) {
      return state.recommend.current;
    }
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])({
    tabNav: "recommend/tabNav",
    sortTabs: "recommend/sortTabs",
    updatepull: "recommend/updatepull"
  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    getNavData: "recommend/getNavData",
    getCountData: "recommend/getCountData"
  }), {
    //顶部tab切换
    tab: function tab(index, id) {
      this.tabNav({ index: index, id: id });
      // console.log(this.current.cid);
      //顶部切换时联动下面数据
      this.getCountData({
        pageIndex: this.current.pageIndex,
        cid: id,
        sortType: this.current.sortType
      });
      this.mask();
    },

    //综合价格切换
    sortTab: function sortTab(sortType) {
      this.sortTabs({ sortType: sortType });
      this.getCountData({
        pageIndex: this.current.pageIndex,
        cid: this.current.cid,
        sortType: this.current.sortType
      });
      this.mask();
    },

    //点击head 第二块也切换视图
    headClick: function headClick(id) {
      this.getCountData({
        pageIndex: this.current.pageIndex,
        cid: id,
        sortType: this.current.sortType
      });
      this.mask();
    },
    mask: function mask() {
      wx.showLoading({
        title: "加载中",
        mask: true
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 500);
    },

    //去首页
    gotoHome: function gotoHome() {
      wx.navigateBack({
        delta: 2
      });
    },

    //滚动事件
    scrollload: function scrollload() {
      // this.updatepull()
      // ++this.current.pageIndex
      // console.log(this.current.pageIndex)
    }
  }),
  created: function created() {
    //头部
    this.getNavData();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('scroll-view', {
    attrs: {
      "scroll-x": ""
    }
  }, [_c('div', {
    staticClass: "box_nav"
  }, [_c('p', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.gotoHome
    }
  }, [_vm._v("今日推荐")]), _vm._v(" "), _vm._l((_vm.navData), function(item, index) {
    return _c('p', {
      key: index,
      class: index === _vm.ind ? 'active' : null,
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.tab(index, item.cid)
        }
      }
    }, [_vm._v(_vm._s(item.cname))])
  })], 2)]), _vm._v(" "), _c('scroll-view', {
    staticClass: "section",
    attrs: {
      "scroll-y": "",
      "eventid": '4'
    },
    on: {
      "scroll": _vm.scrollload
    }
  }, [_c('div', {
    staticClass: "head"
  }, _vm._l((_vm.headData), function(item, index) {
    return _c('dl', {
      key: index,
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.headClick(item.cid)
        }
      }
    }, [_c('dt', [_c('img', {
      attrs: {
        "src": item.imgUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('dd', [_vm._v(_vm._s(item.cname))])], 1)
  })), _vm._v(" "), _c('ul', [_vm._l((_vm.newNav), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.sortTab(item.sortType)
        }
      }
    }, [_vm._v(_vm._s(item.cname))])
  }), _vm._v(" "), (_vm.newNav[2].sortType === 3) ? _c('li', [_c('img', {
    attrs: {
      "src": "/static/images/downbg.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/down.svg",
      "alt": ""
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.newNav[2].sortType === 4) ? _c('li', [_c('img', {
    attrs: {
      "src": "/static/images/down.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/downbg.svg",
      "alt": ""
    }
  })]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, _vm._l((_vm.countData), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('recommendItem', {
      attrs: {
        "item": item,
        "mpcomid": '0_' + index
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4a74440c", esExports)
  }
}

/***/ })

},[218]);