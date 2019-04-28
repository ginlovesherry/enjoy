<template>
    <transition name="fade">
        <div :class="$options.name" v-if="showTop" @click="backTop">
        </div>
    </transition>
</template>
<script>
    /**
     * @file backTop.vue
     * @author shenjp@founder.com
     * @date 2019-04-17 17:48:06
     */
    export default {
        name: 'back-top',
        data() {
            return {
                showTop: false,
                visibilityHeight: 300,
                timer: null
            };
        },
        methods: {
            backTop() {
                this.timer = setInterval(() => {
                    let scrollTop = this.getScrollTop();
                    let speed = Math.ceil(scrollTop / 2);
                    document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
                    if (scrollTop === 0) {
                        clearInterval(this.timer);
                    }
                }, 30);
            },
            getScrollTop() {
                return document.documentElement.scrollTop || document.body.scrollTop;
            },
            showTopHandle() {
                this.showTop = this.getScrollTop() >= this.visibilityHeight;
            }
        },
        mounted() {
            document.addEventListener('scroll', this.showTopHandle);
        },
        beforeDestroy() {
            document.removeEventListener('scroll', this.showTopHandle);
            clearInterval(this.timer);
        }
    };

</script>
<style lang="sass" scoped>
    .back-top
        height: 76px
        width: 76px
        background-image: url(~@/assets/image/top.png)
        background-size: 100% 100%
        position: fixed
        right: 0
        bottom: 100px
    .fade-enter-active, .fade-leave-active
        transition: opacity .5s
    .fade-enter, .fade-leave-to
        opacity: 0

</style>
