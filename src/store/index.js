import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'

//引入模块：
import home from './modules/home'
import special from './modules/special'
import search from "./modules/search"


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        special,
        search
    },
    plugins:[CreateLogger()]
})
