module.exports = {
  outputDir: 'dist',
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'hack': `true; @import "F:/Web/wardrobe/src/assets/css/resetVant.less";`
        }
      }
    }
  }
};

