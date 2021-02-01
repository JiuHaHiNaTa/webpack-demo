const path = require('path');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    //开发工具 ， js映射
    devtool: 'inline-source-map',
    //开发web服务器设置
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        inline: true
    }
});