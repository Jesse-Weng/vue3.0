<!-- home -->
<template>
  <div class="home">
    <zhihuHeader :day="day" :month="month" />
  </div>
</template>

<script lang="ts">
import zhihuHeader from "../components/Header.vue";
import { reactive, toRefs, computed } from "vue";
import utils from "../utils";

export default {
  components: {
    zhihuHeader,
  },

  setup() {
    const state = reactive({
      date: new Date(),
    });

    let day = computed(() => utils.formatTime(state.date)[2]);
    let month = computed(() => utils.formatTime(state.date)[1]);
    return {
      ...toRefs(state),
      day,
      month,
    };
    console.log(day);
  },
};
</script>

<style lang="scss" scoped>
.home {
  widows: 100%;
  height: 100%;
}
</style>
