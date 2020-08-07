module.exports = {
  port: 5555,
  proxy: [
    {
      context: ['/api'],
      target: 'http://projectx.guanmai.cn/',
      changeOrigin: true,
    },
  ],
}
