const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { devDependencies } = require("./package.json");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../build"),
  },
  module: {
    rules: [
      {
        test: /\.?tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: {
    port: 3003,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "AppDetail",
      filename: "remoteEntry.js",
      exposes: {
        "./bootstrap": "./src/bootstrap.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: devDependencies["react"],
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    }),
  ],
};
