var path    = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin  = require("html-webpack-plugin");
var ExtractTextPlugin  = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./app/index.js",

  output: {
    filename: "./js/app.js",
    path: path.resolve(__dirname, "./docs")
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "./app")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        },
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "./app/assets/sass")
        ],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: [
                  "node_modules/bootstrap-sass/assets/stylesheets/",
                  "node_modules/bootstrap-select/sass/",
                  "node_modules/sass-flex-mixin/"
                ],
                precision: 8,
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: [
          path.resolve(__dirname, "./app/assets/fonts")
        ],
        loader: "file-loader?name=[name].[ext]&publicPath=../&outputPath=fonts/"
      }
    ]
  },

  devtool: "cheap-module-source-map",

  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
  },

  devServer: {
    contentBase: path.join(__dirname, "./docs")
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      jQuery: "jquery",
      $: "jquery"
    }),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./app/template.ejs",
      title: "StarOfService"
    }),
    new ExtractTextPlugin("./css/app.css"),
    new CleanWebpackPlugin(["docs"], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
};
