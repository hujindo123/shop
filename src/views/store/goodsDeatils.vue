<template>
  <div class="goods-details" v-if="msg">
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
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 1;
  export default {
    data () {
      return {
        msg: ''
      };
    },
    created () {
      this.$axios.get('/index/index/store/id/' + this.$route.params.id).then((response) => {
        response = response.data;
        if (response.code === ERR_OK) {
          this.msg = response.data;
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
