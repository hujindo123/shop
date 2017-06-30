<template>
  <div class="scroll">
    <scroller ref="my_scroller_1" class="my_scroller_1">
      <div class="left_row" v-for="(item, index) in items1" :class="{good_active: index === selected }"
           @click="goodsActive(index)"><span>粮油副食</span>
      </div>
      <!--  <div class="left_row">食品饮料</div>
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
        <div class="left_row">母婴用品</div>-->
      <div class="" style="width: 100%;height: 150px"></div>
    </scroller>
    <scroller style="" ref="my_scroller_2" class="my_scroller_2">
      <div class="right_row" v-for="(item, index) in items2">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">德克士德克士全家桶100G全家桶100G/桶</div>
          <div class="row_cun">库存（456） {{ item }}</div>
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
      <div class="" style="width: 100%;height: 150px"></div>
    </scroller>
    <v-download v-show="show"></v-download>
  </div>
</template>

<script type="text/ecmascript-6">
  import nav from '@/components/nav/nav';
  import download from '@/components/download/download';
  export default {
    data () {
      return {
        show: false,
        selected: 0,
        items1: [],
        items2: []
      };
    },
    mounted () {
      for (let i = 1; i <= 20; i++) {
        this.items1.push(i);
        this.items2.push(i + ' - Scroller 2');
      }
      this.top = [1, 1];
      this.bottom = [20, 20];
    },
    methods: {
      goodsActive (index) {
        this.selected = index;
      },
      refresh (done) {
        setTimeout(() => {
          let start = this.top[0] - 1;
          for (let i = start; i > start - 10; i--) {
            this.items1.splice(0, 0, i + ' - Scroller 1');
          }
          this.top[0] = this.top[0] - 10;
          done();
        }, 1500);
      },
      refresh2 (done) {
        setTimeout(() => {
          let start = this.top[1] - 1;
          for (let i = start; i > start - 10; i--) {
            this.items2.splice(0, 0, i + ' - Scroller 2');
          }
          this.top[1] = this.top[1] - 10;
          done();
        }, 1500);
      }
    },
    components: {
      'vNav': nav,
      'vDownload': download
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll
    width 100%
    z-index 1
    position absolute
    top 40px
    height 100%
    display flex
    .my_scroller_1
      width 85px
      flex 0 0 85px
      box-sizing border-box
      height 100%
      position relative
      .left_row
        position relative
        text-align center
        color rgb(51, 51, 51)
        padding 8px 0
        font-size 14px
        background-color #f4f4f4
        &::after
          width 100%
          position absolute
          bottom 0
          left 0
          display block
          content " "
          height 0.1rem
          line-height 0
          background url("../../../static/img/repeat-x.png") left bottom repeat-x
          background-size 0.2rem 0.2rem
        span
          display block
          padding 7px 0
          border-left 2px solid transparent
        &.good_active
          background #fff
          span
            border-left 2px solid rgb(37, 185, 203)

    .my_scroller_2
      flex 1
      height 100%
      position relative
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
