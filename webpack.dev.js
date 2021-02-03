const path = require('path');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
    mode: 'development',
    //开发工具 ， js映射
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/assets/',
        compress: true,
        port: 9000,
        inline: true
    },
    plugins: [
        //依赖分析
        // new BundleAnalyzerPlugin(),
    ]
});