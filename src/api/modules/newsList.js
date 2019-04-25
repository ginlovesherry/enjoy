import request from '../fetch'
//获取文章
export function apiGetArticles(data) {
    return request({
        url: "/getArticles",
        method: "get",
        params: data
    });
}
