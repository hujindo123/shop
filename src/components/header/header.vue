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
    z-index 3000
    .icon-back,.icon-search
      height 38px
      line-height 38px
      color #fff
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
    .header-logo
      flex 1
      background url("logo.png") center center no-repeat
      background-size contain

</style>
