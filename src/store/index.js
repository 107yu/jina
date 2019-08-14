import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'

//引入模块：
import home from './modules/home'
import special from './modules/special'
import recommend from './modules/recommend'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        special,
        recommend
    },
    plugins:[CreateLogger()]
})
