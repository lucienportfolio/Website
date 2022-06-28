<template>
  <section class="main news-main">
    <section class="top-box">
      <img src="@/assets/images/news-top-logo.png" alt="" />
      <a href="javascript:;" class="top-btn">
        <img src="@/assets/images/news-top-group.png" alt="" />
        E4C: Fallen Arena
      </a>
    </section>
    <section class="banner-box">
      <div class="text">Game Updates<span>E4C: Fallen Arena</span></div>
      <div class="title">E4C: Fallen Arena Patch 1.3 Notes</div>
      <div class="desc">
        <span>04/21/2022</span>
        <span>New Ranger Tumdra and new balance adjustment will arrive soon</span>
      </div>
      <ul class="skip-box-list clearfix">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
    <section class="news-info-box clearfix">
      <section class="news-box-list">
        <router-link to="/game/news/content/1" class="news-box">
          <img src="@/assets/images/news-list-1.png" alt="" />
          <div class="news-info">
            <div class="text">Game Updates<span>E4C: Fallen Arena</span></div>
            <div class="title">E4C: Fallen Arena Patch 1.3 Notes</div>
            <div class="desc">
              Patch 12.7 is our Worlds patch for Gizmos & Gadgets that focuses on buffing
              underplayed comps to encourage a strategically diverse competitive meta!
            </div>
            <div class="time">Mar 31, 2022</div>
          </div>
        </router-link>
        <router-link to="/game/news/content/1" class="news-box">
          <img src="@/assets/images/news-list-2.png" alt="" />
          <div class="news-info">
            <div class="text">Dev Blog<span>E4C: Fallen Arena</span></div>
            <div class="title">design of the map - Ancient Ruins</div>
            <div class="desc">
              As we’re getting closer to the release of E4C: Fallen Arena patch 1.3, we can’t wait
              to share this new map full of excitement with all of you.
            </div>
            <div class="time">Mar 31, 2022</div>
          </div>
        </router-link>
      </section>
      <section class="news-type-list">
        <a href="javascript:;" class="active">All</a>
        <a href="javascript:;">Event</a>
        <a href="javascript:;">Game Updates</a>
        <a href="javascript:;">Dev Blog</a>
        <a href="javascript:;">Esports</a>
      </section>
    </section>
  </section>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import $ from 'jquery'

export default defineComponent({
  name: 'GameNewsList',
  setup() {
    const isWap = ref(false)
    onMounted(async () => {
      $('html').attr({ style: 'overflow-y:auto' })
      $('header,.main,footer').show()
      // $('header').css('background', '#000')

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
.news-main {
  width: 100%;
  background: #fff;
}
.top-box {
  padding-top: 7.6rem;
  width: 100%;
  height: 12.4rem;
  background: #fff;
  text-align: center;
  > img {
    margin-right: 1.2rem;
  }
  .top-btn {
    height: 3.6rem;
    line-height: 3.6rem;
    background: #ffffff;
    border: 0.1rem solid #ff4125;
    box-sizing: border-box;
    border-radius: 1.8rem;
    display: inline-block;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.2rem;
    padding: 0 1.2rem;
    color: #000000;
    > img {
      margin-right: 1rem;
    }
  }
}

.banner-box {
  position: relative;
  width: 100%;
  height: 54rem;
  background-image: url(@/assets/images/news-banner-bg.png);
  background-size: cover;
  background-position: center;
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
  .skip-box-list {
    position: absolute;
    bottom: 1.2rem;
    left: 50%;
    margin-left: -15.8rem;
    li {
      position: relative;
      float: left;
      width: 6rem;
      height: 1.2rem;
      background: rgba(0, 0, 0, 0.3);
      margin-right: 0.4rem;
      &.active::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4.5rem;
        height: 1.2rem;
        background: #ffffff;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.news-info-box {
  width: 144rem;
  padding: 3.6rem 8.8rem;
  margin: 0 auto;
  .news-box-list {
    float: left;
    width: 100rem;
    margin-top: 1.2rem;
    .news-box {
      display: block;
      position: relative;
      margin-bottom: 4.8rem;
      padding-left: 39.6rem;
      min-height: 24rem;
      > img {
        position: absolute;
        top: 0;
        left: 0;
      }
      .news-info {
        .text {
          padding-top: 2.4rem;
          font-family: Montserrat;
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 1.7rem;
          text-transform: uppercase;
          color: #a0a4b0;
          flex: none;
          order: 0;
          flex-grow: 0;
          span {
            color: #ff4125;
            margin-left: 1.2rem;
          }
        }
        .title {
          font-family: Teko;
          font-weight: 400;
          font-size: 3.6rem;
          line-height: 5.2rem;
          color: #000000;
        }
        .desc {
          width: 40rem;
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.4rem;
          color: #465358;
        }
        .time {
          margin-top: 2.4rem;
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 1.7rem;
          color: #a0a4b0;
        }
      }
    }
  }

  .news-type-list {
    float: right;
    width: 24rem;
    a {
      display: block;
      width: 100%;
      height: 7.2rem;
      line-height: 7.2rem;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.6rem;
      text-transform: uppercase;
      color: #465358;
      border-left: 0.2rem solid #465358;
      padding-left: 2.6rem;
      &.active {
        border-left: 0.2rem solid #ff4125;
        color: #ff4125;
      }
    }
  }
}
</style>
