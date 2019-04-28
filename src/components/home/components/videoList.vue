<template>
    <div :class="$options.name">
        <!-- 视频类型小图稿件 -->
        <div class="row" v-if="item.bigPic === 0">
            <div class="home-vedios clear">
                <div class="home-vedio-con pull-left">
                    <img
                        class="pic-img"
                        :src="item.picSmall || item.picMiddle || item.picBig || defaultImg"
                        @error="globalBitmap">
                    <img
                        class="vedio-loading-img"
                        src="@/assets/image/pause-2.png">
                    <div class="position-time">
                        {{durationTime(item.duration)}}
                    </div>
                </div>
                <div class="home-vedio-title pull-right">
                    <div class="vedio-title" v-html="item.title">
                    </div>
                    <div class="vedio-decri-lef homeArtiText">
                        <span>{{formatTime(item.publishtime)}}</span>
                        <span>{{item.source}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!--视频类型大图稿件ng-if="item.articleType=='2'&&item.bigPic!=0"-->
        <div class="home-live-info" v-else>
            <div v-html="item.title" class="vedio-title"></div>
            <div class="home-live-info-pic">
                <img
                    class="pic-img"
                    :src="item.picSmall || item.picMiddle || item.picBig || defaultImg"
                    @error="globalBitmap">
                <div class="position-time">{{durationTime(item.duration)}}</div>
                <img
                    src="@/assets/image/pause-2.png"
                    class="vedio-loading-img big-loading">
            </div>
                <div class="mulPicFootText">
                    <span>{{formatTime(item.publishtime)}}</span>
                    <span>{{item.source}}</span>
                </div>
            </div>
        </div>
</template>
<script>
    /**
     * @file videoList.vue 视频类型 articleType === 2
     * @author shenjp@founder.com
     * @date 2019-04-13 11:08:10
     */
    import Util from '@/assets/js/util';
    export default {
        name: 'video-list',
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
            },
            durationTime(time) {
                return Util.durationTime(time);
            }
        }
    };

</script>
<style lang="sass" scoped>
    .video-list
        border-bottom: 1px solid #eee
        padding: 40px 0px
        .row
            .home-vedio-con
                width: 32%
                position: relative
                height: 152px
            .home-vedio-title
                width: 63%
                .vedio-title
                    overflow: hidden
                    text-overflow: ellipsis
                    display: -webkit-box
                    -webkit-line-clamp: 2
                    -webkit-box-orient: vertical
                    font-size: 28px
                    height: 104px
                    line-height: 52px
                .homeArtiText
                    span
                        display: inline-block
                        vertical-align: middle
                        margin-right: 20px
                        color: #999
                        font-size: 24px
        .pic-img
            height: 100%
            width: 100%
            object-fit: cover
        .vedio-loading-img
            height: 54px
            height: 54px
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            &.big-loading
                height: 98px
                height: 98px
        .position-time
            position: absolute
            bottom: 10px
            right: 10px
            padding: 0 5px
            font-size: 24px
            line-height: 32px
            color: #fff
            background-color: rgba(0, 0, 0, 0.4)
            border-radius: 6px
        .home-live-info
            .vedio-title
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 2
                -webkit-box-orient: vertical
                font-size: 28px
            .home-live-info-pic
                position: relative
                height: 260px
                width: 100%
                margin-top: 20px
            .mulPicFootText
                span
                    display: inline-block
                    vertical-align: middle
                    margin-right: 20px
                    color: #999
                    font-size: 24px

</style>
