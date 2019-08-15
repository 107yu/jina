<template>
  <div class="wrap">
    <section class="imgtitle">
      <img src alt />
      <p class="activity">
        <span>正在疯抢</span>
        <span>明日11:00</span>
      </p>
      <div class="flash">本场还剩 03 :28：39</div>
    </section>
    <div class="commodity">
      <ul class="commodity_list">
        <commodityItem />
      </ul>
    </div>
  </div>
</template>
<script>
import commodityItem from "@/components/commodityitem";
export default {
  props: {},
  components: {
    commodityItem
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "./scss/index.scss";
</style>