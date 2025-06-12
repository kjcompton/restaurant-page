const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common,{
    mode: "development",
    devtool: 'eval-source-map',
    devServer: {
        watchFiles: ["./src/template.html"],
        port: 3000,
    },
});