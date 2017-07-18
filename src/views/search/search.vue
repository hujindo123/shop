<template>
  <div>
    <v-header :type="3"></v-header>
    <scroller class="search-list">
      <template v-for="(item, index) in list">
        <template v-if="item.isgood == 1"><!--是商品-->
          <router-link :to="{path:'/details/'+item.id}">{{item.name}}</router-link>
        </template>
      </template>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import { bus } from '@/vuex/bus';
  import header from '@/components/header/header';
  const ERR_OK = 1;
  export default {
    data () {
      return {
        type: 2,
        list: []
      };
    },
    created () {
      bus.$on('tip', (text) => {
        this.search(text);
      });
    },
    methods: {
      search (t) {
        if (t.trim() !== '') {
          debugger;
          this.$axios.get('api/index/index/search/param/' + encodeURI(t)).then((response) => {
            response = response.data;
            if (response.code === ERR_OK) {
              this.list = response.data;
            } else {
            }
          });
        }
      }
    },
    components: {
      'vHeader': header
    }
  }
  ;
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search-list
    padding-top 4.4rem
</style>
