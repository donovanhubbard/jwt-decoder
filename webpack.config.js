/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    plugins: [new ESLintPlugin()],
    optimization: {
        minimize: false
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        library: 'bundle',
        libraryTarget: 'var'
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