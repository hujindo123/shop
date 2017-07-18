<template>
  <div>
    <v-header :type="0"></v-header>
    <div class="main_wrapper">
      <scroller>
        <div class="nav">
          <div class="items">
            <template v-if="category">
              <template v-for="(x, index) in category">
                <router-link :to="{path:'/typepage/'+x.id+'/'+x.name}"  :show="true" class="item">
                  <img :src="'../../../static/img/list-icon/'+x.id+'.png'">
                  <p class="pic-t">{{x.name}}</p>
                </router-link>
              </template>
              <router-link :to="{path:'/more',}" class="item">
                <img src="../../../static/img/list-icon/more.png">
                <p class="pic-t">更多分类</p>
              </router-link>
            </template>

          </div>
        </div>
        <v-swiper :banner="banner"></v-swiper>
        <v-list :line="false" :list="list" v-if="list.length > 0"></v-list>
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
  const ERR_OK = 1;
  export default {
    data () {
      return {
        category: '',
        banner: [],
        list: []
      };
    },
    created () {
      /* 分类列表 */
      this.$axios.get('/index/index/category').then((response) => {
        response = response.data;
        if (response.code === ERR_OK) {
          this.category = response.data.slice(0, 7);
        }
      });
      /* banner */
      this.$axios.get('/index/index/slideshow').then((response) => {
        response = response.data;
        if (response.code === ERR_OK) {
          this.banner = response.data;
        }
      });
      this.$axios.get('/index/index/homestores').then((response) => {
        response = response.data;
        if (response.code === ERR_OK) {
          this.list = response.data;
        }
      });
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
    box-sizing border-box
    padding-top 4.4rem
    ._v-container
      position relative
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
