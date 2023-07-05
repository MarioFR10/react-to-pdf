const path = require("path");

module.exports = {
  entry: "./index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "renderReactToPDF",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
      path: require.resolve("path-browserify"),
      util: require.resolve("util"),
      stream: require.resolve("stream-browserify"),
      os: require.resolve('os-browserify/browser'),
      fs: false,
      https: false,
      readline: false,
      child_process: false,
      http: false,
      zlib: false,
      vm: false,
      async_hooks: false,
      net: false,
      module: false,
      dns: false,
      tls: false,
      crypto: false,
      constants: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};