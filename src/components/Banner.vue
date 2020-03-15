<template>
  <div class="banner-wrapper">
    <div class="pre">
      <i class="iconfont icon-left-circle-fill"></i>
    </div>
    <div class="item-box">
      <div class="list">
        <img src="../assets/banner.jpg" class="item" />
      </div>
      <div class="point-box"></div>
    </div>

    <div class="next">
      <i class="iconfont icon-left-circle-fill"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss"  scoped>
.banner-wrapper {
  width: 100%;
  height: 100%;
  /* display: grid;
  place-content: center; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .pre {
    display: inline-block;
    content: "<";
    width: 20px;
    height: 20px;
    position: relative;
    left: 20px;
    text-align: center;
    &:hover {
      background: rgba(162, 164, 166, 0.4);
      cursor: pointer;
    }
  }

  .item-box {
    height: 100%;
    .point-box {
      display: inline-block;
      position: relative;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 4px;
      background: rgb(127, 128, 130);
      text-align: center;
    }
    .list {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      img {
        width: 100%;
        height: 250px;
      }
    }
  }
  .next {
    display: inline-block;
    content: ">";
    width: 20px;
    height: 20px;
    position: relative;
    right: 20px;
    text-align: center;
    &:hover {
      background: rgba(162, 164, 166, 0.4);
      cursor: pointer;
    }
  }
}
</style>