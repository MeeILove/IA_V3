module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/IA_V3/' // Замените 'IA_V3' на название вашего репозитория на GitHub
      : '/',
    lintOnSave: false,
    devServer: {
      port: 8080
    }
  }
  