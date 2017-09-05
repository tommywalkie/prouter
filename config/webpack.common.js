const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const helpers = require('./helpers');

const libraryName = 'prouter';


module.exports = {

  resolve: {
    extensions: ['.ts', '.js']
  },

  entry: {
    'prouter.min': './src/index.ts'
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    library: {
      root: libraryName,
      amd: libraryName,
      commonjs: libraryName
    },
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      /*
      * Source map loader support for *.js files
      * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
      *
      * See: https://github.com/webpack/source-map-loader
      */
      {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre'
      },

      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  plugins: [
    new CheckerPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]

};
