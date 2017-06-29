<template>
  <div class="scroll">
    <scroller ref="my_scroller_1" class="my_scroller_1">
      <div class="left_row">粮油副食</div>
      <div class="left_row">食品饮料</div>
      <div class="left_row">生鲜水果</div>
      <div class="left_row">进口商品</div>
      <div class="left_row">母婴用品</div>
      <div class="left_row">粮油副食</div>
      <div class="left_row">食品饮料</div>
      <div class="left_row">生鲜水果</div>
      <div class="left_row">进口商品</div>
      <div class="left_row">母婴用品</div>
      <div class="left_row">粮油副食</div>
      <div class="left_row">食品饮料</div>
      <div class="left_row">生鲜水果</div>
      <div class="left_row">进口商品</div>
      <div class="left_row">母婴用品</div>
      <div class="left_row">粮油副食</div>
      <div class="left_row">食品饮料</div>
      <div class="left_row">生鲜水果</div>
      <div class="left_row">进口商品</div>
      <div class="left_row">母婴用品</div>
    </scroller>
    <scroller style="" ref="my_scroller_2" class="my_scroller_2">
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>
      <div class="right_row">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456）</div>
          <div class="row_price">￥15.00<i class="details_add" @click="show=true"></i></div>
        </div>
      </div>

    </scroller>
    <v-download v-show="show"></v-download>
  </div>
</template>

<script type="text/ecmascript-6">
  import download from '@/components/download/download';
  export default {
    data () {
      return {
        show: false
      };
    },
    components: {
      'vDownload': download
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll
    width 100%
    display flex
    position absolute
    z-index 50000
    background orchid
    top 0
    .my_scroller_1
      width 85px
      flex 0 0 85px
      position relative
      .left_row
        text-align center
        color rgb(51, 51, 51)
        padding 15px 0
        font-size 14px
        background #f4f4f4
        background url("../../../static/img/repeat-x.png") left bottom repeat-x
        background-size 0.1rem 0.1rem
    .my_scroller_2
      position relative
      flex 1
      .right_row
        padding 13px 10px
        display flex
        .right_row_left
          width 62px
          height 62px
          flex 0 0 62px
          img
            width 100%
          display block
        .right_row_right
          flex 1
          min-width 100px
          font-size 0
          padding-left 10px
          .right_row_right_h
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 14px
            color rgb(128, 128, 128)
          .row_cun
            font-size 12px
            margin-top 11px
            color rgb(128, 128, 128)
          .row_price
            color rgb(232, 93, 80)
            margin-top 13px
            font-size 14px
            position relative
            .details_add
              width 24px
              height 24px
              position absolute
              right 0
              bottom 0
              background url("../../../static/img/add.png") center center no-repeat
              background-size contain

</style>
