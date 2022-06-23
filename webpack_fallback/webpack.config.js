const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = (process.env.NODE_ENV = "development");

const filename = (extension) => {
   if (isDev) return `[name].${ext}`;
   return `[name].[hash].${ext}`;
};

module.exports = {
   context: path.resolve(__dirname, "src"),
   mode: "development",
   etry: {
      main: "./index.js",
   },
   output: {},
};
