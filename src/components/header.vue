<template>
  <div class="header">
    <span class="icon-back"></span>
    <span class="header-logo"></span>
    <span class="icon-search"></span>
  </div>
</template>

<script type="text/ecmascript-6">

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
    .icon-back,.icon-search
      width 36px
      height 38px
      flex 0 0 36px
      line-height 38px
      color #fff
    .icon-back
      text-align right
      font-size 24px
    .icon-search
      text-align left
      font-size 22px
    .header-logo
      flex 1
      background url("logo.png") center center no-repeat #fff
      background-size contain

</style>
