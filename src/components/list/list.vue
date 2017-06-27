<template>
  <ul class="list">
    <li class="list_item">
      <div class="list_item_wrapper">
        <div class="list_item_left">
          <img src="../../views/home/fire.png" alt="">
        </div>
        <div class="list_item_right">
          <div class="line"><i class=" icon icon_pu"></i><span class="icon_title">红旗超市</span></div>
          <div class="line"><i class=" icon icon_shop"></i><i class=" icon icon_car"></i><span class="icon_time">06:00-24:00 | ￥0.0.1元起送</span></div>
          <div class="line last"> <span class="icon_time">东风路767号东宝大厦21楼</span></div>
        </div>
        <div class="list_m">13m</div>
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list
    width 100%
    position relative
    .list_item
      width 100%
      background url("../../../static/img/repeat-x.png") left bottom repeat-x
      background-size 0.1rem 0.1rem
      .list_item_wrapper
        width 100%
        box-sizing border-box
        padding 15px 10px
        display flex
        .list_item_left
          width 70px
          height 70px
          flex 0 0 70px
          overflow hidden
          img
            width 100%
        .list_item_right
          flex 1
          box-sizing border-box
          padding-left 1rem
          .line
            padding-bottom 8px
            font-size 0
            &.last
              padding-bottom 0
            .icon
              width 18px
              height 18px
              padding-left 0.5rem
              display inline-block
            .icon_pu
              background url("../../../static/img/icon_shop.png") 0 0 no-repeat
              background-size contain
            .icon_shop
              background url("../../../static/img/icon_pu.png") 0 0 no-repeat
              background-size contain
            .icon_car
              background url("../../../static/img/icon_car.png") 0 0 no-repeat
              background-size contain
            .icon_title
              font-size 16px
              color rgb(25, 25, 25)
              font-weight 400
              vertical-align top
              display inline-block
              margin-top 2px
            .icon_time
              font-size 13px
              color rgb(102, 102, 102)
              line-height 1.3
              font-weight 400
              vertical-align top
              margin-top 2px
              display inline-block
        .list_m
          position absolute
          right 12px
          font-size 14px
          top 17px
</style>
