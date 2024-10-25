

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
    // resolve用来配置webpack如何寻找模块的路径
    resolve: {
        // 自动补充路径中的文件的后缀名，比如require("module")会自动补充为require("module.ts")，import "module"会自动补充为import "module.ts"
        extensions: [".ts", ".js", ".json", ".cjs"],
        // 配置别名，可以方便的引用模块
        alias: {"@": path.resolve(__dirname, "src")}
    },
    // <!-- 告诉webpack处理依赖图中的文件时使用什么loader来解析文件 -->
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
