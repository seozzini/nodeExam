const { defineConfig } = require('@vue/cli-service');
const serverOrigin = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: serverOrigin,
        changeOrigin: true,
        ws: false, //true시, 서버측에 웹소켓 연결시도하게 됨
        pathRewrite: { '^/api': '/' }, //api는 vue내부 경로이므로 대체해서 통신보내기 위함
      },
    },
  },
});
