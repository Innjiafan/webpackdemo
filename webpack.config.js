// webpack --progress --hide-modules 生成main.js不到100行，未压缩的
const path = require('path');
const process = require('process');
//extract-text-webpack-plugin 把散落在各地的css提取出来，生成一个main.css文件,最终以link的形式加载
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.env.NODE_ENV !== 'production'
let config = {
  mode:'none',
  entry:"./main",
  output:{
    path:path.join(__dirname,'./dist'),
    publicPath:'/dist/',
    filename:'main.js'
  },
  module:{
    rules:[
      // 每个loader必须包含test和use两个选项。配置含义：当webpack编译过程中遇到requre()或import语句导入一个.css为后缀的文件，先通过css-loader转换，再通过style-loader转换，然后继续打包
      {
       test: /\.vue$/,
       loader: 'vue-loader',
      },
      {
        test:/\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test:/.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      // url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
      	// 对模版文件使用loader
      	test: /\.ejs$/,
      	use: 'ejs-loader'
      }
    ]
  },
  plugins:[
    // 将定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块
    new VueLoaderPlugin()
  ]
};
module.exports = config;
