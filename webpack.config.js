"use strict"

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
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
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Hello Redux!',
            inject: true,
            minify: {},
            files: {
                css: ['style.css'],
                js: ['bundle.js'],
            }
        }),
        new ExtractTextPlugin({
            filename: '/style.css',
            allChunks: true
        })
        //new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" }),
        //new HappyPack({ loaders: ['babel-loader?presets[]=es2015']}),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        inline: true,
        port: 7557,
        hot: true
    },
    watch: true
};