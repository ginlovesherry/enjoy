<template>
    <div :class="$options.name">
        <div class="recommend-pic clear">
            <div class="img-pic pull-left">
                <img
                    :src="item.picSmall || item.picMiddle || item.picBig || item.img || defaultImg"
                    @error="globalBitmap" />
            </div>
                <div class="resource-info pull-right">
                    <div class="title" v-html="item.title"></div>
                    <div class="home-special-cont-text clear">
                        <span>{{formatTime(item.publishtime)}}</span>
                        <span>{{item.source}}</span>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    /**
     * @file recommend.vue
     * @author shenjp@founder.com
     * @date 2019-04-24 16:00:03
     */
    import Util from '@/assets/js/util';
    export default {
        name: 'recommend-comp',
        props: {
            item: {
                type: Object,
                default () {
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
    .recommend-comp
        border-bottom: 1px solid #eee
        padding: 40px 0px
        .img-pic
            width: 32%
            height: 128px
            img
                height: 100%
                width: 100%
                object-fit: cover
                border-radius: 3px
        .resource-info
            width: 63%
            .title
                height: 80px
                line-height: 40px
                // @include ellipsis($lineCount: 2)
                font-size: 28px
        .home-special-cont-text
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

</style>
