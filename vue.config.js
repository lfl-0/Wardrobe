const path = require('path')

module.exports = {
  configureWebpack: config => {
    config.externals = {
      vue: 'Vue'
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 通过 less 文件覆盖 Vant 样式（文件路径为绝对路径）
            hack: `true; @import "${path.join(__dirname, './src/assets/styles/reset-vant.less')}";`
          }
        }
      }
    }
  }
}
