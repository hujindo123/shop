<template>
  <div>
    <v-header :title="title" :type="1"></v-header>
    <scroller>
      <div class="more_list">
        <template v-if="category">
          <router-link :to="{path:'/typepage',query:{name: '全部分类', cateid: 0}}"  class="more_item">
            <img src="../../../static/img/list-icon/more.png">
            <p class="pic-t">更多分类</p>
          </router-link>
          <template  v-for="(x, index) in category">
            <router-link :to="{path:'/typepage',query:{name: x.name, cateid: x.id}}" class="more_item">
              <img :src="'../../../static/img/list-icon/'+x.id+'.png'">
              <p class="pic-t">{{x.name}}</p>
            </router-link>
          </template>
        </template>
      </div>
    </scroller>
  </div>

</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  const ERR_OK = 1;
  export default {
    data () {
      return {
        category: '',
        title: '商铺分类',
        empty: ''
      };
    },
    created () {
      this.$axios.get('/api/index/index/category').then((response) => {
        response = response.data;
        if (response.code === ERR_OK) {
          this.category = response.data;
        } else {
          this.empty = response.msg;
        }
      });
    },
    components: {
      'vHeader': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .more_list
    width 100%
    position relative
    top 4.4rem
    font-size 0
    padding-bottom: 5rem;
    .more_item
      width 25%
      display inline-block
      padding 2rem 0
      font-size 1.2rem
      text-align center
      background-image url("../../../static/img/repeat-x.png") , url("../../../static/img/repeat-x.png")
      background-repeat repeat-x, repeat-y
      background-position 0 bottom, right top
      background-size auto 0.1rem, auto 0.1rem
      img
        width 3.5rem
        height 3.5rem
        display inline-block
        margin-bottom 1rem
</style>
