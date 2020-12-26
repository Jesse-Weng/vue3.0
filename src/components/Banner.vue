<!-- banner -->
<template>
  <div class="swipe-content">
    <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item
        class="van-swipe-item"
        v-for="(item, index) in bannerData"
        :key="index"
      >
        <img :src="item.img" />
        <h5 style="position: absolute; bottom: 2rem; left: 2rem">
          {{ item.title }}
        </h5>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
.swipe-content {
  margin-top: 6rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1rem;
  line-height: 6rem;
  text-align: center;
  background-color: #fff;
  img {
    width: 100%;
    height: 30rem;
  }
}
</style>
