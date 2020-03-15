<template>
  <div class="header">
    <a href="/" class="logo-box">
      <i class="iconfont icon-wangyiyunyinle1 logo"></i>
      <h1 class="logo-name">网易云音乐</h1>
    </a>
    <div class="tooks-box">
      <div class="controller-box" @click="goback()">
        <button class="icon" value>
          <i class="iconfont icon-left-circle"></i>
        </button>
        <button class="icon" value>
          <i class="iconfont icon-right-circle"></i>
        </button>
      </div>
      <div class="search-box">
        <input type="text" name id="search" placeholder="搜索音乐、视频、歌词、电台" />
        <i class="icon iconfont icon-search"></i>
      </div>
      <div style=" flex: 1;"></div>
      <div class="person-box">
        <img src="../assets/logo.jpg" class="avatar person-item" />
        <span class="username">
          CoserP
          <i class="iconfont icon-down-circle person-item"></i>
        </span>
        <span>
          <i class="iconfont icon-skin person-item"></i>
        </span>
        <span>
          <i class="iconfont icon-mail person-item"></i>
        </span>
      </div>
      <div class="space"></div>
      <div class="power-box">
        <i class="iconfont icon-minus power-item"></i>
        <i class="iconfont icon-shrink power-item"></i>
        <i class="iconfont icon-close power-item"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wraper",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    async goback(){
      this.$router.go(-1)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style  lang="scss"scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .logo-box {
    width: 180px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .logo {
      /* width: 40%; */
      font-size: 22px;
      text-align: center;
      margin-right: 8px;
    }
    .logo-name {
      flex: 1;
      font-size: 18px;
      text-align-last: left;
      font-family: "Courier New", Courier, monospace;
    }
  }
  .tooks-box {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    .controller-box {
      width: 50px;

      .icon {
        width: 25px;
        height: 20px;
        border: 0.05em solid rgb(23, 23, 25);
        border-radius: 5px 0 0 5px; //左上 左下  右下 右上
        color: rgb(93, 93, 95);
        background: none;
        &:nth-child(2) {
          border-radius: 0 5px 5px 0; //左上 左下  右下 右上
        }
        .iconfont {
          color: rgb(113, 113, 114);
        }
      }
    }
    .search-box {
      position: relative;

      #search {
        width: 200px;
        height: 18px;
        margin-left: 8px;
        background: rgb(34, 34, 37);
        color: rgb(211, 211, 226);
        border: none;
        border-radius: 10px;
        line-height: 1.2;
        font-size: 10px;
        padding: 2px 5px;
        vertical-align: top;
      }
      .icon {
        width: 20px;
        position: absolute;
        top: 10%;
        right: 0;
        color: rgb(208, 208, 221);
        vertical-align: text-bottom;
        cursor: pointer;
      }
    }

    .person-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgb(113, 113, 114);
      }
      .person-item {
        margin: 0 5px;
        color: rgb(152, 152, 153);
        cursor: pointer;
        &:hover {
          color: #ddd;
        }
      }
      .iconfont {
        font-size: 20px;
      }
    }
    .space {
      display: block;
      width: 2px;
      height: 30px;
      /* padding: 1px 0; */
      margin: 0 5px;
      background: rgb(43, 43, 44);
    }
    .power-box {
      display: flex;
      flex-direction: row;

      width: 100px;
      .power-item {
        flex: 1;
        text-align: center;
        cursor: pointer;
        color: rgb(152, 152, 153);
        &:hover {
          color: #ddd;
        }
      }
    }
  }
}
</style>