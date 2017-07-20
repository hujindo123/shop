<template>
  <div>
    <v-header :title="this.$route.params.name" :type="2"></v-header>
    <!-- <vue-loading type="bars" style="margin-top: 150px" v-show="loading" color="#25b9cb"
                  :size="{ width: '50px', height: '50px' }"></vue-loading>-->
    <keep-alive>
      <scroller class="type-list" :on-refresh="onRefresh" :on-infinite="onInfinite" ref="my_scroller">
        <v-list  v-if="list.length > 0" :list="list"></v-list>
      </scroller>
    </keep-alive>
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
        listData: [],
        bottom: 1
      };
    },
    deactivated () {
      this.$destroy(true);
    },
    watch: {
      '$route' () {
        this.loading = true;
        this.getCate();
        this.list = [];
        this.empty = '';
        this.$destroy(true);
      }
    },
    mounted () {
      this.getCate();
    },
    methods: {
      getCate () {
        var self = this;
        if (self.$route.params.id) {
          self.$axios.get('/index/index/cagestores/cateid/' + self.$route.params.id).then((response) => {
            response = response.data;
            self.loading = false;
            if (response.code === ERR_OK) {
              self.listData = response.data.stores;
              self.list = self.listData.slice(0, 5);
            }
            self.title = response.data.category_name;
          });
        }
      },
      onRefresh (done) {
        setTimeout(() => {
          done();
        }, 1500);
      },
      onInfinite (done) {
        var self = this;
        setTimeout(() => {
          var n = 10;
          if (self.listData.length > self.list.length) {
            if (self.listData.length - self.list.length > 10) {
              n = 10;
            } else {
              n = self.listData.length - self.list.length;
            }
            self.list = self.list.concat(self.listData.slice(self.list.length, self.list.length + n));
            // console.log(self.list);
            done();
          } else {
            done(true);
          }
        }, 1500);
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
