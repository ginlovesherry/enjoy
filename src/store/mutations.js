import {
    HEAD_SHOW_SUCCESS
} from './type'

const state = {
    headShow: true
}

const mutations = {
    [HEAD_SHOW_SUCCESS](state) {
        state.headShow = true;
    }
}

const getters = {
    headShow(state) {
        return state.headShow;
    }
}

export default {
    state,
    mutations,
    getters
}
