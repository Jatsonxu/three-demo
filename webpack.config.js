const path = require('path')
const webpack = require("webpack")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {DefinePlugin, BannerPlugin} = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const {VueLoaderPlugin} = require("vue-loader")


const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    console.info(percentage, message, ...args);
};

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const {extendDefaultPlugins} = require("svgo");

// require("webpack-dev-server")
module.exports = {
    target: "web",
    mode: "development",
    // watch: true, //使用 webpack-dev-server 就不需要设置它了
    devtool: "source-map",
    // 入口
    entry: "/src/main.js",
    // 出口
    output: {
        // 这里需要绝对路径
        // __dirname:当前文件路径,so config 文件最好放在根目录~
        path: path.resolve(__dirname, "./dist"),
        // 打包后的文件名
        filename: "js/build.js",
    },
    devServer: {
        // contentBase: "./public",//
        hot: true,
        compress: false,
        host: "0.0.0.0",
        proxy: {
            "api": {
                target: "http://localhiost:8888",
                pathRewrite: {
                    "^/api": ""
                },
                secure: false,
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    // loader 加载顺序, 从下往上
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                // test: /\.(jpe?g|png|gif|svg)$/,
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 120 * 1024,
                    }
                },
            },

            {
                test: /\.(eot|otf|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name]_[hash:6].[ext]"
                }
            }

        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin({
    //         // test: /\.js(\?.*)?$/i,
    //         // test: /\.(jpe?g|png|gif|svg)$/,
    //     })],
    // },
    plugins: [

        // new webpack.ProgressPlugin(handler),
        // new webpack.DllPlugin({
        //     context: __dirname,
        //     name: '[name]_[fullhash]',
        //     path: path.join(__dirname, 'manifest.json'),
        // }),
        new BannerPlugin({
            banner: '0.0.1',
            // banner: (yourVariable) => {
            //     return `yourVariable: ${yourVariable}`;
            // },
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "webpack+vue"
        }),
        new DefinePlugin({
            BASE_URL: JSON.stringify("./"),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public", //从哪里复制
                    to: './',// 复制到那里去
                    globOptions: {
                        // 需要忽略哪些文件
                        ignore: [
                            "**/index.html"
                        ]
                    }
                }
            ]
        })


    ]
}