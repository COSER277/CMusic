<template>
  <div class="box-list">
    <router-link :to="'/sheet/'+box.id" class="box" v-for="box in boxlist" :key="box.id">
      <img :src="box.coverImgUrl" alt />
      <div class="box-title">{{box.name}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "boxlist",
  components: {},
  props: {
    boxlist: { type: Array, default: [] }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    // console.log("aaaaa", this.boxlist);
  },
  mounted() {}
};
</script>
<style lang="scss"  scoped>
.box-list {
  display: flex;
  align-items: center;
  justify-items: center;
  /* width: 300px; */
  flex-wrap: wrap;

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
</style>