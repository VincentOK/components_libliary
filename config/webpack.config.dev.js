const path = require('path');

const devConfig = {
  entry: './demo/demo.js', // 入口文件
  mode: 'development', // 打包为开发模式
  output: {
    filename: 'demo.bundle.js', // 输出的文件名称
    path: path.resolve(__dirname, '../demo') // 输出的文件目录
  },
  devServer: { // 该字段用于配置webpack-dev-server
    contentBase: path.join(__dirname, '../demo'),
    compress: true,
    port: 9999, // 端口9000
    open: true // 自动打开浏览器
  },
  module: {
    rules: [
      { // 在webpack中使用babel需要babel-loader
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      { // 用于加载组件或者css中使用的图片
        test: /\.(jpg|jpeg|png|gif|cur|ico|svg)$/,
        use: [{
          loader: 'file-loader', options: {
            name: "images/[name][hash:8].[ext]"
          }
        }]
      },
      { // 编译less
        test: /\.less$/,
        exclude: '/node_modules/',
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      },
    ]
  },
}

module.exports = devConfig;
