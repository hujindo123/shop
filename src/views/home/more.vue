<template>
  <div>
    <v-header :title="title" :type="1"></v-header>
    <scroller>
      <div class="more_list">
        <template v-for="(x, index) in list">
          <router-link :to="{path:'/typepage',query:{name: x.name}}" class="more_item">
            <img :src="x.img">
            <p class="pic-t">{{x.name}}</p>
          </router-link>
        </template>
      </div>
    </scroller>
  </div>

</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  export default {
    data () {
      return {
        list: [
          {name: '全部分类', img: 'static/img/list-icon/more.png'},
          {name: '美食', img: 'static/img/list-icon/food.png'},
          {name: '超市百货', img: 'static/img/list-icon/shop.png'},
          {name: '休闲娱乐', img: 'static/img/list-icon/fire.png'},
          {name: '生鲜蔬果', img: 'static/img/list-icon/shucai.png'},
          {name: '丽人', img: 'static/img/list-icon/woman.png'},
          {name: '医疗', img: 'static/img/list-icon/yiliao.png'},
          {name: '爱车', img: 'static/img/list-icon/car.png'},
          {name: '五金配饰', img: 'static/img/list-icon/wujin.png'},
          {name: '宠物专区', img: 'static/img/list-icon/chongwu.png'},
          {name: '家政服务', img: 'static/img/list-icon/jiazheng.png'},
          {name: '电子数码', img: 'static/img/list-icon/shuma.png'},
          {name: '电器类', img: 'static/img/list-icon/dianqi.png'},
          {name: '装修装饰', img: 'static/img/list-icon/zhuangxiu.png'},
          {name: '钟表类', img: 'static/img/list-icon/zhongbiao.png'},
          {name: '鲜花绿植', img: 'static/img/list-icon/xianhua.png'}
        ],
        title: '商铺分类'
      };
    },
    components: {
      'vHeader': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .more_list
    width 100%
    position relative
    top 44px
    font-size 0
    .more_item
      width 25%
      display inline-block
      padding 20px 0
      font-size 12px
      text-align center
      background-image url("../../../static/img/repeat-x.png") , url("../../../static/img/repeat-x.png")
      background-repeat repeat-x, repeat-y
      background-position 0 bottom, right top
      background-size auto 0.1rem, auto 0.1rem
      img
        width 35px
        height 35px
        display inline-block
        margin-bottom 10px
</style>
