import router from '@/router'
import config from '@/_config'

export const back = _ => {
    router.back()
}
export const link = route => {
    if (!route) return
    if (
        typeof route === 'string' &&
        (route.indexOf('http') > -1 || route.indexOf('//') > -1)
    ) {
        return (location.href = route)
    }
    return router.push(route)
}

//#region 辅助方法

export function getDownloadUrl(imgUrl) {
    if (imgUrl || imgUrl.indexOf('http') === 0 || imgUrl.indexOf('//') === 0) {
        return imgUrl
    }
    return config.previwFileUrl + imgUrl
}
//#endregion

/**
 * 动态加载JS
 * @param {string} url 脚本地址
 * @param {function} callback
  回调函数
 */
export function dynamicLoadJs(url, callback) {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    if (typeof callback === 'function') {
        script.onload = script.onreadystatechange = function() {
            if (
                !this.readyState ||
                this.readyState === 'loaded' ||
                this.readyState === 'complete'
            ) {
                callback()
                script.onload = script.onreadystatechange = null
            }
        }
    }
    head.appendChild(script)
}
