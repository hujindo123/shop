<template>
  <div class="store">
    <div class="store_top" :id="id">
      <div class="store_h goods" :class="{'color':tabShow}" @click="tabClick">
        商品
        <span :class="{'store_line': tabShow}"></span>
      </div>
      <div class="store_h goodsDetails" :class="{'color':tabShow2}" @click="tab2Click">
        店铺详情
        <span :class="{'store_line': tabShow2}"></span>
      </div>
    </div>
    <div class="scroll" v-show="tabShow">
      <div class="empty">{{empty}}</div>
      <scroller ref="my_scroller_1" class="my_scroller_1">
        <vue-loading type="spin" style="margin-top: 30px" v-show="loading1" color="#25b9cb"
                     :size="{ width: '20px', height: '20px' }"></vue-loading>
        <div class="left_row" v-for="(item, index) in items1" :class="{good_active: index === selected }"
             @click="goodsActive(item.id, index)">
          <span>{{item.name}}</span>
        </div>
        <div class="" style="width: 100%;height: 150px"></div>
      </scroller>
      <scroller style="" ref="my_scroller_2" class="my_scroller_2">
        <vue-loading type="spin" style="margin-top: 30px" v-show="loading2" color="#25b9cb"
                     :size="{ width: '20px', height: '20px' }"></vue-loading>
        <template v-if="right_row" v-for="(item, index) in items2">
          <router-link :to="{path:'/details/'+item.id}" class="right_row" >
            <div class="right_row_left">
              <img src="../../../static/img/icon_shop.png" alt="">
            </div>
            <div class="right_row_right">
              <div class="right_row_right_h">{{item.name}}/{{item.unit}}</div>
              <div class="row_cun">库存（{{ item.nums }}） </div>
              <div class="row_price">￥{{item.price}}<i class="details_add" @click="show=true"></i></div>
            </div>
          </router-link>
        </template>
        <div class="" style="width: 100%;height: 150px"></div>
      </scroller>
      <v-download v-show="show"></v-download>
    </div>
    <div class="goods-details" v-show="tabShow2" v-if="msg">
      <div class="shop_sp">
        <img :src="this.baseUrl+msg.logo" alt="">
      </div>
      <div class="shop_name">{{msg.name}}</div>
      <ul class="shop_list">
        <li class="shop_list_wrapper">
          <div class="shop_list_left">
            <i class="icon-time"></i>
            营业时间：
          </div>
          <div class="shop_list_right">
            {{msg.datestr}}
          </div>
        </li>
        <li class="shop_list_wrapper">
          <div class="shop_list_left">
            <i class="icon-phone"></i>
            联系电话：
          </div>
          <div class="shop_list_right">
            {{msg.phone}}
          </div>
        </li>
        <li class="shop_list_wrapper">
          <div class="shop_list_left">
            <i class="icon-car"></i>
            配送说明：
          </div>
          <div class="shop_list_right">
            {{msg.delivery_fee}}
          </div>
        </li>
        <li class="shop_list_wrapper">
          <div class="shop_list_left">
            <i class="icon-address"></i>
            门店地址：
          </div>
          <div class="shop_list_right">
            {{msg.addr}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import vueLoading from 'vue-loading-template';
  import download from '@/components/download/download';
  const ERR_OK = 1;
  export default {
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        loading1: true,
        loading2: false,
        tabShow: true,
        right_row: true,
        tabShow2: false,
        show: false,
        selected: 0,
        msg: '',
        empty: '',
        items1: [],
        items2: []
      };
    },
    watch: {
      '$route' () {
        this.loading1 = true;
        this.loading2 = false;
        this.right_row = false;
        this.getLeftData();
        this.items1 = [];
        this.items2 = [];
        this.empty = '';
        this.msg = '';
      }
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
      tabClick () {
        this.tabShow = true;
        this.tabShow2 = false;
      },
      tab2Click () {
        this.tabShow = false;
        this.tabShow2 = true;
      },
      /* 左边导航数据 */
      getLeftData () {
        if (this.$route.path.indexOf('store') !== -1) {
          this.getMsg();
          this.$axios.get('/index/index/storecate/id/' + this.$route.params.id).then((response) => {
            response = response.data;
            this.loading1 = false;
            if (response.code === ERR_OK) {
              this.items1 = response.data;
              this.getRight(response.data[0].id);
              this.loading2 = true;
            } else {
              this.empty = response.msg;
            }
          });
        }
      },
      getRight (index) {
        this.$axios.get('/index/index/goodslist/sid/' + this.$route.params.id + '/cid/' + index).then((response) => {
          response = response.data;
          this.loading2 = false;
          this.right_row = true;
          if (response.code === ERR_OK) {
            this.items2 = response.data;
          } else {
            this.empty = response.msg;
          }
        });
      },
      getMsg () {
        this.$axios.get('/index/index/store/id/' + this.$route.params.id).then((response) => {
          response = response.data;
          if (response.code === ERR_OK) {
            this.msg = response.data;
          }
        });
      },
      goodsActive (id, index) {
        this.selected = index;
        this.loading2 = true;
        this.right_row = false;
        this.getRight(id);
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
      vueLoading,
      'vDownload': download
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
        &.color
          color rgb(37, 185, 203)
        .store_line
          width: 3rem
          height: 0.2rem;
          display: flex;
          background: rgb(37, 185, 203);
          position: relative;
          bottom: 0.2rem;
          margin: 0 auto;

  .scroll
    width 100%
    z-index 1
    position absolute
    top 4rem
    height 100%
    display flex
    .empty
      text-align center
      font-size 16px
      top 4rem
      position absolute
      width 100%;
      color #666
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

  .goods-details
    position relative
    padding 6.4rem 1.5rem
    .shop_sp
      width 7rem
      height 7rem
      margin 0 auto
      img
        width 100%
        display block
        border-radius 5px
    .shop_name
      width 100%
      font-size 1.4rem
      color rgb(26, 26, 26)
      line-height 1.8
      margin-top 0.8rem
      text-align center
    .shop_list
      width 100%
      box-sizing border-box
      .shop_list_wrapper
        width 100%
        margin-top 1rem
        display flex
        flex-wrap wrap
        font-size 1.4rem
        color #808080
        .shop_list_left
          width 9.5rem
          flex 0 0 9.5rem
          font-size 1.4rem
          line-height 1.6rem
          i
            font-size 1.6rem
            vertical-align middle
            color rgb(37, 185, 203)
            &.icon-time
              font-size 2rem
        .shop_list_right
          flex 1
          line-height 1.6rem
</style>
