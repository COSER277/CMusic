<template>
  <div class="sheets">
    <div class="sheet-header">
      <div class="image">
        <img :src="playlist.coverImgUrl" />
      </div>
      <div class="sheet-info">
        <div class="infos">
          <div class="brand">歌单</div>
          <div class="sheet-name">{{playlist.name}}</div>
        </div>
        <div class="user">
          <img :src="avatarUrl" class="user-avatar" />
          <p>{{nickname}}</p>
          <div class="time">{{playlist.createTime|formateTime}} 创建</div>
          <div class="time">{{playlist.trackUpdateTime|formateTime}} 更新</div>
        </div>
        <div class="options">
          <div
            id="playall"
            style=" background-color:rgb(184, 37, 37)  ;color: rgb(243, 255, 220); "
            class="option"
          >
            <i class="iconfont icon-play-circle-fill"></i>
            <div class="descr">播放全部</div>
          </div>
          <div class="option">
            <i class="iconfont icon-codepen-circle-fill"></i>
            <div class="descr">评论({{playlist.commentCount}})</div>
          </div>
          <div class="option">
            <i class="iconfont icon-share"></i>
            <div class="descr">分享({{playlist.shareCount}})</div>
          </div>
          <div class="option">
            <i class="iconfont icon-vertical-align-botto"></i>
            <div class="descr">下载全部({{music.length}})</div>
          </div>
        </div>
        <span class="description">{{playlist.description}}</span>
      </div>
      <div class="sheet-datas">
        <div class="data">
          <div>歌曲数</div>
          <div>{{playlist.trackCount}}</div>
        </div>
        <div class="space"></div>
        <div class="data">
          <div>播放数</div>
          <div>{{playlist.playCount}}</div>
        </div>
      </div>
    </div>
    <div class="sheet-music-container">
      <MusicForm :music="music" @SetData="ShowData"></MusicForm>
    </div>
  </div>
</template>

<script>
import MusicForm from "../components/MusicForm";
import MsgTip from "../components/MsgTip";
export default {
  name: "songsheet",
  components: { MusicForm, MsgTip },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      //歌单的歌曲
      music: [
        // {
        //   id: 1,
        //   name: "离开你并不快乐",
        //   author: "虎二",
        //   ZJ: "离开你并不快乐",
        //   time: "03:53"
        // },
        // {
        //   id: 2,
        //   name: "你应该很快乐",
        //   author: "虎二",
        //   ZJ: "离开你并不快乐",
        //   time: "03:58"
        // }
      ],
      playlist: {},
      avatarUrl: "",
      nickname: ""
    };
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
    async fecthData() {
      const res = await this.$http.get(
        `http://localhost:3000/playlist/detail?id=${this.id}`
      );
      this.playlist = res.data.playlist;
      this.music = this.playlist.tracks;
      this.avatarUrl = res.data.playlist.creator.avatarUrl;
      this.nickname = this.playlist.creator.nickname;
      // console.log("", res.data);
    },
    async ShowData(val) {
      //点击播放 MusicForm 传值过来 接收函数来的
      // console.log( val);
      this.$emit("send", val); //传值给routerView==>Home）
    }
  },
  created() {
    this.fecthData();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sheets {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  height: auto;
  margin: 20px 0;
  box-sizing: border-box;
  .sheet-header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 280px;
    width: 100%;
    /* box-sizing: border-box; */
    .image {
      padding: 10px;
      img {
        width: 180px;
        height: 180px;
      }
    }
    .sheet-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10px;
      .description {
        font-size: 14px;
      }
      .infos {
        display: flex;
        flex-direction: row;
        align-items: center;
        * {
          margin: 0 8px;
        }
        .brand {
          display: grid;
          place-content: center;
          /* 垂直居中 */
          width: 32px;
          height: 16px;
          font-size: 12px;
          text-align: center;
          border: 1px solid rgb(224, 63, 64);
          color: rgb(224, 63, 64);
        }
        .sheet-name {
          font-size: 20px;
        }
      }
      .user {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 8px 0;

        .user-avatar {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 8px;
        }
        p {
          color: rgb(130, 131, 133);
          font-size: 15px;
        }
        .time {
          color: #ddd;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .options {
        display: flex;
        flex-direction: row;
        align-items: center;

        height: 50px;
        .option {
          cursor: pointer;
          width: auto;
          /* height: 100%; */
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0 5px;
          background-color: rgb(37, 39, 43);
          /* border: 1px solid rgb(130, 131, 133); */
          border-radius: 3px;
          line-height: 1.5;
          font-size: 11px;
          &:nth-child(1) {
            .iconfont {
              color: rgb(225, 226, 238);
            }
          }
          &:hover {
            background-color: rgb(44, 46, 50);
          }

          * {
            margin: 0 4px;
            color: rgb(225, 226, 238);
          }
          .iconfont {
            font-size: 18px;
            color: rgb(130, 131, 133);
          }
        }
      }
    }
    .sheet-datas {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0 16px;
      .space {
        display: block;
        width: 1px;
        height: 30px;
        /* padding: 1px 0; */
        margin: 0 5px;
        background: rgb(43, 43, 44);
      }
      .data {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 13px;
        margin: 0 3px;
        div {
          margin: 3px 0;
          text-align: center;
          color: rgb(78, 78, 82);
        }
      }
    }
  }
  .sheet-music-container {
    width: 100%;
    flex: 1;
    /* display: grid;
    grid-template-columns: 2% 7% 45% 25% 25% 7%; */
  }
}
</style>