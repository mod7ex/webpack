const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge([
      common,

      {
            mode: "development",

            output: {
                  filename: "[name].bundle.js",
                  path: path.resolve(__dirname, "dist"),
                  assetModuleFilename: "assets/img/[name][ext][query]",
            },

            devtool: false,

            target: "web",
      },
]);
