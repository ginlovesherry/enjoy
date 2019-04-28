<template>
    <div :class="$options.name">
        <div class="article-text" v-if="!item.picSmall && !item.picMiddle && !item.picBig">
            <div class="title">{{item.title}}</div>
            <div class="info">
                <span>{{item.publishtime | formatTime}}</span>
                <span>{{item.source}}</span>
            </div>
        </div>
        <div class="article-picimg" v-if="item.picSmall || item.picMiddle || item.picBig">
            <div class="big-pic clear" v-if="item.bigPic === 0">
                <div class="homeSpecilLiImg homeSpecilLiImgTwo pull-left">
                    <img
                        :src="item.picBig || item.picSmall || item.picMiddle || defaultImg"
                        class="img img-responsive"
                        @error="globalBitmap">
                    <img
                        class="artVedioLoadingImg"
                        v-if="item.videoUrl && item.videoUrl.slice(-3) === 'mp4'"
                        src="@/assets/image/pause.png">
                    <img
                        class="artVedioLoadingImg"
                        v-if="item.videoUrl && item.videoUrl.slice(-3) === 'mp3'"
                        src="@/assets/image/audio.png">
                </div>
                    <div class="homeSpecilLiCont pull-left">
                        <div class="title">{{item.title}}</div>
                        <div class="homeSpecilLiContText">
                            <span>{{formatTime(item.publishtime)}}</span>
                            <span>{{item.source}}</span>
                        </div>
                    </div>
                </div>
                <div v-if="item.bigPic !== 0" class="small-pic">
                    <div class="title">{{item.title}}</div>
                    <div class="homeLiveInfoPic">
                        <img
                        :src="item.picSmall || item.picMiddle || item.picBig || defaultImg"
                        @error="globalBitmap">
                        <img
                        class="artVedioLoadingImg"
                        v-if="item.videoUrl && item.videoUrl.slice(-3) === 'mp4'"
                        src="@/assets/image/pause.png">
                        <img
                        class="artVedioLoadingImg"
                        v-if="item.videoUrl && item.videoUrl.slice(-3) === 'mp3'"
                        src="@/assets/image/audio.png">
                </div>
                        <div class="mulPicFootText">
                            <span>{{formatTime(item.publishtime)}}</span>
                            <span>{{item.source}}</span>
                        </div>
                    </div>
                </div>
            </div>
</template>
<script>
    /**
     * @file article.vue 文章列表 articleType === 0
     * @author shenjp@founder.com
     * @date 2019-04-10 11:21:12
     */
    import Util from '@/assets/js/util';

    export default {
        name: 'article-list',
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
    .article-list
        border-bottom: 1px solid #eee
        padding: 40px 0px
        .article-text
            .title
                font-size: 28px
                margin-bottom: 28px
            .info
                span
                    display: inline-block
                    vertical-align: middle
                    margin-right: 20px
                    color: #999
                    font-size: 24px
        .article-picimg
            .homeSpecilLiImg
                height: 100px
        .big-pic
            .homeSpecilLiImg
                height: 128px
                // width: 220px
                width: 32%
                position: relative
                margin-right: 5%
                img
                    height: 100%
                    width: 100%
                    &.artVedioLoadingImg
                        width: 44px
                        height: 44px
                        position: absolute
                        bottom: 10px
                        right: 10px
            .homeSpecilLiCont
                width: 63%
                .title
                    overflow: hidden
                    text-overflow: ellipsis
                    display: -webkit-box
                    -webkit-line-clamp: 2
                    -webkit-box-orient: vertical
                    font-size: 28px
                    height: 80px
                    line-height: 40px
                .homeSpecilLiContText
                    span
                        display: inline-block
                        vertical-align: middle
                        margin-right: 20px
                        color: #999
                        font-size: 24px
        .small-pic
            .title
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 2
                -webkit-box-orient: vertical
                font-size: 28px
            .homeLiveInfoPic
                position: relative
                height: 260px
                margin: 20px 0px
                img
                    height: 100%
                    width: 100%
                    &.artVedioLoadingImg
                        position: absolute
                        top: 50%
                        left: 50%
                        height: 80px
                        width: 80px
                        margin-top: -40px
                        margin-left: -40px
            .mulPicFootText
                span
                    display: inline-block
                    vertical-align: middle
                    margin-right: 20px
                    color: #999
                    font-size: 24px

</style>
