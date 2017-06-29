<template>
  <div>
    <v-header :title="title" :type="2"></v-header>
    <div class="details">
      <scroller>
        <v-swiper :banner="banner"></v-swiper>
        <div class="desc">
          <div class="details_type"><router-link to="/store">好运办公用品店</router-link></div>
          <div class="details_title">迷你静电电扇，联想Ari Ever HEllo 13英寸的超波笔记本电脑，黑蓝色可供选择</div>
          <div class="details_price">￥18300.00<span class="details_num">库存：3</span><i class="details_add" @click="show=true"></i></div>
        </div>
        <div class="details_xq">
          <div class="details_h1">商品详情</div>
          <div class="details_desc_img"></div>
        </div>
      </scroller>
    </div>
    <v-download v-show="show"></v-download>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import swiper from '@/components/swiper/swiper';
  import download from '@/components/download/download';
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
        title: '商品详情',
        show: false,
        banner: {}
      };
    },
    components: {
      'vSwiper': swiper,
      'vHeader': header,
      'vDownload': download
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .details
    position absolute
    width 100%
    height 100%
    top 44px
    .desc
      font-size 0
      padding 10px 15px 18px 15px
      background url("../../../static/img/repeat-x.png") left top repeat-x
      background-size 0.1rem 0.1rem
      .details_type
        font-size 14px
        color rgb(128, 128, 128)
      .details_title
        margin-top 8px
        font-size 16px
        color rgb(26, 26, 26)
        line-height 1.9
      .details_price
        height 24px
        font-size 16px
        line-height 25px
        color rgb(235, 66, 52)
        margin-top 10px
        position relative
        .details_num
          margin-left 20px
          font-size 14px
          color rgb(128, 128, 128)
        .details_add
          width 24px
          height 24px
          position absolute
          right 0
          background url("../../../static/img/add.png") center center no-repeat
          background-size contain
    .details_xq
      width 100%
      position relative
      .details_h1
        padding 14px 0
        text-align center
        font-size 14px
        color rgb(51, 51, 51)
        background #f5f5f5
</style>
