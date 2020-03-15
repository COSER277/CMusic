<template>
  <!-- 发现音乐页面 -->
  <div class="home">
    <div id="nav">
      <Nav></Nav>
    </div>
    <div id="main">
      <router-view @send="show" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/Nav";

export default {
  name: "home",
  components: { Nav },
  methods: {
    async show(val) {
      //接收 从点击播放 routerview 传值过来的值
      // console.log( val);
      this.$emit("data", val); //传值给App.vue
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items:center;
  #nav { 
    position: relative;
    top: 0;
    left: 0;
    width: 200px;
    display:block;
    background: #191a20;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  #main {
   flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* overflow-y: scroll; */
    /* margin: 0 0px 0 200px;  */
    //up right down left
  }
}
</style>
