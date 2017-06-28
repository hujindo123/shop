<template>
  <div class="header">
    <span class="icon-back" @click="back"></span>
    <span class="header-center" v-if="type == 1 || type == 2">{{title}}</span>
    <span class="header-logo" v-if="type == 0">{{title}}</span>
    <span class="icon-search" v-if="type!=2"></span>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      title: {
        type: String
      },
      type: {
        type: Number // 0 log、 1、商铺分类  2、商品详情
      }
    },
    methods: {
      back () {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 44px
    position fixed
    display flex
    top 0
    left 0
    box-sizing border-box
    padding 4px 0
    background url("bg.png") 0 0 repeat-x
    background-size contain
    z-index 3000
    line-height 38px
    overflow hidden
    .icon-back, .icon-search
      height 38px
      line-height 38px
      color #fff
      z-index 3000
      position absolute
    .icon-back
      width 36px
      flex 0 0 36px
      text-align right
      font-size 25px
      left 0
      top 3px
    .icon-search
      width 38px
      flex 0 0 38px
      text-align left
      font-size 22px
      right 0
      top 2px
    .header-center
      width 100%
      text-align center
      color #fff
      font-size 17px
      position absolute
      z-index 1000
    .header-logo
      flex 1
      background url("./logo.png") center center no-repeat
      background-size contain


</style>
