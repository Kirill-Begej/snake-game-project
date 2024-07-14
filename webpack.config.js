const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isDev = env.mode === 'development';

  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'pages', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devServer: {
      static: path.resolve(__dirname, 'src'),
      port: env.port ?? 8080,
      open: true,
      hot: true,
    },
    devtool: isDev && 'inline-source-map',
    resolve: {
      extensions: ['.js'],
    },
    plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    })],
  };
};