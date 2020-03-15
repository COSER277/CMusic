<template>
  <!-- 发现音乐页面 -->
  <div class="explor">
    <div class="nav-bar"></div>
    <Pane v-bind="tabOps" @selectPanel="change">
      <template slot="content">
        <div v-show="tabOps.activeItem===0" class="item">
          <recommendation></recommendation>
        </div>
        <div v-show="tabOps.activeItem===1" class="item">
          <playlist></playlist>
        </div>
        <div v-show="tabOps.activeItem===2" class="item"></div>
        <div v-show="tabOps.activeItem===3" class="item">
          <Top></Top>
        </div>
        <div v-show="tabOps.activeItem===4" class="item">面板内容5</div>
        <div v-show="tabOps.activeItem===5" class="item">面板内容6</div>
      </template>
    </Pane>
  </div>
</template>

<script>
import Pane from "../components/Pane";
import recommendation from "../views/exportMusic/recommendation";
import playlist from "../views/exportMusic/playlist";

import Top from "../views/exportMusic/top";
export default {
  name: "explor",
  components: { Pane, recommendation, playlist, Top },
  props: {},
  data() {
    return {
      tabOps: {
        //数据绑定对象
        activeItem: 3,
        navs: [
          { title: "个性推荐" },
          { title: "歌单" },
          { title: "主播电台" },
          { title: "排行榜" },
          { title: "歌手" },
          { title: "最新音乐" }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    async change(i) {
      //子组件绑定的函数
      //设置显示面板
      this.tabOps.activeItem = i;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss"  scoped>
.explor {
  /* width: 100%; */
  /* 不要宽度不然有个margin就超出 */
  /* margin: 10px 20px; */
}
</style>