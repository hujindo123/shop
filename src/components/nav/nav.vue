<template>
  <div class="store">
    <div class="store_top" :id="id">
      <router-link class="store_h goods" :to="{ path: '/goods/'+this.$route.params.id+'/'+encodeURI(this.$route.params.name)}">
        商品
        <span class="store_line"></span>
      </router-link>
      <router-link class="store_h goodsDetails" :to="{ path: '/goodsDetails/'+this.$route.params.id+'/'+encodeURI(this.$route.params.name)}">
        店铺详情
        <span class="store_line"></span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    created () {
      console.log(this.id);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .store
    position relative
    height 100%
    box-sizing border-box
    overflow hidden
    .store_top
      width 100%
      height 4rem
      line-height 4rem
      text-align center
      background url('../../../static/img/repeat-x.png') left bottom repeat-x
      background-size 0.1rem 0.1rem
      display flex
      background-color #fff
      position absolute
      z-index 3000
      .store_h
        flex 1
        display inline-block
        font-size 1.4rem
        color rgb(128, 128, 128)
        justify-content center
        &.link-active
          color rgb(37, 185, 203)
          .store_line
            width: 3rem
            height: 0.2rem;
            display: flex;
            background: rgb(37, 185, 203);
            position: relative;
            bottom: 0.2rem;
            margin: 0 auto;
</style>
