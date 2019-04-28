import request from '../fetch'
export default {
    getUser() {
        return request({
            url: 'user',
            method: 'get'
        })
    },
    getColumns(params) {
        return request({
            url: '/app_if/getColumns',
            method: 'get',
            params: params
        })
    },
    getArticles(params) {
        return request({
            url: '/app_if/getArticles',
            method: 'get',
            params: params
        })
    },
    getActivityList(params) {
        return request({
            url: '/app_if/activityList',
            method: 'get',
            params: params
        })
    },
    getModuleView(params) {
        return request({
            url: '/app_if/moduleView.do',
            method: 'get',
            params: params
        })
    },
    getArticleContent(params) {
        return request({
            url: '/app_if/getArticleContent',
            method: 'get',
            params: params
        })
    }
};
