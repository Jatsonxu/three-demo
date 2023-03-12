const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {DefinePlugin} = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    mode: "development",
    devtool: "source-map",
    // 入口
    entry: "./src/main.js",
    // 出口
    output: {
        // 这里需要绝对路径
        // __dirname:当前文件路径,so config 文件最好放在根目录~
        path: path.resolve(__dirname, "./dist"),
        // 打包后的文件名
        filename: "build.js"
    },
    module: {
        rules: []
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "webpack+vue"
        }),
        new DefinePlugin({
            BASE_URL: JSON.stringify("./"),
        }),
        new CopyWebpackPlugin({
            from: "public",
            to: "./",
            globOptions: {
                // 需要忽略的文件
                ignore: [
                    "**/index.html"
                ]
            }
        })


    ]
}