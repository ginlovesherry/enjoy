<template>
    <div :class="$options.name">
        <!-- <top-bar></top-bar> -->
        <div class="mian">
            <slot></slot>
        </div>
        <back-top></back-top>
    </div>
</template>
<script>
    import BackTop from '@/components/backTop'

    export default {
        name: 'layout',
        data() {
            return {};
        },
        components: {
            BackTop
        }
    };

</script>
<style lang="sass" scoped>
</style>
