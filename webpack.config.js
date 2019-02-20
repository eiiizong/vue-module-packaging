const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// 绝对路径
const resolve = dirname => {
  return path.resolve(__dirname, dirname);
};
// const createLintingRule = () => ({
//   test: /\.(js|vue)$/,
//   loader: 'eslint-loader',
//   enforce: 'pre',
//   include: [resolve('src'), resolve('test')],
//   options: {
//     formatter: require('eslint-friendly-formatter')
//     // emitWarning: !config.dev.showEslintErrorsInOverlay
//   }
// });

const config = {
  // 入口文件
  entry: resolve("src/index.js"),
  // 出口文件
  output: {
    path: resolve("dist"),
    filename: "build.js"
  },
  // 模式
  // development
  // production
  mode: "development",
  // 构建目标 默认是 web 可省略
  target: "web",
  // 模块
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader"
          }
        ],
        include: [resolve("src")],
        exclude: [resolve("node_modules")]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        include: [resolve("src")],
        exclude: [resolve("node_modules"), resolve("bower_components")]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map",
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("src/index.html")
    }),
    new VueLoaderPlugin()
  ]
};

module.exports = config;

// 生产环境
if (process.env.NODE_ENV === "production") {
  console.log("--------production----------------");
  module.exports.devtool = "#source-map";
  module.exports.mode = "production";
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production"
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
