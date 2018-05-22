const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');


const outputDirectory = '../dist';

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    require.resolve('react-error-overlay'),
    './src/client/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, outputDirectory),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options:
          {
            'presets': [
              'env',
              'react'
            ],
            'plugins': [
              'react-hot-loader/babel',
              'transform-runtime',
              'transform-class-properties',
              'transform-react-display-name',
              'transform-object-rest-spread'
            ]
          }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    port: 3000,
    open: false,
    hot: true,
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    },
    contentBase: path.join(__dirname, '../dist'),
    proxy: [{
      context: ['/login', '/api'],
      target: 'http://localhost:3001',
    }],
    before(app) { app.use(errorOverlayMiddleware()); }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/client/public/index.html'),
      // favicon: './public/favicon.ico'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};