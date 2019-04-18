module.exports = {
  proxy: {
    '/tianditu': { //将www.exaple.com印射为/apis
      target: 'http://t0.tianditu.com', // 接口域名
      secure: false, // 如果是https接口，需要配置这个参数
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/tianditu': '' //需要rewrite的,
      }
    }
  }
}