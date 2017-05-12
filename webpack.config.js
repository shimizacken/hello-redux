"use strict"

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.dev.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Hello Redux!',
            inject: true,
            minify: {}
        }),
        //new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" }),
        //new HappyPack({ loaders: ['babel-loader?presets[]=es2015']}),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        inline: true,
        port: 7557
    },
    watch: true
};