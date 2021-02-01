const webpack = require('webpack');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
//压缩打包工具，UglifyJs替代品
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new TerserJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});