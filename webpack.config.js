var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src'
    ],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js']
    },
    module: {
      loaders: [
      {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: ['react-hot-loader/webpack', 'babel-loader?presets[]=react']
      }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          context: path.join(__dirname, 'src'),
          output: {
            path: path.join(__dirname, 'www')
          }
        }
      })
    ]
  };
