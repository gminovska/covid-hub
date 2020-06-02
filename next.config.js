const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withLess = require("@zeit/next-less");

const lessConfig = {
  lessLoaderOptions: {
    modifyVars: {
      "@primary-color": "#64f1ff",
      "@font-family": "Archia",
    },
    javascriptEnabled: true,
  },
};

module.exports = withPlugins([withFonts, [withLess, lessConfig]]);
