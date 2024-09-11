const { merge } = require("webpack-merge");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 9090,
    hot: true,
    open: true, // automatically open browser after start
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:9091/remoteEntry.js ",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
