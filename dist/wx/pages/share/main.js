require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(224);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1fc2d6dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(227);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(225)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1fc2d6dd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1fc2d6dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\share\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fc2d6dd", Component.options)
  } else {
    hotAPI.reload("data-v-1fc2d6dd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 226:
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


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            userInfo: {
                avtar: 'http://img2.imgtn.bdimg.com/it/u=265535345,1890400617&fm=26&gp=0.jpg',
                nickName: '姬小胜是小狗',
                code: 'C5JSKWUU2888',
                goodsUrl: "https://img.alicdn.com/imgextra/i3/743750137/O1CN01nPCvEA1CsmoHlOLWB_!!0-item_pic.jpg_430x430q90.jpg",
                title: "美宝莲星钻小灯管口红女持久保湿滋润显白金鱼花火唇膏夏日限量版2美宝莲星钻小灯管口红女持久保湿滋润显白金鱼花火唇膏夏日限量版",
                vipPrice: "299",
                salesPrice: "399"
                // qrCode: 'https://upapi.jinaup.com/static/image/QRCode.png'
            }
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
        // userInfo: state=>state.productDetail.userInfo
    })),
    methods: {
        //点击保存图片
        save: function save() {
            wx.canvasToTempFilePath({
                canvasId: "shareCanvas",
                quality: 1,
                complete: function complete(res) {
                    console.log(res);
                    if (res.errMsg == "canvasToTempFilePath:ok") {
                        wx.saveImageToPhotosAlbum({
                            filePath: res.tempFilePath,
                            complete: function complete(res) {
                                console.log("res", res);
                            }
                        });
                    }
                }
            });
        }
    },
    created: function created() {},
    mounted: function mounted() {
        var _this = this;

        var context = wx.createCanvasContext('shareCanvas'); // 获取绘制图像的上下文
        context.setFillStyle("white"); // 背景
        context.fillRect(0, 0, 414, 736); //  你，、绘制一个矩形，大小是414,736  6plus的尺寸
        //绘制头像
        context.drawImage(this.userInfo.avtar, 10, 20, 50, 50);
        //绘制昵称
        context.save();
        context.setFillStyle('#5D9AFC');
        context.setFontSize(14);
        context.fillText(this.userInfo.nickName, 70, 40);

        context.setFillStyle('#000');
        context.fillText('分享给你一个商品', 75 + context.measureText(this.userInfo.nickName).width, 40);

        context.fillText('\u9080\u8BF7\u7801\uFF1A' + this.userInfo.code, 70, 70);

        context.restore();

        //绘制商品图片：
        context.restore();
        wx.getImageInfo({ //获取图片的信息：
            src: this.userInfo.goodsUrl,
            success: function success(res) {
                context.drawImage(_this.userInfo.goodsUrl, 0, 0, res.width, res.height, 19.7, 117, 275, 280);
                context.draw(true);
            }
        });

        //绘制介绍文字：
        context.save();
        context.setFillStyle("black");
        context.setFontSize(16);
        var row = 0;
        var pos = 0;
        for (var i = 0; i < this.userInfo.title.length; i++) {
            var str = this.userInfo.title.slice(pos, i);
            var len = context.measureText(str).width;
            if (len >= 300 && len < 375) {
                context.fillText(str, 20, 425 + row * 20);
                row++;
                pos = i;
            }
        }
        if (pos < this.userInfo.title.length - 1) {
            context.fillText(this.userInfo.title.slice(pos), 20, 425 + row * 20);
        }
        // context.fillText(this.userInfo.title+"顺丰包邮",0)
        context.setFillStyle("red");
        context.setFontSize(16);
        context.fillText("￥" + this.userInfo.vipPrice + "元", 10, 455 + row * 20);
        context.setFontSize(12);
        context.setFillStyle("#333");
        context.fillText("￥" + this.userInfo.salesPrice + "元", 70 + context.measureText(this.userInfo.vipPrice).width, 455 + row * 20);
        context.restore();

        //一条斜线
        context.save();
        context.moveTo(70 + context.measureText(this.userInfo.vipPrice).width, 450 + row * 20);
        context.lineTo(120 + context.measureText(this.userInfo.vipPrice).width, 450 + row * 20);
        context.stroke();

        //二维码文字和图片：
        context.save();
        context.setFontSize(20);
        context.setFillStyle("black");
        context.fillText("长按识别二维码访问", 10, 490 + row * 20);
        context.drawImage(this.userInfo.goodsUrl, 270, 470 + row * 20, 60, 60);
        context.restore();

        //生成图片：


        context.draw();
    }
});

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "share"
  }, [_vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "footer"
  }, [_c('li', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.save
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/保存图片 copy 2.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "/static/images/分享微信.svg",
      "alt": ""
    }
  })])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "picture"
  }, [_c('canvas', {
    staticStyle: {
      "width": "100%",
      "height": "100%"
    },
    attrs: {
      "canvas-id": "shareCanvas"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1fc2d6dd", esExports)
  }
}

/***/ })

},[223]);