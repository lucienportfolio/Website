<template>
  <section class="main">
    <section class="banner-box">
      <img src="@/assets/images/game-1-banner-img.png" alt="" class="img" />
      <img src="@/assets/images/game-1-banner-rin.png" alt="" class="ranger" />
      <button>Coming soon</button>
    </section>
    <section class="rangers-box clearfix">
      <div class="ranger-left">
        <img src="@/assets/images/game-1-ranger.png" alt="" />
      </div>
      <div class="ranger-right"></div>
      <div class="ranger-info">
        <div class="text">Play with your</div>
        <div class="title">E4C rangers</div>
        <div class="desc">
          Play E4C: Fallen Arena with a dozen unique Rangers. And you’ll get a Ranger for free if
          you are an E4C Ranger NFT holder. More Rangers to be released in the future!
        </div>
      </div>
    </section>
    <section class="battlefield-box">
      <div class="battlefield-info">
        <div class="title">Wasteland Battlefield</div>
        <div class="desc">Short descriptions of the game environment design</div>
      </div>
    </section>
    <section class="video-list-box clear">
      <div class="video-box">
        <div class="video"></div>
        <div class="video-info">
          <div class="title">Seckill Fun</div>
          <div class="desc">Have fun in the first-ever seckill game on web3</div>
        </div>
      </div>
      <div class="video-box">
        <div class="video"></div>
        <div class="video-info">
          <div class="title">Stunning Weapons</div>
          <div class="desc">Use a variety of different weapons with all the rangers</div>
        </div>
      </div>
      <div class="video-box">
        <div class="video"></div>
        <div class="video-info">
          <div class="title">Play with the community</div>
          <div class="desc">Have fun in the first-ever seckill game on web3</div>
        </div>
      </div>
    </section>
    <section class="battlepass-box">
      <img src="@/assets/images/game-1-battlepass-top.png" alt="" />
      <img src="@/assets/images/game-1-battlepass-bottom.png" alt="" />
      <div class="battlepass-info">
        <div class="title">Seasons & Battlepass</div>
        <div class="desc">Season system descriptions</div>
      </div>
    </section>
    <section class="go-box hidden">
      <div class="title">Let’s Get Ready to Rumble!</div>
      <div class="go-btn-list">
        <a href="javascript:;" class="btn-play">Play for free</a>
        <a href="javascript:;" class="btn-system">
          <img src="@/assets/images/fallen-go-system.png" alt="" />Steam
        </a>
        <a href="javascript:;" class="btn-ios">
          <img src="@/assets/images/fallen-go-ios.png" alt="" />
        </a>
        <a href="javascript:;" class="btn-google">
          <img src="@/assets/images/fallen-go-google.png" alt="" />
        </a>
      </div>
    </section>
  </section>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import $ from 'jquery'

export default defineComponent({
  name: 'GameIndex',
  setup() {
    const isWap = ref(false)
    onMounted(async () => {
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
    return {}
  }
})
</script>
<style lang="less" scoped>
.banner-box {
  position: relative;
  width: 100%;
  height: 71.8rem;
  background-image: url(@/assets/images/game-1-banner.png);
  background-size: cover;
  background-position: center;
  text-align: center;
  .img {
    margin-top: 14.8rem;
  }

  .ranger {
    width: 23.8rem;
    position: absolute;
    left: 6.3rem;
    bottom: 5.7rem;
  }
  button {
    display: block;
    width: 26rem;
    height: 5.4rem;
    background: #ffffff;
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
    }
  }
  .ranger-info {
    position: absolute;
    bottom: 6.4rem;
    left: 50%;
    margin-left: -25.65rem;
    width: 51.3rem;
    min-height: 23.2rem;
    background: rgba(0, 0, 0, 0.8);
    padding: 0 4.8rem;
    .text {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.7rem;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      margin-top: 3.6rem;
    }
    .title {
      font-family: Teko;
      font-weight: 400;
      font-size: 6.4rem;
      line-height: 9.2rem;
      text-align: center;
      text-transform: uppercase;

      color: #ccff00;
      margin-top: -0.6rem;
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
  background-image: url(@/assets/images/game-1-battlefield.png);
  background-size: cover;
  background-position: center;
  .battlefield-info {
    position: absolute;
    left: 50%;
    margin-left: -30rem;
    bottom: 4.8rem;
    width: 60rem;
    height: 17.7rem;
    background: rgba(0, 0, 0, 0.8);
    padding: 3.6rem 4.8rem 0 4.8rem;
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
  background: rgba(42, 42, 42, 0.5);
  .video-box {
    float: left;
    position: relative;

    width: 33.33%;
    height: 33.33vw;

    .video {
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
        /* identical to box height */

        text-transform: uppercase;

        color: #ccff00;
        margin-bottom: -0.9rem;
      }
      .desc {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        /* identical to box height, or 171% */

        /* #FFFFFF */

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
</style>
