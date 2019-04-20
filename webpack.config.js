/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  entry: './src/Index.jsx',
  output: {
    path: path.resolve('./assets/dist'),
    filename: 'bundle.js'
  },
  resolve: { extensions: ['.js', '.jsx'] },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    inline: true,
    port: 3000,
    publicPath: '/',
    proxy: {
      '/': 'http://127.0.0.1:8080/',
    },
  },
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        include: path.resolve(__dirname,'src'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env','@babel/react']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',

      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}