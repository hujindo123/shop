<template>
  <div class="list">
    <div class="list_item">
      <div class="list_item_wrapper" v-if="list" v-for="(item, index) in list">
        <router-link :to="{path:'/store/'+item.id+'/'+encodeURI(item.name)}" class="a">
          <div class="list_item_left">
            <img :src="baseUrl+item.logo" alt="">
          </div>
          <div class="list_item_right">
            <div class="line"><i class=" icon icon_pu"></i><span class="icon_title">{{item.name}}</span></div>
            <div class="line"><i class=" icon icon_shop"></i><i class=" icon icon_car"></i><span
              class="icon_time">{{item.datestr}} | {{item.delivery_fee === '免运费' ? ' 免邮费' : '￥' + item.delivery_fee}}</span>
            </div>
            <div class="line last"><span class="icon_time">{{item.addr}}</span></div>
            <!--   <div class="list_m">13m</div> -->
          </div>
        </router-link>
        <div class="entry-line" v-show="line"></div>
      </div>
      <!-- 推荐 -->
      <div v-if="tj">
        <router-link to="/details" class="tj">
          <div class="tj_line">
            <div class="details_tj">电脑卡风扇电脑卡风扇很小很好电脑卡风扇很小很好很小很好，12英寸</div>
            <div class="details_price">￥12056.00</div>
          </div>
        </router-link>
        <router-link to="/details" class="tj">
          <div class="tj_line">
            <div class="details_tj">电脑卡风扇电脑卡风扇很小很好电脑卡风扇很小很好很小很好，12英寸</div>
            <div class="details_price">￥12056.00</div>
          </div>
        </router-link>
        <router-link to="/details" class="tj">
          <div class="tj_line">
            <div class="details_tj">电脑卡风扇电脑卡风扇很小很好电脑卡风扇很小很好很小很好，12英寸</div>
            <div class="details_price">￥12056.00</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        loading: true
      };
    },
    props: {
      list: {
        type: Array,
        default: []
      },
      line: {
        type: Boolean,
        default: true
      },
      tj: {
        type: Boolean, // 底部推荐
        default: false
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list
    width 100%
    height 100%
    position relative
    .list_item
      width 100%
      height 100%
      position relative
      .list_item_wrapper
        width 100%
        box-sizing border-box
        display flex
        flex-direction column
        overflow hidden
        background url("../../../static/img/repeat-x.png") left bottom repeat-x
        background-size 0.1rem 0.1rem
        background-color #fff
        .a
          flex 1
          display flex
          padding 1.4rem 1rem
          .list_item_left
            width 7rem
            height 7rem
            flex 0 0 7rem
            overflow hidden
            img
              width 100%
          .list_item_right
            flex 1
            box-sizing border-box
            padding-left 1rem
            overflow hidden
            .line
              height 1.8rem
              line-height 1.8rem
              padding-bottom 0.8rem
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              &.last
                padding-bottom 0
              .icon
                width 1.8rem
                height 1.8rem
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
                font-size 1.6rem
                color rgb(25, 25, 25)
                font-weight 400
                vertical-align top
                display inline-block
                margin-top 0.2px
              .icon_time
                position relative
                font-size 1.3rem
                color rgb(102, 102, 102)
                font-weight 400
                vertical-align top
      /*  .list_m
          position absolute
          right 12px
          font-size 14px
          top 17px
          color rgb(25, 25, 25) */

      .tj
        position relative
        padding 0 1rem
        display block
        width 100%
        box-sizing border-box
        .tj_line
          width 100%
          display flex
          padding 1.2rem 0
          position relative
          background url("../../../static/img/repeat-x.png")
          background-repeat repeat-x, repeat-x
          background-position left top
          background-size 0.1rem 0.1rem
          .details_tj
            flex 1
            font-size 1.3rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            color rgb(26, 26, 26)
          .details_price
            width 7rem
            flex 0 0 7rem
            text-align right
            color rgb(235, 66, 52)
            font-size 1.2rem
            vertical-align middle
      .entry-line
        width 100%
        height 1rem
        background url('../../../static/img/repeat-x.png') 0 0 repeat-x, url('../../../static/img/repeat-x.png') 0 0 repeat-x
        background-size 0.1rem 0.1rem, 0.1rem 0.1rem
        background-position left top, left bottom
        background-color #f5f5f5


</style>
