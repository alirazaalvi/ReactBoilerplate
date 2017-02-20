import webpack from 'webpack';
import path from 'path';

const sourcePath = path.join(__dirname, './app');
const distPath = path.join(__dirname, './dist');
const nodeEnv = 'production';

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.bundle.js',
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
  }),
  new webpack.NamedModulesPlugin(),
];

plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      }),
    );


module.exports = {
  devtool: 'source-map',
  context: sourcePath,
  entry: {
    js: './index.jsx',
    vendor: ['react', 'seamless-immutable', 'react-dom', 'react-redux', 'redux', 'redux-thunk'],
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ],
  },

  plugins,
  stats: {
    colors: {
      green: '\u001b[32m',
    },
  },

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 3000,
    compress: true,
    inline: false,
    hot: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
