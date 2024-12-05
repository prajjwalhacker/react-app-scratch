const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Entry point
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true, // Clean the output folder before each build
    },
    mode: 'development', // Change to 'production' for production builds
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader', // Transpile JS and JSX
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'], // Handle CSS files
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // Resolve these file extensions
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    devServer: {
      static: './dist', // Serve files from "dist"
      port: 3000,
      open: true, // Automatically open the browser
    },
  };