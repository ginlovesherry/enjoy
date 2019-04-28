<template>
    <div id="app">
        <layout>
            <transition name="fade-in" mode="out-in" appear>
                <router-view :key="routerKey" />
            </transition>
        </layout>
    </div>
</template>
<script>
    import Layout from '@/layout';

    export default {
        name: 'App',
        components: {
            Layout
        },
        computed: {
            routerKey() {
                return this.$route.fullPath && this.$route.fullPath.split('?')[0];
                // return this.$route.fullPath;
            }
        }
    };

</script>
<style lang="sass" scoped>
</style>
