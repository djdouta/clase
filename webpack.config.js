const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "js/index.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg|ico|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "index.html",
      template: "template/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./template"),
        to: path.resolve(__dirname, "./public")
      }
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
