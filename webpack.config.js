var path = require('path');
var webpack = require('webpack');
var isProduction = process.env.NODE_ENV === 'production';

/*
* Compile for usage in a browser-like environmen or for the server.
*/

exports.target = 'web';

/*
* Relative path to the main/entry file.
*/

exports.entry = './src/main.js';

/*
* Information about the compiled output file.
*/

exports.output = {
  libraryTarget: 'var', // export as browsers `var` variables or module.exports
  path: path.resolve(__dirname, './dist'), // destination folder
  publicPath: '/dist/', // public URL address of the output files when referenced in a browser
  filename: `build.js` // final name of the file
};

/*
* Resolve paths for loaders.
*/

exports.resolveLoader = {
  root: path.join(__dirname, 'node_modules')
};

/*
* Module definitions.
*/

exports.module = {
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'file',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'file',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }
  ]
};

/*
* Development server configuration.
*/

exports.devServer = {
  historyApiFallback: true,
  noInfo: true
};

/*
* Debugging tool.
*/

exports.devtool = isProduction ? '#source-map' : '#eval-source-map';

/*
* Plugin definitions.
*/

exports.plugins = [];

if (isProduction) {
  exports.plugins.push(
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}), // defining global constants
    new webpack.optimize.UglifyJsPlugin(), // minimize the output source
    new webpack.optimize.DedupePlugin() // remove duplicated code
  );
}