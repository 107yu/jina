import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'


//引入组件
import TapTitle from "./compontents/tap/tapTitle.vue"
import MySwiper from "./compontents/mySwiper/mySwiper.vue"

//挂载：
Vue.component("TapTitle",TapTitle)
Vue.component("MySwiper",MySwiper)

const app = new Vue(App)
app.$mount()
