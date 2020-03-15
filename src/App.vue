<template>
  <div id="app">
    <div id="header">
      <Header></Header>
    </div>
    <div class="content">
      <router-view @data="show"></router-view>
    </div>
    <div id="audio">
      <audioBar :MusicRes="data"></audioBar>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import audioBar from "./components/AudioBar";

export default {
  components: { Header, audioBar },
  data() {
    return {
      data: null
    };
  },
  props: {},
  methods: {
    async show(val) {
      // console.log(val);
      this.data = val;
    }
  },

  computed: {},
  created() {
    // this.ShowData();
  }
};
</script>
<style lang="scss" >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  color: #2c3e50;
  /* background: #222428; */
  box-sizing: border-box;
  width: 100%;
  #header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #333336;
    border-bottom: 2px solid rgb(167, 30, 30);
    z-index: 100;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    min-width:800px;
    min-height: 70vh;
    padding: 50px 0;
    oversize:hidden;
    
    /* box-sizing: border-box; */
  }

  #audio {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #333336;
    /* border-top: 2px solid rgb(167, 30, 30); */
  }
}
</style>
