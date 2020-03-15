<template>
  <div class="top">
    <div class="item">
      <div class="item-title">官方榜</div>
      <div class="space"></div>
      <div class="item-content">
        <div class="box" v-for="(box,index) in List" :key="index">
          <router-link
            :to="'/sheet/'+box.id"
            class="title"
            :style="{backgroundImage:'url('+box.coverImgUrl+')'}"
          >
            <h3>{{box.name}}</h3>
            <p class="time">{{box.updateTime|formateTime}}更新</p>
          </router-link>
          <div class="box-content">
            <!-- 8个 -->
            <div class="music" v-for="(music,index) in box.tracks" :key="index">
              <div class="id" :class="{'top3':index <3}">{{index+1}}</div>
              <div class="hot">--%</div>
              <div class="name">{{music.first}}</div>
              <div class="author">{{music.second}}</div>
            </div>
          </div>
          <router-link to="/sheet/3335353" class="more">查看全部></router-link>
        </div>
        <!-- <div class="box">
          <router-link to="/sheet/3335353" class="title" style="background:rgb(55, 175, 190);">
            <h3>新歌榜</h3>
            <p class="time">02月23日更新</p>
          </router-link>

          <div class="box-content">
         
            <div class="music" v-for="(music,index) in box.music" :key="index">
              <div class="id" :class="{'top3':index <3}">{{index+1}}</div>
              <div class="hot">{{music.hot}}%</div>
              <div class="name">{{music.name}}</div>
              <div class="author">{{music.author}}</div>
            </div>
          </div>
          <router-link to="/sheet/3335353" class="more">查看全部></router-link>
        </div>
        <div class="box">
          <router-link to="/sheet/3335353" class="title" style="background:rgb(221, 76, 118);">
            <h3>原创榜</h3>
            <p class="time">02月23日更新</p>
          </router-link>

          <div class="box-content">
          
            <div class="music" v-for="(music,index) in box.music" :key="index">
              <div class="id" :class="{'top3':index <3}">{{index+1}}</div>
              <div class="hot">{{music.hot}}%</div>
              <div class="name">{{music.name}}</div>
              <div class="author">{{music.author}}</div>
            </div>
          </div>
          <router-link to="/sheet/3335353" class="more">查看全部></router-link>
        </div>-->
      </div>
    </div>

    <div class="item">
      <div class="item-title">全球榜</div>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  components: {},
  props: {},
  data() {
    return {
      box: {
        music: [
          {
            id: "1",
            hot: "105",
            name: "大眠",
            author: "小乐哥"
          },
          {
            id: "1",
            hot: "105",
            name: "大眠",
            author: "小乐哥"
          },
          {
            id: "1",
            hot: "105",
            name: "大眠",
            author: "小乐哥"
          },
          {
            id: "1",
            hot: "105",
            name: "大眠",
            author: "小乐哥"
          },
          {
            id: "1",
            hot: "105",
            name: "大眠",
            author: "小乐哥"
          },
          {
            id: "1",
            hot: "105",
            name: "大眠",
            author: "小乐哥"
          },
          {
            id: "1",
            hot: "105",
            name: "大眠",
            author: "小乐哥"
          },
          {
            id: "1",
            hot: "105",
            name: "大眠",
            author: "小乐哥"
          }
        ]
      },
      List: []
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
      return m + "月" + d + "日";
    }
  },
  methods: {
    async fecth() {
      const res = await this.$http.get("http://localhost:3000/toplist/detail");
      console.log("sss", res.data.list);
      this.List = res.data.list;
    }
  },
  created() {
    this.fecth();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.top {
  /* display: grid;
  place-content: center; */

  padding: 0 80px;
  .item {
    /* width: 100%; */
    margin-top: 5px;
    .item-title {
      margin: 10px 2px;
      margin-bottom: 4px;
    }
    .item-content {
      display: grid;
      grid-template-columns: 310px 310px 310px;
      place-content: center;
      .box {
        margin: 8px 8px;
        border: 1px solid rgb(39, 42, 48);
        min-height: 380px;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 23px;
          border-bottom: 1px solid rgb(39, 42, 48);
          min-height: 80px;
          height: 80px;
          width: 100%;
          display: flex;
          align-items: center;
          /* background:url(http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg); */
          cursor: pointer;
          h3 {
            margin: 0 8px;
            vertical-align: bottom;
            font-size: 20px;
          }
          p {
            display: inline-block;
            font-size: 1px;
            font-family: Arial, Helvetica, sans-serif;
          }
          /* text-align: left; */
        }

        .box-content {
          flex: 1;
          border-bottom: 1px solid rgb(39, 42, 48);
          box-sizing: border-box;
          .music {
            max-height: 34.375px;
            height: 34.375px;
            /* display: grid;
            grid-template-columns: 20px 30px auto auto;
            grid-auto-flow: row; */
            display: flex;
            align-items: center;
            font-size: 1px;
            border-bottom: 1px solid rgb(62, 63, 63);
            .top3 {
              color: rgb(184, 31, 29);
            }
            .id {
              width: 20px;
              text-align: center;
            }
            .hot {
              width: 30px;
              color: rgb(95, 95, 99);
              font-size: 1px;
            }
            .name {
              width: 200px;
              font-family: Arial, Helvetica, sans-serif;
            }
            .author {
              margin-right: 4px;
              overflow: hidden;
              color: rgb(95, 95, 99);
            }
          }
        }
        .more {
          font-size: 2px;
          /* border-top: 1px solid rgb(39, 42, 48); */
          min-height: 20px;
          position: relative;
          bottom: 0;
          left: 0;
          text-align: right;
          margin: 2px 8px;
          color: rgb(95, 95, 99);
          font-family: Arial, Helvetica, sans-serif;

          &:hover {
            cursor: pointer;
            color: rgb(130, 131, 133);
          }
        }
      }
    }
  }

  .space {
    width: 100%;
    height: 1px;
    background: rgb(39, 42, 48);
    margin-bottom: 8px;
  }
}
</style>