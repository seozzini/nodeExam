import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// 2) 페이지 단위로 호출
import DataBinding from '@/views/DataBinding.vue'; //@은 절대경로
import ListBinding from '@/views/ListBinding.vue';
import IfBinding from '@/views/IfBinding.vue';
import OnEvent from '@/views/OnEvent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/dataBinding',
    name: 'dataBind',
    component: DataBinding,
  },
  {
    path: '/listBinding',
    name: 'listBind',
    component: ListBinding,
  },
  {
    path: '/ifBinding',
    name: 'ifBind',
    component: IfBinding,
  },
  {
    path: '/onEvent',
    name: 'onEvent',
    component: OnEvent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
//module.exports = router => require();
export default router;
