import request from '../fetch'
//获取子栏目
export function apiGetColumns(data) {
    return request({
        url: 'api/getColumns',
        method: 'get',
        params: data
    });
}
//获取子孙栏目
export function apiGetColumnsAll(data) {
    return request({
        url: 'api/getColumnsAll',
        method: 'get',
        params: data
    });
}
