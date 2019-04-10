const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        vendor: ['vue/dist/vue.esm.js', 'vue-router', 'vuex', 'axios', 'vue-axios', 'vant'],
    },

    output: {
        path: path.resolve(__dirname, '..', './static/js'),
        filename: '[name].dll.[chunkhash:8].js',
        library: '[name]_[chunkhash:8]',
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            cache: true,
            parallel: true,
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new AssetsPlugin({  //
            filename: './json/bundle-conf.json',
            path: path.resolve(__dirname, '..')
        }),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '..', './json/mainfest.json'),
            name: '[name]_[chunkhash:8]',
            context: __dirname // 执行的上下文环境，对之后DllReferencePlugin有用
        }),
        new CleanWebpackPlugin()
    ]
};
