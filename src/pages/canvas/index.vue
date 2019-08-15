<template>
  <div class="wrap">
    <canvas style="width: 320px; height: 520px;" canvas-id="canvas"></canvas>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
const userInfo = {
    avatar: 'https://avatars2.githubusercontent.com/u/8192412?s=40&v=4',
    name: '积纳有品小程序'
  }
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    // ...mapState({
    //   current: state => state.login.current,
    //   countDown: state => state.login.countDown
    // })
  },
  methods: {
    // ...mapMutations({
    //   tabNav: "recommend/tabNav",
    //   sortTabs: "recommend/sortTabs",
    //   updatepull: "recommend/updatepull"
    // }),
    ...mapActions({
      getAuthData: "login/getAuthData"
    })
  },
  created() {},
  mounted() {
    var context = wx.createCanvasContext("canvas");
    context.rect(0, 0, 320, 520);
    context.drawImage(userInfo.avatar, 0, 0, 40, 40, 20, 12, 40, 40);
    context.drawImage(userInfo.name, 0, 0, 40, 40, 20, 12, 40, 40);
    context.save();

     context.draw();
  }
};
</script>
<style scoped lang="scss">
.wrap {
  canvas {
    width: 100%;
    border: 1px solid #000;
  }
}
</style>