<template>
    <div :class="$options.name">
        <div class="group-small" v-if="item.bigPic === 0">
            <div class="homeMutiTtileTex">{{item.title}}</div>
            <div class="mulPicBoxOuter">
                <div class="mulPicBox clear">
                    <div class="mulPic pull-left">
                        <img
                            :src="item.pic0 || defaultImg"
                            alt=""
                            class="img img-responsive"
                            @error="globalBitmap">
                    </div>
                        <div class="mulPic mulPic2 pull-left" v-if="item.pic1">
                            <img
                            :src="item.pic1 || defaultImg"
                            alt=""
                            class="img img-responsive"
                            @error="globalBitmap">
                            <div v-if="!item.pic2" class="positionTime positionTime1">
                                {{item.picCount}}张
                            </div>
                        </div>
                        <div class="mulPic pull-left" v-if="item.pic2">
                            <img
                            :src="item.pic2 || defaultImg"
                            alt=""
                            class="img img-responsive"
                            @error="globalBitmap">
                            <div class="positionTime positionTime1">
                                {{item.picCount}}张
                            </div>
                        </div>
                    </div>
                    <div class="mulPicFootText">
                        <span>{{formatTime(item.publishtime)}}</span>
                        <span>{{item.source}}</span>
                    </div>
                </div>
            </div>
            <div class="group-big" v-else>
                <div class="title">{{item.title}}</div>
                <div class="homeLiveInfoPic">
                    <img
                    :src="item.pic0 || item.pic1 || item.pic2 || defaultImg"
                    @error="globalBitmap">
                    <div class="positionTime positionTime1">{{item.picCount}}张</div>
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
     * @file groupImg.vue 组图列表 articleType === 1
     * @author shenjp@founder.com
     * @date 2019-04-11 13:59:04
     */
    import Util from '@/assets/js/util';
    export default {
        name: 'group-img',
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
    .group-img
        border-bottom: 1px solid #eee
        padding: 20px 0px
        .group-small
            .homeMutiTtileTex
                font-size: 28px
            .mulPicBoxOuter
                .mulPicBox
                    padding: 20px 0px
                    .mulPic
                        width: 32%
                        height: 164px
                        position: relative
                        img
                            width: 100%
                            height: 100%
                        .positionTime
                            position: absolute
                            bottom: 9px
                            right: 7px
                            padding: 1px 2px
                            background-color: rgba(0, 0, 0, 0.4)
                            color: #fff
                            font-size: 24px
                    .mulPic2
                        margin: 0 6px
        .mulPicFootText
            span
                display: inline-block
                vertical-align: middle
                margin-right: 20px
                color: #999
                font-size: 24px
        .group-big
            .title
                font-size: 28px
                margin-bottom: 28px
            .homeLiveInfoPic
                height: 260px
                width: 100%
                position: relative
                img
                    width: 100%
                    height: 100%
                .positionTime
                    position: absolute
                    bottom: 9px
                    right: 7px
                    padding: 1px 2px
                    background-color: rgba(0, 0, 0, 0.4)
                    color: #fff
                    font-size: 24px

</style>
