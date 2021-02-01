const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    target: 'web',
    entry: {
        app: './src/index.js'
    },
    output: {
        //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        path: path.join(__dirname, 'dist'),
        filename: "./[name]_bundle.js",
        // publicPath: "/static/",
        library: "test",
    },
    module: {
        rules: [
            //css加载
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
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
        new WebpackManifestPlugin({
            fileName: 'manifest.json',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            compile: true,
            title: 'webpack app'
        }),
        //热加载模块
        new webpack.HotModuleReplacementPlugin()
    ],
    //namedModulesPlugins已经弃用，optimization：{namedModules：true}为替代方案
    optimization: {
        namedModules: true
    }
};