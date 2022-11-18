const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
require('dotenv').config()

console.log('Load Environments: ', `${process.env.NAV_PUBLIC_URL}`);


const splitUrlParts = (url) => {
  const urlParts = new URL(url);
  return {
    protocol: urlParts.protocol,
    host: urlParts.hostname,
    port: urlParts.port
  }
}

const APP_PORT = splitUrlParts(`${process.env.nav_public_url}`).port;

console.log('Load environment', splitUrlParts(`${process.env.nav_public_url}`));


const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: `${process.env.nav_public_url}/`,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: APP_PORT,
    historyApiFallback: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: `${process.env.app_name}`,
      filename: "remoteEntry.js",
      remotes: {
        common: `common@${process.env.common_public_url}/remoteEntry.js`,
        nav: `nav@${process.env.nav_public_url}/remoteEntry.js`,
      },
      exposes: {
        
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
