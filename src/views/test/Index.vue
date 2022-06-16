<template>
  <swiper
    :modules="swiperModules"
    slides-per-view="auto"
    :space-between="24"
    :simulate-touch="false"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }"
  >
    <swiper-slide class="test">1</swiper-slide>
    <swiper-slide class="test">2</swiper-slide>
    <swiper-slide class="test">3</swiper-slide>
    <swiper-slide class="test">4</swiper-slide>
    <swiper-slide class="test">5</swiper-slide>
    <swiper-slide class="test">6</swiper-slide>
    <swiper-slide class="test">7</swiper-slide>
  </swiper>
  <button class="swiper-button-prev">上一张</button>
  <button class="swiper-button-next">下一张</button>
</template>

<script>
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  name: 'TestIndex',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      swiperModules: [Navigation, Pagination, A11y]
    }
  }
}
</script>

<style scoped>
.swiper-slide {
  height: 300px;

  line-height: 300px;

  font-size: 30px;

  text-align: center;

  background-color: pink;
}
.test {
  width: 40%;
}
</style>
