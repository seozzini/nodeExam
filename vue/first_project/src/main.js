import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App) // Root Vue 생성
  .use(router) // Vue가 사용하는 보조 기능추가
  .mount('#app'); //*중요* DOM과 연결되는 코드
