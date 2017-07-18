<template>
  <div>
    <v-header :title="this.$route.params.name" :type="2"></v-header>
    <scroller class="type-list">
      <vue-loading type="bars" style="margin-top: 150px" v-show="loading" color="#25b9cb"
                   :size="{ width: '50px', height: '50px' }"></vue-loading>
      <v-list v-if="list.length > 0" :list="list"></v-list>
      <section class="empty" v-else="cate">{{empty}}</section>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import vueLoading from 'vue-loading-template';
  import header from '@/components/header/header';
  import list from '@/components/list/list';
  const ERR_OK = 1;
  export default {
    data () {
      return {
        loading: true,
        title: '',
        list: [],
        empty: ''
      };
    },
    watch: {
      '$route' () {
        this.loading = true;
        this.getCate();
        this.list = [];
        this.empty = '';
      }
    },
    created () {
      this.getCate();
    },
    methods: {
      getCate () {
        if (this.$route.params.id) {
          this.$axios.get('/index/index/cagestores/cateid/' + this.$route.params.id).then((response) => {
            response = response.data;
            if (response.code === ERR_OK) {
              this.list = response.data.stores;
            } else {
              this.empty = response.msg;
            }
            this.title = response.data.category_name;
            this.loading = false;
          });
        }
      }
    },
    components: {
      vueLoading,
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
