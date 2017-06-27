<template>
  <div class="main">
    <v-header></v-header>
    <div class="main_wrapper">
      <div class="nav">
        <div class="items">
          <a href="" class="item"><img src="./food.png">
            <p class="pic-t">美食</p></a>
          <a href="" class="item"><img src="./shop.png">
            <p class="pic-t">超市百货</p></a>
          <a href="" class="item"><img src="./fire.png">
            <p class="pic-t">休闲娱乐</p></a>
          <a href="" class="item"><img src="./shucai.png">
            <p class="pic-t">生鲜蔬果</p></a>
          <a href="" class="item"><img src="./woman.png">
            <p class="pic-t">丽人</p></a>
          <a href="" class="item"><img src="./yiliao.png">
            <p class="pic-t">医疗</p></a>
          <a href="" class="item"><img src="./car.png">
            <p class="pic-t">爱车</p></a>
          <a href="" class="item"><img src="./more.png">
            <p class="pic-t">更多分类</p></a>
        </div>
      </div>
      <v-swiper :banner="banner"></v-swiper>
      <v-list></v-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
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
        banner: {}
      };
    },
    components: {
      'vHeader': header,
      'vSwiper': swiper,
      'vList': list
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main
    position relative
    .main_wrapper
      padding-top 44px
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
          .item
            width 25%
            flex 1
            box-sizing border-box
            float left
            padding 11px 0
            text-align center
            img
              width 33px
              height 33px
            .pic-t
              font-size 12px
              margin-top 9px

</style>
