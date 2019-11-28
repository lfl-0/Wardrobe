module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'hack': `true; @import "G:/Web/wardrobe/src/assets/css/resetVant.less";`
        }
      }
    }
  }
};

