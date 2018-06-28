const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
      path: __dirname + '/public/js',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html'})
    ]
}
