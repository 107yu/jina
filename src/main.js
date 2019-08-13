import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

import store from "./store"

//引入组件
import TapTitle from "./compontents/tap/tapTitle.vue"
import MySwiper from "./compontents/mySwiper/mySwiper.vue"
import HomeBar from "./compontents/homeBar/homeBar.vue"
import DlList from "./compontents/dlList/dlList.vue"
import HotImg from "./compontents/hotImg/hotImg.vue"

//挂载：
Vue.component("TapTitle",TapTitle)
Vue.component("MySwiper",MySwiper)
Vue.component("HomeBar",HomeBar)
Vue.component("DlList",DlList)
Vue.component("HotImg",HotImg)

//挂载store
Vue.prototype.$store=store

const app = new Vue(App)
app.$mount()
