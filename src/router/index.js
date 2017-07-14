import Vue from 'vue';
import Router from 'vue-router';
import main from '@/views/home/main'; // 主框架
import index from '@/views/home/index'; // 主页
import more from '@/views/home/more';// 更多页面
import details from '@/views/details/details'; // 详情页面
import store from '@/views/store/store'; // 店面详情
import goods from '@/views/store/goods'; // 商品
import goodsDetails from '@/views/store/goodsDeatils'; // 店铺详情
import search from '@/views/search/search'; // 搜索页面
import typepage from '@/views/typepage/typepage'; // 分类页面
Vue.use(Router);
export default new Router({
  mode: 'history',
  linkActiveClass: 'link-active',
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
        },
        {
          path: '/store/:id/:name',
          component: store,
          redirect: '/goods/:id/:name',
          children: [
            {
              path: '/goods/:id/:name',
              component: goods
            },
            {
              path: '/goodsDetails/:id/:name',
              component: goodsDetails
            }
          ]
        },
        {
          path: '/search',
          component: search
        },
        {
          path: '/typepage',
          component: typepage
        }
      ]
    }
  ]
});
