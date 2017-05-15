"use strict"

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:7557',
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
                    'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Hello Redux!',
            inject: true,
            minify: {}
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