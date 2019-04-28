'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

exports.assetsPath = function(_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        config.build.assetsSubDirectory :
        config.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
    options = options || {}

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }
    // 直接写 px ，编译后会直接转化成rem —— 除开下面两种情况，其他长度用这个
    // 在 px 后面添加 /*no*/ ，不会转化 px，会原样输出。 —— 一般border需用这个
    // 在 px 后面添加 /*px*/ ，会根据 dpr 的不同，生成三套代码。—— 一般字体需用这个
    const px2remLoader = {
        loader: 'px2rem-loader',
        options: {
            emUnit: 75 // 设计稿的1/10
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(happyId, loader, loaderOptions) {
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return {
                extract: ExtractTextPlugin.extract({
                    use: 'happypack/loader?id=happycss' + happyId,
                    fallback: 'vue-style-loader',
                    publicPath: '../../'
                }),
                loaders: loaders
            }
        } else {
            return {
                loaders: ['vue-style-loader'].concat(loaders)
            }
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    if (options.extract) {
        return {
            extract: {
                css: generateLoaders('css').extract,
                postcss: generateLoaders('postcss').extract,
                less: generateLoaders('less', 'less').extract,
                sass: generateLoaders('sass', 'sass', { indentedSyntax: true }).extract.concat({
                    loader: 'sass-resources-loader',
                    options: {
                        resources: [
                            path.resolve(__dirname, '../src/assets/style/mixin.sass'),
                            path.resolve(__dirname, '../src/assets/style/vars.sass')
                        ]
                    }
                }),
                scss: generateLoaders('scss', 'sass').extract,
                stylus: generateLoaders('stylus', 'stylus').extract,
                styl: generateLoaders('styl', 'stylus').extract
            },
            loaders: {
                css: generateLoaders('css').loaders,
                postcss: generateLoaders('postcss').loaders,
                less: generateLoaders('less', 'less').loaders,
                sass: generateLoaders('sass', 'sass', { indentedSyntax: true }).loaders,
                scss: generateLoaders('scss', 'sass').loaders,
                stylus: generateLoaders('stylus', 'stylus').loaders,
                styl: generateLoaders('styl', 'stylus').loaders
            }
        }
    } else {
        return {
            loaders: {
                css: generateLoaders('css').loaders,
                postcss: generateLoaders('postcss').loaders,
                less: generateLoaders('less', 'less').loaders,
                sass: generateLoaders('sass', 'sass', { indentedSyntax: true }).loaders,
                scss: generateLoaders('scss', 'sass').loaders,
                stylus: generateLoaders('stylus', 'stylus').loaders,
                styl: generateLoaders('styl', 'stylus').loaders
            }
        }
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
    const output = []

    if (options.extract) {
        const loaders = exports.cssLoaders(options).extract

        for (const extension in loaders) {
            const loader = loaders[extension]
            output.push({
                test: new RegExp('\\.' + extension + '$'),
                use: loader
            })
        }

    } else {
        const loaders = exports.cssLoaders(options).loaders

        for (const extension in loaders) {
            output.push({
                test: new RegExp('\\.' + extension + '$'),
                use: 'happypack/loader?id=happycss' + extension
            })
        }

    }

    return output
}

exports.happypack = function(options) {
    const happy = []
    const loaders = exports.cssLoaders(options).loaders

    for (const extension in loaders) {
        const loader = loaders[extension]
        happy.push(
            new HappyPack({
                id: 'happycss' + extension,
                loaders: loader,
                threadPool: happyThreadPool
            })
        )
    }

    return happy
}

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier')

    return (severity, errors) => {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
}
