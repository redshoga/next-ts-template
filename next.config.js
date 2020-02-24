// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  // https://github.com/zeit/next-plugins/tree/master/packages/next-sass
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[name]__[local]--[hash:base64:5]"
  },

  // https://nextjs.org/learn/excel/static-html-export/export-the-index-page
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
});
