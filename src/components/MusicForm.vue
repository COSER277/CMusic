<template>
  <div class="sheet-music-container">
    <div class="form-col">
      <div class="col-item">&nbsp;&nbsp;</div>
      <div class="col-item" v-if="operational">
        <span>操作</span>
      </div>
      <div class="col-item" v-if="!operational">
        <span></span>
      </div>
      <div class="col-item">
        <span>名称</span>
      </div>
      <div class="col-item">
        <span>歌手</span>
      </div>
      <div class="col-item">
        <span>专辑</span>
      </div>
      <div class="col-item">
        <span>时长</span>
      </div>
    </div>

    <div class="form-item" v-for="(item,index) in music" :key="item.id">
      <div class="item-info">
        <span>{{index+1}}</span>
      </div>
      <div class="item-info" v-if="!operational">
        <span style="display:flex;justify-content:center;">
          <i class="iconfont icon-play-circle-fill" @click="like(item)"></i>
          <i class="iconfont icon-cloud-download" @click="download(item)"></i>
        </span>
      </div>
      <!-- 自定义显示是否可以操作 -->
      <div class="item-info" v-if="operational" @click="play(item)">
        <span style="display:flex;justify-content:center;">
          <i class="iconfont icon-play-circle-fill"></i>
        </span>
      </div>
      <div class="item-info" @click="play(item)">
        <span class="fontWhite">{{item.name}}</span>
      </div>
      <div class="item-info" @click="GoToAuthor(item)">
        <span>{{item.ar[0].name}}</span>
      </div>
      <div class="item-info">
        <span>{{item.al.name}}</span>
      </div>
      <div class="item-info">
        <span>{{item.time}}</span>
      </div>
      <MsgTip :msg="msg" :type="type" :show="show" v-if="show"></MsgTip>
    </div>
  </div>
</template>

<script>
import MsgTip from "../components/MsgTip";

export default {
  name: "MusicForm",
  components: { MsgTip },
  props: {
    music: { type: Array, default: [] },
    operational: { type: Boolean, default: true }
  },
  data() {
    return { show: false, msg: "", type: "" };
  },
  watch: {},
  computed: {},
  filters: {
    formateTime(now) {
      if (now == null) {
        return 0;
      }
      var Timer = new Date(now);
      var y = Timer.getFullYear();
      var m = Timer.getMonth() + 1;
      var d = Timer.getDay();
      var hh = Timer.getHours();
      var mm = Timer.getMinutes();
      var ss = Timer.getSeconds();
      return y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
    }
  },
  methods: {
    //下载
    async download(item) {
      this.show = !this.show;
      this.msg = "下载:" + item.name;
      this.type = "success";
    },
    //收藏
    async like(item) {
      this.show = true;
      this.msg = "喜欢:" + item.name;
      this.type = "warning";
    },
    //点击歌手
    async GoToAuthor(item) {
      this.show = true;
      this.msg = "歌手:" + item.author;
      this.type = "error";
    },
    // 点击歌曲 播放
    async play(item) {
      this.show = true;
      this.msg = "播放..." + item.name;
      this.type = "success";
      const MusicRes = await this.fecthMusic(item.id);
      const url = await this.fecthUrl(item.id);
      MusicRes.url = url;
      this.$emit("SetData", MusicRes);
    },
    async fecthUrl(id) {
      const res = await this.$http.get(
        `http://localhost:3000/song/url?id=${id}`
      );
      // this.url = res.data.data[0].url;
      return res.data.data[0].url;
    },
    async fecthMusic(ids) {
      const res = await this.$http.get(
        `http://localhost:3000/song/detail?ids=${ids}`
      );
      return res.data.songs[0];
    }
  },
  async created() {
    var MusicRes = await this.fecthMusic(item.id);
    var url = await this.fecthUrl(item.id);
    MusicRes.url = url;
    this.$emit("SetData", MusicRes);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sheet-music-container {
  width: 100%;
  flex: 1;
  /* display: grid;
    grid-template-columns: 2% 7% 45% 25% 25% 7%; */
  .form-col {
    width: 100%;
    display: grid;
    grid-template-columns: 2.5% 4.5% 35% 25% 25% auto;
    .col-item {
      border: 1px solid rgb(35, 38, 44);
      border-bottom: none;
      font-size: 13px;
      height: 25px;
      line-height: 1;
      text-align: left;
      /* display: grid;
      place-content: center; */
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        margin-left: 8px;
        color: rgb(130, 131, 133);
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
  .form-item {
    width: 100%;
    display: grid;
    grid-template-columns: 2% 5% 35% 25% 25% auto;
    line-height: 1.2;
    background: rgb(26, 28, 32);

    &:hover {
      background: rgb(35, 37, 41);
    }
    .fontWhite {
      color: rgb(220, 221, 228);
    }
    .iconfont {
      flex: 1;
      color: rgb(130, 131, 133);
      text-align: center;
      /* &:nth-child(1) {
        color: rgb(224, 63, 64);
      } */
    }
    span {
      margin: 2px 8px;
      color: rgb(130, 131, 133);
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>