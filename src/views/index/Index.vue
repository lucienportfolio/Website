<template>
  <section class="main">
    <div class="rotating-box"></div>
    <div
      class="banner-box sect"
      v-html="bannerInfo.html"
      :style="`background-image: url(${bannerInfo.material_list.material.url})`"
    ></div>
    <div class="rangers-box sect">
      <div class="background"></div>
      <div class="rangers-info">
        <div class="title inside">{{ rangerInfo.name }}</div>
        <div class="info-box" v-html="rangerInfo.html"></div>
      </div>
    </div>
    <div class="perks-box sect">
      <div class="background"></div>
      <div class="perks-box-list">
        <div
          class="perks"
          v-for="(v, i) in perkInfo"
          :key="i"
          :style="
            v.material_list.material.url
              ? `background-image: url(${v.material_list.material.url})`
              : ''
          "
        >
          <div class="title">{{ v.name }}</div>
          <div class="desc" v-html="v.html"></div>
        </div>
      </div>
    </div>
    <section class="roadmap-box sect" :style="`background-image:url(${roadMapBg})`">
      <div class="roadmap-box-block">
        <div class="roadmap-glitch"></div>
        <div class="roadmap-mobile-bg"></div>
        <div
          class="roadmap-info-box"
          @touchstart.stop="onRoadmapTouchStart"
          @touchmove.stop="onRoadmapTouchMove"
          @touchend.stop="onRoadmapTouchEnd"
        >
          <div id="wrapper">
            <div class="title">{{ roadMapInfo[0].name }}</div>
            <div class="roadmap-info-list">
              <div
                class="roadmap-info"
                v-for="(item, i) in roadMapInfo"
                :key="i"
                v-html="item.html"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden">
        <img :src="v.material_list.material.url" v-for="(v, i) in roadMapInfo" :key="i" />
      </div>
      <div class="arrow">
        <div class="left-arrow" id="roadmap-left-arrow" @click="onRoadLeft(0)">
          <img src="https://ambrus.s3.amazonaws.com/1654419946095_0.40_arrow-left.png" alt="" />
        </div>
        <div class="right-arrow" id="roadmap-right-arrow" @click="onRoadRight">
          <img src="https://ambrus.s3.amazonaws.com/1654419946096_0.14_arrow-right.png" alt="" />
        </div>
      </div>
      <div class="skip-box">
        <div class="skip-has"></div>
        <div
          class="skip-bot"
          :style="roadMapInfo.length ? `width:${99 / roadMapInfo.length}%` : ''"
        ></div>
      </div>
    </section>
    <section class="token-box sect">
      <!-- <div class="background"></div> -->
      <div class="token-info-box">
        <div class="title inside">{{ tokenInfo.name }}</div>
        <div class="token-info-list clearfix" v-html="tokenInfo.html"></div>
      </div>
    </section>
    <section class="team-box sect">
      <div class="title inside">{{ teamInfo[0].name }}</div>
      <div class="desc">{{ teamInfo[0].introduction }}</div>
      <div class="arrow">
        <div class="left-arrow" id="team-left-arrow">
          <img src="https://ambrus.s3.amazonaws.com/1654419946095_0.40_arrow-left.png" alt="" />
        </div>
        <div class="right-arrow" id="team-right-arrow">
          <img src="https://ambrus.s3.amazonaws.com/1654419946096_0.14_arrow-right.png" alt="" />
        </div>
      </div>
      <swiper
        :modules="swiperModules"
        slides-per-view="auto"
        :space-between="24"
        :simulate-touch="false"
        :navigation="{
          nextEl: '#team-right-arrow',
          prevEl: '#team-left-arrow'
        }"
        class="team-box-list"
      >
        <template v-for="(v, i) in teamInfo">
          <swiper-slide class="team-info-box" :key="i" v-if="i > 0">
            <div class="team-member-avatar-box">
              <img :src="v.material_list.material.url" />
            </div>
            <div class="team-member-info" v-html="v.html"></div>
          </swiper-slide>
        </template>
      </swiper>
    </section>
    <section class="faq-box sect">
      <div class="faq-info-box">
        <div class="title inside">{{ faqInfo[0][0].name }}</div>
        <div class="desc">{{ faqInfo[0][0].introduction }}</div>
        <div class="faq-box-list clearfix">
          <template v-for="(pv, pi) in faqInfo">
            <div class="faq-box-info-list" :key="pi" v-if="pi > 0">
              <div class="faq-box-info" v-for="(v, i) in pv" :key="i">
                <div
                  :class="v.active ? 'faq-question active' : 'faq-question'"
                  @click="onClickQuestion(pi, i)"
                >
                  {{ v.name }}
                </div>
                <div class="faq-reply" v-html="v.html"></div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import $ from 'jquery'
import { onCheckMaterial } from '@/utils/index.js'
import { getBlockInfoApi } from '@/api/block/index'

export default defineComponent({
  name: 'IndexIndex',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const bannerInfo = ref({
      html: '',
      material_list: {
        material: { type: '', url: '' },
        material_pc: { type: '', url: '' },
        material_mob: { type: '', url: '' }
      }
    })
    const rangerInfo = ref({
      name: '',
      html: '',
      material_list: {
        material: { type: '', url: '' },
        material_pc: { type: '', url: '' },
        material_mob: { type: '', url: '' }
      }
    })
    const perkInfo = ref([])

    const tokenInfo = ref({
      name: '',
      html: '',
      material_list: {
        material: { type: '', url: '' },
        material_pc: { type: '', url: '' },
        material_mob: { type: '', url: '' }
      }
    })
    const roadMapInfo = ref([
      {
        name: '',
        material_list: {
          material: { type: '', url: '' },
          material_pc: { type: '', url: '' },
          material_mob: { type: '', url: '' }
        }
      }
    ])
    const roadMapBg = ref('')
    const teamInfo = ref([
      {
        name: '',
        introduction: ''
      }
    ])
    const faqInfo = ref([[{ name: '', introduction: '' }], [], []])
    const scrollFun = (e) => {
      console.log(e)
      const sections = document.getElementsByClassName('sect')
      if (window.scrollY < sections[1].offsetTop - 480) {
        sections[1].getElementsByClassName('inside')[0].style.filter = 'grayscale(100%)'
      }

      if (window.scrollY > sections[1].offsetTop - 480) {
        sections[1].getElementsByClassName('inside')[0].style.filter = 'grayscale(0)'
      }

      if (window.scrollY > sections[2].offsetTop - 480) {
        sections[1].getElementsByClassName('inside')[0].style.filter = 'grayscale(100%)'
      }

      if (window.scrollY > sections[3].offsetTop - 480) {
        sections[4].getElementsByClassName('inside')[0].style.filter = 'grayscale(100%)'
      }

      if (window.scrollY > sections[4].offsetTop - 480) {
        sections[4].getElementsByClassName('inside')[0].style.filter = 'grayscale(0)'
        sections[5].getElementsByClassName('inside')[0].style.filter = 'grayscale(100%)'
      }

      if (window.scrollY > sections[5].offsetTop - 480) {
        sections[4].getElementsByClassName('inside')[0].style.filter = 'grayscale(100%)'
        sections[5].getElementsByClassName('inside')[0].style.filter = 'grayscale(0)'
        sections[6].getElementsByClassName('inside')[0].style.filter = 'grayscale(100%)'
      }

      if (window.scrollY > sections[6].offsetTop - 480) {
        sections[5].getElementsByClassName('inside')[0].style.filter = 'grayscale(100%)'
        sections[6].getElementsByClassName('inside')[0].style.filter = 'grayscale(0)'
      }
    }
    onUnmounted(() => {
      document.removeEventListener('scroll', scrollFun, false)
    })
    onMounted(async () => {
      document.addEventListener('scroll', scrollFun, false)

      const bannerInfoRes = await getBlockInfoApi('indexBanner')
      if (bannerInfoRes.code === 200) {
        if (bannerInfoRes.data.length > 0) {
          bannerInfo.value.html = bannerInfoRes.data[0].html
          bannerInfo.value.material_list = onCheckMaterial(
            bannerInfoRes.data[0].material,
            bannerInfoRes.data[0].material_mob
          )
        }
      }
      const rangerInfoRes = await getBlockInfoApi('indexRangers')
      if (rangerInfoRes.code === 200) {
        if (bannerInfoRes.data.length > 0) {
          rangerInfo.value.name = rangerInfoRes.data[0].name
          rangerInfo.value.html = rangerInfoRes.data[0].html
          rangerInfo.value.material_list = onCheckMaterial(
            rangerInfoRes.data[0].material,
            rangerInfoRes.data[0].material_mob
          )
        }
      }
      const perkInfoRes = await getBlockInfoApi('indexRanderPark')
      if (perkInfoRes.code === 200) {
        perkInfo.value = []
        perkInfoRes.data.forEach((v) => {
          perkInfo.value.push({
            name: v.name,
            html: v.html,
            material_list: onCheckMaterial(v.material, v.material_mob)
          })
        })
      }

      const tokenInfoRes = await getBlockInfoApi('indexWhitePaper')
      if (tokenInfoRes.code === 200) {
        if (tokenInfoRes.data.length > 0) {
          tokenInfo.value.name = tokenInfoRes.data[0].name
          tokenInfo.value.html = tokenInfoRes.data[0].html
          tokenInfo.value.material_list = onCheckMaterial(
            tokenInfoRes.data[0].material,
            tokenInfoRes.data[0].material_mob
          )
        }
      }
      const roadMapInfoRes = await getBlockInfoApi('indexRoadMap')
      if (roadMapInfoRes.code === 200) {
        roadMapInfo.value = []
        roadMapInfoRes.data.forEach((v) => {
          roadMapInfo.value.push({
            name: v.name,
            html: v.html,
            material_list: onCheckMaterial(v.material, v.material_mob)
          })
        })
        roadMapBg.value = roadMapInfo.value[0].material_list.material.url
      }
      const teamInfoRes = await getBlockInfoApi('indexTeam')
      if (teamInfoRes.code === 200) {
        teamInfo.value = []
        teamInfoRes.data.forEach((v) => {
          teamInfo.value.push({
            name: v.name,
            html: v.html,
            introduction: v.introduction,
            material_list: onCheckMaterial(v.material, v.material_mob)
          })
        })
      }

      const faqInfoRes = await getBlockInfoApi('indexFaq')
      if (faqInfoRes.code === 200) {
        faqInfo.value = [[], [], []]
        faqInfoRes.data.forEach((v, i) => {
          if (i === 0) {
            faqInfo.value[0].push({
              name: v.name,
              html: v.html,
              introduction: v.introduction,
              active: false,
              material_list: onCheckMaterial(v.material, v.material_mob)
            })
          } else {
            const num = i % 2 === 0 ? 2 : 1
            faqInfo.value[num].push({
              name: v.name,
              html: v.html,
              introduction: v.introduction,
              active: false,
              material_list: onCheckMaterial(v.material, v.material_mob)
            })
          }
        })
      }
      $('.faq-question').removeClass('active')

      $('.roadmap-info').eq(0).show().siblings().hide()
      let startDX = 0
      let startDY = 0
      document.addEventListener('touchstart', (e) => {
        startDX = e.targetTouches[0].pageX
        startDY = e.targetTouches[0].pageY
      })
      document.addEventListener(
        'touchmove',
        (e) => {
          const moveDX = e.targetTouches[0].pageX
          const moveDY = e.targetTouches[0].pageY

          if (Math.abs(moveDX - startDX) > Math.abs(moveDY - startDY)) {
            e.preventDefault()
          }
        },
        {
          passive: false
        }
      )
    })

    // roadmap
    let roadmapIndex = 0
    let roadmapFlag = true
    const onRoadLeft = (type) => {
      const roadmapDiv = $('.roadmap-info')
      const roadmapListDiv = $('.roadmap-info-list')
      const roadmapBoxDiv = $('.roadmap-info-box')
      // const roadmapBgDiv = $('.roadmap-box')
      const roadmapGlitchDiv = $('.roadmap-glitch')
      const roadmapSkipDiv = $('.skip-bot')
      if (roadmapIndex > 0 && roadmapFlag) {
        // eslint-disable-next-line radix
        const roadmapRemove = Math.abs(parseInt(roadmapBoxDiv.innerWidth()))
        roadmapFlag = false
        if (type === 1) {
          roadmapListDiv.css('transform', `translateX(${roadmapRemove}px)`)
        } else {
          roadmapListDiv.css('transform', `translateX(-${roadmapRemove}px)`)
        }
        roadmapBoxDiv.css('opacity', 0)
        roadmapIndex -= 1
        roadmapGlitchDiv
          .css(
            'background-image',
            `url(${roadMapInfo.value[roadmapIndex].material_list.material.url})`
          )
          .show()

        setTimeout(() => {
          roadmapGlitchDiv.css('opacity', 0.6).css('animation', 'glitch-anim-1-horizontal 0.98s')
        }, 10)
        setTimeout(() => {
          roadMapBg.value = roadMapInfo.value[roadmapIndex].material_list.material.url
        }, 500)
        setTimeout(() => {
          roadmapDiv.eq(roadmapIndex + 1).hide()
          roadmapDiv.eq(roadmapIndex).show()
          roadmapBoxDiv.css('opacity', 1)
          roadmapSkipDiv.css(
            'transform',
            `translateX(${
              ($('.skip-box').width() * ((99 / roadmapDiv.length) * roadmapIndex)) / 100
            }px)`
          )
          roadmapListDiv.css('transform', 'translateX(0)')
          roadmapGlitchDiv.css('opacity', 0).hide()
          roadmapFlag = true
        }, 1000)
      }
    }

    const onRoadRight = () => {
      const roadmapDiv = $('.roadmap-info')
      const roadmapListDiv = $('.roadmap-info-list')
      const roadmapBoxDiv = $('.roadmap-info-box')
      const roadmapGlitchDiv = $('.roadmap-glitch')
      const roadmapSkipDiv = $('.skip-bot')
      if (roadmapIndex < roadmapDiv.length - 1 && roadmapFlag) {
        // eslint-disable-next-line radix
        const roadmapRemove = Math.abs(parseInt(roadmapBoxDiv.innerWidth()))
        roadmapFlag = false
        roadmapListDiv.css('transform', `translateX(-${roadmapRemove}px)`)
        roadmapBoxDiv.css('opacity', 0)

        roadmapIndex += 1
        roadmapGlitchDiv
          .css(
            'background-image',
            `url(${roadMapInfo.value[roadmapIndex].material_list.material.url})`
          )
          .show()
        setTimeout(() => {
          roadmapGlitchDiv.css('opacity', 0.6).css('animation', 'glitch-anim-1-horizontal 0.98s')
        }, 10)
        setTimeout(() => {
          roadMapBg.value = roadMapInfo.value[roadmapIndex].material_list.material.url
        }, 500)

        setTimeout(() => {
          roadmapDiv.eq(roadmapIndex - 1).hide()
          roadmapDiv.eq(roadmapIndex).show()

          roadmapBoxDiv.css('opacity', 1)
          roadmapSkipDiv.css(
            'transform',
            `translateX(${
              ($('.skip-box').width() * ((99 / roadmapDiv.length) * roadmapIndex)) / 100
            }px)`
          )
          roadmapListDiv.css('transform', 'translateX(0)')
          roadmapGlitchDiv.css('opacity', 0).hide()
          roadmapFlag = true
        }, 1000)
      }
    }

    let startX = 0
    let startY = 0
    let moveX = 0
    let moveY = 0
    const onRoadmapTouchStart = (e) => {
      const touch = e.touches[0] // 有1个手指头
      startX = touch.pageX
      startY = touch.pageY
    }
    const onRoadmapTouchMove = (e) => {
      const touch = e.touches[0]
      moveX = touch.pageX
      moveY = touch.pageY
      if (Math.abs(moveX - startX) > Math.abs(moveY - startY)) {
        e.preventDefault()
      }
    }
    const onRoadmapTouchEnd = (e) => {
      if (Math.abs(moveX - startX) > 30 && Math.abs(moveY - startY) < Math.abs(moveX - startX)) {
        e.preventDefault()
        if (moveX - startX <= 0) {
          onRoadLeft(1)
        } else {
          onRoadRight()
        }
      }
    }
    const onClickQuestion = (pi, i) => {
      if (faqInfo.value[pi][i].active) {
        faqInfo.value[pi][i].active = !faqInfo.value[pi][i].active
      } else {
        faqInfo.value.forEach((opv, opi) => {
          faqInfo.value[opi].forEach((ov, oi) => {
            faqInfo.value[opi][oi].active = !!(opi === pi && oi === i)
            if (!(opi === pi && oi === i)) {
              $('.faq-box-info-list')
                .eq(opi - 1)
                .find('.faq-box-info')
                .eq(oi)
                .find('.faq-reply')
                .slideUp()
            }
          })
        })
      }
      $('.faq-box-info-list')
        .eq(pi - 1)
        .find('.faq-box-info')
        .eq(i)
        .find('.faq-reply')
        .slideToggle()
    }
    return {
      bannerInfo,
      rangerInfo,
      perkInfo,
      tokenInfo,
      roadMapInfo,
      roadMapBg,
      teamInfo,
      faqInfo,
      onClickQuestion,
      onRoadLeft,
      onRoadRight,
      onRoadmapTouchStart,
      onRoadmapTouchMove,
      onRoadmapTouchEnd,
      swiperModules: [Navigation, Pagination, A11y]
    }
  }
})
</script>
<style lang="less" scoped>
.banner-box {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  -webkit-mask: url(https://ambrus.s3.amazonaws.com/1654419946111_0.20_header-mask.png);
  mask: url(https://ambrus.s3.amazonaws.com/1654419946111_0.20_header-mask.png);
  -webkit-mask-size: auto 100%;
  mask-size: auto 100%;
  -webkit-mask-repeat: repeat-x;
  mask-repeat: repeat-x;
  -webkit-mask-position: top center;
  mask-position: top center;
  /deep/.rin {
    width: 100%;
    height: 100%;

    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
  }

  /deep/.title {
    position: fixed;
    top: 30vh;
    right: 46vw;
    margin: 0;
    width: 100%;
    text-align: right;
    font-family: Teko, sans-serif;
    font-size: 30vh;
    line-height: 22vh;
    z-index: -1;
    text-shadow: 0.02em 0 0 rgba(255, 0, 0, 0.25), -0.02em 0 0 rgba(0, 0, 0, 0.3);
    animation: glitch-text infinite 0.8s linear;
  }
}

@keyframes glitch-text {
  0% {
    text-shadow: 0.02em 0.03em 0 rgba(255, 0, 0, 0.25), -0.02em -0.01em 0 rgba(0, 0, 0, 0.3);
  }
  11% {
    text-shadow: 0.02em 0.03em 0 rgba(255, 0, 0, 0.25), -0.02em -0.01em 0 rgba(0, 0, 0, 0.3);
  }
  12% {
    text-shadow: -0.03em -0.01em 0 rgba(255, 0, 0, 0.25), 0.01em 0.04em 0 rgba(0, 0, 0, 0.3);
  }
  24% {
    text-shadow: -0.03em -0.01em 0 rgba(255, 0, 0, 0.25), 0.01em 0.04em 0 rgba(0, 0, 0, 0.3);
  }
  25% {
    text-shadow: 0.04em 0.03em 0 rgba(255, 0, 0, 0.25), -0.03em -0.01em 0 rgba(0, 0, 0, 0.3);
  }
  49% {
    text-shadow: 0.04em 0.03em 0 rgba(255, 0, 0, 0.25), -0.03em -0.01em 0 rgba(0, 0, 0, 0.3);
  }
  50% {
    text-shadow: -0.01em 0 0 rgba(255, 0, 0, 0.25), 0.03em 0.01em 0 rgba(0, 0, 0, 0.3);
  }
  59% {
    text-shadow: -0.01em 0 0 rgba(255, 0, 0, 0.25), 0.03em 0.01em 0 rgba(0, 0, 0, 0.3);
  }
  60% {
    text-shadow: 0.03em -0.04em 0 rgba(255, 0, 0, 0.25), -0.02em 0.03em 0 rgba(0, 0, 0, 0.3);
  }
  74% {
    text-shadow: 0.03em -0.04em 0 rgba(255, 0, 0, 0.25), -0.02em 0.03em 0 rgba(0, 0, 0, 0.3);
  }
  75% {
    text-shadow: -0.02em 0.01em 0 rgba(255, 0, 0, 0.25), 0.01em 0.04em 0 rgba(0, 0, 0, 0.3);
  }
  84% {
    text-shadow: -0.02em 0.01em 0 rgba(255, 0, 0, 0.25), 0.01em 0.04em 0 rgba(0, 0, 0, 0.3);
  }
  95% {
    text-shadow: -0.03em -0.02em 0 rgba(255, 0, 0, 0.25), -0.02em -0.01em 0 rgba(0, 0, 0, 0.3);
  }
  99% {
    text-shadow: -0.03em -0.02em 0 rgba(255, 0, 0, 0.25), -0.02em -0.01em 0 rgba(0, 0, 0, 0.3);
  }
  100% {
    text-shadow: 0 0 0 rgba(255, 0, 0, 0.25), 0 0 0 rgba(0, 0, 0, 0.3);
  }
}

.background {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: all 0.3s ease-out;
}

.rotating-box {
  width: 15vh;
  height: 15vh;
  background: url(https://ambrus.s3.amazonaws.com/1654419946103_0.07_cs.png);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  bottom: 8.8rem;
  right: 8.8rem;
  animation: circle infinite 5s linear;
  z-index: 99;
  &:hover {
    background: url(https://ambrus.s3.amazonaws.com/1654419946105_0.43_cs2.png);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

.rangers-box {
  position: relative;
  width: 100%;
  .background {
    display: none;
    background: url(https://ambrus.s3.amazonaws.com/1654419946129_0.44_rangers.png);
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
  }
  .rangers-info {
    position: relative;
    width: 115.2rem;
    height: 56.6rem;
    background: url(https://ambrus.s3.amazonaws.com/1654419946131_0.63_rangers-bg.png);
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
    margin: 17.8rem auto 15.4rem;
    padding: 0 0 0 62.5rem;
    box-shadow: 0 1.2rem 3.6rem rgba(0, 0, 0, 0.3);
    /deep/.info-box {
      .desc {
        width: 44.8rem;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 3rem;
        color: #ffffff;
        margin-top: -2.4rem;
        p {
          margin-bottom: 2.4rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .rangers-img {
        position: absolute;
        top: -11.8rem;
        left: 6rem;
        width: 55.1rem;
      }
      .rangers-mobile-img {
        display: none;
        width: 100%;
        margin-top: 3.6rem;
      }
    }

    .title {
      width: 44.8rem;
      font-family: Teko;
      font-weight: 400;
      font-size: 6.4rem;
      line-height: 9.2rem;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      padding: 4.8rem 0;
    }
  }
}
.perks-box {
  position: relative;
  width: 100%;
  height: 96rem;
  padding-top: 12rem;
  .background {
    display: none;
    background: url(https://ambrus.s3.amazonaws.com/1654419946128_0.91_perks.png);
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
  }
  .perks-box-list {
    position: relative;
    width: 115.2rem;
    height: 72rem;
    margin: 0 auto;
    padding: 0 3.6rem;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 1.2rem;
      height: 72rem;
      background: #ff4125;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1.2rem;
      height: 72rem;
      background: #ff4125;
    }
    .perks {
      width: 36rem;
      height: 36rem;
      float: left;
      background-color: #fff;
      padding: 4.8rem 3.6rem 0;
      background-size: cover;
      background-position: center;
      &:nth-child(1) {
        .title {
          color: #ff4125;
        }
        .desc {
          color: #000000;
        }
      }
      .title {
        font-family: Teko;
        font-weight: 400;
        font-size: 4.8rem;
        line-height: 6.9rem;
        text-align: center;
        color: #ffffff;
      }
      .desc {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 3rem;
        color: #ffffff;
      }
    }
  }
}

.token-box {
  position: relative;
  width: 100%;
  padding-top: 12rem;

  .background {
    background: url(https://ambrus.s3.amazonaws.com/1654419946142_0.16_token.png);
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
  }
  .token-info-box {
    width: 117.2rem;
    margin: 0 auto;
    > .title {
      font-family: Teko;
      font-weight: 400;
      font-size: 6.4rem;
      line-height: 9.2rem;
      text-transform: uppercase;
      color: #ffffff;
    }
    .token-info-list {
      padding-bottom: 6.1rem;
      /deep/.token-info {
        float: left;
        width: 50%;
        padding: 0 4.8rem;
        .title {
          font-family: Montserrat;
          font-weight: 700;
          font-size: 2.4rem;
          line-height: 2.9rem;
          color: #ff4125;
          padding-left: 2rem;
          margin: 3.6rem 0 1.6rem;
        }
        .desc {
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 3rem;
          color: #ffffff;
          li {
            list-style-type: disc;
            margin-left: 2rem;
          }
        }
      }
    }
  }
}
.roadmap-box {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 92.8rem;
  transition: all 0.5s ease-in-out;
  -webkit-mask: url(https://ambrus.s3.amazonaws.com/1654419946122_1.00_mask.png);
  mask: url(https://ambrus.s3.amazonaws.com/1654419946122_1.00_mask.png);
  -webkit-mask-size: auto 100%;
  mask-size: auto 100%;
  -webkit-mask-repeat: repeat-x;
  mask-repeat: repeat-x;
  -webkit-mask-position: top center;
  mask-position: top center;
  background-size: cover;
  background-position: center;
  z-index: 100;
  .roadmap-box-block {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .roadmap-glitch {
      z-index: 0;
      opacity: 0;
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: all 0.3s;
      background-size: cover;
      background-position: center;
    }
    .roadmap-mobile-bg {
      z-index: 0;
      // opacity: 0.4;
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      box-shadow: 0.4rem 0px 1rem rgba(0, 0, 0, 0.15);
    }
    .roadmap-info-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 1;
      background: url(https://ambrus.s3.amazonaws.com/1654419946139_0.17_roadmap-top.png);
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: left;
      transition: all 0.5s ease-in-out;
      padding: 6rem 0 10.6rem 8.8rem;

      #wrapper {
        width: 66rem;
        height: 100%;
      }

      .title {
        font-family: Teko;
        font-style: normal;
        font-weight: 400;
        font-size: 6.4rem;
        line-height: 9.2rem;
        text-transform: uppercase;
        color: #000;
        display: inline-block;
        border-bottom: 0.1rem solid #465358;
      }
      .roadmap-info-list {
        // position: relative;
        // width: 59.1rem;
        height: calc(100% - 9.2rem);
        transition: all 0.2s ease-in-out;
        .roadmap-info {
          // position: absolute;
          // width: 59.1rem;
          // height: calc(100% - 15.1rem);
          // top: 0;
          // left: 0;
          &:not(:first-child) {
            display: none;
          }
          /deep/.header-info {
            .phase {
              margin-top: 2.4rem;
              font-family: Montserrat;
              font-size: 1.4rem;
              font-weight: 700;
              line-height: 2.4rem;
              text-transform: uppercase;
              color: #a0a4b0;
            }
            .desc {
              width: 28.9rem;
              font-family: Montserrat;
              font-weight: 500;
              font-size: 1.4rem;
              line-height: 2.4rem;
              color: #000;
            }
          }
          /deep/.footer-info {
            position: absolute;
            bottom: 10.6rem;
            .time {
              font-family: Teko;
              font-weight: 300;
              font-size: 10.8rem;
              line-height: 15.5rem;
              color: #ffffff;
              span {
                font-family: Montserrat;
                font-weight: 300;
                font-size: 1.6rem;
                line-height: 2rem;
                color: #a0a4b0;
                padding-left: 1.2rem;
              }
            }
            .text {
              margin-top: -2.5rem;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              font-size: 2.4rem;
              line-height: 2.9rem;
              text-transform: uppercase;
              color: #ff4125;
            }

            .desc {
              margin-top: 0.4rem;
              width: 50.3rem;
              font-family: Montserrat;
              font-weight: 500;
              font-size: 1.4rem;
              line-height: 2.4rem;
              color: #000;
            }
          }
        }
      }
    }
  }
  .preload-video-list {
    display: none;
  }
  .arrow {
    position: absolute;
    bottom: 7.1rem;
    right: 8.8rem;
    height: 6rem;
    z-index: 66;
    .left-arrow {
      width: 6rem;
      height: 6rem;
      box-sizing: border-box;
      border-radius: 0.4rem;
      float: left;
      text-align: center;
      margin-left: 1.2rem;
      position: relative;
      cursor: pointer;
      background: #465358;
      img {
        position: absolute;
        top: 1.8rem;
        left: 1.8rem;
        width: 2.1rem;
      }
    }
    .right-arrow {
      width: 6rem;
      height: 6rem;
      box-sizing: border-box;
      border-radius: 0.4rem;
      float: left;
      text-align: center;
      margin-left: 1.2rem;
      position: relative;
      cursor: pointer;
      background: #465358;
      img {
        position: absolute;
        top: 1.8rem;
        right: 1.8rem;
        width: 2.1rem;
      }
    }
  }
  .skip-box {
    position: absolute;
    width: 80rem;
    height: 1rem;
    left: 8.8rem;
    bottom: 7.2rem;
    background: rgba(0, 0, 0, 0.2);
    z-index: 64;
    .skip-has {
      position: absolute;
      width: 10%;
      height: 1rem;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0.5;
    }
    .skip-bot {
      position: absolute;
      width: 19.8%;
      height: 0.2rem;
      left: 0.5%;
      top: 0.4rem;
      background: #ffffff;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
      transition: all 0.5s ease-in-out;
    }
  }
}
.team-box {
  position: relative;
  padding: 12rem 8.8rem 6rem;
  .title {
    font-family: Teko;
    font-style: normal;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    margin-bottom: -1.2rem;
    float: left;
    span {
      color: #ff4125;
    }
  }
  .desc {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #fff;
    padding-bottom: 40rem;
    margin-top: 8rem;
  }
  .arrow {
    position: absolute;
    top: 16rem;
    right: 8.8rem;
    height: 6rem;
    .left-arrow {
      width: 6rem;
      height: 6rem;
      box-sizing: border-box;
      border-radius: 0.4rem;
      float: left;
      text-align: center;
      margin-left: 1.2rem;
      position: relative;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.5);
      img {
        position: absolute;
        top: 1.8rem;
        left: 1.8rem;
        width: 2.1rem;
      }
    }
    .right-arrow {
      width: 6rem;
      height: 6rem;
      box-sizing: border-box;
      border-radius: 0.4rem;
      float: left;
      text-align: center;
      margin-left: 1.2rem;
      position: relative;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.5);
      img {
        position: absolute;
        top: 1.8rem;
        right: 1.8rem;
        width: 2.1rem;
      }
    }
  }
  .team-box-list {
    position: absolute;
    /* top: 0; */
    top: 25.2rem;
    left: 0;
    overflow: hidden;
    .team-info-box {
      width: 23.3rem;
      min-height: 38.2rem;
      filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1));
      /deep/.team-member-avatar-box {
        position: relative;
        max-height: 23.3rem;
        overflow: hidden;
        > img {
          width: 100%;
          overflow: hidden;
        }
      }

      /deep/.team-member-info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 23.3rem;
        height: 14.9rem;
        padding: 1.6rem 1.6rem 0;
        background: rgba(0, 0, 0, 0.5);
        .link {
          position: absolute;
          right: 1.6rem;
          top: -5.2rem;
          a {
            img {
              width: 3.6rem;
              margin-left: 0.6rem;
            }
          }
        }

        .name {
          font-family: Montserrat;
          font-weight: 600;
          font-size: 1.6rem;
          line-height: 2rem;
          color: #fff;
        }
        .post {
          font-family: Montserrat;
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 2.1rem;
          color: #ff4125;
        }
        .desc {
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.1rem;
          color: #fff;
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0;
          margin: 0.4rem 0px;
        }
      }
    }
  }
  .swiper {
    width: 100%;
    padding: 1rem 8.8rem;
    .swiper-slide {
      width: 23.3rem;
    }
  }
  .team-underline {
    .left-under {
      float: left;
      width: 45%;
      height: 0.2rem;
      background: #465358;
      margin-top: 0.8rem;
    }
    .center-box {
      float: left;
      width: 10%;
      height: 1.8rem;
      text-align: center;
      img {
        width: 1.8rem;
      }
    }
    .right-under {
      /* position: absolute; */
      float: left;
      width: 45%;
      height: 0.2rem;
      background: #465358;
      margin-top: 0.8rem;
    }
  }
  .partner-box-list {
    /* margin-top: 4.06rem; */
    /* width: 126rem; */
    margin: 4.06rem auto 0;
    .partner-box {
      float: left;
      width: 15%;
      height: 6rem;
      line-height: 6rem;
      background: #c4c4c4;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.6rem;
      color: #000000;
      margin-right: 2%;
      text-align: center;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.faq-box {
  position: relative;
  padding: 6rem 0 16rem;
  .faq-info-box {
    width: 125.2rem;
    margin: 0 auto;
    .title {
      font-family: Teko;
      font-style: normal;
      font-weight: 400;
      font-size: 6.4rem;
      line-height: 9.2rem;
      text-transform: uppercase;
      color: #fff;
      text-align: center;
    }
    .desc {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.8rem;
      color: #fff;
      margin-top: -1.2rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    .faq-box-info-list {
      float: left;
      width: 62rem;
      margin-right: 1.2rem;
      &:nth-child(2) {
        margin-right: 0;
      }
      .faq-box-info {
        margin-top: 1.6rem;
        .faq-question {
          position: relative;
          background: #000;
          border-radius: 4rem;
          border-radius: 0.4rem 0.4rem 0 0;
          width: 100%;
          height: 4.8rem;
          line-height: 4.8rem;
          font-family: Montserrat;
          font-weight: 500;
          font-size: 1.4rem;
          color: #fff;
          padding: 0 1.2rem;
          cursor: pointer;
          &::before {
            content: '';
            display: block;
            width: 1.2rem;
            height: 1.2rem;
            background-image: url(https://ambrus.s3.amazonaws.com/1653214783660_0.56_faq-top.png);
            background-size: 100% auto;
            position: absolute;
            top: 0;
            left: 0;
          }
          &.active {
            color: #ffffff;
            background: #ff4125;
            border-radius: 0.4rem 0.4rem 0 0;
            &::before {
              background-image: url(https://ambrus.s3.amazonaws.com/1653214783659_0.48_faq-active.png);
            }
          }
        }
        /deep/.faq-reply {
          padding: 2.4rem;
          font-family: Montserrat;
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 2.4rem;
          color: #ffffff;
          background: #465358;
          border-radius: 0px 0px 4px 4px;
          display: none;
          li {
            list-style-type: disc;
            margin-left: 2rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .banner-box {
    overflow: hidden;
    /deep/.rin {
      width: 145%;
      height: 110%;
      background-size: auto 80%;
      background-position: right;
      background-repeat: no-repeat;
      z-index: 1;
    }

    /deep/.title {
      transform: rotate(270deg);
      top: 25vh;
      right: 0;
      left: -11vw;
      font-size: 24vh;
      line-height: 18vh;
      span {
        padding-left: 9vh;
      }
    }
  }
  .rangers-box {
    position: relative;
    width: 100%;
    .rangers-info {
      position: relative;
      width: 100%;
      height: unset;
      background: unset;
      margin: 8rem auto 0;
      padding: 0;
      /deep/.info-box {
        .desc {
          width: unset;
          margin-top: -2.4rem;
          font-size: 1.4rem;
          line-height: 2.4rem;
          padding: 0 3.6rem 0;
          p {
            margin-bottom: 2.4rem;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        .rangers-img {
          display: none;
        }
        .rangers-mobile-img {
          display: block;
        }
      }

      .title {
        width: unset;
        font-size: 3.6rem;
        line-height: 5.2rem;
        padding: 0;
        margin-bottom: 3.6rem;
      }
    }
  }
  .perks-box {
    position: relative;
    width: 100%;
    height: unset;
    padding-top: 0;
    .perks-box-list {
      position: relative;
      width: 100%;
      height: unset;
      margin: 0 auto;
      padding: 0;
      &::before {
        display: none;
      }
      &::after {
        display: none;
      }
      .perks {
        width: 100%;
        height: 27.5rem;
        float: unset;
        background-color: #fff;
        padding: 4.8rem 3.6rem 0;
        &:nth-child(1) {
          height: 30rem;
          .title {
            color: #ff4125;
          }
          .desc {
            color: #000000;
          }
        }
        .title {
          font-size: 3.6rem;
          line-height: 5.2rem;
        }
        .desc {
          font-size: 1.4rem;
          line-height: 2.4rem;
        }
      }
    }
  }
  .roadmap-box {
    width: 100%;
    height: 62.4rem;
    -webkit-mask: unset;
    mask: unset;
    .roadmap-box-block {
      .video-background {
        display: none;
      }
      .video-background-mobile {
        display: block;
        position: absolute;
        left: 50%;
        top: 31.2rem;
        transform: translate(-50%, -31.2rem);
        width: 100%;
        height: 62.4rem;
        object-fit: cover;
        min-height: 62.4rem;
        transition: all 0.5s ease-in-out;
        opacity: 1;
      }
      .roadmap-mobile-bg {
        display: block;
      }
      .roadmap-info-box {
        padding: 3.6rem 2.4rem;
        width: 100%;
        background: unset;
        #wrapper {
          width: unset;
        }
        .title {
          font-size: 3.6rem;
          line-height: 5.2rem;
          padding-bottom: 1.2rem;
          padding-right: 8.4rem;
          color: #fff;
        }
        .roadmap-info-list {
          width: unset;
          height: calc(100% - 5.2rem);
          .roadmap-info {
            width: 100%;
            height: 100%;
            position: relative;
            /deep/.header-info {
              .desc {
                color: #fff;
              }
            }
            /deep/.footer-info {
              left: 0;
              bottom: 3.4rem;
              .time {
                font-size: 4.8rem;
                line-height: 6.9rem;
              }
              .text {
                font-size: 2rem;
                line-height: 2.4rem;
                margin-top: -0.9rem;
                margin-bottom: 0.9rem;
              }
              .desc {
                color: #fff;
                margin-top: unset;
                width: unset;
              }
            }
          }
        }
      }
    }
    .arrow {
      display: none;
    }
    .skip-box {
      width: 100%;
      left: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.5);
      .skip-has {
        width: 4.1rem;
        background: #000000;
      }
      .skip-bot {
        width: 7.5rem;
        background: #ffffff;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
      }
    }
  }

  .token-box {
    position: relative;
    width: 100%;
    padding-top: 8rem;
    .token-info-box {
      width: unset;
      margin: 0 auto;
      > .title {
        font-size: 3.6rem;
        line-height: 5.2rem;
      }
      .token-info-list {
        padding-bottom: 4.2rem;
        /deep/.token-info {
          float: unset;
          width: unset;
          padding: 0 3.6rem;
          .title {
            font-size: 2.4rem;
            text-align: center;
          }
        }
      }
    }
  }

  .team-box {
    padding: 3.6rem 2.4rem 2.8rem;
    width: 100%;
    .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
      margin-bottom: -0.4rem;
    }
    .desc {
      padding-bottom: 43.1rem;
      margin-top: 6rem;
    }
    .arrow {
      display: none;
    }
    .team-box-list {
      position: absolute;
      top: 13.1rem;
      left: 0;
      padding-left: 2.4rem;
      padding-bottom: 1rem;
    }
    .swiper {
      width: 100%;
      padding-right: 2.4rem;
    }
    .partner-box-list {
      margin-top: 1.66rem;
      .partner-box {
        float: left;
        width: 46%;
        height: 5.4rem;
        line-height: 5.4rem;
        margin-top: 2.4rem;
        margin-right: 8%;
        &:nth-child(2n + 2) {
          margin-right: 0;
        }
      }
    }
  }

  .faq-box {
    padding: 3.6rem 2.4rem 4.8rem;
    width: 100%;
    .faq-info-box {
      width: unset;
      .title {
        font-size: 3.6rem;
        line-height: 5.2rem;
      }
      .desc {
        margin-top: 0;
        margin-bottom: 3.2rem;
      }
      .faq-box-info-list {
        float: unset;
        width: 100%;
        margin-right: 0;
        .faq-box-info {
          margin-top: 1.2rem;
          .faq-question {
            width: 100%;
            height: unset;
            line-height: 2.4rem;
            padding: 1.2rem;
          }
        }
      }
    }
  }
  .rotating-box {
    width: 12rem;
    height: 12rem;
    bottom: 3.6rem;
    right: 1.6rem;
  }
}
</style>
<style>
@keyframes glitch-anim-1-horizontal {
  0% {
    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 10%, 0 10%);
    clip-path: polygon(0 2%, 100% 2%, 100% 10%, 0 10%);
  }
  6% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 25%, 0 25%);
    clip-path: polygon(0 15%, 100% 15%, 100% 25%, 0 25%);
  }
  12% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  20% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
    clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
  }
  26% {
    -webkit-clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
    clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
  }
  32% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  40% {
    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 53%, 0 53%);
    clip-path: polygon(0 33%, 100% 33%, 100% 53%, 0 53%);
  }
  46% {
    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 74%, 0 74%);
    clip-path: polygon(0 44%, 100% 44%, 100% 74%, 0 74%);
  }
  52% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
    clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
  }
  60% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  66% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 77%, 0 77%);
    clip-path: polygon(0 70%, 100% 70%, 100% 77%, 0 77%);
  }
  72% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
    clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
  }
  80% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
    clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
  }
  86% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  100% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 95%, 0 95%);
    clip-path: polygon(0 70%, 100% 70%, 100% 95%, 0 95%);
  }
}
</style>
