import Vue from 'vue'
import App from './App'
import store from "./store"

Vue.config.productionTip = false
App.mpType = 'app'

//引入组件
import TapTitle from "./components/tap/tapTitle.vue"
import MySwiper from "./components/mySwiper/mySwiper.vue"
import HomeBar from "./components/homeBar/homeBar.vue"
import DlList from "./components/dlList/dlList.vue"
import HotImg from "./components/hotImg/hotImg.vue"
import specialItem from './components/specialItem'


//挂载：
Vue.component("TapTitle",TapTitle)
Vue.component("MySwiper",MySwiper)
Vue.component("HomeBar",HomeBar)
Vue.component("DlList",DlList)
Vue.component("HotImg",HotImg)
Vue.component('specialItem', specialItem)


//挂载store
Vue.prototype.$store=store

const app = new Vue(App)
app.$mount()
