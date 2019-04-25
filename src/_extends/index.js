import * as vants from './vants'
import '../assets/styles/app.css'
import '../assets/styles/layout.css'
import 'element-ui/lib/theme-chalk/index.css'
import directives from '../directives'
import components from '../components'
import filters from '../filters'
import * as $codes from './codes'
import $ui from './ui'
import $api from '../api'

const register = function(_vue) {
    Object.keys(vants).forEach((name) => {_vue.component(`Van${name}`, vants[name])})
    // 注册全局指令，过滤器，组件
    Object.keys(directives).forEach(e => _vue.directive(e, directives[e]))
    Object.keys(filters).forEach(e => _vue.filter(e, filters[e]))
    Object.keys(components).forEach(e => _vue.component(e, components[e]))

    // 项目扩展 $api, $ui, $codes
    var allExtends = { $api, $ui, $codes }
    Object.keys(allExtends).forEach(e => {
        const plugin = {}
        plugin[e] = {
            get() {
                return allExtends[e]
            }
        }
        Object.defineProperties(_vue.prototype, plugin)
    })
}
const install = e => register(e)

export default {
    install,
    register
}
