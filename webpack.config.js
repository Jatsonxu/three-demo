const path = require('path')
console.log(__dirname)
module.exports = {
    // 入口
    entry: "./src/main.js",
    // 出口
    output: {
        // 这里需要绝对路径
        // __dirname:当前文件路径,so config 文件最好放在根目录~
        path: path.resolve(__dirname, "./build"),
        // 打包后的文件名
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // loader 加载顺序, 从下往上
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     }
                    // }
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
            // {
            //     test: /\.(less|css)$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         "less-loader",
            //     ]
            // },
            // 瞧一瞧,看一看,官方文档
            // https://webpack.js.org/guides/asset-modules/#root
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        // 默认使用 ES6 模块解析,将其关闭,启用 CommonJS模块
                        // 不配置这个 HTML 文件中的图片路径会错误
                        esModule: false,
                        name: "img/[name]_[hash:6].[ext]"
                    },
                },

                type: 'javascript/auto'// 不加这个配置,一张图片打包后悔生成两张
            }
        ]
    }
}