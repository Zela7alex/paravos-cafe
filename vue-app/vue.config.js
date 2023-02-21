const { defineConfig } = require("@vue/cli-service");
// eslint-disable-next-line no-unused-vars
const path = require("path");

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "../api/public"),
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3000", //From Node.js API
      },
    },
  },
});
