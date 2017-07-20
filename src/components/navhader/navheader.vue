<template>
  <div class="nav">
    <div class="items">
      <template v-if="category">
        <template v-for="(x, index) in category">
          <router-link :to="{path:'/typepage/'+x.id+'/'+x.name}" :show="true" class="item">
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
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      category: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
