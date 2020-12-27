<!--  -->
<template>
  <div class="home">
    <zhihu-header :day="day" :month="month" />
    <zhihu-banner :bannerData="bannerData" />
  </div>
</template>

<script lang="ts">
import zhihuHeader from "../components/Header.vue";
import zhihuBanner from "/@/components/Banner.vue";
import { reactive, toRefs, computed, onBeforeMount } from "vue";
import { getBannerList } from "../api/index";
import utils from "../utils";

export default {
  components: {
    zhihuHeader,
    zhihuBanner,
  },

  setup() {
    const state = reactive({
      date: new Date(),
      bannerData: [],
    });

    let day = computed(() => utils.formatTime(state.date)[2]);
    let month = computed(() => utils.formatTime(state.date)[1]);

    const getBannerData = async () => {
      const res = await getBannerList();
      state.bannerData = res.data.data;
      console.log(state.bannerData);
    };

    onBeforeMount(() => {
      getBannerData();
    });

    return {
      ...toRefs(state),
      day,
      month,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  widows: 100%;
  height: 100%;
}
</style>
