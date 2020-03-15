<template>
  <!-- 歌单面板内容 -->
  <div class="playlist">
    <div class="item">
      <div class="item-info">
        <h4 class="title">歌单</h4>
      </div>
      <div class="space"></div>
      <div class="item-content">
        <BoxList :boxlist="boxList"></BoxList>
      </div>
    </div>
  </div>
</template>

<script>
import BoxList from "../../components/BoxList";
export default {
  name: "playlist",
  components: { BoxList },
  props: {},
  data() {
    return {
      boxList: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    async fecthData() {
      const res = await this.$http.get(
        "http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=20"
      );
      this.boxList = res.data.playlists;
      // console.log(res.data);
    }
  },
  async created() {
    this.fecthData();
  },
  mounted() {}
};
</script>
<style lang="scss"  scoped>
.playlist {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 120px;
  /* justify-items: center;
  align-items: center; */
  .item {
    .item-info {
      display: flex;
      flex-direction: row;
      margin: 0;
      .title {
        flex: 1;
        font-family: "Courier New", Courier, monospace;
        font-size: 20px;
        cursor: context-menu;
      }
      .more {
        font-size: 11px;
        color: rgb(103, 131, 133);
        cursor: pointer;
        &:hover {
          color: rgb(220, 221, 228);
        }
      }
    }
    .space {
      width: 100%;
      height: 1px;
      background: rgb(39, 42, 48);
      margin-bottom: 8px;
    }
    .item-content {
      display: grid;
      place-content: center;
    }
  }
}
</style>