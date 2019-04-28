<template>
    <div :class="$options.name">
        <div v-if="item.bigPic === 0" class="home-link-small clear">
            <div class="home-link-img pull-left">
                <img
                    :src="item.picMiddle || item.picSmall || item.picBig || item.img || defaultImg"
                    @error="globalBitmap">
            </div>
                <div class="home-link-cont pull-right">
                    <div class="title" v-html="item.title"></div>
                    <div class="home-link-cont-text">
                        <span>{{formatTime(item.publishtime)}}</span>
                        <span>{{item.source}}</span>
                    </div>
                </div>
            </div>
            <div class="home-link-big" v-if="item.bigPic !== 0">
                <div class="title" v-html="item.title"></div>
                <div class="home-link-info-pic">
                    <img
                    :src="item.picSmall || item.picMiddle || item.picBig || defaultImg"
                    @error="globalBitmap">
            </div>
                    <div class="home-link-cont-text clear">
                        <span>{{formatTime(item.publishtime)}}</span>
                        <span>{{item.source}}</span>
                        <span class="link-tag pull-right">直播</span>
                    </div>
                </div>
            </div>
</template>
<script>
    /**
     * @file linkList.vue 稿件链接 articleType === 4
     * @author shenjp@founder.com
     * @date 2019-04-17 16:17:53
     */
    import Util from '@/assets/js/util';
    export default {
        name: 'link-list',
        props: {
            item: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
                defaultImg: require('@/assets/image/default.png')
            };
        },
        methods: {
            globalBitmap(e) {
                if (e && e.target) {
                    e.target.src = this.defaultImg;
                }
            },
            formatTime(time) {
                return Util.formatTime(time);
            }
        }
    };

</script>
<style lang="sass" scoped>
    .link-list
        border-bottom: 1px solid #eee
        padding: 40px 0px
        .home-link-small
            .home-link-img
                width: 32%
                position: relative
                height: 128px
                img
                    height: 100%
                    width: 100%
                    object-fit: cover
            .home-link-cont
                width: 63%
                .title
                    height: 80px
                    line-height: 40px
        .home-link-big
            .title
                max-height: 80px
                line-height: 40px
            .home-link-info-pic
                height: 260px
                width: 100%
                margin-top: 20px
                img
                    height: 100%
                    width: 100%
                    object-fit: cover
        .title
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
            font-size: 28px
        .home-link-cont-text
            span
                display: inline-block
                vertical-align: middle
                margin-right: 32px
                color: #999
                font-size: 24px
                &.link-tag
                    color: #fc9105
                    border: 1px solid #fc9105
                    font-size: 24px
                    padding: 0 8px
                    line-height: 36px
                    border-radius: 6px
                    margin-top: 6px

</style>
