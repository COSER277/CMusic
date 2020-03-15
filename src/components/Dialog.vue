<template>
  <div class="dialog" v-if="show">asdsa</div>
</template>

<script>
export default {
  name: "dialog",
  components: {},
  props: {
    show: { type: Boolean, default: false },
    content: { type: Object }
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
.dialog {
  width: 300px;
  height: 400px;
  background: rgb(59, 60, 63);
  display: grid;
  place-content: center;
  position: absolute;
  top: 30%;
  left: 40%;
  z-index: 100;
  box-shadow: 2px 2px 0px 0px #000;
}
</style>