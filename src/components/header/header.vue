<template>
  <div class="header">
    <span class="icon-back" @click="back"></span>
    <span class="header-center" v-if="type == 1 || type == 2">{{title}}</span>
    <span class="header-logo" v-if="type == 0">{{title}}</span>
    <router-link to="/search" class="icon-search" v-if="type!=2 && type!=3 "></router-link>
    <span class="zhanweifu" v-if="type==2"></span>
    <div class="search_input" v-if="type==3">
      <input type="text" ref="input" placeholder="请输入商品或商铺">
    </div>
    <span class="icon-search" v-if="type==3" @click="searchList"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String
      },
      type: {
        type: Number // 0 log、 1、主题名  2、没有搜索按钮() 3、接口搜索
      }
    },
    mounted () {
      if (this.$refs['input']) {
        this.$refs['input'].focus();
      }
    },
    methods: {
      // 返回
      back () {
        this.$router.go(-1);
      },
      searchList () {
        console.log(1);
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
    flex-flow row nowrap
    .icon-back, .icon-search
      height 38px
      line-height 38px
      color #fff
      z-index 3000
      position relative
    .icon-back
      width 36px
      flex 0 0 36px
      text-align right
      font-size 25px
    .icon-search
      width 38px
      flex 0 0 38px
      text-align left
      font-size 22px
    .header-center
      width 100%
      text-align center
      color #fff
      font-size 17px
      position relative
      z-index 1000
    .zhanweifu
      width 38px
    .header-logo
      flex-grow 1
      background url("./logo.png") center center no-repeat
      background-size contain
    .search_input
      padding 0 24px
      flex-grow 1
      input
        vertical-align top
        width 100%
        box-sizing border-box
        padding-left 0.5em
        height 28px
        line-height 25px
        font-size 15px
        margin-top 4px
        border-radius 5px
        outline none


</style>
