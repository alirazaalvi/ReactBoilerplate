import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './app/Index.jsx'
  ],
  target: 'web',
  output: { path: __dirname, filename: 'bundle.js' },
  devServer: {
    contentBase: './app'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
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
       {test: /\.js$/, include: path.join(__dirname, 'app'), loaders: ['babel']},
       {test: /\.jsx$/, include: path.join(__dirname, 'app'), loaders: ['babel']},
       {test: /(\.css)$/, loaders: ['style', 'css']},
       {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
       {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
       {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
       {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};