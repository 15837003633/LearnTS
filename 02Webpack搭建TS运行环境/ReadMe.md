# webpack搭建TS运行环境

## 前言
把ts代码通过webpack编译成js代码，并运行在浏览器中。主要是对webpack的基本使用方法进行了解。

## setp1: 安装webpack
<!-- 通过package.json文记录我们安装的包 -->
npm init
<!-- 安装webpack和webpack-cli -->
npm install webpack webpack-cli -g

## step2: webpack编译打包的相关配置
新建webpack.config.js文件，并配置webpack的相关参数。

<!-- 因为webpack.config.js是webpack的配置文件，webpack运行依赖node环境，所以使用commonjs模块规范。 -->
<!-- 引入path模块 -->
const path = require("path");

<!-- 引入HtmlWebpackPlugin插件 -->
const HtmlWebpackPlugin = require("html-webpack-plugin");

<!-- 导出webpack配置 -->
module.exports = {
    <!-- mode: "production" | "development" -->
    mode: "development",
    <!-- webpack编译的入口文件 -->
    entry: "./src/index.ts",
    <!-- webpack编译的输出文件 -->
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    <!-- 告诉webpack要处理哪些文件 -->
    resolve: {
        extensions: [".ts", ".js", ".json", ".cjs"]
    },
    <!-- 告诉webpack处理对应文件时使用什么loader -->
    module: {
        rules: [
            {
                <!-- 匹配ts文件 -->
                test: /\.ts$/,
                <!-- 使用ts-loader进行编译，需要安装ts-loader插件：npm install ts-loader -D -->
                use: "ts-loader"
            }
        ]
    },
    <!-- webpack编译的插件 -->
    plugins: [
        <!-- 安装html-webpack-plugin插件：npm install html-webpack-plugin -D -->
        new HtmlWebpackPlugin({
            <!-- 这里指定html模板文件 -->
            template: "./index.html"
        })
    ]
}



## step3: 新建index.html文件和src/index.ts文件


## step4: 编写index.ts代码

<!-- 生成tsconfig.json文件，配置TypeScript编译参数。 -->
tsc --init

新建index.ts文件，编写TypeScript代码

## step5: 编译运行项目

编辑package.json文件，配置npm scripts命令。
scripts: {
    "build": "webpack --config webpack.config.js",
    <!-- 需要安装webpack-dev-server插件：npm install webpack-dev-server -D -->
    "serve": "webpack-dev-server --config webpack.config.js"
}

<!-- 开发预览项目 -->
npm run serve

<!-- 打包项目 -->
npm run build


