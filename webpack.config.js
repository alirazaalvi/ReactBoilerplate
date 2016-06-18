var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
	preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: __dirname + '/app',
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
