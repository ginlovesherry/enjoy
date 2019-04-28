<template>
    <div :class="$options.name">
        <div class="title">
            <img :src="moduleObj.targetColumn.icon || iconDefault" alt=""/>
            <span class="name">{{moduleObj.name}}</span>
            <span class="mark">{{moduleObj.mark}}</span>
        </div>
        <ul class="list">
            <li class="item" v-for="(info, i) in recommendList" :key="i">
                <recommend-comp :item="info"></recommend-comp>
            </li>
        </ul>
        <div class="show-more">
            查看更多
            <span class="icon icon-recommend-more"></span>
        </div>
        <div class="gray"></div>
    </div>
</template>
<script>
    /**
     * @file recommendList.vue
     * @author shenjp@founder.com
     * @date 2019-04-18 16:19:35
     */
    import ArticleList from './components/articleList';
    import GroupImg from './components/groupImg';
    import VideoList from './components/videoList';
    import SpecialList from './components/specialList';
    import LiveItem from './components/liveItem';
    import LinkList from './components/linkList';
    import RecommendComp from './components/recommend';
    export default {
        name: 'recommend-list',
        data() {
            return {
                iconDefault: require('@/assets/image/57.png')
            };
        },
        props: {
            moduleObj: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            recommendList: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        components: {
            ArticleList,
            GroupImg,
            VideoList,
            SpecialList,
            LiveItem,
            LinkList,
            RecommendComp
        }
    };

</script>
<style lang="sass" scoped>
    .recommend-list
        margin-top: 20px
        position: relative
        padding-bottom: 100px
        .title
            display: flex
            align-items: center
            img
                height: 60px
                width: 60px
                object-fit: cover
                border-radius: 100%
            .name
                flex: 1
                margin-left: 20px
            .mark
                color: #999
        .gray
            height: 20px
            background-color: #eee
            position: absolute
            left: -30px
            right: -30px
            bottom: 0
        .show-more
            font-size: 28px
            float: right
            margin-top: 20px

</style>
