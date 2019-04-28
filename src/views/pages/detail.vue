<template>
    <div :class="$options.name">
        <div class="container">
            <!-- 引题 -->
            <div class="articleIntroTitle" v-if="detailData.introTitle">{{detailData.introTitle || ''}}</div>
            <!-- 标题 -->
            <h2 id="title" class="title" v-if="detailData.title">{{detailData.title || ''}}</h2>
            <!-- 副题 -->
            <div class="subtitle" v-if="detailData.subtitle">{{detailData.subtitle || ''}}</div>
            <!-- 时间、作者、来源、语音播放 -->
            <ul class="nav clearfix">
                <!-- 时间 -->
                <li class="fl publishtime" v-if="detailData.publishtime">{{detailData.publishtime | timeformat}}</li>
                <!-- 作者 -->
                <li class="fl author" v-if="detailData.author">
                    <span class="articleAuthor">作者: {{detailData.author}}</span>
                </li>
                <!-- 来源 控制10个字，其余用...显示-->
                <li class="fl source" v-if="detailData.source">
                    <span class="articleSource">来源 : {{detailData.source}}</span>
                </li>
                <!-- 语音播放 -->
                <li class="fr">
                    <audio :src="`http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=${replaceHTML(detailData.content)}`" ref="audioBroad"></audio>
                    <img class="reader" @click="playBroad" src="@/assets/image/yyPlay.png">
                    <img class="reader" @click="playBroad" src="@/assets/image/yyPause.png">
        </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from "vuex";
    export default {
        name: "detail",
        data() {
            return {
                audioFlag: false
            };
        },
        components: {},
        computed: {
            ...mapState({
                detailData: state => state.detail.detailData
            })
        },
        methods: {
            ...mapActions({
                getArticleContent: "getArticleContent"
            }),
            playBroad() {
                let audio = this.$refs.audioBroad;
                this.audioFlag = !this.audioFlag;
                if (this.audioFlag) {
                    audio.play();
                } else {
                    audio.pause();
                }
            },
            replaceHTML(content) {
                let reg = /<[^>]+>/g;
                return (content || "").replace(reg, "");
            }
        },
        created() {
            const params = {
                articleId: this.$route.params.fileId
            };
            this.getArticleContent(params);
        },
        filters: {
            // 时间截取
            timeformat: function(value) {
                if (!value) return "";
                value = value.toString();
                return value.substring(0, value.lastIndexOf(":"));
            }
        }
    };

</script>
<style lang="sass" scoped>
.container
    .fl
        float:left

    .fr
        float:right

</style>
