import 'lib-flexible'
import 'normalize.css'
import '@assets/styles/border.css'
import '@assets/styles/common.sass'
import '@assets/styles/icon.sass'
import { Button, Tab, Tabs, Swipe, SwipeItem } from 'vant'
import directives from '@directives'
import components from '@components'
import filters from '@filters'
import * as $codes from './codes'
import $ui from './ui'
import axios from '@api'
import VueAxios from 'vue-axios'
import vConsole from 'vconsole'

const vants = { Button, Tab, Tabs, Swipe, SwipeItem }

const register = function(_vue) {
    Object.keys(vants).forEach(e => { _vue.use(vants[e]) })
    // 注册全局指令，过滤器，组件
    Object.keys(directives).forEach(e => _vue.directive(e, directives[e]))
    Object.keys(filters).forEach(e => _vue.filter(e, filters[e]))
    Object.keys(components).forEach(e => _vue.component(e, components[e]))
    _vue.use(VueAxios, axios);
    // 项目扩展 $ui, $codes
    var allExtends = { $ui, $codes }
    Object.keys(allExtends).forEach(e => {
        const plugin = {}
        plugin[e] = {
            get() {
                return allExtends[e]
            }
        }
        Object.defineProperties(_vue.prototype, plugin)
    })

    if (process.env.NODE_ENV === 'development') {
        new vConsole()
    }

    _vue.config.productionTip = false
}
const install = e => register(e)

export default {
    install,
    register
}
