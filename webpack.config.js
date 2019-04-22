/* eslint-disable no-undef */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const clientConfig = {
  entry: './src/Index.jsx',
  output: {
    path: path.resolve('./assets/dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  devtool: 'source-map',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        include: path.resolve(__dirname,'src'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react', '@babel/preset-flow']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',

      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
}

const serverConfig = {
  entry: './server.js',
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'serverBuild.js',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loader: 'css-loader/locals',
      },
      {
        test: /\.j(s|sx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
        },
      },
    ],
  },
};

module.exports = [clientConfig, serverConfig];
