module.exports = {
  // https://nextjs.org/learn/excel/static-html-export/export-the-index-page
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
}
