const { resolve } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    vendor: ['react', 'react-dom', 'react-router-dom', 'aphrodite']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {minimize: true}
          }
        ]
      },
      {
        test: /\.(gif|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  devtool: 'source-map',
  performance: {
    hints: 'error',
    maxEntrypointSize: 400000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: '200.html',
      template: './index.html'
    }),
    new CopyWebpackPlugin([{from: './assets'}]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}
