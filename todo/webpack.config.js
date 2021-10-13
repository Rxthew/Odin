const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
       rules: [
           {
               test: /\.css$/i,
               use: ['style-loader', 'css-loader'],
           },
       ],
    },
    plugins: [
       new htmlWebpackPlugin({
           title: 'todo',
       })
    ],
    output: {
        filename: 'todo.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};