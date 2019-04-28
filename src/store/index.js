/**
 * @file index.js
 * @author shenjp@founder.com
 * @date 2019-03-26 09:44:06
 */

import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import news from './modules/news';
import live from './modules/live';
import video from './modules/video';
import activity from './modules/activity';
import detail from './modules/detail';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        home,
        news,
        live,
        video,
        activity,
        detail
    },
    state: {},
    actions: {},
    mutations: {}
});

export default store;
