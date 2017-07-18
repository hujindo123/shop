<template>
  <div class="scroll">
    <scroller ref="my_scroller_1" class="my_scroller_1">
      <div class="left_row" v-for="(item, index) in items1" :class="{good_active: index === selected }"
           @click="goodsActive(item.id)">
        <span>{{item.name}}</span>
      </div>
      <div class="" style="width: 100%;height: 150px"></div>
    </scroller>
    <scroller style="" ref="my_scroller_2" class="my_scroller_2">
      <div class="right_row" v-for="(item, index) in items2">
        <div class="right_row_left">
          <img src="../../../static/img/icon_shop.png" alt="">
        </div>
        <div class="right_row_right">
          <div class="right_row_right_h">{{item.name}}/{{item.unit}}</div>
          <div class="row_cun">库存（{{ item.nums }}） </div>
          <div class="row_price">￥{{item.price}}<i class="details_add" @click="show=true"></i></div>
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
  const ERR_OK = 1;
  export default {
    data () {
      return {
        show: false,
        selected: 0,
        items1: [],
        items2: []
      };
    },
    created () {
      this.getLeftData();
      /*      for (let i = 1; i <= 20; i++) {
       this.items1.push(i);
       this.items2.push(i + ' - Scroller 2');
       }
       this.top = [1, 1];
       this.bottom = [20, 20]; */
    },
    methods: {
      /* 左边导航数据 */
      getLeftData () {
        this.$axios.get('/index/index/storecate/id/' + this.$route.params.id).then((response) => {
          response = response.data;
          if (response.code === ERR_OK) {
            this.items1 = response.data;
            console.log(this.items1);
            this.getRight(response.data[0].id);
          } else {
            this.empty = response.msg;
          }
        });
      },
      getRight (index) {
        this.$axios.get('/index/index/goodslist/sid/' + this.$route.params.id + '/cid/' + index).then((response) => {
          response = response.data;
          if (response.code === ERR_OK) {
            debugger;
            this.items2 = response.data;
          } else {
            this.empty = response.msg;
          }
        });
      },
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
    top 4rem
    height 100%
    display flex
    .my_scroller_1
      width 8.5rem
      flex 0 0 8.5rem
      box-sizing border-box
      height 100%
      position relative
      .left_row
        position relative
        text-align center
        color rgb(51, 51, 51)
        padding 0.8rem 0
        font-size 1.4rem
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
          padding 0.7rem 0
          border-left 0.2rem solid transparent
        &.good_active
          background #fff
          span
            border-left 0.2rem solid rgb(37, 185, 203)

    .my_scroller_2
      flex 1
      height 100%
      position relative
      .right_row
        padding 1.3rem 1rem
        display flex
        .right_row_left
          width 6.2rem
          height 6.2rem
          flex 0 0 6.2rem
          img
            width 100%
            display block
        .right_row_right
          flex 1
          min-width 10rem
          font-size 0
          padding-left 1rem
          .right_row_right_h
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 1.4rem
            color rgb(51, 51, 51)
          .row_cun
            font-size 1.2rem
            margin-top 1.1rem
            color rgb(128, 128, 128)
          .row_price
            color rgb(232, 93, 80)
            margin-top 1.3rem
            font-size 1.4rem
            position relative
            .details_add
              width 2.4rem
              height 2.4rem
              position absolute
              right 0
              bottom -3px
              background url("../../../static/img/add.png") center center no-repeat
              background-size contain

</style>
