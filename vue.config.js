const { defineConfig } = require("@vue/cli-service");
const packageJson = require('./package.json');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: {
      filename: `css/[name].v${packageJson.version}.[contenthash].css`,
      chunkFilename: `css/[name].v${packageJson.version}.[contenthash].css`
    }
  },
  devServer: {
    client: {
      overlay: false,
    },
  },
});
