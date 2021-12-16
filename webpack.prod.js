const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge([
      common,

      {
            mode: "production",

            output: {
                  filename: "[name]-[contenthash].bundle.js",
                  path: path.resolve(__dirname, "dist"),
                  assetModuleFilename: "assets/img/[name]-[hash][ext][query]",
            },

            devtool: "source-map",

            target: "browserslist",
      },
]);
