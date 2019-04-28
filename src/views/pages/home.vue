<template>
    <div :class="$options.name">
        <div class="nav">
            <div class="header clear">
                <span class="icon icon-logo pull-left"></span>
                <span
                    class="icon icon-more pull-right"
                    @click="goLogin"></span>
            </div>
            <van-tabs v-model="active" animated swipeable @change="changeTabs" :line-width="20">
                <van-tab v-for="(item, key) in columns" :key="key" :title="item.columnName">
                </van-tab>
            </van-tabs>
        </div>
        <div class="container">
            <!-- 轮播 -->
            <banner-swipe v-if="filterList.bannerList && filterList.bannerList.length > 0" :banner-list="filterList.bannerList"></banner-swipe>
            <!-- 新闻列表 -->
            <news-list :articles-list="filterList.artList || []" v-if="showNews"></news-list>
            <!-- 活动 -->
            <activity-list v-if="columns[active] && columns[active].columnStyle === '221'"></activity-list>
            <!-- 直播 -->
            <live-list v-if="columns[active] && columns[active].columnStyle === '225'"></live-list>
            <!-- 视频 -->
            <video-list v-if="columns[active] && columns[active].columnStyle === '203'"></video-list>
            <div class="load-more" v-if="showMore" @click="loadMore">加载更多</div>
        </div>
    </div>
</template>
<script>
    /**
     * @file home.vue
     * @author shenjp@founder.com
     * @date 2019-04-09 18:22:48
     */
    import { mapActions, mapState } from 'vuex';
    import NewsList from '@/components/home/newsList';
    import BannerSwipe from '@/components/bannerSwipe';
    import ActivityList from '@/components/home/activityList';
    import LiveList from '@/components/home/liveList';
    import VideoList from '@/components/home/videoList';
    export default {
        name: 'home',
        data() {
            return {
                active: 0,
                columnsBus: {},
                page: 0,
                showSwipe: false
            };
        },
        components: {
            NewsList,
            BannerSwipe,
            ActivityList,
            LiveList,
            VideoList
        },
        computed: {
            ...mapState({
                columns: state => state.home.columns,
                articlesList: state => state.home.articlesList,
                showMore: state => state.home.showMore,
                success: state => state.home.success
            }),
            showNews() {
                if (this.columns && this.columns.length > 0) {
                    return this.columns[this.active].columnStyle === '101' ||
                        this.columns[this.active].columnStyle === '201' ||
                        this.columns[this.active].columnStyle === '227'
                }
                return false;
            },
            filterList() {
                const { columns, active, articlesList } = this;
                let bannerList = [];
                let artList = [];
                let n = 0;
                console.log(',,,', columns, columns.length, columns[active])
                if (columns && !columns.length && !columns[active]) {
                    return {
                        bannerList: [],
                        artList: articlesList
                    };
                }
                if (columns[active] && columns[active].topCount === 0) {
                    artList = articlesList;
                } else {
                    let { topCount } = columns[active] || {};
                    articlesList.forEach((item, i) => {
                        if (n < topCount && (item.picSmall || item.picMiddle || item.picBig)) {
                            bannerList.push({
                                img: item.picSmall || item.picMiddle || item.picBig,
                                title: item.title,
                                fileId: item.fileId,
                                articleType: item.articleType
                            });
                            n++;
                        } else {
                            artList.push(item);
                        }
                    });
                }
                console.log(artList, 22);
                return {
                    bannerList,
                    artList
                };
            }
        },
        methods: {
            ...mapActions({
                getColumns: 'getColumns',
                getArticles: 'getArticles',
                getActivityList: 'getActivityList',
                clearHomeData: 'clearHomeData',
                getArticlesMore: 'getArticlesMore',
                getActivityListMore: 'getActivityListMore'
            }),
            changeTabs(index, title) {
                let { columnId, columnStyle } = this.columns[index];
                this.$router.push({
                    query: {
                        columnId,
                        active: this.active
                    }
                });
                this.clearHomeData();
                this.page = 0;
                this.getDate(columnId, columnStyle);
            },
            goLogin() {
                this.$router.push({
                    name: 'login',
                    query: {
                        active: this.active
                    }
                });
            },
            getDate(columnId, columnStyle, more) {
                const { siteId } = this.$route.query;
                if (columnStyle === '221') {
                    // 活动
                    let activityParams = {
                        siteId: siteId || 1,
                        page: this.page
                    };
                    this[more ? 'getActivityListMore' : 'getActivityList'](activityParams);
                } else {
                    let articlesParams = {
                        siteId: siteId || 1,
                        columnId: columnId,
                        page: this.page,
                        lastFileId: this.articlesList.length > 0 ? this.articlesList[this.articlesList.length - 1].fileId : 0
                    };
                    this[more ? 'getArticlesMore' : 'getArticles'](articlesParams);
                }
            },
            loadMore() {
                if (this.showMore && this.success) {
                    // 加载更多
                    this.page += 1;
                    let { columnId, columnStyle } = this.columns[this.active];
                    this.getDate(columnId, columnStyle, true);
                }
            }
        },
        created() {
            const {
                siteId,
                parentColumnId,
                columnId,
                active
            } = this.$route.query;
            const params = {
                siteId: siteId || 1,
                parentColumnId: parentColumnId || -1
            };
            this.getColumns(params)
                .then(res => {
                    const {
                        columnId: id,
                        columnStyle
                    } = columnId || res.columns[0];
                    this.getDate(columnId || id, columnStyle);
            });
            this.active = Number(active || 0);
        },
        beforeDestroy() {
            this.clearHomeData();
        }
    };

</script>
<style lang="sass">
    .home
        .van-tabs__wrap
            border-bottom: 1px solid #e3e3e3
            position: static
        .van-tabs--line .van-tabs__wrap
            height: 88px
        .van-tab
            color: #444
            font-size: 36px
            line-height: 88px
            flex-basis: auto !important
            min-width: auto
            padding: 0 30px
            &.van-tab--active
                color: rgb(230, 0, 19)
        .van-tabs__line
            bottom: 22px
            height: 4px

</style>
<style lang="sass" scoped>
    .home
        .van-tabs--line
            padding-top: 0
        .nav
            position: fixed
            top: 0
            left: 0
            right: 0
            width: 100%
            z-index: 999
        .header
            height: 87px
            line-height: 87px
            padding: 20px 30px
            background-color: #eee
        .container
            padding-top: 176px
        .load-more
            height: 80px
            line-height: 80px
            font-size: 32px
            text-align: center
            background-color: #eee

</style>
