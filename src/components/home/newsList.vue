<template>
    <div :class="$options.name">
        <ul class="list">
            <li class="item" v-for="(info, i) in articlesList" :key="i">
                <template v-for="(rem, k) in recommendList">
                    <recommend-list v-if="i === recommend[k].position - 1" :module-obj="recommend[k]" :recommend-list="rem" :key="k">
                    </recommend-list>
                </template>
                <!-- 文章列表 -->
                <article-list :item="info" v-if="info.articleType === 0">
                </article-list>
                <!-- 组图列表 -->
                <group-img :item="info" v-if="info.articleType === 1"></group-img>
                <!-- 视频列表 -->
                <video-list :item="info" v-if="info.articleType === 2"></video-list>
                <!-- 专题列表 -->
                <special-list :item="info" v-if="info.articleType === 3"></special-list>
                <!-- 直播列表 -->
                <live-item :item="info" v-if="info.articleType === 6"></live-item>
                <!-- 链接 -->
                <link-list :item="info" v-if="info.articleType === 4"></link-list>
                <!-- h5稿件 -->
            </li>
        </ul>
    </div>
</template>
<script>
    /**
     * @file newsContent.vue 新闻列表
     * @author shenjp@founder.com
     * @date 2019-04-15 13:31:09
     */
    import { mapState } from 'vuex';
    import ArticleList from './components/articleList';
    import GroupImg from './components/groupImg';
    import VideoList from './components/videoList';
    import SpecialList from './components/specialList';
    import LiveItem from './components/liveItem';
    import LinkList from './components/linkList';
    import RecommendList from './recommendList';
    export default {
        name: 'news-content',
        data() {
            return {};
        },
        props: {
            articlesList: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        computed: {
            ...mapState({
                columns: state => state.home.columns,
                // articlesList: state => state.home.articlesList,
                recommend: state => state.home.recommend,
                recommendList: state => state.home.recommendList
            })
        },
        components: {
            ArticleList,
            GroupImg,
            VideoList,
            SpecialList,
            LiveItem,
            LinkList,
            RecommendList
        }
    };

</script>
<style lang="sass" scoped>
    .news-content
        .list
            padding: 0 30px

</style>
