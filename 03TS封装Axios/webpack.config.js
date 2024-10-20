

const path = require("path");

//<!-- 引入HtmlWebpackPlugin插件 -->
const HtmlWebpackPlugin = require("html-webpack-plugin");

// <!-- 导出webpack配置 -->
module.exports = {
    // <!-- mode: "production" | "development" -->
    mode: "development",
    // <!-- webpack编译的入口文件 -->
    entry: "./src/index.ts",
    // <!-- webpack编译的输出文件 -->
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // <!-- 告诉webpack要处理哪些文件 -->
    resolve: {
        extensions: [".ts", ".js", ".json", ".cjs"]
    },
    // <!-- 告诉webpack处理对应文件时使用什么loader -->
    module: {
        rules: [
            {
                // <!-- 匹配ts文件 -->
                test: /\.ts$/,
                // <!-- 使用ts-loader进行编译，需要安装ts-loader插件：npm install ts-loader -D -->
                use: "ts-loader"
            }
        ]
    },
    // <!-- webpack编译的插件 -->
    plugins: [
        // <!-- 安装html-webpack-plugin插件：npm install html-webpack-plugin -D -->
        new HtmlWebpackPlugin({
            // <!-- 这里指定html模板文件 -->
            template: "./index.html"
        })
    ]
}
