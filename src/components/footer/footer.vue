<template>
  <ul class="footer">
    <li class="footer-nav">
      <router-link to="/index" class="home">
        <div class="img home-img"></div>
        <span>首页</span>
      </router-link>
    </li>
    <li class="footer-nav">
      <router-link :to="{path: '/details',query:{ areaid: 3}}" class="sxf">
        <div class="img position-img"></div>
        <span>附近商家</span>
      </router-link>
    </li>
    <li class="footer-nav" @click="change">
         <transition name="list-fade">
           <ul class="about" v-if="listShow">
             <li class="list-li">
               <router-link to="/download">使用说明</router-link>
             </li>
             <li class="list-li">
               <router-link to="/b">加盟方式</router-link>
             </li>
             <li class="list-li">
               <router-link to="/c">APP下载</router-link>
             </li>
           </ul>
         </transition>
      <a class="user">
        <div class="img user-img"></div>
        <span>关于我们</span>
      </a>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        listShow: false
      };
    },
    computed: {
      onfocus () {
        if (this.$route.path === '/download' || this.$route.path === '/b' || this.$route.path === '/c') {
          return true;
        }
      },
      first () {
        if (this.$route.path !== '/home') {
          return false;
        }
      }
    },
    methods: {
      change () {
        this.listShow = !this.listShow;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .footer
    width 100%
    height 5rem
    display flex
    position fixed
    bottom 0
    left 0
    font-size 0
    z-index 1000
    background #fff
    .footer-nav
      position relative
      flex 1
      text-align center
      background url("../../../static/img/repeat-x.png") left top repeat-x
      background-size 0.1rem 0.1rem
      a
        display block
        width 100%
        height 5rem
      .link-active
        span
          color #25b9cb
      span
        display block
        margin-top 0.3rem
        font-size 1.3rem
      .img
        width 2.5rem
        height 2.5rem
        margin 0.5rem auto 0
        display inline-block
      .home
        .home-img
          background url('../../../static/img/home.png') center center no-repeat
          background-size contain
        &.link-active
          .home-img
            background url('../../../static/img/home-active.png') center center no-repeat
            background-size contain
      .sxf
        .position-img
          background url('../../../static/img/postion.png') center center no-repeat
          background-size contain
        &.link-active
          .position-img
            background url('../../../static/img/postion-active.png') center center no-repeat
            background-size contain
      .user
        .user-img
          background url('../../../static/img/user.png') center center no-repeat
          background-size contain
        &.link-active
          .user-img
            background url('../../../static/img/user-active.png') center center no-repeat
            background-size contain
      .about
        width 100%
        height 15rem
        position absolute
        background #f5f5f5
        top -15rem
        font-size 1.3rem
        line-height 5rem
        &.list-fade-enter-active, list-fade-leave-active
          transition all 0.2s ease
        &.list-fade-enter, list-fade-leave-active
          opacity 0
          transform translateY(10px)
        .list-li
          background-image: url(../../../static/img/repeat-x.png),url(../../../static/img/repeat-x.png),url(../../../static/img/repeat-x.png),url(../../../static/img/repeat-x.png)
          background-repeat: repeat-x, repeat-y,  repeat-y
          background-position: left top, left top, right top
          background-size: auto 1px,auto 1px,auto 1px


</style>
