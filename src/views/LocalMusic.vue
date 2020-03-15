<template>
  <!-- 本地音乐页面 -->
  <div class="local">
    <div class="infos">
      <div class="page-info">
        <h3>本地音乐</h3>
        <span>共 {{music.length}} 首</span>
      </div>
      <div class="list-order">
        <span @click="select()">选择目录</span>
        <div class="funs">
          <div class="item">
            <i class="iconfont icon-unorderedlist"></i>
          </div>|
          <div class="item">
            <i class="iconfont icon-user"></i>
          </div>|
          <div class="item">
            <i class="iconfont icon-fire-fill"></i>
          </div>|
          <div class="item">
            <i class="iconfont icon-customerservice"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="page-functions">
      <div
        id="playall"
        style=" background-color:rgb(184, 37, 37)  ;color: rgb(243, 255, 220); "
        class="option"
      >
        <i class="iconfont icon-play-circle-fill"></i>
        <div class="descr">播放全部</div>
      </div>
      <div
        id="findall"
        style=" background-color:rgb(38, 39, 43)  ;color: rgb(243, 255, 220); "
        class="option"
      >
        <i class="iconfont icon-redo"></i>
        <div class="descr">匹配目录</div>
      </div>
      <div
        id="search"
        style=" background-color:rgb(38, 39, 43)  ;color: rgb(243, 255, 220); "
        class="option"
      >
        <div class="search-box">
          <input type="text" name id="search" placeholder="搜索音乐、视频、歌词、电台" />
          <i class="icon iconfont icon-search"></i>
        </div>
      </div>
    </div>
    <Dialog :show="dialogShow"></Dialog>
    <MusicForm :music="music" :operational="false"></MusicForm>
  </div>
</template>

<script>
import MusicForm from "../components/MusicForm";
import Dialog from "../components/Dialog";
export default {
  name: "local",
  components: { MusicForm, Dialog },
  props: {},
  data() {
    return {
      dialogShow: false,
      music: [
        {
          id: 1,
          name: "离开你并不快乐",
          author: "虎二",
          ZJ: "离开你并不快乐",
          time: "03:53"
        },
        {
          id: 2,
          name: "你应该很快乐",
          author: "虎二",
          ZJ: "离开你并不快乐",
          time: "03:58"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    async select() {
      this.dialogShow = !this.dialogShow;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.local {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  .infos {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* align-items: baseline; */
    border-bottom: 1px solid rgb(35, 38, 44);
    height: 20px;
    padding: 20px 0;
    .page-info {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      height: 100%;
      h3 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        margin-left: 20px;
      }
      span {
        margin-left: 8px;
        color: rgb(130, 131, 133);
        font-size: 13px;
        /* vertical-align: text-bottom; */
      }
    }
    .list-order {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      height: 100%;
      margin-right: 15px;
      span {
        cursor: pointer;
        font-size: 14px;
        margin-right: 8px;
        font-size: 13px;
        color: rgb(31, 94, 176);
      }
      .funs {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid rgb(130, 131, 133);
        border-radius: 5px;
        width: 100px;
        .item {
          flex: 1;
          width: 20px;
          display: grid;
          place-content: center;
          cursor: pointer;
        }
      }
    }
  }
  .page-functions {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgb(130, 131, 133);
    .option {
      cursor: pointer;
      width: 80px;
      /* height: 100%; */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
      background-color: rgb(37, 39, 43);
      /* border: 1px solid rgb(130, 131, 133); */
      border-radius: 3px;
      line-height: 1.5;
      font-size: 11px;
      .iconfont {
        margin-right: 5px;
      }
      .search-box {
        position: absolute;
        right: 0;
        margin-right: 15px;
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
    }
  }
}
</style>