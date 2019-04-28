import request from '../fetch'
// 获取文章
export function apiGetArticles(data) {
    return request({
        url: '/getArticles',
        method: 'get',
        params: data
    });
}

export function follow() {
    return request({
        url: '/static/data/follow.data',
        method: 'get',
    })
}

export function getColumns(params) {
    return request({
        url: '/app_if/getColumns',
        method: 'get',
        params: params
    })
}
