<template>
    <div :class="$options.name">
        <div class="header clear">
            <span class="icon icon-logo pull-left"></span>
            <span
                class="icon icon-close pull-right"
                @click="goHistory"></span>
        </div>
        <ul class="nav-list clear">
            <li v-for="(item, key) in columns" :key="key" class="pull-left" :class="{'active': active === key}" @click="goHome(item.columnId, key)">
                {{item.columnName}}
            </li>
        </ul>
        <div class="bj-color"></div>
        <div class="btn-box clear">
            <van-button class="login-btn pull-left">登录</van-button>
            <van-button class="reg-btn pull-right">极速注册</van-button>
        </div>
    </div>
</template>
<script>
    /**
     * @file login.vue
     * @author shenjp@founder.com
     * @date 2019-04-10 13:19:04
     */
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'login',
        data() {
            return {
                active: 0
            };
        },
        computed: {
            ...mapState({
                columns: state => state.home.columns
            })
        },
        methods: {
            ...mapActions({
                getColumns: 'getColumns'
            }),
            goHistory() {
                this.$router.go(-1);
            },
            goHome(columnId, active) {
                this.$router.push({
                    name: 'home',
                    query: {
                        columnId,
                        active
                    }
                });
            }
        },
        created() {
            const params = {
                siteId: 1,
                parentColumnId: -1
            };
            const {
                active
            } = this.$route.query;
            this.active = Number(active || 0);
            this.getColumns(params);
        }
    };

</script>
<style lang="sass" scoped>
    .login
        .header
            height: 88px
            padding: 20px 30px
            border-bottom: 1px solid #e60013
            background-color: #fff
        .nav-list
            padding: 30px 30px 30px 62px
            li
                width: 28%
                margin-left: 3%
                margin-bottom: 3%
                border-radius: 6px
                font-size: 28px
                text-align: center
                height: 60px
                line-height: 60px
                border: 1px solid #e3e3e3
                color: #333
                &.active
                    border-color: #e60013
                    color: #e60013
        .bj-color
            height: 20px
            background-color: #eee
        .btn-box
            padding: 40px 30px
            .van-button
                padding: 0
                height: 68px
                width: 300px
                line-height: 66px
                border-radius: 6px
                font-size: 30px
                font-weight: bolder
                &.login-btn
                    color: #fc9105
                    border: 1px solid #e60013
                &.reg-btn
                    color: #fff
                    border-color: #e60013
                    background-color: #e60013

</style>
