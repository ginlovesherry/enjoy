import Vue from 'vue'
import * as types from '../mutation-types';
export default {
    state: {
        detailData: {}
    },
    actions: {
        getArticleContent({ commit }, params) {
            return Vue.axios.getArticleContent1(params)
                .then(res => {
                    commit(types.GET_ARTICLECONTENT, {
                        data: res
                    })
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mutations: {
        [types.GET_ARTICLECONTENT]: (state, { data }) => {
            state.detailData = Object.assign({}, data)
        }
    }
}
