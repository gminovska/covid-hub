const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withLess = require("@zeit/next-less");
const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";
const { getThemeVariables } = require("antd/dist/theme");
const lessConfig = {
  lessLoaderOptions: {
    modifyVars: {
      ...getThemeVariables({ dark: true }),
      "@primary-color": "#64f1ff",
    },
    javascriptEnabled: true,
  },
};
const PWAConfig = {
  pwa: {
    disable: !isProd,
    dest: "public",
  },
};
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader",
      });
    }
    return config;
  },
};
module.exports = withPlugins(
  [[withPWA, PWAConfig], withFonts, [withLess, lessConfig]],
  nextConfig
);
