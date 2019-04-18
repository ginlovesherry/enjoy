// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import './assets/styles/border.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vConsole from 'vconsole'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
    new vConsole()
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
