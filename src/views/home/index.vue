<template>
  <div>
    <v-header :type="0"></v-header>
    <div class="main_wrapper">
      <scroller>
        <div class="nav">
          <div class="items">
            <template  v-for="(x, index) in list">
              <router-link :to="{path:x.name == '更多分类' ?'/more':'/typepage',query:{name: x.name}}" class="item"><img :src="x.img">
                <p class="pic-t">{{x.name}}</p></router-link>
            </template>
          </div>
        </div>
        <v-swiper :banner="banner"></v-swiper>
        <v-list :line="false"></v-list>
      </scroller>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import footer from '@/components/footer/footer';
  import swiper from '@/components/swiper/swiper';
  import list from '@/components/list/list';
  const ERR_OK = 200;
  export default {
    created () {
      this.$axios.get('/api/banner').then((response) => {
        response = response.data;
        if (response.code === ERR_OK) {
          this.banner = response;
        }
      });
    },
    data () {
      return {
        list: [
          {name: '美食', img: 'static/img/list-icon/food.png'},
          {name: '超市百货', img: 'static/img/list-icon/shop.png'},
          {name: '休闲娱乐', img: 'static/img/list-icon/fire.png'},
          {name: '生鲜蔬果', img: 'static/img/list-icon/shucai.png'},
          {name: '丽人', img: 'static/img/list-icon/woman.png'},
          {name: '医疗', img: 'static/img/list-icon/yiliao.png'},
          {name: '爱车', img: 'static/img/list-icon/car.png'},
          {name: '更多分类', img: 'static/img/list-icon/more.png'}
        ],
        banner: {}
      };
    },
    components: {
      'vHeader': header,
      'v-footer': footer,
      'vSwiper': swiper,
      'vList': list
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main_wrapper
    width 100%
    height 100%
    overflow hidden
    position absolute
    top 4.4rem
    .nav
      width 100%
      box-sizing border-box
      padding 0 5%
      position relative
      background #fff
      overflow hidden
      .items
        width 100%
        position relative
        text-align center
        overflow hidden
        .item
          width 25%
          box-sizing border-box
          float left
          padding 11px 0
          text-align center
          img
            width 3.5rem
            height 3.5rem
          .pic-t
            font-size 1.3rem
            margin-top 0.9rem
</style>
