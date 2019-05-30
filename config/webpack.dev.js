const path = require("path")
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
    module:{},
    // 插件：用于生产模板和各项功能
    plugins:[],
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