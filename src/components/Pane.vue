<template>
  <div class="pane">
    <div class="nav-list">
      <div class="nav" v-for="(item,index) in navs" :key="index" @click="change(index)">
        <div class="title" :class="{actived:(active==index)}">{{item.title}}</div>
      </div>
    </div>
    <div class="body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "pane",
  components: {},
  props: {
    //选中标签
    activeNav: {
      type: Number,
      default: 0
    },
    navs: {
      type: Array,
      required: true
    }
  },
  data() {
    return { active: 3 };
  },
  watch: {},
  computed: {},
  methods: {
    async change(index) {
      this.$emit("selectPanel", index);
      this.active = index;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.pane {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  /* height: 100%; */
  width: 100%;
  .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid rgb(91, 91, 92);
    padding: 0 200px;
    .nav {
      display: grid;
      place-content: center;
      flex: 1;
      /* line-height: 1.5; */
      width: 100%;
      cursor: pointer;
      /* height: 100%; */
      .title {
        text-align: center;
        color: rgb(130, 131, 133);
        &:hover {
          color: rgb(231, 231, 231);
        }
        &.actived {
          color: rgb(231, 231, 231);
          transition: all 0.2s;
          /* border-bottom: 1px solid rgb(91, 91, 92); */
        }
      }
    }
  }

  .body {
    width: 100%;
  }
}
</style>