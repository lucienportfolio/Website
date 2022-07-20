<template>
  <section class="main">
    <section class="banner-box">
      <img src="@/assets/images/game-2-logo.png" alt="" class="img" />
      <button>Coming soon</button>
    </section>
    <section class="video-box">
      <div class="video-info-box">
        <video
          preload
          :controls="videoControls"
          src="@/assets/images/movie.mp4"
          poster="@/assets/images/game-2-video-poster.png"
          class="video"
          id="game-video"
        ></video>
        <div class="play-box" @click="onVideoPlay" v-if="!videoControls">
          <div class="text">Game Demo</div>
          <img src="@/assets/images/game-2-video-play.png" alt="" />
        </div>
        <div class="around-list">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
    <section class="map-design-box">
      <div class="map-design-main-box">
        <div class="box-info">
          <div class="title">Innovative Map Design</div>
          <div class="desc">A 3v3,2 lanes MOBA experience.</div>
        </div>
        <div class="map-design-info-list">
          <div class="map-design-info">
            <div class="title">Portals</div>
            <div class="desc">Descriptions of the portals in the map</div>
          </div>
          <div class="map-design-info">
            <div class="title">Lanes</div>
            <div class="desc">
              Each player selects 3 champions. And controls an active squad of 2 of them at the same
              time.
            </div>
          </div>
          <div class="map-design-info">
            <div class="title">Resource Points</div>
            <div class="desc">Descriptions of the resource points in the map</div>
          </div>
        </div>
      </div>
    </section>
    <section class="ranger-box">
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
        class="my-swiper"
        :pagination="{
          el: '.game-2-skip-list',
          clickable: true,
          renderBullet
        }"
      >
        <swiper-slide class="feature">
          <div class="feature-info">
            <div class="info">
              <div class="title">Designed for mobile</div>
              <div class="desc">A completely revamped Mobile-native battle system</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="feature">
          <div class="feature-info">
            <div class="info">
              <div class="title">Incredibly exciting Experience</div>
              <div class="desc">
                Each player picks 3 champions at the start and controls an active squad of 2 at the
                same time.
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="feature">
          <div class="feature-info">
            <div class="info">
              <div class="title">An innovative game not only in web3</div>
              <div class="desc">
                Time your counters wisely to dissolve your opponents’ attack, explore various skill
                shot combos to maximize team fight effectiveness
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="feature">
          <div class="feature-info">
            <div class="info">
              <div class="title">Designed for mobile</div>
              <div class="desc">Descriptions</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="game-2-skip-list"></div>
    </section>
  </section>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import $ from 'jquery'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default defineComponent({
  name: 'GameIndex',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const isWap = ref(false)
    const id = 2
    const videoControls = ref(false)

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
      $('html').attr({ style: 'overflow-y:auto' })
      $('header,.main,footer').show()

      function checkFontSize() {
        const oldIsWap = isWap.value
        isWap.value = !($(window).width() > 960)
        if (isWap.value !== oldIsWap) {
          console.log('change')
        }
      }
      $(document).ready(checkFontSize)
      $(window).resize(checkFontSize)
    })
    const onVideoPlay = () => {
      $('#game-video')[0].play()
      videoControls.value = true
    }
    const renderBullet = (index, className) => {
      return `<div class="${className}"></div>`
    }
    const featuresInfo = ref([0, 1, 2, 3, 4])
    return {
      id,
      videoControls,
      onVideoPlay,
      renderBullet,
      featuresInfo,
      swiperModules: [Navigation, Pagination, A11y, Autoplay]
    }
  }
})
</script>
<style lang="less" scoped>
.banner-box {
  position: relative;
  width: 100%;
  height: 71.8rem;
  background-image: url(@/assets/images/game-2-banner-bg.png);
  background-size: cover;
  background-position: center;
  text-align: center;
  .img {
    margin-top: 24.7rem;
    height: 22.5rem;
  }
  button {
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
    .play-box {
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
          border-bottom: 0.8rem solid #d9d9d9;
          border-left: 0.8rem solid #d9d9d9;
        }
        &:nth-child(4) {
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
  background-image: url(@/assets/images/game-2-design.png);
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
.ranger-box {
  width: 100%;
  height: 64rem;
  background-image: url(@/assets/images/game-2-ranger-1-banner.png);
  background-size: cover;
  background-position: top center;
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
      background-image: url(@/assets/images/game-2-feature-1.png);
      background-size: cover;
      background-position: center;
    }
    &:nth-child(2) {
      .feature-info {
        background-image: url(@/assets/images/game-2-feature-2.png);
      }
    }
    &:nth-child(3) {
      .feature-info {
        background-image: url(@/assets/images/game-2-feature-3.png);
      }
    }
    &:nth-child(4) {
      .feature-info {
        background-image: url(@/assets/images/game-2-feature-4.png);
      }
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
</style>
<style lang="less">
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
</style>
