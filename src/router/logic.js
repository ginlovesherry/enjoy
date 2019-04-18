import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

const beforeEach = (to, from, next) => {
    NProgress.start()
}
const afterEach = (to, from) => {
    NProgress.done()
}

export default {
    beforeEach,
    afterEach
}
