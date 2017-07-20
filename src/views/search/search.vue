<template>
  <div>
    <v-header :type="3"></v-header>
    <scroller class="search-list">
      <vue-loading type="spiningDubbles" style="margin-top: 20px" v-show="loading" color="#25b9cb"
                   :size="{ width: '50px', height: '50px' }"></vue-loading>
      <template v-for="(item, index) in list" v-if="list">
        <template v-if="item.isgood == 1"><!--是商品-->
          <router-link :to="{path:'/details/'+item.id}" class="search_line">{{item.name}}</router-link>
        </template>
        <template v-if="item.isgood == 0 "> <!-- 是商店 -->
          <router-link :to="{path:'/store/'+item.id + '/' + encodeURI(item.name)}" class="search_line">{{item.name}}</router-link>
        </template>
      </template>
      <div v-if="list.length<=0" class="empty">
        {{empty}}
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import LoadMore from '@/components/scroller/scroller';
  import vueLoading from 'vue-loading-template';
  import { bus } from '@/vuex/bus';
  import header from '@/components/header/header';
  const ERR_OK = 1;
  export default {
    data () {
      return {
        type: 2,
        loading: false,
        empty: '',
        list: []
      };
    },
    watch: {
      '$route' () {
        this.empty = '';
      }
    },
    created () {
      bus.$on('tip', (text) => {
        this.search(text);
      });
    },
    methods: {
      search (t) {
        if (t.trim() !== '') {
          this.loading = true;
          this.empty = '';
          this.list = [];
          this.$axios.get('index/index/search/param/' + encodeURI(t)).then((response) => {
            response = response.data;
            this.loading = false;
            if (response.code === ERR_OK) {
              this.list = response.data;
            } else {
              this.empty = response.msg;
            }
          });
        }
      }
    },
    components: {
      LoadMore,
      vueLoading,
      'vHeader': header
    }
  }
  ;
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search-list
    padding-top 4.4rem
    .search_line
      padding 15px
      display block
      font-size 16px
      text-decoration underline
  .empty
    text-align center
    font-size 16px
    line-height 70px
    color #666
</style>
