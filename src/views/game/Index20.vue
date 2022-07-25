<template>
  <section class="main">
    <section class="banner-box">
      <div class="box-background">
        <video
          v-if="bannerInfo.material_list.material.type === 'video'"
          preload="auto"
          loop
          playsinline
          autoplay
          tabindex="-1"
          muted="muted"
          :poster="bannerInfo.material_list.material.poster"
          :src="bannerInfo.material_list.material.url"
        ></video>
        <img
          :src="bannerInfo.material_list.material.url"
          v-else-if="bannerInfo.material_list.material.type === 'image'"
        />
      </div>
      <div class="box-section" v-html="bannerInfo.html"></div>
    </section>
    <section class="rangers-box clearfix">
      <div class="ranger-left">
        <img
          :src="rangersInfo[1].material_list.material.url"
          alt=""
          v-if="rangersInfo[1].material_list.material.url"
        />
      </div>
      <div class="ranger-right">
        <img
          :src="rangersInfo[2].material_list.material.url"
          alt=""
          v-if="rangersInfo[2].material_list.material.url"
        />
      </div>
      <div class="ranger-info">
        <div class="text">{{ rangersInfo[0].introduction }}</div>
        <div class="title">{{ rangersInfo[0].name }}</div>
        <div class="desc">{{ rangersInfo[0].html }}</div>
      </div>
    </section>
    <section class="battlefield-box">
      <div
        class="img-box"
        :style="`background-image: url(${funInfo[0].material_list.material_pc.url}) `"
      ></div>
      <div class="mob-img-box">
        <swiper
          :modules="swiperModules"
          :pagination="{
            el: '.game-1-skip-list',
            clickable: true,
            renderBullet
          }"
          :slides-per-view="1"
          :initial-slide="1"
          :centered-slides="true"
          :parallax="true"
        >
          <div
            class="parallax-bg"
            data-swiper-parallax="-50%"
            :style="`background-image: url(${
              funInfo[0].material_list.material_mob.url
                ? funInfo[0].material_list.material_mob.url
                : funInfo[0].material_list.material_pc.url
            })`"
          ></div>
          <swiper-slide class="slide"></swiper-slide>
          <swiper-slide class="slide"></swiper-slide>
          <swiper-slide class="slide"></swiper-slide>
        </swiper>
        <div class="game-1-skip-list"></div>
      </div>
      <div class="battlefield-info">
        <div class="title">{{ funInfo[0].name }}</div>
        <div class="desc">{{ funInfo[0].introduction }}</div>
      </div>
    </section>
    <section class="video-list-box clear">
      <template v-for="(v, i) in funInfo">
        <div class="video-box" v-if="i > 0" :key="i">
          <div class="video">
            <img :src="v.material_list.material.url" alt="" />
          </div>
          <div class="video-info">
            <div class="title">{{ v.name }}</div>
            <div class="desc">{{ v.introduction }}</div>
          </div>
        </div>
      </template>
    </section>
    <!-- <section class="battlepass-box">
      <img src="@/assets/images/game-1-battlepass-top.png" alt="" />
      <img src="@/assets/images/game-1-battlepass-bottom.png" alt="" />
      <div class="battlepass-info">
        <div class="title">Seasons & Battlepass</div>
        <div class="desc">Season system descriptions</div>
      </div>
    </section> -->
  </section>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import $ from 'jquery'
import { Navigation, Pagination, A11y, Autoplay, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { onCheckMaterial } from '@/utils/index.js'
import { getBlockInfoApi } from '@/api/block/index'

export default defineComponent({
  name: 'GameIndex',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const isWap = ref(false)
    const id = 20
    const bannerInfo = ref({
      html: '',
      material_list: {
        material: { type: '', url: '', poster: '' },
        material_pc: { type: '', url: '', poster: '' },
        material_mob: { type: '', url: '', poster: '' }
      }
    })
    const rangersInfo = ref([
      {
        name: '',
        introduction: '',
        html: '',
        material_list: {
          material: { type: '', url: '', poster: '' },
          material_pc: { type: '', url: '', poster: '' },
          material_mob: { type: '', url: '', poster: '' }
        }
      },
      {
        material_list: {
          material: { type: '', url: '', poster: '' },
          material_pc: { type: '', url: '', poster: '' },
          material_mob: { type: '', url: '', poster: '' }
        }
      },
      {
        material_list: {
          material: { type: '', url: '', poster: '' },
          material_pc: { type: '', url: '', poster: '' },
          material_mob: { type: '', url: '', poster: '' }
        }
      }
    ])
    const funInfo = ref([
      {
        name: '',
        introduction: '',
        material_list: {
          material: { type: '', url: '', poster: '' },
          material_pc: { type: '', url: '', poster: '' },
          material_mob: { type: '', url: '', poster: '' }
        }
      }
    ])
    const scrollFun = () => {
      if (window.scrollY > $('.banner-box').height() - $('header').height()) {
        $('header').addClass('bg')
      } else {
        $('header').removeClass('bg')
      }
    }
    onUnmounted(() => {
      document.removeEventListener('scroll', scrollFun, false)
    })
    onMounted(async () => {
      document.addEventListener('scroll', scrollFun, false)
      $('header,.main,footer').show()

      function checkFontSize() {
        const oldIsWap = isWap.value
        isWap.value = !($(window).width() > 960)
        if (isWap.value !== oldIsWap) {
          if (isWap.value) {
            bannerInfo.value.material_list.material = bannerInfo.value.material_list.material_mob
              .url
              ? bannerInfo.value.material_list.material_mob
              : bannerInfo.value.material_list.material_pc
          } else {
            bannerInfo.value.material_list.material = bannerInfo.value.material_list.material_pc
          }
          console.log('----------')
          console.log(bannerInfo)
        }
      }
      $(document).ready(checkFontSize)
      $(window).resize(checkFontSize)

      const bannerRes = await getBlockInfoApi('gameBanner', id)
      if (bannerRes.code === 200) {
        bannerInfo.value = []
        if (bannerRes.data[0]) {
          bannerInfo.value = {
            html: bannerRes.data[0].html,
            material_list: onCheckMaterial(
              bannerRes.data[0].material,
              bannerRes.data[0].material_mob
            )
          }
          if (bannerRes.data[1]) {
            const poster = onCheckMaterial(
              bannerRes.data[1].material,
              bannerRes.data[1].material_mob
            )
            console.log(poster)
            console.log(poster.material_pc)
            if (bannerInfo.value.material_list.material_pc.type === 'video') {
              bannerInfo.value.material_list.material_pc.poster = poster.material_pc.url
            }
            if (bannerInfo.value.material_list.material_mob.type === 'video') {
              bannerInfo.value.material_list.material_mob.poster = poster.material_mob.url
                ? poster.material_mob.url
                : poster.material_pc.url
            }
            bannerInfo.value.material_list.material.poster =
              bannerInfo.value.material_list.material.url ===
              bannerInfo.value.material_list.material_pc.url
                ? bannerInfo.value.material_list.material_pc.poster
                : bannerInfo.value.material_list.material_mob.poster
          }
        }
      }

      const rangersRes = await getBlockInfoApi('gameRangers', id)
      if (rangersRes.code === 200) {
        rangersInfo.value = []
        rangersRes.data.forEach((v) => {
          rangersInfo.value.push({
            name: v.name,
            html: v.html,
            introduction: v.introduction,
            material_list: onCheckMaterial(v.material, v.material_mob)
          })
        })
      }

      const funRes = await getBlockInfoApi('gameFun', id)
      if (funRes.code === 200) {
        funInfo.value = []
        funRes.data.forEach((v) => {
          funInfo.value.push({
            name: v.name,
            introduction: v.introduction,
            material_list: onCheckMaterial(v.material, v.material_mob)
          })
        })
      }
    })
    const renderBullet = (index, className) => {
      return `<div class="${className}"></div>`
    }
    return {
      id,
      bannerInfo,
      rangersInfo,
      funInfo,
      renderBullet,
      swiperModules: [Navigation, Pagination, A11y, Autoplay, Parallax]
    }
  }
})
</script>
<style lang="less" scoped>
.banner-box {
  position: relative;
  width: 100%;
  height: 71.8rem;
  text-align: center;
  .box-background {
    video,
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  /deep/.box-section {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .img {
      margin-top: 17.8rem;
      height: 36rem;
    }
    button {
      font-family: Montserrat;
      display: block;
      width: 26rem;
      height: 5.4rem;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 0.4rem;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2rem;
      text-align: center;
      text-transform: uppercase;
      color: #000000;
      margin: 3.6rem auto 0;
      outline: none;
      border: none;
    }
  }
}
.rangers-box {
  position: relative;
  width: 100%;
  height: 50vw;
  .ranger-left {
    width: 50%;
    height: 50vw;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ranger-right {
    width: 50%;
    height: 50vw;
    float: left;
    background: #c4c4c4;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ranger-info {
    position: absolute;
    bottom: 6.4rem;
    left: 50%;
    margin-left: -25.65rem;
    width: 51.3rem;
    background: rgba(0, 0, 0, 0.8);
    padding: 3.6rem 4.8rem;
    .text {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.7rem;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
    .title {
      font-family: Teko;
      font-weight: 400;
      font-size: 6.4rem;
      line-height: 9.2rem;
      text-align: center;
      text-transform: uppercase;
      color: #ccff00;
      margin-top: -0.9rem;
      margin-bottom: -1.2rem;
    }
    .desc {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.4rem;
      text-align: center;
      color: #ffffff;
    }
  }
}
.battlefield-box {
  position: relative;
  width: 100%;
  height: 90rem;

  .img-box {
    width: 100%;
    height: 90rem;
    background-size: cover;
    background-position: center;
  }
  .mob-img-box {
    display: none;
  }
  .battlefield-info {
    position: absolute;
    left: 50%;
    margin-left: -30rem;
    bottom: 4.8rem;
    width: 60rem;
    background: rgba(0, 0, 0, 0.8);
    padding: 3.6rem 4.8rem 4.8rem 4.8rem;
    .title {
      font-family: Teko;
      font-weight: 400;
      font-size: 4.8rem;
      line-height: 6.9rem;
      text-transform: uppercase;
      color: #ccff00;
    }
    .desc {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: #ffffff;
    }
  }
}
.video-list-box {
  width: 100%;
  height: 33.33vw;
  background: #fff;
  .video-box {
    float: left;
    position: relative;
    width: 33.33%;
    height: 33.33vw;
    background: rgba(42, 42, 42, 0.5);
    .video {
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .video-info {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 0 3.6rem 5.6rem;
      .title {
        font-family: Teko;
        font-weight: 400;
        font-size: 4.8rem;
        line-height: 6.9rem;
        text-transform: uppercase;
        color: #ccff00;
        margin-bottom: -0.9rem;
      }
      .desc {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: #ffffff;
      }
    }
  }
}
.battlepass-box {
  position: relative;
  width: 100%;
  height: 60rem;
  background: #c4c4c4;

  img {
    width: calc(100% - 2.4rem);
    height: 0.8rem;
    &:first-child {
      position: absolute;
      top: 1.2rem;
      left: 1.2rem;
    }
    &:nth-child(2) {
      position: absolute;
      bottom: 1.2rem;
      left: 1.2rem;
    }
  }
  .battlepass-info {
    position: absolute;
    top: 21.6rem;
    left: 50%;
    margin-left: -21.4rem;
    width: 42.8rem;
    height: 16.8rem;

    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    .title {
      font-family: Teko;
      font-weight: 400;
      font-size: 4.8rem;
      line-height: 6.9rem;
      /* identical to box height */

      text-transform: uppercase;

      color: #ffffff;
      margin: 3.6rem 0 -0.9rem;
    }
    .desc {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.4rem;
      /* identical to box height, or 171% */

      text-align: center;

      /* #FFC700 */

      color: #ccff00;
    }
  }
}
.go-box {
  position: relative;
  width: 100%;
  height: 26.2vw;
  background-image: url(@/assets/images/fallen-go-bg.png);
  background-size: cover;
  background-position: center;
  .title {
    font-family: Teko;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    padding: 6.67vw 0 2.5vw;
  }
  .go-btn-list {
    text-align: center;
    .btn-play {
      width: 17.9rem;
      height: 4.8rem;
      display: inline-block;
      background: #ff4125;
      border-radius: 4px;
      vertical-align: middle;
      font-family: Montserrat;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 4.8rem;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      margin-right: 1.6rem;
    }
    .btn-system {
      width: 13.4rem;
      height: 4.8rem;
      display: inline-block;
      background: #ff4125;
      border-radius: 4px;
      vertical-align: middle;
      font-family: Montserrat;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 4.8rem;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      margin-right: 1.6rem;
      img {
        width: 1.6rem;
        margin-bottom: 0.6rem;
        margin-right: 1.2rem;
      }
    }
    .btn-ios {
      margin-right: 0.5rem;
      img {
        width: 14.2rem;
      }
    }
    .btn-google {
      img {
        width: 16.1rem;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .banner-box {
    height: 100vh;
    min-height: 130vw;
    /deep/.box-section {
      .img {
        margin-top: 18.8rem;
        height: 20rem;
      }
      button {
        position: absolute;
        bottom: 6rem;
        width: 25.5rem;
        left: calc((100vw - 25.5rem) / 2);
      }
    }
  }
  .rangers-box {
    position: relative;
    width: 100%;
    height: unset;
    .ranger-left {
      float: unset;
      width: 100%;
      height: 100vw;
    }
    .ranger-right {
      float: unset;
      width: 100%;
      height: 100vw;
    }
    .ranger-info {
      position: absolute;
      top: 50%;
      bottom: unset;
      transform: translateY(-50%);
      width: calc(100vw - 4.8rem);
      left: 2.4rem;
      margin-left: unset;
      background: rgba(0, 0, 0, 0.8);
      padding: 2.4rem;
      .title {
        font-size: 4.8rem;
        line-height: 6.9rem;
        margin-top: 0;
        margin-bottom: -0.5rem;
      }
      .desc {
        font-size: 1.2rem;
        line-height: 2.2rem;
      }
    }
  }
  .battlefield-box {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 64rem;
    .img-box {
      display: none;
    }
    .mob-img-box {
      display: block;
      width: 100%;
      height: 100vh;
      min-height: 64rem;
      .parallax-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
      .slide {
        height: 100vh;
        min-height: 64rem;
      }
    }

    .battlefield-info {
      position: absolute;
      left: 2.4rem;
      bottom: 3.4rem;
      margin-left: unset;
      width: calc(100vw - 4.8rem);
      background: rgba(0, 0, 0, 0.8);
      padding: 1.2rem 2.4rem 2.4rem;
      backdrop-filter: blur(1.2rem);
      z-index: 9;
      .title {
        font-size: 3.6rem;
        line-height: 5.2rem;
        text-align: center;
        margin-bottom: -0.4rem;
      }
      .desc {
        font-size: 1.2rem;
        line-height: 2.2rem;
        text-align: center;
      }
    }
  }
  .video-list-box {
    width: 100%;
    height: unset;
    .video-box {
      float: unset;
      width: 100%;
      height: 100vw;
      .video-info {
        padding: 0 2.4rem 4.8rem;
        .title {
          font-size: 3.6rem;
          line-height: 5.2rem;
          margin-bottom: -0.4rem;
        }
      }
    }
  }
}
</style>
<style lang="less">
.game-1-skip-list {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  z-index: 9;
  .swiper-pagination-bullet {
    display: inline-block;
    vertical-align: top;
    width: 33.33vw;
    height: 1rem;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    &.swiper-pagination-bullet-active {
      background: #ffffff;
      box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
