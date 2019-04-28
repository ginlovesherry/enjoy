<template>
    <div :class="$options.name">
        <div class="home-special-small clear" v-if="item.bigPic === 0">
            <div class="home-special-Img pull-left">
                <img
                    :src="item.picSmall || item.picMiddle || item.picBig || item.img || defaultImg"
                    class="img img-responsive"
                    @error="globalBitmap">
            </div>
                <div class="home-special-cont pull-right">
                    <div class="title" v-html="item.title"></div>
                    <div class="home-special-cont-text clear">
                        <span>{{formatTime(item.publishtime)}}</span>
                        <span>{{item.source}}</span>
                        <span class="special-tag pull-right">专题</span>
                    </div>
                </div>
            </div>
            <!--专题类型大图稿件-->
            <div class="home-specail-big" v-else>
                <div class="title" v-html="item.title"></div>
                <div class="home-specail-big-pic">
                    <img
                    :src="item.picSmall || item.picMiddle || item.picBig || defaultImg"
                    @error="globalBitmap">
            </div>
                    <div class="mul-pic-foot-text clear">
                        <span>{{formatTime(item.publishtime)}}</span>
                        <span>{{item.source}}</span>
                        <span class="special-tag pull-right">专题</span>
                    </div>
                </div>
            </div>
</template>
<script>
    /**
     * @file specialList.vue 专题 articleType === 3
     * @author shenjp@founder.com
     * @date 2019-04-16 12:48:11
     */
    import Util from '@/assets/js/util';
    export default {
        name: 'special-list',
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
    .special-list
        border-bottom: 1px solid #eee
        padding: 40px 0px
        .home-special-small
            .home-special-Img
                width: 32%
                height: 128px
                img
                    height: 100%
                    width: 100%
                    object-fit: cover
            .home-special-cont
                width: 63%
                .title
                    height: 80px
                    line-height: 40px
        .home-special-cont-text,
        .mul-pic-foot-text
            span
                display: inline-block
                vertical-align: middle
                margin-right: 32px
                color: #999
                font-size: 24px
                &.special-tag
                    color: #fc9105
                    border: 1px solid #fc9105
                    font-size: 24px
                    padding: 0 8px
                    line-height: 36px
                    border-radius: 6px
                    margin-top: 6px
        .home-specail-big
            .title
                line-height: 40px
            .home-specail-big-pic
                width: 100%
                height: 260px
                margin-top: 20px
                img
                    height: 100%
                    width: 100%
                    object-fit: cover
            .mul-pic-foot-text
                margin-top: 20px
        .title
            // @include ellipsis($lineCount: 2)
            font-size: 28px

</style>
