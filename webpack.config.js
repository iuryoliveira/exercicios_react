const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.jsx', //jsx
    output: {
        path: __dirname + './public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },plugins: [
        new ExtractTextPlugin('app.css')
    ],
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx$/, //jsx - arquivo de react
            loader: 'babel-loader',
            exclude: '/node-modules/',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}