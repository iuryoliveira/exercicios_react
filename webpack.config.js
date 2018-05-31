const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + './public',
        filename: '.bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    module: {
        loaders: [{
            test: /.jsx$/, //jsx - arquivo de react
            loader: 'babel-loader',
            exclude: '/node-modules/',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}