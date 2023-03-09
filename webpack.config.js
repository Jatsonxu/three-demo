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
                test: /\.css$/, // 根据正则表达式进行匹配,以.css 结尾的
                // 1.loader 的写法(语法糖)
                // loader: "css-loader", // 解释解释: 所有匹配到以.css 结尾的文件都用ss-loader解析
                // 2.desugar
                // use: "css-loader" // 这样写是可以的,
                // 但是有时加载 css 一个 loader 搞不定呀,
                // 需要多个 loader 所以这个地方可以用数组加载多个 loader
                // 还需要把解析后的 css 添加到 style 标签里,这不过分吧~
                use: [
                    // "css-loader", 这样也行,但是我还想传参
                    // 直接整个完整地吧
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
}