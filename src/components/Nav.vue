<template>
  <div class="nav">
    <div class="group">
      <span class="group-title">推荐</span>
      <div class="list">
        <router-link to="/explor" class="item">
          <i class="icon iconfont icon-fire-fill"></i>
          <span class="item-name">发现音乐</span>
        </router-link>
        <router-link to class="item">
          <i class="icon iconfont icon-xinhao"></i>
          <span class="item-name">私人FM</span>
        </router-link>
        <router-link to class="item">
          <i class="icon iconfont icon-videocameraadd"></i>
          <span class="item-name">LOOK直播</span>
        </router-link>
        <router-link to class="item">
          <i class="icon iconfont icon-Youtube"></i>
          <span class="item-name">视频</span>
        </router-link>
        <router-link to class="item">
          <i class="icon iconfont icon-team"></i>
          <span class="item-name">朋友</span>
        </router-link>
      </div>
    </div>
    <div class="group">
      <span class="group-title">我的音乐</span>
      <div class="list">
        <router-link to="/local" class="item">
          <i class="icon iconfont icon-folder-fill"></i>
          <span class="item-name">本地音乐</span>
        </router-link>
        <router-link to="/download" class="item">
          <i class="icon iconfont icon-cloud-download"></i>
          <span class="item-name">下载管理</span>
        </router-link>
        <router-link to="/" class="item">
          <i class="icon iconfont icon-cloud-fill"></i>
          <span class="item-name">我的音乐云盘</span>
        </router-link>
        <router-link to="/" class="item">
          <i class="icon iconfont icon-user"></i>
          <span class="item-name">我的收藏</span>
        </router-link>
      </div>
    </div>

    <div class="group">
      <span class="group-title">
        创建的歌单
        <i class="add-control icon iconfont icon-plus-circle-fill" @click="add"></i>
      </span>

      <div class="list">
        <router-link :to="item.url" class="item" v-for="(item,index) in gedan" :key="index">
          <i :class="'icon iconfont '+item.icon"></i>
          <span class="item-name">{{item.name}}</span>
        </router-link>
      </div>
    </div>
    <div class="add-form" v-show="form_show">
      <i class="icon iconfont icon-customerservice"></i>
      <input type="text" name id="name" v-model="n.name" placeholder="歌单名称" />
      <i class="icon iconfont icon-check-circle add" @click="save" v-if="n.name"></i>
      <i class="icon iconfont icon-close-circle-fill add" v-else @click="form_show=false"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  components: {},
  props: {},
  data() {
    return {
      gedan: [
        {
          name: "我喜欢的音乐",
          icon: "icon-heart-fill",
          url: "/sheet/312966787"
        }
      ],
      form_show: false,
      n: {
        name: "",
        icon: "icon-customerservice",
        url: "/sheet"
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      this.form_show = true;
    },
    async save() {
      await this.gedan.push(this.n);
      this.n = {
        name: "",
        icon: "icon-customerservice",
        url: ""
      };
      this.form_show = false;
      // console.log(this.gedan);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  /* overflow-y: scroll; */
  &::-webkit-scrollbar {
    display: none;
  }
  .group {
    margin: 0 5px 0;

    .group-title {
      margin: 0 8px;
      color: rgb(124, 124, 124);
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      .add-control {
        color: rgb(128, 129, 138);
        background: rgb(59, 60, 64);
        border: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        text-align: center;
        float: right;
        margin-right: 8px;
        cursor: pointer;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      .item {
        display: block;
        margin: 5px 18px;
        color: rgb(184, 184, 189);
        &:hover {
          color: #fff;
        }
        &::before {
          content: "";
          width: 2px;
          height: 100%;
          background: rgb(167, 30, 30);
        }
        .item-name {
          color: rgb(173, 175, 178);
          font-size: 12px;
        }
        .icon {
          margin-right: 8px;
          color: rgb(220, 221, 227);
        }
      }
    }
  }
}
.add-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0%;
  left: 20px;

  font-size: 12px;

  padding: 2px;

  text-align: center;
  .icon {
    color: #ddd;
    margin-right: 10px;
  }
  .add {
    flex: 1;
    cursor: pointer;
  }
  #name {
    width: 100px;
    background: none;
    border: none;
    color: #fff;
  }
}
</style>