import Vue from 'vue'
import App from './App'
import specialItem from './components/specialItem'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.component('specialItem', specialItem)

const app = new Vue(App)
app.$mount()
