require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([20],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6a343830_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(167);
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
var __vue_scopeId__ = "data-v-6a343830"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6a343830_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\canvas\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a343830", Component.options)
  } else {
    hotAPI.reload("data-v-6a343830", Component.options)
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
      qrCode: 'https://upapi.jinaup.com/static/image/QRCode.png',
      userI: {
        avtar: "https://jnup.oss-cn-beijing.aliyuncs.com/product/a911cc3d771d0cef5fca95e441976a3e.jpg",
        nickname: "韩娜"
      },
      info: {
        pid: 37253,
        basePid: 37085,
        cid: 270,
        cName: null,
        bid: 15121,
        bName: null,
        title: "内含哈密瓜味月饼5个、凤梨味5个、蛋黄香芋味月饼3个、蛋黄红豆味月饼3个",
        shortTitle: "BY-HEALTH 汤臣倍健 牛乳钙片压片糖果 60片/瓶",
        description: null,
        importType: 3,
        origin: "",
        unitMeasure: null,
        unitMeasureValue: null,
        weight: 0,
        barCode: "",
        country: "中国",
        isFreeShipping: 0,
        isPresell: 0,
        isFreeTax: 1,
        " mainImgUrl": "https://jnup.oss-cn-beijing.aliyuncs.com/product/a911cc3d771d0cef5fca95e441976a3e.jpg",
        mainImgWidth: null,
        mainImgHeight: null,
        isSelf: 1,
        isNew: 1,
        isHot: 0,
        isRecommend: 0,
        deliveryCode: 0,
        productType: 0,
        marketPrice: 98.0,
        supplyPrice: 44.0,
        wholesalePrice: 0.0,
        salesPrice: 59.0,
        storePrice: 98.0,
        commissionAmount: 0.0,
        isSowing: 0,
        sowingPrice: 0.0,
        originalPid: 0,
        productAscription: 1,
        sstid: null,
        limitedNumber: -1,
        state: 1,
        authState: 1,
        userIdentity: 2,
        uid: 51,
        uName: null,
        usiid: 0,
        swid: 51,
        settlementMethod: 1,
        deductionPoints: 0,
        productionDateStr: null,
        productionDate: null,
        sortId: 1000,
        totalSales: 0,
        customerService: "kefuchannelimid_719280",
        createTime: 1555563891000,
        updateTime: 1561459552000,
        productStatisticsVo: null,
        productPictureVoList: null,
        supplierProductPictureVoList: [{
          ppid: 686204,
          pid: 37253,
          imgType: 1,
          imgUrl: "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
          imgWidth: null,
          imgHeight: null,
          sortId: 1,
          state: 1,
          createTime: 1555563892000,
          updateTime: 1555583277000
        }, {
          ppid: 686205,
          pid: 37253,
          imgType: 1,
          imgUrl: "http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg",
          imgWidth: null,
          imgHeight: null,
          sortId: 2,
          state: 1,
          createTime: 1555563892000,
          updateTime: 1555583277000
        }, {
          ppid: 686206,
          pid: 37253,
          imgType: 1,
          imgUrl: "http://haitao.nos.netease.com/76bd5456369c43438655b43e88b6a20e1525954377917jh0hu5ja13299.jpg",
          imgWidth: null,
          imgHeight: null,
          sortId: 3,
          state: 1,
          createTime: 1555563892000,
          updateTime: 1555583277000
        }],
        estimatedTax: 0,
        warehouseVo: null,
        shippingTemplatesVo: null,
        supplierProductSkuVoList: [{
          skuKey: "3fc66ce52418393b2b1ba2d81d1ecb56",
          pid: 37253,
          uid: 51,
          supplierSkuId: "20011732490",
          skuName: "默认",
          store: 4,
          marketPrice: 98.0,
          supplyPrice: 44.0,
          wholesalePrice: 0.0,
          salesPrice: 59.0,
          storePrice: 98.0,
          commissionAmount: 0.0,
          attributeValueJson: '[{"aid":1,"aname":"规格","pid":37253,"valueVo":{"aid":1,"pid":37253,"vid":1,"vname":"默认"}}]',
          swid: 11133,
          state: 1,
          barCode: "",
          createTime: 1555924728000,
          updateTime: 1562119774000,
          pids: null,
          object: null,
          splitOrder: null,
          taxRate: 0.0
        }],
        productSeckillInfoVoList: null,
        seckillProductInfoVoList: null,
        productGroupInfoVoList: null,
        attributeNameVoList: null,
        buyNum: null,
        discountAmount: null,
        memberDiscountPrice: 7.45,
        vipPrice: 51.55,
        earnMoney: 7.45,
        seckillEarnMoney: null,
        skuKey: null,
        seckillStartTime: null,
        seckillEndTime: null,
        productSkuVo: null,
        shareUrl: "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
        xcxShareUrl: "/pages/go2detail/main?id=37253&fromInviteCode=2TWHAR5",
        xcxFriendShareUrl: "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
        cooperationType: 1,
        totalStock: 4,
        seckillPrice: null,
        originalPrice: null,
        periodValue: null,
        purchaserName: null
      }
    };
  },

  computed: {},
  methods: {},
  created: function created() {},
  mounted: function mounted() {
    //获取canvas
    var context = wx.createCanvasContext("canvas");
    //绘制头像和昵称
    context.drawImage(this.userI.avtar, 0, 0, 800, 800, 20, 33, 37.5, 37.5);
    context.save();
    context.setFillStyle("#5D9AFC");
    context.setFontSize(14);
    context.fillText(this.userI.nickname, 66, 50);
    context.setFillStyle("#000");
    context.fillText("分享给你一个商品", 72 + context.measureText(this.userI.nickname).width, 50);
    context.setFillStyle("#000");
    context.fillText("\u9080\u8BF7\u7801\uFF1AC5JQD7O", 66, 70);
    context.drawImage(this.info.supplierProductPictureVoList[0].imgUrl, 0, 100, 300, 260, 0, 0);
    context.setFillStyle("#000");
    context.fillText(this.info.title, 10, 386, 290);
    context.setFillStyle("#fc5d7b");
    context.fillText("￥" + this.info.marketPrice, 10, 410);
    //绘制二维码
    context.setFillStyle("#ddd");
    context.fillText("\u957F\u6309\u8BC6\u522B\u4E8C\u4F4D\u7801", 10, 434);
    context.setFontSize(15);
    context.restore();
    context.drawImage(this.qrCode, 180, 400, 100, 100);
    //  context.drawImage( this.info.supplierProductPictureVoList[0].imgUrl, 0, 0, 300, 260, 50, 80, 220, 260);
    //   context.draw(true, ()=>{
    //     // 生成图片
    //     wx.canvasToTempFilePath({
    //       canvasId: 'canvas',
    //       quality: 1,
    //       fileType: 'jpg',
    //       complete: res=>{
    //         console.log('tmpFile...', res);
    //         // 预览一下
    //         wx.previewImage({
    //           urls: [res.tempFilePath] //需要预览的图片链接列表,
    //         });
    //         // 保存到本地
    //       }
    //     })
    //   });
    context.draw();
  }
});

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('canvas', {
    staticStyle: {
      "width": "300px",
      "height": "568px"
    },
    attrs: {
      "canvas-id": "canvas"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6a343830", esExports)
  }
}

/***/ })

},[163]);