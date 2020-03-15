<template>
  <transition name="show" v-show="show">
    <div class="msg">
      <div class="msg-container">
        <div class="msg-head">
          <div class="success" v-if="type=='success'">
            <i class="iconfont icon-check-circle"></i>
          </div>
          <div class="warning" v-else-if="type=='warning'">
            <i class="iconfont icon-warning-circle"></i>
          </div>
          <div class="error" v-else>
            <i class="iconfont icon-close-circle"></i>
          </div>
        </div>
        <div class="msg-content">{{msg}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MsgTip",
  components: {},
  props: {
    msg: { type: String },
    type: {
      tyep: String,
      validator: val => ["success", "warning", "error"].includes(val)
    },
    //[ 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件},
    show: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.msg {
  width: 200px;
  height: 80px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-content: center;
  background: rgba(5, 5, 6, 0.5);
  /* transition: all 0.5s; */
  .msg-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    .msg-head {
      /* display: grid;
      place-content: center; */
      margin: 0 8px;
      .iconfont {
        font-size: 22px;
      }
    }
    .msg-content {
      flex: 1;
    }
  }

  // 定义进入前与离开后状态 // 定义离开前与进入后状态 // 定义进出过程
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.3s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}
</style>