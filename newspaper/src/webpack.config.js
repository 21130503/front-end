// webpack.config.js
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  // các thiết lập khác của webpack
  plugins: [
    // các plugin khác
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /\.(?:html|js|css)$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "static-resources",
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 50,
            },
          },
        },
        {
          urlPattern: new RegExp("/api/articles"),
          handler: "NetworkFirst",
          options: {
            cacheName: "articles",
            expiration: {
              maxEntries: 50,
            },
          },
        },
      ],
    }),
  ],
};
