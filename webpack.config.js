const path = require('path'); // node.js的path模块，专门用来处理路径问题

module.exports = {
    // 入口
    entry: "./src/main.js", //相对路径
    // 输出
    output: {
        // 输出路径，这里需要使用绝对路径
        path: path.resolve(__dirname, 'dist'), // __dirname是node.js中的一个全局变量，它指当前文件夹
        // 输出文件名
        filename: 'main.js',
    },
    // 加载器
    module: {
      rules: [
        // loader配置
        {
            test: /\.css$/i, //只对css文件生效，\是转义字符，$是以.css结尾，i指insensitive，不区分大小写
            use: [
                'style-loader',  //将js中css通过创建<style>标签插入到html文件的head中
                'css-loader' //将css文件编译成commonjs模块到js文件中
            ], // 执行顺序：从右到左，先css-loader再style-loader
        },
      ],
    },
    // 插件
    plugins: [
        // 插件配置
    ],
    // 模式
    mode: "development",
  };
  