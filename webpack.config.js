const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

// const mode = process.env.NODE_ENV;

module.exports = {
      entry: path.resolve(__dirname, "src", "index.js"),

      plugins: [
            new CleanWebpackPlugin(),

            new MiniCssExtractPlugin({
                  filename: "[name]-[contenthash].css",
                  linkType: "text/css",
            }),

            new HtmlWebpackPlugin({
                  title: "Your amazing app!",
                  template: path.resolve(__dirname, "src", "template.html"),
                  filename: "index.html",
                  minify: false,

                  myCustomOption: "Here you can pu anything you want",
            }),
      ],

      module: {
            rules: [
                  {
                        test: /\.(png|jpe?g|gif)$/i,
                        type: "asset/resource",
                  },

                  {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                              loader: "babel-loader",
                        },
                  },

                  {
                        test: /\.(s[ac]|c)ss$/i,
                        use: [
                              // Creates `style` nodes from JS strings and inject into DOM
                              // "style-loader",

                              // create a separate file for css
                              MiniCssExtractPlugin.loader,

                              // Translates CSS into CommonJS
                              "css-loader",

                              // vendor prefixes ...
                              "postcss-loader",

                              // Compiles Sass to CSS
                              "sass-loader",
                        ],
                  },
            ],
      },

      target: "node",

      externals: {
            bufferutil: "bufferutil",
            "utf-8-validate": "utf-8-validate",
      },

      devServer: {
            static: {
                  directory: path.join(__dirname, "dist"),
            },

            // liveReload: true,

            compress: true,

            hot: true,

            port: 8080,
      },
};
