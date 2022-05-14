<template>
  <section class="main">
    <section class="banner-box">
      <video
        class="banner-background"
        preload="auto"
        loop
        playsinline
        autoplay
        src="@/assets/videos/home.mp4"
        tabindex="-1"
        muted="muted"
      ></video>
      <div class="banner-info">
        <div class="desc">A blockchain game for gamers</div>
        <img src="@/assets/images/home-banner-text-logo.png" alt="" class="text-logo" />
        <div class="content">
          Year of <span>2100</span><br />
          Average global temperature increased by <span>4 °C</span><br />
          <span>7</span> E4C Rangers<br />
          <span>1</span> Earth to save
        </div>
        <a href="javascript:;" class="btn graybtn">E4C rangers nft coming soon</a>
      </div>
    </section>
    <section class="rangers-box">
      <div class="bg"></div>
      <div class="title"><span>E4C</span> rangers</div>
      <div class="desc">
        <p>
          In the year 2100, the world temperature will rise by 4℃ due to environmental
          deterioration, almost causing the extinction of the human race.
        </p>
        <p>
          Meanwhile, E4C Rangers emerge. E4C Rangers are made up of survivors from all over the
          world, all feeling deeply about the damage humans have done to the planet and have decided
          to come together as E4C Rangers to save it.
        </p>
        <p>Now Rangers has opened new recruitment.</p>
      </div>
      <div class="arrow">
        <div class="left-arrow" id="rangers-left-arrow">
          <img src="@/assets/images/ranger-left.png" alt="" />
        </div>
        <div class="right-arrow" id="rangers-right-arrow">
          <img src="@/assets/images/ranger-right.png" alt="" />
        </div>
      </div>
      <div class="rangers-bg-box"></div>
      <swiper
        :modules="swiperModules"
        slides-per-view="auto"
        :space-between="24"
        :simulate-touch="false"
        :navigation="{
          nextEl: '#rangers-right-arrow',
          prevEl: '#rangers-left-arrow'
        }"
        class="rangers-list"
      >
        <swiper-slide class="ranger-box" v-for="(v, i) in rangerList" :key="i">
          <img src="@/assets/images/blindbox2.gif" alt="" />
          <div class="ranger-name">{{ v.name }}</div>
        </swiper-slide>
      </swiper>
    </section>
    <section class="perks-box">
      <div class="title"><span>E4C</span> Ranger <span>Perks</span></div>
      <div class="desc">
        OG of the gaming metaverse: Rangers holders will become the OG of our incoming gaming
        metaverse, and the Rangers identity will be a guarantee of their future benefits and a
        symbol of their status.
      </div>
      <div class="perks-list clearfix">
        <div
          class="perk-box card"
          v-for="(v, i) in perkList"
          :key="i"
          @mousemove="(e) => onPerkMouseMove(e, i)"
          @mouseleave="(e) => onPerkMouseLeave(e, i)"
        >
          <div class="info">
            <div class="name">{{ v.name }}</div>
            <div class="text">{{ v.text }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="roadmap-box">
      <div class="roadmap-box-block">
        <video
          class="video-background"
          preload="auto"
          loop
          playsinline
          autoplay
          src="@/assets/videos/roadmap-0.mp4"
          tabindex="-1"
          muted="muted"
        ></video>
        <video
          class="video-background-mobile"
          preload="auto"
          loop
          playsinline
          autoplay
          src="@/assets/videos/mobile-0.mp4"
          tabindex="-1"
          muted="muted"
        ></video>
        <div class="roadmap-glitch"></div>
        <div
          class="roadmap-info-box"
          @touchstart.stop="onRoadmapTouchStart"
          @touchmove.stop="onRoadmapTouchMove"
          @touchend.stop="onRoadmapTouchEnd"
        >
          <div class="title">Roadmap</div>
          <div class="roadmap-info-list">
            <div class="roadmap-info">
              <div class="header-info">
                <div class="phase">Phase 1</div>
                <div class="desc">
                  E4C Rangers NFT<br />
                  Biographies of the first series of Rangers<br />
                  Release our whitepaper v1.0
                </div>
              </div>
              <div class="footer-info">
                <div class="time">2079<span>(World Setting)</span></div>
                <div class="text"><span>Echoes</span> of the past</div>
                <div class="desc">
                  On the day that Ishiguro finally completed work on Lady Samurai, tropical storm
                  Shinigami tore through his retreat in the forests of Yamanashi in the country’s
                  Chubu region and killed him. The storm was caused by Hive experimenting with
                  terraforming in the Pacific Ocean and also caused Nuclear fallout at major power
                  plants in Japan
                </div>
              </div>
            </div>
            <div class="roadmap-info">
              <div class="header-info">
                <div class="phase">Phase 2</div>
                <div class="desc">
                  E4C: Fallen Arena launch<br />
                  In-game Ranking system<br />
                  Esports tournaments for Rangers<br />
                  Continued improvement and patching of E4C: Fallen Arena
                </div>
              </div>
              <div class="footer-info">
                <div class="time">2083</div>
                <div class="text">The Calm before <span>the storm</span></div>
                <div class="desc">
                  After the disaster at its headquarters, Hive expands its land reclamation project,
                  and has repurposed its robot bees, which now surveil enemies of the Hive(to be
                  discussed)
                </div>
              </div>
            </div>
            <div class="roadmap-info">
              <div class="header-info">
                <div class="phase">Phase 3</div>
                <div class="desc">
                  E4C DAO Token launch<br />
                  Main game Beta launch<br />
                  Publish complete world stories<br />
                  Trailers launch
                </div>
              </div>
              <div class="footer-info">
                <div class="time">2091</div>
                <div class="text"><span>Set fire</span> to the rain</div>
                <div class="desc">
                  Ilan abducts meteorologists, geologists, and cartographers as he seeks to find an
                  answer to the ever-present pollution that hangs over the city. These people tell
                  Ilan that the pollution is irreversible because the city continues to sink, and
                  the cloud of pollution will remain as long as people live in the city. Ilan
                  decides to save the city
                </div>
              </div>
            </div>
            <div class="roadmap-info">
              <div class="header-info">
                <div class="phase">Phase 4</div>
                <div class="desc">
                  Main game official launch<br />
                  Implement game within game<br />
                  Worldview-based fiction publishing<br />
                </div>
              </div>
              <div class="footer-info">
                <div class="time">2100</div>
                <div class="text">Formation of <span>the new order</span></div>
                <div class="desc">
                  As completion of the Mediterranean terraforming project nears, Hive turns its
                  attention to the East China Sea and the Yellow Sea, landing on the West coast of
                  Japan and the east coast of China
                </div>
              </div>
            </div>
            <div class="roadmap-info">
              <div class="header-info">
                <div class="phase">Phase 5</div>
                <div class="desc">
                  Open UGC option to players<br />
                  Rangers are self-governed using the DAO system<br />
                  Active social gaming metaverse
                </div>
              </div>
              <div class="footer-info">
                <div class="time">21XX</div>
                <div class="text"><span>The Ivory Tower</span> That never falls</div>
                <div class="desc">
                  On the day that Ishiguro finally completed work on Lady Samurai, tropical storm
                  Shinigami tore through his retreat in the forests of Yamanashi in the country’s
                  Chubu region and killed him. The storm was caused by Hive experimenting with
                  terraforming in the Pacific Ocean and also caused Nuclear fallout at major power
                  plants in Japan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="preload-video-list">
        <video preload="auto" autoplay src="@/assets/videos/roadmap-0.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/roadmap-1.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/roadmap-2.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/roadmap-3.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/roadmap-4.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/mobile-0.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/mobile-1.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/mobile-2.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/mobile-3.mp4"></video>
        <video preload="auto" autoplay src="@/assets/videos/mobile-4.mp4"></video>
      </div>
      <div class="arrow">
        <div class="left-arrow" id="roadmap-left-arrow" @click="onRoadLeft(0)">
          <img src="@/assets/images/roadmap-left-arrow.png" alt="" />
        </div>
        <div class="right-arrow" id="roadmap-right-arrow" @click="onRoadRight">
          <img src="@/assets/images/roadmap-right-arrow.png" alt="" />
        </div>
      </div>
      <div class="skip-box">
        <div class="skip-has"></div>
        <div class="skip-bot"></div>
      </div>
    </section>
    <section class="tag-box">
      <div class="title"><span>E4C</span> Token</div>
      <div class="desc">
        <p>Player experience above everything:</p>
        <ul>
          <li>
            Ensure the equal balanced and competitive gameplay experience of Web2 and Web3 game
            players, as well as paying and non-paying players
          </li>
          <li>Free-to-Play and Play-and-Earn</li>
        </ul>
        <p>Long-term sustainable tokenomics:</p>
        <ul>
          <li>
            DAO: Conduct a long-term sustainable DAO currency and governance system, provide
            investors with stable and attractive long-term returns
          </li>
          <li>
            In-game Crypto: Maintain a stable and sustainable internal token circulation, and
            restrain excessive inflation
          </li>
        </ul>
      </div>
      <div class="btn-box">
        <div class="text">To learn about our tokenomics and more:</div>
        <a href="https://whitepaper.ambrus.studio/e4c-whitepaper/" class="btn" target="_blank"
          >E4C: Whitepaper</a
        >
      </div>
    </section>
    <section class="team-box">
      <div class="title"><span>E4C</span> Team</div>
      <div class="desc">DM us on Twitter, it's free</div>
      <div class="arrow">
        <div class="left-arrow" id="team-left-arrow">
          <img src="@/assets/images/ranger-left.png" alt="" />
        </div>
        <div class="right-arrow" id="team-right-arrow">
          <img src="@/assets/images/ranger-right.png" alt="" />
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
        <swiper-slide class="team-info-box" v-for="(v, i) in teamList" :key="i">
          <div class="team-member-avatar-box">
            <img src="@/assets/images/aboutus-team-avatar-1.png" alt="" v-if="i === 0" />
            <img src="@/assets/images/aboutus-team-avatar.png" alt="" v-else />
            <a :href="v.instagram" target="_blank" v-if="v.instagram">
              <img src="@/assets/images/team-link-3.png" alt="" />
            </a>
            <a :href="v.linkedin" target="_blank" v-if="v.linkedin">
              <img src="@/assets/images/team-link-2.png" alt="" />
            </a>
            <a :href="v.twitter" target="_blank" v-if="v.twitter">
              <img src="@/assets/images/team-link-1.png" alt="" />
            </a>
          </div>
          <div class="team-member-info">
            <div class="name">{{ v.name }}</div>
            <div class="edu">{{ v.edu }}</div>
            <div class="post" v-html="v.post"></div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <section class="faq-box">
      <div class="title">FAQ</div>
      <div class="desc">Many asked why our NFT is free</div>
      <div class="faq-box-list clearfix">
        <div class="faq-box-info-list" v-for="(pv, pi) in raqList" :key="pi">
          <div class="faq-box-info" v-for="(v, i) in pv" :key="i">
            <div
              :class="v.active ? 'faq-question active' : 'faq-question'"
              @click="onClickQuestion(pi, i)"
            >
              {{ v.question }}
            </div>
            <!-- <transition name="reply"> -->
            <div class="faq-reply" v-html="v.reply"></div>
            <!-- </transition> -->
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { defineComponent, reactive, onMounted } from 'vue'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import $ from 'jquery'
import {
  teamList as getTeamList,
  raqList as getRaqList,
  perkList as getPerkList
} from '@/api/index'

export default defineComponent({
  name: 'IndexIndex',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const raqList = reactive(getRaqList)
    onMounted(() => {
      $('.roadmap-info').eq(0).show().siblings().hide()
      raqList.forEach((opv, opi) => {
        raqList[opi].forEach((ov, oi) => {
          raqList[opi][oi].active = false
        })
      })
      $('.faq-question').removeClass('active')
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

    const perkList = reactive(getPerkList)
    const onPerkMouseMove = (e, i) => {
      console.log(e, i)
      if ($(window).width() > 960) {
        const THRESHOLD = 5
        const { clientX } = e
        const { clientY } = e
        const { currentTarget } = e
        const { clientWidth } = currentTarget
        const { clientHeight } = currentTarget
        const { offsetLeft } = currentTarget
        const { offsetTop } = currentTarget
        const horizontal = (clientX - offsetLeft) / clientWidth
        const vertical = (clientY - offsetTop) / clientHeight
        const rotateX = THRESHOLD / 2 - horizontal * THRESHOLD
        const rotateY = vertical * THRESHOLD - THRESHOLD / 2
        $('.perk-box')
          .eq(i)
          .css(
            'transform',
            `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1.03, 1.03, 1.03)`
          )
      }
    }

    const onPerkMouseLeave = (e, i) => {
      console.log(e, i)
      if ($(window).width() > 960) {
        $('.perk-box')
          .eq(i)
          .css(
            'transform',
            `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
          )
      }
    }

    // roadmap
    let roadmapIndex = 0
    let roadmapFlag = true
    const onRoadLeft = (type) => {
      const roadmapDiv = $('.roadmap-info')
      const roadmapListDiv = $('.roadmap-info-list')
      const roadmapBoxDiv = $('.roadmap-info-box')
      const roadmapBgDiv = $('.roadmap-box-block')
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
        roadmapGlitchDiv.show()

        roadmapIndex -= 1

        setTimeout(() => {
          roadmapGlitchDiv.css('opacity', 0.6).css('animation', 'glitch-anim-1-horizontal 0.98s')
        }, 10)
        setTimeout(() => {
          roadmapBgDiv
            .find('.video-background')
            .attr('src', $('.preload-video-list video').eq(roadmapIndex).attr('src'))
          roadmapBgDiv.find('.video-background-mobile').attr(
            'src',
            $('.preload-video-list video')
              .eq(roadmapIndex + roadmapDiv.length)
              .attr('src')
          )
        }, 500)
        setTimeout(() => {
          roadmapDiv.eq(roadmapIndex + 1).hide()
          roadmapDiv.eq(roadmapIndex).show()
          roadmapBoxDiv.css('opacity', 1)
          roadmapSkipDiv.css(
            'transform',
            `translateX(${($('.skip-box').width() * (19.8 * roadmapIndex)) / 100}px)`
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
      const roadmapBgDiv = $('.roadmap-box-block')
      const roadmapGlitchDiv = $('.roadmap-glitch')
      const roadmapSkipDiv = $('.skip-bot')
      if (roadmapIndex < roadmapDiv.length - 1 && roadmapFlag) {
        // eslint-disable-next-line radix
        const roadmapRemove = Math.abs(parseInt(roadmapBoxDiv.innerWidth()))
        roadmapFlag = false
        roadmapListDiv.css('transform', `translateX(-${roadmapRemove}px)`)
        roadmapBoxDiv.css('opacity', 0)
        roadmapGlitchDiv.show()
        roadmapIndex += 1
        setTimeout(() => {
          roadmapGlitchDiv.css('opacity', 0.6).css('animation', 'glitch-anim-1-horizontal 0.98s')
        }, 10)
        setTimeout(() => {
          console.log($('.preload-video-list video').eq(roadmapIndex).attr('src'))
          roadmapBgDiv
            .find('.video-background')
            .attr('src', $('.preload-video-list video').eq(roadmapIndex).attr('src'))
          roadmapBgDiv.find('.video-background-mobile').attr(
            'src',
            $('.preload-video-list video')
              .eq(roadmapIndex + roadmapDiv.length)
              .attr('src')
          )
        }, 500)

        setTimeout(() => {
          roadmapDiv.eq(roadmapIndex - 1).hide()
          roadmapDiv.eq(roadmapIndex).show()

          roadmapBoxDiv.css('opacity', 1)
          roadmapSkipDiv.css(
            'transform',
            `translateX(${($('.skip-box').width() * (19.8 * roadmapIndex)) / 100}px)`
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

    const rangerList = reactive([])
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 20; i++) {
      rangerList.push({
        name: 'Decoding ...'
      })
    }
    const teamList = reactive(getTeamList)

    // raq

    const onClickQuestion = (pi, i) => {
      if (raqList[pi][i].active) {
        raqList[pi][i].active = !raqList[pi][i].active
      } else {
        raqList.forEach((opv, opi) => {
          raqList[opi].forEach((ov, oi) => {
            raqList[opi][oi].active = !!(opi === pi && oi === i)
            if (!(opi === pi && oi === i)) {
              $('.faq-box-info-list')
                .eq(opi)
                .find('.faq-box-info')
                .eq(oi)
                .find('.faq-reply')
                .slideUp()
            }
          })
        })
      }
      $('.faq-box-info-list').eq(pi).find('.faq-box-info').eq(i).find('.faq-reply').slideToggle()
    }
    return {
      perkList,
      onPerkMouseMove,
      onPerkMouseLeave,
      rangerList,
      teamList,
      raqList,
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
  overflow: hidden;
  .banner-background {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 100vh;
  }
  .banner-info {
    position: relative;
    margin-top: calc((100vh - 48rem) / 2);
    .desc {
      position: absolute;
      top: 0;
      left: 8.8rem;
      height: 3.2rem;
      font-family: Teko;
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 3.2rem;
      text-transform: uppercase;
      color: #465358;
      background: #ffffff;
      padding: 0 1.2rem;
    }
    .text-logo {
      position: absolute;
      top: 1.6rem;
      left: 8.9rem;
      width: 40rem;
    }
    .content {
      position: absolute;
      top: 26.9rem;
      left: 8.8rem;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 3rem;
      text-transform: uppercase;
      font-feature-settings: 'tnum' on, 'lnum' on;
      color: #000000;
      span {
        font-weight: 700;
        color: #ff4125;
      }
    }
    .btn {
      position: absolute;
      top: 42.5rem;
      left: 8.8rem;
      /* background: #ff4125; */
      border-radius: 4px;
      padding: 1.7rem 5.2rem;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2rem;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
}
.rangers-box {
  position: relative;
  width: 100%;
  background: #ffffff;
  padding: 6rem 0 44.6rem 8.8rem;
  overflow: hidden;
  .bg {
    position: absolute;
    width: 102.8rem;
    height: 102.8rem;
    right: -42.2rem;
    top: -20.6rem;
    background: #f0f0f0;
    opacity: 0.5;
    border-radius: 50%;
    box-shadow: inset 0px 0px 3.6rem rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
  .title {
    font-family: Teko;
    font-style: normal;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    color: #000;
    margin-bottom: -1.2rem;
    span {
      color: #ff4125;
    }
  }
  .desc {
    width: 54.9rem;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #000000;
    p {
      margin-bottom: 2.4rem;
    }
  }
  .arrow {
    position: absolute;
    bottom: 47rem;
    right: 8.8rem;
    height: 6.6rem;
    .left-arrow {
      width: 6rem;
      height: 6rem;
      background: #ffffff;
      border: 0.1rem solid #f5f5f5;
      box-sizing: border-box;
      border-radius: 0.4rem;
      float: left;
      text-align: center;
      margin-left: 1.2rem;
      position: relative;
      cursor: pointer;
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
      background: #ffffff;
      border: 0.1rem solid #f5f5f5;
      box-sizing: border-box;
      border-radius: 0.4rem;
      float: left;
      text-align: center;
      margin-left: 1.2rem;
      position: relative;
      cursor: pointer;
      img {
        position: absolute;
        top: 1.8rem;
        right: 1.8rem;
        width: 2.1rem;
      }
    }
  }
  .rangers-bg-box {
    position: absolute;
    bottom: 23rem;
    left: 0;
    width: 100%;
    height: 1.2rem;
    background: #ff4125;
  }
  .rangers-list {
    position: absolute;
    left: 0;
    bottom: 7.2rem;
    overflow: hidden;
    white-space: nowrap;
  }

  .swiper {
    width: 100%;
    height: 36.2rem;
    padding-right: 8.8rem;
    padding-left: 8.8rem;
  }
  .swiper-slide {
    width: 31.2rem;
    img {
      width: 31.2rem;
    }
    .ranger-name {
      width: 31.2rem;
      height: 5rem;
      line-height: 5rem;
      background: #2a2a2a;
      border-radius: 0px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 700;
      font-size: 2.1rem;
      text-align: center;
      color: #fff;
    }
  }
}

.perks-box {
  padding: 6rem 8.8rem 7.2rem;
  .title {
    font-family: Teko;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    color: #000;
    span {
      color: #ff4125;
    }
  }
  .desc {
    width: 73.2rem;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #000000;
    margin: -0.8rem 0 1.2rem;
  }
  .perks-list {
    .perk-box {
      position: relative;
      float: left;
      width: 32%;
      height: 20rem;
      border-radius: 0.4rem 3.6rem 0.4rem 0.4rem;
      margin-right: 2%;
      margin-top: 2.4rem;
      background: #fff;
      overflow: hidden;
      &:nth-child(3n + 3) {
        margin-right: 0;
      }
      &:nth-child(1) {
        background-image: url(@/assets/images/perk-bg-1.png);
        background-size: 100% auto;
        background-position: right bottom;
      }
      &:nth-child(2) {
        background-image: url(@/assets/images/perk-bg-2.png);
        background-size: 100% auto;
        background-position: right bottom;
      }
      &:nth-child(3) {
        background-image: url(@/assets/images/perk-bg-3.png);
        background-size: 100% auto;
        background-position: right bottom;
      }
      &:nth-child(4) {
        background-image: url(@/assets/images/perk-bg-4.png);
        background-size: 100% auto;
        background-position: right bottom;
      }
      &:nth-child(5) {
        background-image: url(@/assets/images/perk-bg-5.png);
        background-size: 100% auto;
        background-position: right bottom;
      }
      .info {
        position: absolute;
        left: 0;
        top: 7rem;
        padding: 0 2.4rem;
        .name {
          font-family: Montserrat;
          font-weight: 600;
          font-size: 2.1rem;
          line-height: 2.6rem;
          color: #ff4125;
          margin-bottom: 0.4rem;
        }
        .text {
          font-family: Montserrat;
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 2.4rem;
          color: #465358;
        }
      }
    }
    .card {
      transition: transform 0.1s ease;
      transform-style: preserve-3d;
      will-change: transform;
      box-shadow: rgba(0, 0, 0, 0.2) 0 0 0;
      transition: box-shadow 0.3s ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0 0 1.2rem;
      }
    }
  }
}
.roadmap-box {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  .roadmap-box-block {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .video-background {
      position: absolute;
      left: 50%;
      top: 50vh;
      transform: translate(-50%, -50vh);
      width: 100%;
      height: 100vh;
      object-fit: cover;
      min-height: 100vh;
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }
    .video-background-mobile {
      display: none;
    }
    .roadmap-glitch {
      z-index: 5;
      opacity: 0;
      display: none;
      position: absolute;
      background-image: url(@/assets/images/roadmap-glitch.jpg);
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;
      transition: all 0.3s;
    }
    .roadmap-info-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 59.1rem;
      height: 100vh;
      opacity: 1;
      transition: all 0.2s ease-in-out;
      padding: 6rem 0 10.6rem 8.8rem;
      .title {
        font-family: Teko;
        font-style: normal;
        font-weight: 400;
        font-size: 6.4rem;
        line-height: 9.2rem;
        text-transform: uppercase;
        color: #ffffff;
        display: inline-block;
        border-bottom: 0.1rem solid #465358;
      }
      .roadmap-info-list {
        position: relative;
        width: 59.1rem;
        height: calc(100vh - 15.1rem);
        transition: all 0.2s ease-in-out;
        .roadmap-info {
          position: absolute;
          width: 59.1rem;
          height: calc(100vh - 15.1rem);
          top: 0;
          left: 0;
          &:not(:first-child) {
            display: none;
          }
          .header-info {
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
              color: #fff;
            }
          }
          .footer-info {
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
              color: #a0a4b0;
              span {
                color: #ff4125;
              }
            }

            .desc {
              margin-top: 0.4rem;
              width: 50.3rem;
              font-family: Montserrat;
              font-weight: 500;
              font-size: 1.4rem;
              line-height: 2.4rem;
              color: #ffffff;
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
    background: rgba(255, 255, 255, 0.1);
    .skip-has {
      position: absolute;
      width: 10%;
      height: 1rem;
      left: 0;
      top: 0;
      background: #ff4125;
      opacity: 0.5;
    }
    .skip-bot {
      position: absolute;
      width: 19.8%;
      height: 0.2rem;
      left: 0.5%;
      top: 0.4rem;
      background: #ffffff;
      box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.25);
      transition: all 0.5s ease-in-out;
    }
  }
}

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
.tag-box {
  position: relative;
  padding: 6rem 8.8rem 7.2rem;
  background: #ffffff;
  .title {
    font-family: Teko;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    span {
      color: #ff4125;
    }
  }

  .desc {
    width: 68.8rem;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #465358;
    margin-top: -3.6rem;
    p {
      color: #ff4125;
      margin-top: 2.4rem;
    }
    li {
      list-style-type: disc;
      margin-left: 2rem;
    }
  }
  .btn-box {
    position: absolute;
    right: 8.8rem;
    bottom: 19.9rem;
    .text {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-align: right;
      color: #465358;
      padding-bottom: 1.2rem;
    }

    .btn {
      padding: 1.7rem 3.5rem;
      border-radius: 0.4rem;
      font-family: Montserrat;
      font-weight: 600;
      font-size: 1.6rem;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      display: block;
    }
  }
}

.battlegrounds-box {
  padding: 6rem 8.8rem 7.2rem;
  .title {
    font-family: Teko;
    font-style: normal;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 1.2rem;
    span {
      color: #ff4125;
    }
  }
  .battlegrounds-box-list {
    .battleground-box {
      float: left;
      width: 32%;
      height: 24rem;
      line-height: 24rem;
      background: #c4c4c4;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.6rem;
      text-align: center;
      color: #000000;
      margin-right: 2%;
      border: 0.2rem solid rgba(160, 164, 176, 0.2);
      box-sizing: border-box;
      border-radius: 0.4rem;
      &:nth-child(3n + 3) {
        margin-right: 0;
      }
      &:nth-child(2) {
        background-color: #fff;
      }
      img {
        vertical-align: top;
        width: 100%;
        height: 100%;
      }
    }
  }
}

.team-box {
  position: relative;
  /* padding: 6rem 8.8rem 7.2rem; */
  padding: 6rem 8.8rem 3.2rem;
  background: #ffffff;
  .title {
    font-family: Teko;
    font-style: normal;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    color: #000;
    margin-bottom: -1.2rem;
    span {
      color: #ff4125;
    }
  }
  .desc {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #465358;
    padding-bottom: 43.1rem;
  }
  .arrow {
    position: absolute;
    top: 10rem;
    right: 8.8rem;
    height: 6rem;
    .left-arrow {
      width: 6rem;
      height: 6rem;
      border: 0.1rem solid #f5f5f5;
      box-sizing: border-box;
      border-radius: 0.4rem;
      float: left;
      text-align: center;
      margin-left: 1.2rem;
      position: relative;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.8);
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
      border: 0.1rem solid #f5f5f5;
      box-sizing: border-box;
      border-radius: 0.4rem;
      float: left;
      text-align: center;
      margin-left: 1.2rem;
      position: relative;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.8);
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
    top: 19.2rem;
    left: 0;
    overflow: hidden;
    .team-info-box {
      width: 23.3rem;
      min-height: 35.9rem;
      filter: drop-shadow(0 0.2rem 0.6rem rgba(0, 0, 0, 0.1));
      border-radius: 0.4rem 3.6rem 0 0;
      .team-member-avatar-box {
        position: relative;
        > img {
          width: 100%;
          max-height: 21rem;
          overflow: hidden;
          border-radius: 0.4rem 3.6rem 0 0;
        }
        a {
          img {
            width: 3.6rem;
          }
          &:nth-child(2) {
            position: absolute;
            bottom: 1.6rem;
            right: 1.6rem;
          }
          &:nth-child(3) {
            position: absolute;
            bottom: 1.6rem;
            right: 5.8rem;
          }
          &:nth-child(4) {
            position: absolute;
            bottom: 1.6rem;
            right: 10rem;
          }
        }
      }

      .team-member-info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 23.3rem;
        min-height: 14.9rem;
        padding: 1.6rem 1.6rem 0;
        background: #ffffff;
        border-radius: 0px 0px 0.4rem 1.2rem;
        .name {
          font-family: Montserrat;
          font-weight: 600;
          font-size: 1.6rem;
          line-height: 2rem;
          color: #000000;
        }
        .edu {
          font-family: Montserrat;
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 2.1rem;
          color: #ff4125;
        }
        .post {
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.1rem;
          color: #000000;
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
  padding: 6rem 8.8rem 7.2rem;
  .title {
    font-family: Teko;
    font-style: normal;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    color: #000000;
  }
  .desc {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: #000000;
    margin-top: -1.2rem;
    margin-bottom: 2rem;
  }
  .faq-box-info-list {
    float: left;
    width: 49%;
    margin-right: 2%;
    &:nth-child(2) {
      margin-right: 0;
    }
    .faq-box-info {
      margin-top: 1.6rem;
      .faq-question {
        position: relative;
        background: #ffffff;
        border-radius: 4rem;
        border-radius: 0.4rem 0.4rem 0 0;
        width: 100%;
        height: 4.8rem;
        line-height: 4.8rem;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 1.4rem;
        color: #2a2a2a;
        padding: 0 1.2rem;
        cursor: pointer;
        &::before {
          content: '';
          display: block;
          width: 1.2rem;
          height: 1.2rem;
          background-image: url(@/assets/images/faq-top.png);
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
            background-image: url(@/assets/images/faq-active.png);
          }
        }
      }
      .faq-reply {
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

@media screen and (max-width: 960px) {
  .banner-box {
    .banner-info {
      margin-top: 0;
      height: 100vh;
      .desc {
        top: 16.8vh;
        left: 3.2rem;
        height: 2.6rem;
        line-height: 2.6rem;
        font-size: 1.2rem;
      }
      .text-logo {
        position: absolute;
        top: 21vh;
        left: 3.2rem;
        width: 83%;
      }
      .content {
        top: unset;
        bottom: 25vh;
        left: 3.2rem;
      }
      .btn {
        position: absolute;
        top: unset;
        bottom: 8vh;
        left: 3.2rem;
        width: calc(100vw - 6.4rem);
        height: 5.4rem;
        line-height: 5.4rem;
        padding: 0;
        text-align: center;
      }
    }
  }
  .rangers-box {
    padding: 3.6rem 2.4rem 42rem;
    .bg {
      right: -74rem;
    }
    .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
      margin-bottom: -0.4rem;
    }
    .desc {
      width: unset;
    }
    .arrow {
      display: none;
    }
    .rangers-list {
      left: 0;
      bottom: 6rem;
      padding-left: 2.4rem;
      width: 100%;
    }
    .rangers-box {
      .swiper {
        height: 32.6rem;
        padding-right: 2.4rem;
      }
      .swiper-slide {
        width: 28rem;
        img {
          width: 28rem;
        }
        .ranger-name {
          width: 28rem;
          height: 4.6rem;
          line-height: 4.6rem;
          font-size: 1.8rem;
        }
      }
    }
  }

  .perks-box {
    width: 100%;
    padding: 3.6rem 2.4rem;
    .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
    }
    .desc {
      width: unset;
      margin: -0.4rem 0 3.6rem;
    }
    .perks-list {
      .perk-box {
        float: unset;
        width: 100%;
        height: 16rem;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 1.2rem;
        .info {
          position: absolute;
          left: 0;
          top: 5rem;
          padding: 0 1.2rem;
          .name {
            font-size: 1.8rem;
            line-height: 2.2rem;
            margin-bottom: 0.4rem;
          }
          .text {
            font-size: 1.4rem;
          }
        }
        .card {
          transition: unset;
          transform-style: unset;
          will-change: unset;
          box-shadow: unset;
          transition: unset;
          &:hover {
            box-shadow: unset;
          }
        }
      }
    }
  }

  .roadmap-box {
    width: 100%;
    height: 62.4rem;
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
      .roadmap-info-box {
        padding: 3.6rem 2.4rem;
        width: 100%;
        .title {
          font-size: 3.6rem;
          line-height: 5.2rem;
          padding-bottom: 1.2rem;
          padding-right: 8.4rem;
        }
        .roadmap-info-list {
          width: unset;
          height: 52.4rem;
          .roadmap-info {
            width: unset;
            height: 52.4rem;
            .footer-info {
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
      .skip-has {
        width: 4.1rem;
      }
      .skip-bot {
        width: 7.5rem;
      }
    }
  }

  .tag-box {
    padding: 3.6rem 2.4rem 4.8rem;
    width: 100%;

    .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
    }
    .desc {
      width: unset;
      margin-top: -0.4rem;
    }
    .btn-box {
      position: unset;
      right: unset;
      bottom: unset;
      .text {
        text-align: center;
        padding-top: 3.6rem;
      }
      .btn {
        width: 60.26vw;
        /* background: #ff4125; */
        height: 5.4rem;
        line-height: 5.4rem;
        margin-left: calc(19.87vw - 2.4rem);
        padding: 0;
      }
    }
  }

  .battlegrounds-box {
    padding: 3.6rem 2.4rem 4.8rem;
    width: 100%;
    .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
      margin-bottom: 0;
    }
    .battlegrounds-box-list {
      .battleground-box {
        float: unset;
        width: 100%;
        height: 17.4rem;
        line-height: 17.4rem;
        margin-top: 1.2rem;
        margin-right: 0;
        img {
          height: 17.4rem;
        }
      }
    }
  }

  .team-box {
    padding: 3.6rem 2.4rem 4.8rem;
    width: 100%;
    .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
      margin-bottom: -0.4rem;
    }
    .desc {
      padding-bottom: 43.1rem;
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
      .team-info-box {
        .team-member-info {
          position: unset;
        }
      }
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
    .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
    }
    .desc {
      margin-top: -0.4rem;
      margin-bottom: 3.6rem;
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
</style>
