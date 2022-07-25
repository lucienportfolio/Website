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
    <section class="video-box">
      <div class="video-info-box">
        <video
          preload
          :controls="videoControls"
          :poster="videoInfo.material_list.material.poster"
          :src="videoInfo.material_list.material.url"
          class="video"
          id="game-video"
        ></video>
        <div
          class="play-box"
          @click="onVideoPlay"
          v-if="!videoControls"
          v-html="videoInfo.html"
        ></div>
        <div class="around-list">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
    <section
      class="map-design-box"
      :style="`background-image: url(${mapInfo[0].material_list.material_pc.url})`"
    >
      <div class="map-design-main-box">
        <div class="box-info">
          <div class="title">{{ mapInfo[0].name }}</div>
          <div class="desc">{{ mapInfo[0].introduction }}</div>
        </div>
        <div class="map-design-info-list">
          <template v-for="(v, i) in mapInfo">
            <div class="map-design-info" v-if="i > 0" :key="i">
              <div class="title">{{ v.name }}</div>
              <div class="desc">{{ v.introduction }}</div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <section class="map-design-mob-box">
      <div class="box-info">
        <div class="title">{{ mapInfo[0].name }}</div>
        <div class="desc">{{ mapInfo[0].introduction }}</div>
      </div>
      <div class="mob-img-box">
        <swiper
          :modules="swiperModules"
          :pagination="{
            el: '.game-2-map-design-skip-list',
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
            data-swiper-parallax="-66.67%"
            :style="`background-image: url(${
              mapInfo[0].material_list.material_mob.url
                ? mapInfo[0].material_list.material_mob.url
                : mapInfo[0].material_list.material_pc.url
            })`"
          ></div>
          <template v-for="(v, i) in mapInfo">
            <swiper-slide class="slide" v-if="i > 0" :key="i">
              <div class="map-design-info">
                <div class="title">{{ v.name }}</div>
                <div class="desc">{{ v.introduction }}</div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
        <div class="game-2-map-design-skip-list"></div>
      </div>
    </section>
    <section class="ranger-box">
      <div class="ranger-img"></div>
      <div class="ranger-info-box">
        <div class="ranger-box-title">Ranger concept art</div>
        <div class="ranger-change-info-list">
          <div class="ranger-change-info">Rin</div>
          <div class="ranger-change-info">
            <img src="@/assets/images/game-2-ranger-2.png" alt="" />
          </div>
          <div class="ranger-change-info">
            <img src="@/assets/images/game-2-ranger-3.png" alt="" />
          </div>
        </div>
        <div class="ranger-info">
          <div class="name">Rin</div>
          <div class="title">Heir of Musashi</div>
        </div>
        <div class="ability-info-box">
          <div class="title">DREAM-LADEN BOUGH</div>
          <div class="desc">
            Passively, Lillia gains stacking Move Speed when hitting enemies with spells. She can
            activate this to deal magic damage to nearby enemies, dealing extra true damage on the
            edge.
          </div>
        </div>
        <div class="ability-change-info-list">
          <div class="ability-change-info">
            <img src="@/assets/images/game-2-ranger-1-ability-1.png" alt="" />
          </div>
          <div class="ability-change-info">
            <img src="@/assets/images/game-2-ranger-1-ability-2.png" alt="" />
          </div>
          <div class="ability-change-info active">
            <img src="@/assets/images/game-2-ranger-1-ability-3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="features-box">
      <swiper
        :modules="swiperModules"
        direction="vertical"
        :mousewheel="true"
        class="my-swiper"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        :pagination="{
          el: '.game-2-skip-list',
          clickable: true,
          renderBullet
        }"
      >
        <swiper-slide class="feature" v-for="(v, i) in funInfo" :key="i">
          <div
            class="feature-info"
            :style="`background-image: url(${v.material_list.material.url})`"
          >
            <div class="info">
              <div class="title">{{ v.name }}</div>
              <div class="desc">{{ v.introduction }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="game-2-skip-list"></div>
    </section>
    <section class="features-mob-box">
      <div class="feature" v-for="(v, i) in funInfo" :key="i">
        <div
          class="feature-info"
          :style="`background-image: url(${
            v.material_list.material_mob.url
              ? v.material_list.material_mob.url
              : v.material_list.material_pc.url
          })`"
        >
          <div class="info">
            <div class="title">{{ v.name }}</div>
            <div class="desc">{{ v.introduction }}</div>
          </div>
        </div>
      </div>
    </section>
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
    const id = 22
    const bannerInfo = ref({
      html: '',
      material_list: {
        material: { type: '', url: '', poster: '' },
        material_pc: { type: '', url: '', poster: '' },
        material_mob: { type: '', url: '', poster: '' }
      }
    })
    const videoControls = ref(false)

    const videoInfo = ref({
      html: '',
      material_list: {
        material: { type: '', url: '', poster: '' },
        material_pc: { type: '', url: '', poster: '' },
        material_mob: { type: '', url: '', poster: '' }
      }
    })

    const mapInfo = ref([
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

            videoInfo.value.material_list.material = videoInfo.value.material_list.material_mob.url
              ? videoInfo.value.material_list.material_mob
              : videoInfo.value.material_list.material_pc
          } else {
            bannerInfo.value.material_list.material = bannerInfo.value.material_list.material_pc
            videoInfo.value.material_list.material = videoInfo.value.material_list.material_pc
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

      const videoRes = await getBlockInfoApi('gameVideo', id)
      if (videoRes.code === 200) {
        videoInfo.value = []
        if (videoRes.data[0]) {
          videoInfo.value = {
            html: videoRes.data[0].html,
            material_list: onCheckMaterial(videoRes.data[0].material, videoRes.data[0].material_mob)
          }
          if (videoRes.data[1]) {
            const poster = onCheckMaterial(videoRes.data[1].material, videoRes.data[1].material_mob)
            console.log(poster)
            console.log(poster.material_pc)

            videoInfo.value.material_list.material_pc.poster = poster.material_pc.url

            videoInfo.value.material_list.material_mob.poster = poster.material_mob.url
              ? poster.material_mob.url
              : poster.material_pc.url
            videoInfo.value.material_list.material.poster =
              videoInfo.value.material_list.material.url ===
              videoInfo.value.material_list.material_pc.url
                ? videoInfo.value.material_list.material_pc.poster
                : videoInfo.value.material_list.material_mob.poster
          }
        }
      }

      const mapRes = await getBlockInfoApi('gameMap', id)
      if (mapRes.code === 200) {
        mapInfo.value = []
        mapRes.data.forEach((v) => {
          mapInfo.value.push({
            name: v.name,
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
    const onVideoPlay = () => {
      $('#game-video')[0].play()
      videoControls.value = true
    }
    const renderBullet = (index, className) => {
      return `<div class="${className}"></div>`
    }
    return {
      id,
      bannerInfo,
      videoControls,
      onVideoPlay,
      renderBullet,
      videoInfo,
      mapInfo,
      funInfo,
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
      margin-top: 24.7rem;
      height: 22.5rem;
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
      margin: 7.2rem auto 0;
      outline: none;
      border: none;
    }
  }
}
.video-box {
  background: #2a2a2a;
  padding: 11.6rem 0;
  .video-info-box {
    position: relative;
    width: 128.8rem;
    height: 72.8rem;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.5);
    padding: 0.4rem;
    .video {
      width: 128rem;
      height: 72rem;
      background: #d9d9d9;
      object-fit: fill;
    }
    /deep/.play-box {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -16.6rem;
      margin-top: -9rem;
      width: 33.2rem;
      height: 18rem;
      background: rgba(0, 0, 0, 0.2);
      padding-top: 0.4rem;
      text-align: center;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0.8rem;
        height: 18rem;
        background: #ff4125;
      }
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 0.8rem;
        height: 18rem;
        background: #ff4125;
      }
      .text {
        font-family: Teko;
        font-weight: 400;
        font-size: 6.4rem;
        line-height: 9.2rem;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
      }
      img {
        width: 5.4rem;
        height: 6rem;
      }
    }
    .around-list {
      div {
        position: absolute;
        width: 16rem;
        height: 16rem;
        &:nth-child(1) {
          top: 0;
          left: 0;
          border-top: 0.8rem solid #d9d9d9;
          border-left: 0.8rem solid #d9d9d9;
        }
        &:nth-child(2) {
          top: 0;
          right: 0;
          border-top: 0.8rem solid #d9d9d9;
          border-right: 0.8rem solid #d9d9d9;
        }
        &:nth-child(3) {
          bottom: 0;
          left: 0;
          width: 0.8rem;
          background: #d9d9d9;
        }
        &:nth-child(4) {
          bottom: 0;
          left: 0;
          height: 0.8rem;
          background: #d9d9d9;
        }
        // &:nth-child(4) {
        //   bottom: 0;
        //   left: 0;
        //   border-bottom: 0.8rem solid #d9d9d9;
        //   border-left: 0.8rem solid #d9d9d9;
        // }
        &:nth-child(5) {
          bottom: 0;
          right: 0;
          border-bottom: 0.8rem solid #d9d9d9;
          border-right: 0.8rem solid #d9d9d9;
        }
      }
    }
  }
}
.map-design-box {
  width: 100%;
  height: 90rem;
  background-size: cover;
  background-position: center;
  .map-design-main-box {
    // width: 144rem;
    width: 100%;
    height: 90rem;
    margin: 0 auto;
    position: relative;
    .box-info {
      position: absolute;
      top: 8.8rem;
      left: calc((100vw - 144rem) / 2 + 8.9rem);
      width: 41.3rem;
      background: rgba(0, 0, 0, 0.8);
      padding: 2.4rem 3.6rem 3.6rem;
      .title {
        font-family: Teko;
        font-weight: 400;
        font-size: 4.8rem;
        line-height: 6.9rem;
        text-transform: uppercase;
        color: #ff4125;
      }
      .desc {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: #ffffff;
      }
    }

    .map-design-info-list {
      .map-design-info {
        &:nth-child(1) {
          left: calc(((100vw - 144rem) / 2) + 21.3rem);
          // left: 21.3rem;
          bottom: 17.6rem;
          &::before {
            content: '';
            position: absolute;
            top: -9rem;
            left: 15.6rem;
            width: 20.1rem;
            height: 9rem;
            border-top: 0.2rem solid #ff4125;
            border-left: 0.2rem solid #ff4125;
            transform: skew(-45deg);
          }
          &::after {
            content: '';
            width: 12rem;
            height: 0.8rem;
            background: #ff4125;
            position: absolute;
            top: -0.4rem;
            left: 6rem;
          }
        }
        &:nth-child(2) {
          right: calc(((100vw - 144rem) / 2) + 9rem);
          // right: 9rem;
          bottom: 10.4rem;
          &::before {
            content: '';
            position: absolute;
            top: -6.5rem;
            left: -11rem;
            width: 20.2rem;
            height: 6.5rem;
            border-top: 0.2rem solid #ff4125;
            border-right: 0.2rem solid #ff4125;
            transform: skew(45deg);
          }
          &::after {
            content: '';
            width: 12rem;
            height: 0.8rem;
            background: #ff4125;
            position: absolute;
            top: -0.4rem;
            left: 6rem;
          }
        }
        &:nth-child(3) {
          top: 15.8rem;
          right: calc(((100vw - 144rem) / 2) + 13rem);
          // right: 13rem;
          &::before {
            content: '';
            position: absolute;
            bottom: -6.3rem;
            left: -12rem;
            width: 21.7rem;
            height: 6.3rem;
            border-bottom: 0.2rem solid #ff4125;
            border-right: 0.2rem solid #ff4125;
            transform: skew(-45deg);
          }
          &::after {
            content: '';
            width: 12rem;
            height: 0.8rem;
            background: #ff4125;
            position: absolute;
            bottom: -0.4rem;
            left: 6rem;
          }
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.4rem;
        gap: 0.4rem;
        position: absolute;
        width: 24rem;
        background: rgba(0, 0, 0, 0.8);
        .title {
          font-family: Montserrat;
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 2rem;
          text-align: center;
          text-transform: uppercase;
          color: #ff4125;
          flex: none;
          order: 0;
          flex-grow: 0;
          margin-bottom: 0.4rem;
        }
        .desc {
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.4rem;
          color: #ffffff;
          flex: none;
          order: 1;
          flex-grow: 0;
        }
      }
    }
  }
}
.map-design-mob-box {
  display: none;
}
.ranger-box {
  width: 100%;
  height: 64rem;
  position: relative;
  display: none;
  .ranger-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 64rem;
    background-image: url(@/assets/images/game-2-ranger-1-banner.png);
    background-size: cover;
    background-position: top center;
  }

  .ranger-info-box {
    // width: 144rem;
    height: 64rem;
    margin: 0 auto;
    position: relative;
    .ranger-box-title {
      position: absolute;
      top: 9.3rem;
      left: 9.6rem;
      font-family: Montserrat;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2rem;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
    .ranger-change-info-list {
      position: absolute;
      bottom: 4.8rem;
      left: 4.8rem;
      .ranger-change-info {
        width: 9.6rem;
        height: 9.6rem;
        background: #ff4125;
        font-family: Montserrat;
        font-style: italic;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 9.2rem;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        border: 0.2rem solid #ff4125;
        margin-bottom: 2.4rem;
        position: relative;
        &:after {
          content: '';
          width: 0.2rem;
          height: 2.4rem;
          background: #ff4125;
          position: absolute;
          bottom: -2.6rem;
          left: 4.7rem;
        }
        &:last-child {
          margin-bottom: 0;
          &::after {
            display: none;
          }
        }
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
    }
    .ranger-info {
      position: absolute;
      bottom: 4.8rem;
      left: 16.8rem;
      font-family: Montserrat;
      font-style: italic;
      color: #ffffff;
      .name {
        font-weight: 700;
        font-size: 6.4rem;
        line-height: 7.8rem;
        text-transform: uppercase;
        margin-bottom: -0.6rem;
      }
      .title {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
      }
    }
    .ability-info-box {
      position: absolute;
      bottom: 16.8rem;
      right: 4.8rem;
      width: 44.8rem;
      padding: 2.4rem;
      background: rgba(0, 0, 0, 0.8);
      font-family: Montserrat;
      color: #ffffff;
      .title {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2rem;
        text-transform: uppercase;
        margin-bottom: 1.2rem;
      }
      .desc {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
    }
    .ability-change-info-list {
      position: absolute;
      bottom: 4.8rem;
      right: 4.8rem;
      .ability-change-info {
        width: 9.6rem;
        height: 9.6rem;
        border-radius: 50%;
        display: inline-block;
        margin-left: 2.4rem;
        cursor: pointer;
        position: relative;
        &.active {
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 9.6rem;
            height: 9.6rem;
            border-radius: 50%;
            border: 0.4rem solid #ff4125;
            box-sizing: border-box;
          }
        }
        &:hover {
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 9.6rem;
            height: 9.6rem;
            border-radius: 50%;
            border: 0.4rem solid #ff4125;
            box-sizing: border-box;
          }
        }
        &:first-child {
          margin-left: 0;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
}
.features-box {
  width: 100%;
  height: 96rem;
  position: relative;
  overflow: hidden;
  .my-swiper {
    height: 96rem;
  }
  .feature {
    .feature-info {
      position: relative;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
    .info {
      position: absolute;
      left: 8.8rem;
      bottom: 8.8rem;
      width: 64rem;
      background: rgba(0, 0, 0, 0.8);
      padding: 2.4rem 3.6rem 6rem;
      z-index: 9;
      .title {
        font-family: Teko;
        font-weight: 400;
        font-size: 4.8rem;
        line-height: 6.9rem;
        text-transform: uppercase;
        color: #ff4125;
        margin-bottom: 1.2rem;
      }
      .desc {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: #ffffff;
      }
    }
  }
}
.features-mob-box {
  display: none;
}

@media screen and (max-width: 960px) {
  .banner-box {
    height: 100vh;
    min-height: 130vw;
    /deep/.box-section {
      .img {
        margin-top: 18.8rem;
        height: 7.6rem;
      }
      button {
        position: absolute;
        bottom: 6rem;
        width: 25.5rem;
        left: calc((100vw - 25.5rem) / 2);
      }
    }
  }
  .video-box {
    padding: 6rem 2.4rem;
    .video-info-box {
      position: relative;
      width: 100%;
      height: 18.4rem;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.5);
      padding: 0;
      .video {
        width: 100%;
        height: 18.4rem;
      }
      /deep/.play-box {
        margin-left: -8.6rem;
        margin-top: -5.3rem;
        width: 17.2rem;
        height: 10.6rem;
        padding-top: 0.8rem;
        &::before {
          width: 0.4rem;
          height: 10.6rem;
        }
        &::after {
          content: '';
          width: 0.4rem;
          height: 10.6rem;
        }
        .text {
          font-size: 3.6rem;
          line-height: 5.2rem;
        }
        img {
          width: 2.7rem;
          height: 3rem;
        }
      }
      .around-list {
        display: none;
      }
    }
  }
  .map-design-box {
    display: none;
  }
  .map-design-mob-box {
    display: block;
    .box-info {
      width: 100%;
      background: rgba(0, 0, 0, 0.8);
      padding: 2.4rem;
      .title {
        font-family: Teko;
        font-weight: 400;
        font-size: 3.6rem;
        line-height: 5.2rem;
        text-transform: uppercase;
        color: #ff4125;
      }
      .desc {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: #ffffff;
      }
    }
    .mob-img-box {
      display: block;
      width: 100%;
      height: 100vh;
      min-height: 64rem;
      position: relative;
      .parallax-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 300%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
      .slide {
        height: 100vh;
        min-height: 64rem;
        position: relative;
        .map-design-info {
          position: absolute;
          left: 0;
          bottom: 1rem;
          width: 100%;
          min-height: 12rem;
          padding: 2.4rem;
          gap: 0.4rem;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(1.2rem);
          &::after {
            content: '';
            width: 12rem;
            height: 0.8rem;
            background: #ff4125;
            position: absolute;
            top: -0.4rem;
            left: calc(50vw - 6rem);
          }
          .title {
            font-family: Montserrat;
            font-weight: 700;
            font-size: 1.6rem;
            line-height: 2rem;
            text-transform: uppercase;
            color: #ff4125;
            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .desc {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: #ffffff;
            flex: none;
            order: 1;
            flex-grow: 0;
          }
        }
      }
    }
  }
  .ranger-box {
    width: 100%;
    height: unset;
    position: relative;
    display: none;
    .ranger-img {
      position: unset;
      width: 100%;
      height: 20rem;
      background-image: url(@/assets/images/game-2-ranger-1-banner.png);
      background-size: cover;
      background-position: top left;
    }
    .ranger-info-box {
      height: unset;
      position: unset;
      .ranger-box-title {
        position: absolute;
        top: 9.3rem;
        width: 100%;
        left: unset;
      }
      .ranger-change-info-list {
        position: absolute;
        top: 2.4rem;
        bottom: unset;
        left: 2.4rem;
        .ranger-change-info {
          width: 3.6rem;
          height: 3.6rem;
          font-size: 1rem;
          line-height: 3.6rem;
          margin-bottom: 1.2rem;
          &:after {
            height: 1.2rem;
            bottom: -1.4rem;
            left: 1.7rem;
          }
        }
      }
      .ranger-info {
        position: unset;
        bottom: unset;
        left: unset;
        padding: 2.4rem;
      }
      .ability-info-box {
        position: unset;
        bottom: unset;
        right: unset;
        margin: 0 2.4rem;
        width: calc(100vw - 4.8rem);
        padding: 1.2rem;
      }
      .ability-change-info-list {
        position: unset;
        bottom: unset;
        right: unset;
        margin: 1.2rem 0 8rem 2.4rem;
        .ability-change-info {
          width: 6rem;
          height: 6rem;
          margin-left: 0;
          margin-right: 1.2rem;
          &.active {
            &::before {
              width: 6rem;
              height: 6rem;
            }
          }
          &:hover {
            &::before {
              width: 6rem;
              height: 6rem;
            }
          }
          &:last-child {
            margin-left: 0;
            margin-right: 0;
          }
        }
      }
    }
  }
  .features-box {
    width: 100%;
    height: 100vh;
    min-height: 130vw;
    position: relative;
    overflow: hidden;
    display: none;
    .my-swiper {
      height: 100vh;
      min-height: 130vw;
    }
    .feature {
      .feature-info {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
      .info {
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 2.4rem;
        .title {
          line-height: 4.8rem;
        }
      }
    }
  }
  .features-mob-box {
    display: block;
    width: 100%;
    min-height: 130vw;
    position: relative;
    overflow: hidden;
    .feature {
      .feature-info {
        position: relative;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
      }
      .info {
        position: absolute;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        padding: 2.4rem;
        z-index: 9;
        .title {
          font-family: Teko;
          font-weight: 400;
          font-size: 4.8rem;
          line-height: 4.8rem;
          text-transform: uppercase;
          color: #ff4125;
          margin-bottom: 1.2rem;
        }
        .desc {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.4rem;
          min-height: 7.2rem;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
<style lang="less">
.game-2-map-design-skip-list {
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
.game-2-skip-list {
  position: absolute;
  right: 9.9rem;
  top: 48rem;
  transform: translateY(-50%);
  z-index: 9;
  .swiper-pagination-bullet {
    width: 1.6rem;
    height: 1.6rem;
    transform: rotate(-45deg);
    background: #ffffff;
    cursor: pointer;
    margin-bottom: 2.4rem;
    position: relative;
    &:after {
      content: '';
      width: 0.2rem;
      height: 2.4rem;
      background: #fff;
      position: absolute;
      bottom: -2rem;
      left: -0.9rem;
      transform: rotate(45deg);
    }
    &.swiper-pagination-bullet-active {
      background: #ff4125;
    }
    &:last-child {
      margin-bottom: 0;
      &::after {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .game-2-skip-list {
    right: 2.4rem;
    top: 50vh;
    transform: translateY(-50%);
    z-index: 9;
    .swiper-pagination-bullet {
      width: 1rem;
      height: 1rem;
      margin-bottom: 1.2rem;
      &:after {
        content: '';
        width: 0.2rem;
        height: 1.2rem;
        bottom: -1.1rem;
        left: -0.6rem;
      }
    }
  }
}
</style>
