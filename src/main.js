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
import HomeRecommend from "./components/homeRecommend/homeRecommend.vue"
import MySearch from "./components/search/search.vue"
import OriderList from "./components/oriderList/oriderList.vue"
import OriderDl from "./components/oriderList/oriderDl.vue"

//挂载：
Vue.component("TapTitle",TapTitle)
Vue.component("MySwiper",MySwiper)
Vue.component("HomeBar",HomeBar)
Vue.component("DlList",DlList)
Vue.component("HotImg",HotImg)
Vue.component("HomeRecommend",HomeRecommend)
Vue.component("MySearch",MySearch)
Vue.component("OriderList",OriderList)
Vue.component("OriderDl",OriderDl)

//挂载store
Vue.prototype.$store=store

const app = new Vue(App)
app.$mount()
