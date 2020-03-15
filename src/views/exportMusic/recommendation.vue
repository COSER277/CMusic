<template>
  <!-- 个性推荐面板内容 -->
  <div class="recommendation">
    <Banner class="banner"></Banner>
    <div class="item">
      <div class="item-info">
        <h4 class="title">推荐歌单</h4>
        <span class="more">更多>></span>
      </div>
      <div class="space"></div>
      <div class="item-content">
        <div class="box-list">
          <router-link :to="'/sheet/'+box.id" class="box" v-for="box in boxList" :key="box.id">
            <img :src="box.picUrl" alt />
            <div class="box-title">{{box.name}}</div>
          </router-link>
        </div>
      </div>
      <div class="space"></div>
    </div>

    <div class="item">
      <div class="item-info">
        <h4 class="title">推荐MV</h4>
        <span class="more">更多>></span>
      </div>
      <div class="space"></div>
      <div class="item-content">
        <div class="box-list">
          <router-link :to="'/sheet/'+box.id" class="box" v-for="box in boxList" :key="box.id">
            <img :src="box.picUrl" alt />
            <div class="box-title">{{box.name}}</div>
          </router-link>
        </div>
      </div>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner";
export default {
  name: "recommendation",
  components: { Banner },
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
        "http://localhost:3000/personalized?limit=20"
      );
      this.boxList = res.data.result;
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
.recommendation {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* padding: 0 120px; */
  /* justify-items: center;
  align-items: center; */
  .banner {
    width: 100%;
    height: 250px;
    margin: 10px 0 30px 0;
  }
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
      .box-list {
        /* display: flex;
        align-items: center;
        justify-items: center; 
        flex-wrap: wrap; */
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        width: 100%;

        .box {
          width: 190px;
          /* flex: 1; */
          height: 250px;
          /* background: rgb(220, 221, 228); */
          margin: 8px 10px;
          img {
            width: 100%;
            height: 90%;
            display: block;
          }
          .box-title {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>