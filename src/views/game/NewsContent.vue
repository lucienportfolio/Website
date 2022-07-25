<template>
  <section class="main news-view-main">
    <section class="top-box"></section>
    <section class="banner-box">
      <div class="text">Game Updates<span>E4C: Fallen Arena</span></div>
      <div class="title">E4C: Fallen Arena Patch 1.3 Notes</div>
    </section>
    <section class="news-detail-box clearfix">
      <section class="news-detail-left-box">
        <router-link to="/game/news/list/1" class="news-detail-all">
          <img src="@/assets/images/news-view-back.png" alt="" />
          All News
        </router-link>
        <div class="news-detail-nav">
          <a href="javascript:;" class="active">Overview</a>
          <a href="javascript:;">New Ranger: Tumdra</a>
          <a href="javascript:;">Weapon System</a>
          <a href="javascript:;">Battle Pass System</a>
          <a href="javascript:;">Balance Updates</a>
          <a href="javascript:;">Bug Fixes</a>
        </div>
      </section>
      <section class="news-detail-right-box">
        <div class="text">04/21/2022<span>BY Philip Ho</span></div>
        <div class="content">
          <p>You’ll never see it coming, it's patch 12.7!</p>
          <p>
            In this round of patch notes you may notice that some of our changes explicitly mention
            pro play. This is because MSI is right around the corner and is set to be played on
            patch 12.8! We’re aiming to shake up the meta a bit to allow for some more diverse picks
            in 12.7 and 12.8, but we’re introducing some spicier changes in 12.7 so that we can make
            additional adjustments in 12.8 if needed.
          </p>
          <p>
            In this edition of patch notes, we’re buffing some underpowered champs like Pantheon and
            Wukong, dropping some nerfs on stronger items like Galeforce and Winter’s Approach, and
            releasing some out-of-this-world Arcana skins!
          </p>
          <p>
            MSI isn’t the only pro play happening soon. You can catch the TFT patch notes here,
            where we’ll be going over the patch that Worlds will be played on!
          </p>
          <p>
            <img src="@/assets/images/news-view-content.png" alt="" />
          </p>
          <p>You'll never see it coming, it's patch 12.7!</p>
        </div>
      </section>
    </section>
  </section>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import $ from 'jquery'

export default defineComponent({
  name: 'GameNewsContent',
  setup() {
    const isWap = ref(false)
    let navTop = 0
    const scrollFun = () => {
      if (window.scrollY > $('header').height()) {
        $('header').addClass('bg')
      } else {
        $('header').removeClass('bg')
      }
      if (navTop === 0) {
        navTop = $('.news-detail-nav').offset().top
      }
      console.log(window.scrollY + $('header').height(), navTop)
      if (window.scrollY + $('header').height() >= navTop) {
        $('.news-detail-nav').addClass('nav-top')
      } else {
        $('.news-detail-nav').removeClass('nav-top')
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
          console.log('change')
        }
      }
      $(document).ready(checkFontSize)
      $(window).resize(checkFontSize)
    })
    return {}
  }
})
</script>
<style lang="less" scoped>
.news-view-main {
  width: 100%;
  background: #fff;
}
.top-box {
  width: 100%;
  height: 9.9rem;
  background: rgba(0, 0, 0, 0.5);
}
.banner-box {
  position: relative;
  width: 100%;
  height: 54rem;
  background-image: url(@/assets/images/news-banner-bg.png);
  background-size: 100%;
  .text {
    padding: 35.5rem 8.8rem 0;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-transform: uppercase;
    color: #a0a4b0;
    flex: none;
    order: 0;
    flex-grow: 0;
    span {
      color: #ff4125;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 0 1.2rem;
    }
  }
  .title {
    font-family: Teko;
    font-style: normal;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    color: #ffffff;
    padding-left: 8.8rem;
  }
  .desc {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #a0a4b0;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding-left: 8.8rem;
    margin-top: -2rem;
    span {
      &:last-child {
        color: #ffffff;
        margin: 0px 1.2rem;
      }
    }
  }
}
.news-detail-box {
  width: 144rem;
  margin: 0 auto;
  background-color: #fff;
  padding: 3.6rem 8.8rem;
  .news-detail-left-box {
    float: left;
    width: 22rem;
    .news-detail-all {
      display: block;
      font-family: Montserrat;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      color: #a0a4b0;
      padding-bottom: 2.4rem;
      border-bottom: 0.1rem solid #a0a4b0;
      img {
        vertical-align: unset;
        margin-right: 1.2rem;
      }
    }
    .news-detail-nav {
      background: #fff;
      &.nav-top {
        position: fixed;
        top: 9.9rem;
      }
      a {
        position: relative;
        display: block;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.7rem;
        padding-top: 2.4rem;
        padding-left: 2.4rem;
        &.active {
          color: #ff4125;
          &::before {
            position: absolute;
            top: 2.5rem;
            left: 0;
            content: url(@/assets/images/news-view-active.png);
          }
        }
      }
    }
  }
  .news-detail-right-box {
    float: right;
    width: 98.4rem;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #000000;
    .text {
      padding: 0.4rem 0 2.4rem;
      color: #a0a4b0;
      span {
        margin-left: 1.2rem;
      }
    }
    .content {
      p {
        padding-bottom: 2.4rem;
      }
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
