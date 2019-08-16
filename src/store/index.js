import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'

//引入模块：
import home from './modules/home'
import special from './modules/special'
import search from "./modules/search"
import orider from "./modules/orider"
import sepcialList from './modules/sepcialList'
import productCoupon from './modules/productCoupon'
import recommend from './modules/recommend'
import productDetail from "./modules/productDetail"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        special,
        search,
        orider,
        sepcialList,
        productCoupon,
        recommend,
        productDetail
    },
    plugins: [CreateLogger()]
})
