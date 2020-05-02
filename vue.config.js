// vue.config.js
const webpack = require("webpack");

module.exports = {
  // 选项...
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/\.\/locale/, /moment/)],
    resolve: {
      alias: {
        // "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
      }
    }
  }
};
