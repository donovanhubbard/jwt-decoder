/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    //plugins: [new ESLintPlugin()],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}