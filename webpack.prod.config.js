const webpack = require("webpack");
const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');



//merge用于合并两个webpack的配置文件
//静态资源有缓存，更新及时看见内容，需要加20位的hash值
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output:{
    publicPath:'/dist',
    //将入口文件重命名为带有20位的hash值的唯一文件
    filename:'[name].[hash].js'
  },
  plugins:[
    //压缩css
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      allChunks:true
    }),
    //定义当前node环境为生产环境
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:'"production"'
      }
    }),
    //提取模版，并保存入口html文件
    //template选项读取制定的模版index.ejs ，然后输出到filename指定的目录
    new HtmlwebpackPlugin({
      filename:'../index_prod.html'
    })
  ]
})
