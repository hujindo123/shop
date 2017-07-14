<template>
  <div class="store_main">
    <v-header :title="decodeURI(this.$route.params.name)" :type="2" style="position: relative"></v-header>
    <v-nav></v-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import nav from '@/components/nav/nav';

  export default {
    created () {
      console.log(this.$route.params.name);
    },
    /*   data () {
     return {
     list: [],
     empty: ''
     };
     },
     created () {
     /!* 左边导航数据 *!/
     this.$axios.get('/api/index/index/storecate/id/' + this.$route.query.id).then((response) => {
     response = response.data;
     if (response.code === ERR_OK) {
     this.list = response.data;
     } else {
     this.empty = response.msg;
     }
     });
     }, */
    components: {
      'vHeader': header,
      'vNav': nav
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .store_main
    width 100%
    height 100%
    position relative
    overflow hidden
</style>
