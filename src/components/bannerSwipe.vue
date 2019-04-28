<template>
    <div :class="$options.name">
        <van-swipe @change="onChange" :autoplay="3000">
            <van-swipe-item v-for="(item, key) in bannerList" :key="key">
                <img :src="item.img" />
            </van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                    <span class="title">{{bannerList[current].title}}</span>
                    <span class="count">
                    <i>{{current + 1}}</i>/{{bannerList.length}}
                </span>
                </div>
        </van-swipe>
    </div>
</template>
<script>
    /**
     * @file bannerSwipe.vue
     * @author shenjp@founder.com
     * @date 2019-04-18 10:49:09
     */
    export default {
        name: 'banner-swipe',
        props: {
            bannerList: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                current: 0
            };
        },
        methods: {
            onChange(value) {
                this.current = value;
            }
        }
    };

</script>
<style lang="sass">
    .banner-swipe
        .van-swipe
            height: 400px
            position: relative
            .custom-indicator
                position: absolute
                bottom: 0
                left: 0
                width: 100%
                height: 80px
                background-color: rgba(0, 0, 0, 0.4)
                color: #fff
                display: flex
                align-items: center
                padding: 0 20px
                font-size: 30px
                .title
                    overflow: hidden
                    text-overflow: ellipsis
                    white-space: nowrap
                    flex: 1
                .count
                    i
                        color: #fc9105
                        font-size: 36px
                        font-weight: 700
                        font-style: normal
            .van-swipe-item
                img
                    height: 100%
                    width: 100%
                    display: block

</style>
