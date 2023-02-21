const { defineConfig } = require("@vue/cli-service");
// eslint-disable-next-line no-unused-vars
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "../api/public"),
  devServer: {
    proxy: {
      target: "http://localhost:8080",
    },
  },
});
