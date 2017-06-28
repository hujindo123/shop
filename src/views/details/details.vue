<template>
  <div>
    <v-header :title="title" :type="2"></v-header>
    <div class="details">
      <scroller>
        <v-swiper :banner="banner"></v-swiper>
      </scroller>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import swiper from '@/components/swiper/swiper';
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
        banner: {}
      };
    },
    components: {
      'vSwiper': swiper,
      'vHeader': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.details
  position absolute
  width 100%
  height 100%
  top 44px
</style>
