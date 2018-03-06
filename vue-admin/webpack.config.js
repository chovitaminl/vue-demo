const webpack = require('webpack')

module.exports = {
  entry: ["babel-polyfill", "./src/js/main.js"],
  output: {
    path: __dirname + '/dist',
    publicPath: 'disc/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    //使用插件让我们能够在全局使用Vue
    new webpack.ProvidePlugin({
      Vue: 'Vue'
    }),
  ],
  devtool: '#eval-source-map'
}