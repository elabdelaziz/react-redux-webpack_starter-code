const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    // libraryTarget: "var",
    // library: "Client",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      },
      //   {
      //     test: /\.scss$/,
      //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      //   },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    // new WorkboxPlugin.GenerateSW(),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
};
