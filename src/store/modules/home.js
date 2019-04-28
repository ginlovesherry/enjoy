/**
 * @file home.js
 * @author shenjp@founder.com
 * @date 2019-04-09 18:13:48
 */
import Vue from 'vue'
import * as types from '../mutation-types'
export default {
    state: {
        columns: [],
        articlesList: [],
        recommend: [],
        activityList: [],
        showMore: false,
        success: true,
        recommendList: []
    },
    actions: {
        getColumns({ commit }, params) {
            return Vue.axios.baseUrl.getColumns(params)
                .then(res => {
                    let { columns } = res || {};
                    let result = (columns || []).filter(
                        item =>
                            item.columnStyle === '101' || // 新闻栏目
                            item.columnStyle === '225' || // 直播栏目
                            item.columnStyle === '201' || // 普通栏目
                            item.columnStyle === '203' || // 视频栏目
                            item.columnStyle === '221' || // 活动栏目
                            item.columnStyle === '227'
                    );
                    commit(types.GET_COLUMNS, {
                        list: result,
                    });
                    return res;
                })
                .catch(err => {
                    console.error(err);
                    return Promise.reject(err);
                })
        },
        getArticles({ commit, state, dispatch }, params) {
            state.recommendList = [];
            Vue.axios.baseUrl.getArticles(params)
                .then(res => {
                    let { list, modules } = res || [];
                    if (modules.length > 0) {
                        let moduleArr = [];
                        modules.forEach(item => {
                            if (item.type === 0) {
                                let obj = {
                                    id: item.moduleID,
                                    userID: item.targetColumn.id
                                };
                                moduleArr.push(dispatch('getModulesList', obj));
                            }
                        })
                        Promise.all(moduleArr)
                            .then(value => {
                                commit(types.GET_MODULE_LIST, {
                                    list: value
                                });
                            })
                    }
                    commit(types.GET_ARTICLES, {
                        list,
                        modules: modules.filter(info => info.targetColumn.id),
                        show: list.length > 0
                    });
                })
                .catch(err => {
                    console.error(err);
                })
        },
        getModulesList({ commit }, params) {
            return Vue.axios.baseUrl.getModuleView(params)
                .then(res => {
                    return Promise.resolve(res.list);
                })
                .catch(err => {
                    console.error(err);
                    return Promise.reject(err);
                })
        },
        getArticlesMore({ commit, state }, params) {
            state.success = false;
            Vue.axios.baseUrl.getArticles(params)
                .then(res => {
                    let { list, modules } = res || [];
                    commit(types.GET_ARTICLES, {
                        list: state.articlesList.concat(list),
                        modules,
                        show: list.length > 0
                    });
                    state.success = true;
                })
                .catch(err => {
                    console.error(err);
                })
        },
        getActivityList({ commit }, params) {
            Vue.axios.baseUrl.getActivityList(params)
                .then(res => {
                    let { list } = res;
                    commit(types.GET_ACTIVITY_LIST, {
                        list
                    });
                })
                .catch(err => {
                    console.error(err);
                })
        },
        getActivityListMore({ commit, state }, params) {
            Vue.axios.baseUrl.getActivityList(params)
                .then(res => {
                    let { list } = res;
                    commit(types.GET_ACTIVITY_LIST, {
                        list: state.activityList.concat(list)
                    });
                })
                .catch(err => {
                    console.error(err);
                })
        },
        clearHomeData({ commit }) {
            commit(types.CLEAR_HOME_DATA);
        }
    },
    mutations: {
        [types.GET_COLUMNS]: (state, { list }) => {
            state.columns = list;
        },
        [types.GET_ARTICLES]: (state, { list, modules, show }) => {
            state.articlesList = list;
            state.recommend = modules;
            state.showMore = show && list.length % 20 === 0;
        },
        [types.GET_ACTIVITY_LIST]: (state, { list }) => {
            state.activityList = list;
        },
        [types.GET_MODULE_LIST]: (state, { list }) => {
            state.recommendList = list;
        },
        [types.CLEAR_HOME_DATA]: (state) => {
            state.articlesList = [];
            state.recommend = [];
            state.activityList = [];
        }
    }
}
