const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        app: './src/index.js'
    },
    output: {
        //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        path: path.join(__dirname, 'dist'),
        filename: "./main.js",
        // publicPath: "/static/",
        // library: "test",
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            compile: true,
            title: 'webpack app'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        inline: true
    }
};