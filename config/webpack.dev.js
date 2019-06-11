const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");
module.exports={
    mode: "development",
    // 入口文件的配置项
    entry:{
        // 里面的main是可以随便写的
        main: "./src/main.js",
        main: "./src/main2.js"
    },
    // 出口文件的配置项
    output:{
        // 打包的路径
        path: path.resolve(__dirname,'../dist'),
        // 打包的文件名称
        filename:'[name].js'
    },
    // 模块：例如解读CSS，图片如何转换，压缩
    module:{
        rules: [
            // css loader
            {
                test: /\.css$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            // 图片 loader
            {
                test: /\.(png|jpg|gif|jpeg)/, //匹配图片文件后缀名
                use:[{
                    loader: "url-loader",  // 指定使用的loader和loader的配置参数
                    options: {
                        limit: 500 // 把小于500B的文件打成base64的格式，写入js
                    }
                }]
            }
        ]
    },
    // 插件：用于生产模板和各项功能
    plugins:[
        // js压缩插件
        new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
        }),
        //html 插件
        new htmlPlugin({
            minify: { // 对html文件进行压缩
                removeAttributeQuotes: true  // 是去掉属性的双引号。
            },
            hash: true, // 为了开发中js有缓存效果，所以加入hash， 这样可以有效避免缓存js。
            template: './src/index.html' // 需要打包的html魔板路径和文件名
        })
    ],
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             test: /\.js(\?.*)?$/i,
    //           })
    //     ],
    // },
    // 配置webpack开发服务功能
    devServer:{
        // 设置基本目录结构
        contentBase: path.resolve(__dirname,'../dist'),
        // 服务器IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        // 服务器端压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 8888
    }
}