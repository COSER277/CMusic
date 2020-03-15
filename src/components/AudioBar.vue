<template>
  <div class="audio">
    <div class="music-box">
      <img :src="picUrl?picUrl:defaultMusic.pic" id="image " alt />
      <div class="music-info">
        <span class="music-name">{{MusicRes?MusicRes.name:defaultMusic.name}}</span>
        <span class="music-author">{{MusicRes?MusicRes.ar[0].name:defaultMusic.ar[0].name}}</span>
      </div>
      <div class="music-options">
        <div>
          <i class="iconfont icon-heart-fill like"></i>
        </div>
        <div>
          <i class="share iconfont icon-share"></i>
        </div>
      </div>
    </div>
    <div class="controll-box">
      <div class="controll-item" @click="pre()">
        <i class="iconfont icon-fast-backward"></i>
      </div>
      <div class="controll-item" @click="startPlayOrPause()">
        <i class="play iconfont icon-play-circle-fill" v-if="!audio.playing"></i>
        <i class="play iconfont icon-timeout" v-if="audio.playing"></i>
      </div>
      <div class="controll-item" @click="next()">
        <i class="iconfont icon-fast-forward"></i>
      </div>
      <audio
        ref="audio"
        :src="MusicRes?MusicRes.url:defaultMusic.url"
        autoplay
        @pause="onPause"
        @play="onPlay"
        @volumechange="volumechange"
        @timeupdate="durationchange"
        volume="volume"
      ></audio>
    </div>
    <!-- 进度条 -->
    <div class="process-box">
      <div class="active-time">{{currentTime|formateTime}}</div>
      <div class="process-controller">
        <!-- 点 -->
        <div class="spot" ref="spot"></div>
        <!-- 已播放进度 -->
        <div class="active-process" ref="activeProcess"></div>
        <!-- 未播放进度 -->
        <div class="surplus-process"></div>
      </div>
      <div class="total-time">{{MusicRes?time(MusicRes.dt):(time(defaultMusic.dt))}}</div>
    </div>
    <!-- 音量 音效等 -->
    <div class="settings-box">
      <div class="volume">
        <i class="iconfont icon-sound-fill"></i>
        <div class="volume-number">{{volume }}</div>
      </div>
      <div class="playForm">
        <i class="iconfont icon-swap"></i>
      </div>
      <div class="quality">高清</div>
      <div class="effects">
        <i class="iconfont icon-customerservice"></i>
      </div>
      <div class="words">
        <i class="iconfont">词</i>
      </div>
      <div class="play-list">
        <i class="iconfont icon-unorderedlist"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "audioBar",
  data() {
    return {
      // music: { id: "" },
      audio: {
        // 该字段是音频是否处于播放状态的属性
        playing: false
      },
      volume: null, //音量（0.0~1.0之间的值）调整音量大小
      currentTime: null,
      // duration: null,
      picUrl: "",
      defaultMusic: {
        pic: "",
        url: ""
      }
    };
  },
  props: {
    MusicRes: { type: Object }
  },
  filters: {
    formateTime(second) {
      var str;
      var m = 0;
      if (second > 60) {
        str = "0" + m / 60 + ":" + Math.ceil(second % 60);
      } else {
        str = "0" + m + ":" + Math.ceil(second % 60);
      }
      return str;
    }
  },
  methods: {
    //
    time(s) {
      s = s / 1000;
      var minutes = Math.floor(((s % 86400) % 3600) / 60);
      var seconds = Math.floor(((s % 86400) % 3600) % 60);
      return "0" + minutes + ":" + seconds;
    },
    // 控制音频的播放与暂停
    startPlayOrPause() {
      return this.audio.playing ? this.pause() : this.play();
    },
    // 播放音频
    async play() {
      await this.$refs.audio.play();
      // this.fecthUrl(this.MusicRes.id);
      // this.fecthMusic(this.MusicRes.id);
    },
    // 暂停音频
    pause() {
      this.$refs.audio.pause();
    },
    // 当音频播放
    onPlay() {
      this.audio.playing = true;
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false;
    },
    //改变声音
    volumechange() {
      this.volume = this.$refs.audio.volume;
      // console.log(this.$refs.audio.currentTime, this.$refs.audio.volume);
    },
    durationchange() {
      this.$refs["spot"].style.left = this.$refs.audio.currentTime * 3 + "px";
      this.$refs["activeProcess"].style.width =
        this.$refs.audio.currentTime * 3 + "px";
      this.currentTime = this.$refs.audio.currentTime;
      // console.log(this.$refs.audio.currentTime, this.$refs["spot"].style.left);
    },
    async fecthUrl() {
      const res = await this.$http.get(
        `http://localhost:3000/song/url?id=1413142894`
      );
      this.defaultMusic.url = res.data.data[0].url;
      // return res.data.data[0].url;
    },
    async fecthMusic() {
      const res = await this.$http.get(
        `http://localhost:3000/song/detail?ids=1413142894`
      );
      this.defaultMusic = res.data.songs[0];
      console.log(this.defaultMusic);
      this.defaultMusic.pic = this.defaultMusic.al.picUrl;
    }
  },

  watch: {
    MusicRes: function(val) {
      //  if(val.name!=this.MusicRes.name){
      //    this.onPause()
      //    this.startPlayOrPause()
      //  }
      this.picUrl = this.MusicRes.al.picUrl;
      this.startPlayOrPause();
    }
  },
  computed: {},
  created() {
    this.fecthMusic();
    this.fecthUrl();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.audio {
  display: flex;
  flex-direction: row;
  align-items: center;
  .music-box {
    max-width: 200px;
    max-height: 50px;
    display: flex;
    flex-direction: row;
    position: absolute;

    left: -4px;
    top: -58px;
    border-top: 1px solid rgb(35, 38, 44);
    cursor: pointer;
    img {
      width: 50px;
      height: 100%;
      padding: 2px 6px 2px 6px; //上右下左
    }
    .music-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 4px;
      .music-name {
        color: rgb(220, 221, 228);
        font-size: 12px;
        overflow: hidden;
        &:hover {
          color: rgb(220, 221, 228);
        }
      }
      .music-author {
        color: rgb(89, 102, 79);
        font-size: 12px;
        &:hover {
          color: rgb(220, 221, 228);
        }
      }
    }
    .music-options {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5px;
      .iconfont {
        flex: 1;
        color: rgb(110, 111, 113);
      }
      .like {
        color: rgb(205, 41, 41);
        margin-bottom: 2px;
      }
      .share {
        &:hover {
          color: rgb(220, 221, 228);
        }
      }
    }
  }
  .controll-box {
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .controll-item {
      flex: 1;
      height: 100%;
      text-align: center;
      margin: 0 auto;
      position: relative;
      top: 0;
      left: 0;
      transform: translateY(12.5px);
      .iconfont {
        font-size: 26px;
        border: 1px solid rgb(99, 99, 101);
        border-radius: 50%;
      }
      .play {
        border: none;
      }
    }
  }
  .process-box {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 8px;
    font-size: 14px;
    .active-time {
      display: block;
      /* max-width: 20px;*/
      width: 30px;
    }
    .process-controller {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      min-width: 1000px;
      max-width: 1128px;
      height: 4px;
      /* background: rgb(69, 69, 70); */
      background: rgb(69, 69, 70);
      margin: 0 8px;
      .spot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgb(220, 221, 228);
        position: relative;
        top: 0px;
        left: 0px;
        /* vertical-align: bottom; */
      }
      .active-process {
        min-width: 0px;
        height: 4px;
        background: rgb(184, 37, 37);
        position: relative;
        top: 0px;
        left: -12px;
      }
    }
    .total-time {
    }
  }
  .settings-box {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
    * {
      display: block;
      flex: 1;
      text-align: center;
      cursor: pointer;
      color: rgb(110, 111, 113);
      font-size: 20px;
      /* vertical-align: text-top; */
      &:hover {
        color: rgb(220, 221, 228);
      }
    }
    .quality {
      font-size: 14px;
    }
    .words {
      .iconfont {
        font-size: 15px;
      }
    }
  }
}
</style>
