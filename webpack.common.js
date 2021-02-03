const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    target: 'web',
    entry: {
        app: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    output: {
        //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        path: path.join(__dirname, 'dist'),
        filename: "./js/[name].[hash].js",
        chunkFilename: './js/[name].[chunkhash].js',
        publicPath: "/assets/",
        library: "test"
    },
    module: {
        rules: [
            //css加载
            {
                test: /\.css$/,
                //分离css
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // // style-loader不能跟MiniCssExtractPlugin.loader一起使用
                    // {
                    //     loader: 'style-loader'
                    // }
                ]
            },
            //ts打包
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            //html打包
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            //加载图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            //加载字体 
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            //加载csv|tsv文件
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            //加载xml文件
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        //分离css 使用MiniCssExtractPlugin替代ExtractTextPlugin
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
        new WebpackManifestPlugin({
            fileName: 'manifest.json',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            compile: true,
            title: 'webpack app'
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new CleanWebpackPlugin(),
        //热加载模块
        new webpack.HotModuleReplacementPlugin()
    ],
    //namedModulesPlugins，CommonsChunkPlugin 4.0设置
    optimization: {
        //公共模块分离，相当于原CommonsChunkPlugin
        splitChunks: {
            name: true,
            //公共模块分离，优先级高的先进行分离，再分离优先级低的，设置test区分文件夹，避免重复加载模块
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    filename: './js/vendors.[chunkhash].js',
                    priority: 10
                },
                common: {
                    name: "common",
                    chunks: 'all',
                    test: /[\\/]src[\\/]/,
                    minChunks: 1,
                    filename: './js/common.[chunkhash].js',
                    priority: 5,
                    reuseExistingChunk: true
                }
            }
        },
        //原NamedModulePlugin模块
        namedModules: true
    }
};