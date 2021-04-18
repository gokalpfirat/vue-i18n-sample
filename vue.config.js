module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-l18n-sample/'
    : '/'
}