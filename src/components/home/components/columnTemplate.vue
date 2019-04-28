<template>
    <div :class="$options.name">
        <div>
            <div class="pic-img clear">
                <img
                    :src="item.picMiddle || item.picSmall || item.picBig || item.img || defaultImg"
                    class="img pull-left">
            </div>
                <div class="pic-content">
                    <div class="title">{{item.title}}</div>
                    <div class="pic-foot">
                        <span>{{formatTime(item.publishtime)}}</span>
                        <span>{{item.source}}</span>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    /**
     * @file columnTemplate.vue
     * @author shenjp@founder.com
     * @date 2019-04-19 09:55:59
     */
    import Util from '@/assets/js/util';
    export default {
        name: 'column-template',
        props: {
            item: {
                type: Object,
                default: {}
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
</style>
