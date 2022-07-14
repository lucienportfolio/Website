<template>
  <section class="main worldview-ranger-main">
    <section class="banner-box" :style="`background-image:url(${banner});`">
      <router-link to="/worldview">
        <div class="map-box">
          <span>E4C: Verse</span><span>/</span>Rangers - {{ ranger.name }}
        </div></router-link
      >
      <div class="name-box">
        <div class="name">{{ ranger.name }}</div>
        <div class="title">{{ ranger.title }}</div>
      </div>
      <div class="powers-box">
        <div class="title">
          Abilities + Powers<span class="swiper-pagination"
            >{{ renderIndex }}/{{ ranger.ability.length }}</span
          >
        </div>
        <swiper
          :modules="swiperModules"
          slides-per-view="auto"
          @slideChange="slideChange"
          :pagination="{
            el: '.skip-list',
            clickable: true,
            renderBullet
          }"
          :autoplay="{
            delay: 15000,
            disableOnInteraction: false
          }"
          :simulate-touch="false"
        >
          <swiper-slide class="ability" v-for="(v, i) in ranger.ability" :key="i">
            <div class="name">
              {{ v.en }}<span>{{ v.tw }}</span>
            </div>
            <div class="desc">{{ v.desc }}</div>
          </swiper-slide>
        </swiper>
        <div class="skip-list"></div>
      </div>
      <div class="code-box">
        <div class="before"></div>
        <div class="title">
          E4C Ranger <span>{{ ranger.code }}</span>
        </div>
        <div class="line"></div>
      </div>
      <!-- <div class="ranger" :style="`background-image:url(${ranger.avatar});`"></div> -->
      <div class="rotating-box" @click="onDoAudio" v-if="ranger.audio.length > 0"><div></div></div>
    </section>
    <section class="audio-box clearfix" v-if="ranger.audio.length > 0">
      <div class="content">
        <div class="text"><span>Ranger’s Voice</span></div>
      </div>
      <div class="audio" @click="onDoAudio"></div>
    </section>
    <section class="lines-box" v-html="ranger.dialogue"></section>
    <section class="basic-box clearfix">
      <div class="connections-box">
        <div class="title">Connections</div>
        <div class="connections-list clearfix">
          <div class="connections-info-box" v-for="(v, i) in ranger.connections_list" :key="i">
            <router-link :to="`/worldview/ranger/${v.id}`">
              <img :src="v.thumbnail" alt="" />
              <div class="connections-info">
                <div class="name">{{ v.name }}</div>
                <div class="title">{{ v.title }}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="affiliation-box">
        <router-link :to="`/worldview/organization/${ranger.organization_info.id}`">
          <div class="title">Affiliation</div>
          <div class="info-box">
            <img :src="ranger.organization_info.logo" alt="" />
            <div class="name">{{ ranger.organization_info.name }}</div>
          </div>
        </router-link>
      </div>
      <div class="misc-info-box">
        <div class="title">Misc Info</div>
        <div class="info-box" v-html="ranger.misc_info"></div>
      </div>
    </section>
    <section class="info-list-box clearfix">
      <div class="gallery-box">
        <div class="title">Gallery</div>
        <div class="gallery-list gallery-pc-list">
          <div
            class="gallery-info"
            v-for="(v, i) in ranger.gallery"
            :key="i"
            @click="onShowBigGallery('gallery-pc-list', i)"
          >
            <img :src="v" alt="" class="gallery" />
            <img src="@/assets/images/worldview-ranger-gallery-big.png" alt="" class="big" />
          </div>
        </div>
        <swiper
          :modules="swiperModules"
          slides-per-view="auto"
          :simulate-touch="false"
          class="gallery-list gallery-mob-list"
        >
          <swiper-slide
            class="gallery-info"
            v-for="(v, i) in ranger.gallery"
            :key="i"
            @click="onShowBigGallery('gallery-mob-list', i)"
          >
            <img :src="v" alt="" class="gallery" />
            <img src="@/assets/images/worldview-ranger-gallery-big.png" alt="" class="big" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="biography-box">
        <div class="title">Biography</div>
        <div class="content" v-html="ranger.biography"></div>
      </div>
    </section>

    <section class="shadow-box modal-content" v-show="shadowShow">
      <div class="shadow-info">
        <img :src="shadowImg" alt="" class="shadow-img" />
      </div>
    </section>
    <audio preload="auto" id="audio" :src="audioUrl"></audio>
  </section>
</template>
<script>
import { useRouter } from 'vue-router'
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import $ from 'jquery'
import { getRangerInfoApi } from '@/api/ranger/index'

export default defineComponent({
  name: 'WorldviewRanger',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const isWap = ref(false)
    const router = useRouter()
    const shadowShow = ref(false)
    const shadowImg = ref('')
    const audioUrl = ref('')
    const { id } = router.currentRoute.value.params
    const ranger = ref({
      banner: '',
      mob_banner: '',
      avatar: '',
      thumbnail: '',
      name: '',
      title: '',
      code: '',
      ability: [],
      dialogue: '',
      misc_info: '',
      gallery: [],
      biography: '',
      audio: [],
      organization_info: {
        id: '',
        logo: '',
        name: '',
        slogan: ''
      },
      connections_list: []
    })

    const banner = ref('')
    const scrollFun = () => {
      if (window.scrollY > $('.banner-box').height() - $('header').height()) {
        $('header').addClass('bg')
      } else {
        $('header').removeClass('bg')
      }
    }
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    onUnmounted(() => {
      document.removeEventListener('scroll', scrollFun, false)
    })
    onMounted(async () => {
      $('body').css({
        backgroundImage: 'url(https://ambrus.s3.amazonaws.com/1654997771178_0.80_BG-PATTERN.png)'
      })
      document.addEventListener('scroll', scrollFun, false)
      $('html').attr({ style: 'overflow-y:auto' })
      $('header,.main,footer').show()

      document.onclick = (e) => {
        if (e.target.classList[0] !== 'gallery' && e.target.classList[0] !== 'big') {
          shadowShow.value = false
        }
      }

      const rangerRes = await getRangerInfoApi(id)
      if (rangerRes.code === 200) {
        ranger.value = rangerRes.data
        if (rangerRes.data.audio.length > 0) {
          const audioIndex = randomNumber(0, rangerRes.data.audio.length - 1)
          console.log(`随机${audioIndex}`)
          audioUrl.value = rangerRes.data.audio[audioIndex]
        }
        if ($(window).width() > 960) {
          banner.value = rangerRes.data.banner
        } else {
          banner.value = rangerRes.data.mob_banner
            ? rangerRes.data.mob_banner
            : rangerRes.data.banner
        }
      }

      setTimeout(() => {
        $('.code-box .line').css(
          'width',
          $('.code-box').width() -
            $('.code-box .before').width() * 3 -
            $('.code-box .title').width()
        )
      }, 300)

      console.log(ranger)

      function checkFontSize() {
        const oldIsWap = isWap.value
        isWap.value = !($(window).width() > 960)
        if (isWap.value !== oldIsWap) {
          if ($(window).width() > 960) {
            banner.value = ranger.value.banner
            // locationWidth.value = pcWidth.location
            // historyWidth.value = pcWidth.history
          } else {
            banner.value = ranger.value.mob_banner ? ranger.value.mob_banner : ranger.value.banner
            // locationWidth.value = pcWidth.location
            // historyWidth.value = '100%'
          }
        }
        if ($(window).width() <= 960) {
          $('.banner-box').css('height', `${window.innerHeight}px`)
        }
      }
      $(document).ready(checkFontSize)
      $(window).resize(checkFontSize)
      if ($(window).width() <= 960) {
        $('.banner-box').css('height', `${window.innerHeight}px`)
      }
    })

    const onShowBigGallery = (type, i) => {
      shadowImg.value = ranger.value.gallery[i]
      shadowShow.value = true
      const imgWidth = $(`.${type} .gallery-info`).eq(i).find('img').width()
      const imgHeight = $(`.${type} .gallery-info`).eq(i).find('img').height()
      if ($(window).width() / ($(window).height() * 0.8) > imgWidth / imgHeight) {
        $('.shadow-box .shadow-info')
          .css('height', '80vh')
          .css('width', `${($(window).height() * 0.8 * imgWidth) / imgHeight}px`)
          .css('margin', '10vh auto')
      } else {
        const top = ($(window).height() - ($(window).width() * imgHeight) / imgWidth) / 2
        $('.shadow-box .shadow-info')
          .css('width', '100%')
          .css('height', `${($(window).width() * imgHeight) / imgWidth}px`)
          .css('margin-top', `${top}px`)
      }
    }

    const onDoAudio = () => {
      console.log($('#audio')[0].paused)
      if ($('#audio')[0].paused || $('#audio')[0].ended) {
        if (ranger.value.audio.length > 0) {
          const audioIndex = randomNumber(0, ranger.value.audio.length - 1)
          console.log(`随机${audioIndex}`)
          audioUrl.value = ranger.value.audio[audioIndex]
        }
        $('#audio')[0].play()
      }
      // if ($('#audio')[0].paused) {
      //   $('#audio')[0].play()
      // } else {
      //   $('#audio')[0].pause()
      // }
    }
    const renderIndex = ref(1)
    const renderBullet = (index, className) => {
      return `<div class="${className}"></div>`
    }
    const slideChange = (x) => {
      renderIndex.value = x.activeIndex + 1
    }
    return {
      ranger,
      banner,
      shadowShow,
      shadowImg,
      onShowBigGallery,
      audioUrl,
      onDoAudio,
      renderBullet,
      renderIndex,
      slideChange,
      swiperModules: [Navigation, Pagination, A11y, Autoplay]
    }
  }
})
</script>
<style lang="less" scoped>
.worldview-ranger-main {
  width: 100%;
  .banner-box {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: bottom center;
    text-align: center;
    overflow: hidden;
    .map-box {
      position: absolute;
      top: 12.4rem;
      left: 8.8rem;
      text-align: left;
      background: rgba(0, 0, 0, 0.25);
      font-family: Montserrat;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: #ffffff;
      padding: 1.2rem 2.4rem;
      span:nth-child(2) {
        margin: 0 1.2rem;
      }
      &:hover {
        span:nth-child(1) {
          text-decoration: underline;
        }
      }
    }
    .name-box {
      position: absolute;
      top: 16.7rem;
      left: 15.3rem;
      text-align: left;
      .name {
        font-family: Montserrat;
        font-style: italic;
        font-weight: 700;
        font-size: 12.8rem;
        line-height: 15.6rem;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: -2rem;
      }
      .title {
        font-family: Montserrat;
        font-style: italic;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: #ffffff;
      }
    }
    .powers-box {
      position: absolute;
      left: 15.4rem;
      bottom: 8.8rem;
      text-align: left;
      .title {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;

        color: #ffffff;

        span {
          font-weight: 700;
          margin-left: 1.2rem;
        }
      }
      .name {
        margin: -0.3rem 0;
        font-family: Montserrat;
        font-weight: 700;
        font-size: 7.2rem;
        line-height: 8.8rem;
        /* identical to box height */

        text-transform: uppercase;

        color: #ffffff;
        span {
          font-family: 'Zen Kaku Gothic New';
          font-style: normal;
          font-weight: 700;
          font-size: 7.2rem;
          line-height: 10.4rem;
          text-transform: uppercase;
          color: #ffffff;
          margin-left: 1.6rem;
        }
      }
      .desc {
        width: 44rem;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 3rem;
        color: #ffffff;
        margin-bottom: 5.6rem;
      }
    }
    .code-box {
      position: absolute;
      bottom: 3.6rem;
      left: 8rem;
      font-family: Teko;
      font-weight: 300;
      font-size: 3.6rem;
      line-height: 5.2rem;
      width: calc(100vh - 20.1rem - 8.8rem);

      text-transform: uppercase;
      color: #ffffff;

      transform: rotate(-90deg);
      transform-origin: 0 0;
      text-align: left;

      .before {
        display: inline-block;
        width: 2.4rem;
        height: 2.4rem;
        background: rgba(255, 255, 255, 0.6);
        margin-right: 2.4rem;
      }
      .title {
        display: inline-block;
        margin-right: 2.4rem;
        line-height: 5.2rem;
        span {
          margin-left: 0.2rem;
          font-weight: 700;
        }
      }

      .line {
        margin-bottom: 2.5rem;
        display: inline-block;
        height: 0.2rem;
        width: 50%;
        background: rgba(255, 255, 255, 0.6);
        vertical-align: top;
        margin-top: 2.5rem;
      }
    }
    .ranger {
      width: 144rem;
      height: 100vh;
      margin: 0 auto;
      background-size: 100% auto;
      background-position: center;
      background-repeat: no-repeat;
    }
    .rotating-box {
      position: fixed;
      right: 8.8rem;
      bottom: 9.1rem;
      width: 14.4rem;
      height: 14.4rem;
      background: url(@/assets/images/play-icon.png);
      background-size: 6.4rem 6.4rem;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
      div {
        animation: circle infinite 5s linear;
        background: url(@/assets/images/play-text.png);
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        width: 14.4rem;
        height: 14.4rem;
      }
      &:hover {
        background: url(@/assets/images/play-icon-hover.png);
        width: 14.4rem;
        height: 14.4rem;
        background-size: 6.4rem 6.4rem;
        background-position: center;
        background-repeat: no-repeat;
        div {
          background: url(@/assets/images/play-text-hover.png);
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          width: 14.4rem;
          height: 14.4rem;
        }
      }
    }
  }
  .audio-box {
    display: none;
  }
  .lines-box {
    width: 100%;
    height: 36rem;
    background: #ffffff;
    font-family: Teko;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 6rem;
    padding: 12rem 0;
    align-items: center;
    text-align: center;

    /* #2A2A2A */

    color: #2a2a2a;
  }
  .basic-box {
    width: 126.4rem;
    height: 79.5rem;
    margin: 12rem auto 3rem;
    box-sizing: border-box;
    .connections-box {
      float: left;
      width: 54.4rem;
      height: 79.5rem;
      background: #465358;
      padding: 3.6rem 3.6rem 0;
      > .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;
        color: #ffffff;
      }
      .connections-list {
        .connections-info-box {
          position: relative;
          float: left;
          width: 22.4rem;
          height: 31.7rem;
          margin-right: 2.4rem;
          margin-top: 3.6rem;
          &:nth-child(2n + 2) {
            margin-right: 0;
          }
          img {
            width: 22.4rem;
          }
          .connections-info {
            width: 22.4rem;
            height: 9.4rem;
            background: #ffffff;
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 2.4rem;
            font-family: Montserrat;
            font-style: italic;
            color: #000000;
            transition: all 0.5s;
            .name {
              font-weight: 700;
              font-size: 2.4rem;
              line-height: 2.9rem;
              text-transform: uppercase;
            }
            .title {
              font-weight: 300;
              font-size: 1.4rem;
              line-height: 1.7rem;
              /* identical to box height */
            }
          }

          &:hover {
            .connections-info {
              background: #2a2a2a;
              color: #fff;
            }
          }
        }
      }
    }
    .affiliation-box {
      float: left;
      width: 36rem;
      height: 79.5rem;
      background-image: url(@/assets/images/worldview-ranger-rin-affiliation.png);
      background-size: cover;
      background-position: center;
      padding: 3.6rem 3.6rem 0;
      .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;

        /* #FFFFFF */

        color: #ffffff;
      }
      .info-box {
        text-align: center;
        img {
          width: 10rem;
          margin: 21rem 0 2.4rem;
        }
        .name {
          font-family: Teko;
          font-weight: 400;
          font-size: 6.4rem;
          line-height: 9.2rem;

          text-align: center;
          text-transform: uppercase;

          color: #ffffff;
        }
      }
      &:hover {
        .info-box {
          img {
            width: 11rem;
            margin: 20.4rem 0 1.8rem;
          }
          .name {
            font-size: 7rem;
            line-height: 9.2rem;
          }
        }
      }
    }
    .misc-info-box {
      float: left;
      width: 36rem;
      height: 79.5rem;
      background: #364559;
      padding: 3.6rem 3.6rem 0;
      .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;

        /* #FFFFFF */

        color: #ffffff;
        margin-bottom: 3.6rem;
      }
      /deep/.info-box {
        div {
          &:not(.line) {
            font-family: Montserrat;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 1.7rem;
            margin-bottom: 2.4rem;
            span {
              &:first-child {
                text-transform: uppercase;
                color: #a0a4b0;
              }
              &:last-child {
                float: right;
                text-align: right;
                color: #ffffff;
              }
            }
          }
          &.line {
            width: 12rem;
            height: 0.2rem;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 0.1rem;
            margin: 0.6rem 8.4rem 3.1rem;
          }
        }
      }
    }
  }
  .info-list-box {
    width: 126.4rem;
    margin: 3rem auto 12rem;
    .gallery-box {
      float: left;
      width: 54.4rem;
      .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;

        /* #FFFFFF */

        color: #ffffff;
        margin-bottom: 3.6rem;
      }
      .gallery-list {
        &.gallery-pc-list {
          display: block;
        }
        &.gallery-mob-list {
          display: none;
        }
        .gallery-info {
          position: relative;
          margin-bottom: 3.6rem;
          img {
            &.gallery {
              width: 100%;
              border: 0.2rem solid rgba(255, 255, 255, 0.2);
              cursor: pointer;
            }
            &.big {
              position: absolute;
              bottom: 2.4rem;
              right: 2.4rem;
              width: 2.4rem;
              cursor: pointer;
            }
          }
          &:hover {
            img.gallery {
              border: 0.4rem solid #fff;
            }
          }
        }
      }
    }
    .biography-box {
      float: left;
      width: 66rem;
      padding-left: 6rem;
      .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;

        /* #FFFFFF */

        color: #ffffff;
        margin-bottom: 3.6rem;
      }
      /deep/.content {
        p {
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.4rem;
          color: #ffffff;
          margin-bottom: 3.6rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .shadow-box {
    position: fixed;
    z-index: 100000000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
    .shadow-info {
      img {
        margin: auto;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  // .shadow-box {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(0, 0, 0, 0.5);
  //   z-index: 100000000;
  //   .shadow-info {
  //     // max-width: 144rem;
  //     width: 144rem;
  //     margin: 0 auto;
  //     padding: 10vh 0;
  //     height: 100vh;
  //     text-align: center;

  //     .shadow {
  //       position: relative;
  //       display: inline-block;
  //       height: 100%;
  //       width: 100%;
  //       img {
  //         &.shadow-img {
  //           max-height: 100%;
  //           max-width: 100%;
  //         }
  //         &.shadow-close {
  //           position: absolute;
  //           top: 2.4rem;
  //           right: 2.4rem;
  //           cursor: pointer;
  //           width: 5.4rem;
  //         }
  //       }
  //     }
  //   }
  // }
}
@media screen and (max-width: 960px) {
  .worldview-ranger-main {
    width: 100%;
    .banner-box {
      // height: calc(100vh - 7.5rem);
      .map-box {
        top: 10.4rem;
        left: 3.6rem;
      }
      .name-box {
        top: 14.5rem;
        left: 3.6rem;
        .name {
          font-size: 6.4rem;
          line-height: 7.8rem;
          margin-bottom: -1rem;
        }
        .title {
          font-size: 2rem;
          line-height: 2.4rem;
        }
      }
      .powers-box {
        left: 3.6rem;
        bottom: 3.2rem;
        .title {
          font-size: 1.4rem;
          line-height: 1.7rem;
          span {
            margin-left: 0.6rem;
          }
        }
        .name {
          margin: 0;
          font-size: 3.6rem;
          line-height: 4.4rem;
          span {
            display: block;
            font-size: 3.6rem;
            line-height: 5.2rem;
            margin-left: 0;
            margin-top: -0.8rem;
          }
        }
        .desc {
          width: calc(100vw - 7.2rem);
          font-size: 1.4rem;
          line-height: 2.4rem;
          margin: 2.4rem 0 1.2rem;
        }
      }
      .code-box {
        display: none;
      }
      .ranger {
        width: 100%;
        background-size: auto 100%;
      }
      .rotating-box {
        display: none;
      }
    }
    .audio-box {
      display: block;
      height: 6.4rem;
      background: #2a2a2a;
      overflow: hidden;
      .content {
        float: left;
        width: calc(100vw - 6.4rem);
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 6.4rem;
        height: 6.4rem;
        text-transform: uppercase;
        color: #ffffff;
        overflow: hidden;
        .text {
          width: fit-content;
          display: flex;
          position: relative;
          -webkit-animation: marquee 5s linear infinite;
          animation: marquee 5s linear infinite;
          span {
            width: 16rem;
            text-shadow: 16rem 0 currentColor, calc(16rem * 2) 0 currentColor,
              calc(16rem * 3) 0 currentColor, calc(16rem * 4) 0 currentColor,
              calc(16rem * 5) 0 currentColor, calc(16rem * 6) 0 currentColor,
              calc(16rem * 7) 0 currentColor, calc(16rem * 8) 0 currentColor,
              calc(16rem * 9) 0 currentColor, calc(16rem * 10) 0 currentColor;
            -webkit-animation: marquee 5s linear infinite;
            animation: marquee 5s linear infinite;
            padding-left: 2rem;
          }
        }
      }
      .audio {
        float: left;
        width: 6.4rem;
        height: 6.4rem;
        background: #2a2a2a;
        background-image: url(@/assets/images/worldview-audio.png);
        background-size: 2.4rem 2.4rem;
        background-position: center;
        background-repeat: no-repeat;
        filter: drop-shadow(0 0 3.6rem rgba(0, 0, 0, 0.75));
        cursor: pointer;
      }
    }
    .lines-box {
      width: 100%;
      height: unset;
      background: #ffffff;
      padding: 8rem 3.6rem;
      font-size: 3.6rem;
      line-height: 4rem;
      display: flex;
    }
    .basic-box {
      width: 100%;
      height: unset;
      margin: 0;
      .connections-box {
        float: unset;
        width: 100%;
        height: unset;
        padding-bottom: 3.6rem;
        .connections-list {
          .connections-info-box {
            position: relative;
            float: left;
            width: calc((100% - 1.2rem) / 2);
            height: 20.5rem;
            margin-right: 1.2rem;
            margin-top: 3.6rem;
            text-align: center;
            &:nth-child(2n + 2) {
              margin-right: 0;
            }
            img {
              width: 14.5rem;
            }
            .connections-info {
              width: 14.5rem;
              height: 6.1rem;
              padding: 1.2rem 1rem;
              left: 50%;
              margin-left: -7.25rem;
              text-align: left;
              .name {
                font-size: 2rem;
                line-height: 2.4rem;
              }
              .title {
                font-size: 1.1rem;
                line-height: 1.3rem;
              }
            }
          }
        }
      }
      .affiliation-box {
        float: unset;
        width: 100%;
        height: 39.7rem;
        background-image: url(@/assets/images/worldview-ranger-rin-affiliation-mobile.png);
        .info-box {
          img {
            margin: 4.8rem 0 2.4rem;
          }
        }
        &:hover {
          .info-box {
            img {
              margin: 4.2rem 0 1.8rem;
            }
          }
        }
      }
      .misc-info-box {
        float: unset;
        width: 100%;
        height: unset;
        padding-bottom: 1.2rem;
        .title {
          margin-bottom: 4.2rem;
        }
        /deep/.info-box {
          div {
            &.line {
              margin: 0.8rem 9.1rem 3.1rem 9.2rem;
            }
          }
        }
      }
    }
    .info-list-box {
      width: unset;
      margin: 0;
      .gallery-box {
        float: unset;
        width: unset;
        .title {
          margin: 3.6rem 3.6rem 1.2rem;
        }
        .gallery-list {
          overflow: hidden;
          height: 20rem;
          width: 100%;
          &.gallery-pc-list {
            display: none;
          }
          &.gallery-mob-list {
            padding-right: 1.2rem;
            display: block;
          }
          .gallery-info {
            float: left;
            position: relative;
            width: 23.3rem;
            height: 20rem;

            margin-left: 1.2rem;
            margin-bottom: 0;
            vertical-align: middle;
            line-height: 20rem;
            background: #333;
            border: 0.2rem solid rgba(255, 255, 255, 0.2);
            img {
              &.gallery {
                width: 100%;
                height: auto;
                border: unset;
                vertical-align: top;
              }
              &.big {
                bottom: 1.6rem;
                right: 1.6rem;
              }
            }
            &:hover {
              img.gallery {
                border: unset;
              }
            }
          }
        }
      }
      .biography-box {
        float: unset;
        width: 100%;
        padding: 3.6rem;
        .title {
          margin-bottom: 1.2rem;
        }
        /deep/.content {
          p {
            margin-bottom: 2.4rem;
          }
        }
      }
    }
    .shadow-box {
      .shadow-info {
        img {
        }
      }
    }
  }
}
#audio {
  width: 1px;
  height: 1px;
  position: absolute;
  left: -10px;
  top: -10px;
}
@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
<style lang="less">
.worldview-ranger-main {
  .skip-list {
    height: 2.4rem;
    vertical-align: bottom;
    .swiper-pagination-bullet {
      display: inline-block;
      width: 8rem;
      height: 2.4rem;
      background: rgba(255, 255, 255, 0.4);
      margin-right: 1.2rem;
      cursor: pointer;
      &:hover {
        background: #ffffff;
      }
      &.swiper-pagination-bullet-active {
        background: #ffffff;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .worldview-ranger-main {
    .skip-list {
      height: 1.6rem;
      .swiper-pagination-bullet {
        width: 6rem;
        height: 1.6rem;
        margin-right: 0.4rem;
      }
    }
  }
}
</style>
