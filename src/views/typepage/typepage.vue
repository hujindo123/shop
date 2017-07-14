<template>
  <div>
    <v-header :title="title" :type="2"></v-header>
    <scroller class="type-list">
      <v-list v-if="list.length > 0" :list="list"></v-list>
      <section class="empty" v-else="cate">{{empty}}</section>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import list from '@/components/list/list';
  const ERR_OK = 1;
  export default {
    data () {
      return {
        title: '',
        list: [],
        empty: ''
      };
    },
    created () {
      this.$axios.get('/api/index/index/cagestores/cateid/' + this.$route.query.cateid).then((response) => {
        response = response.data;
        if (response.code === ERR_OK) {
          this.list = response.data.stores;
        } else {
          this.empty = response.msg;
        }
        this.title = response.data.category_name;
      });
    },
    components: {
      'vHeader': header,
      'vList': list
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .type-list
    padding-top 4.4rem
    .empty
      text-align center
      font-size 16px
      line-height 70px
      color #666
</style>
