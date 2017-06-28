import Vue from 'vue';
import Router from 'vue-router';
import main from '@/views/home/main'; // 主框架
import index from '@/views/home/index'; // 主页
import more from '@/views/home/more'; // 更多页面
import details from '@/views/details/details'; // 详情页面
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: main,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: index
        },
        {
          path: '/more',
          component: more
        },
        {
          path: '/details',
          component: details
        }
      ]
    }
  ]
});
