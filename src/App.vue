<template>
  <div class="loading-main" v-if="loading">
    <div class="video-box">
      <video
        class="video-background"
        preload="auto"
        loop
        playsinline
        autoplay
        src="@/assets/videos/loading.mp4"
        tabindex="-1"
        muted="muted"
      ></video>
    </div>
    <div class="loading-box">
      <div class="loading-info">
        <div class="loading-text">
          <span>E4C:</span> Loading
          <span class="pro">(0%)</span>
        </div>
        <div class="loading-skip" id="loading-skip"></div>
      </div>
    </div>
  </div>
  <header>
    <div class="info">
      <img src="@/assets/images/header-logo.png" alt="" class="logo" />
      <div class="middle-box">
        <nav>
          <router-link to="/" :class="routeName === 'IndexIndex' ? 'active' : ''">HOME</router-link>
          <router-link to="aboutus" :class="routeName === 'IndexAboutus' ? 'active' : ''"
            >ABOUT US</router-link
          >
        </nav>
        <div class="top-right clearfix">
          <div class="link-list">
            <a href="https://discord.gg/e4c" target="_blank">
              <img src="@/assets/images/header-link-1.png" alt="" />
            </a>
            <!-- <a href="javascript:;">
                <img src="@/assets/images/header-link-2.png" alt="" />
              </a> -->
            <a href="https://twitter.com/AmbrusStudio" target="_blank">
              <img src="@/assets/images/header-link-3.png" alt="" />
            </a>
            <!-- <a href="javascript:;">
                <img src="@/assets/images/header-link-4.png" alt="" />
              </a> -->
            <a href="https://medium.com/@AmbrusStudio" target="_blank">
              <img src="@/assets/images/header-link-5.png" alt="" />
            </a>
          </div>
          <div class="language">Eng</div>
          <div class="user-btn-box">
            <a href="javascript:;" class="btn login-btn">Connect Wallet</a>
            <!-- <div class="btn user-btn">0x80 ... E417</div>
              <a href="javascript:;" class="logout-btn hidden">Disconnect</a> -->
          </div>
        </div>
      </div>
      <div class="menu-box">
        <img src="@/assets/images/header-menu.png" alt="" class="header-menu" />
        <img src="@/assets/images/header-menu-close.png" alt="" class="header-menu-close hidden" />
      </div>
    </div>
  </header>
  <router-view />
  <footer>
    <div class="info">
      <img src="@/assets/images/footer-logo-1.png" alt="" class="logo" />
      <div class="sub-box">
        <!-- <div class="sub-title">Newsletter</div>
          <div class="sub-input-box clearfix">
            <input type="text" placeholder="Your email" class="sub-input" />
            <div class="sub-btn">Subscribe</div>
          </div> -->
      </div>
      <div class="link-list">
        <a href="https://discord.gg/e4c" target="_blank">
          <img src="@/assets/images/footer-link-1.png" alt="" />
        </a>
        <!-- <a href="javascript:;">
            <img src="@/assets/images/footer-link-2.png" alt="" />
          </a> -->
        <a href="https://twitter.com/AmbrusStudio" target="_blank">
          <img src="@/assets/images/footer-link-3.png" alt="" />
        </a>
        <!-- <a href="javascript:;">
            <img src="@/assets/images/footer-link-4.png" alt="" />
          </a> -->
        <a href="https://medium.com/@AmbrusStudio" target="_blank">
          <img src="@/assets/images/footer-link-5.png" alt="" />
        </a>
      </div>
      <div class="footer-logo">
        <img src="@/assets/images/footer-logo-2.png" alt="" />
      </div>
      <div class="help-link-list">
        <a href="javascript:;">Terms of Service</a>
        <a href="javascript:;">Privacy Policy</a>
        <a href="javascript:;">Get Help</a>
      </div>
      <div class="copyright">© 2021 Ambrus Studio</div>
    </div>
  </footer>
</template>
<script>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import $ from 'jquery'

export default defineComponent({
  name: 'App',
  setup() {
    const loading = ref(true)
    console.log(loading.value)
    NProgress.configure({ minimum: 0.1, parent: '#loading-skip' })
    const pagePg = (skip) => {
      NProgress.set(skip)
      setTimeout(() => {
        $('.loading-text .pro').html(`(${(skip * 100).toFixed(0)}%)`)
      }, 30)
    }
    let skip = 0.1
    let setSkip = null
    if (loading.value) {
      setSkip = setInterval(() => {
        const ran = `${Math.random()}`.charAt(3)
        skip += ran / 1000
        if (skip < 0.89) {
          pagePg(skip)
        } else {
          clearInterval(setSkip)
        }
      }, 150)
    }
    const isWap = ref(false)
    onMounted(() => {
      window.onload = () => {
        clearInterval(setSkip)
        pagePg(skip + (1 - skip) / 2)
        setTimeout(() => {
          $('.loading-text .pro').html('(100%)')
          $('html').css('overflow-y', 'auto')
          pagePg(1)
          loading.value = false
        }, 300)
      }

      $('.menu-box').bind('click', () => {
        $('.middle-box').toggle()
        $('.header-menu,.header-menu-close').toggle()
      })
      function checkFontSize() {
        const width = $(window).width()
        if (width > 960 && width < 1440) {
          $('html').css({ 'font-size': `${(width / 1440) * 62.5}%` })
        } else if (loading.value) {
          $('html').attr({ style: '' })
        } else {
          $('html').attr({ style: 'overflow-y:auto' })
        }
        if (width > 960) {
          isWap.value = false
          $('.middle-box').attr('style', '')
          $('.header-menu').show()
          $('.header-menu-close').hide()
        } else {
          isWap.value = true
        }
      }
      function htmlshow() {
        checkFontSize()
        $('html').show()
      }
      $(document).ready(htmlshow)
      $(window).resize(checkFontSize)
    })
    const route = useRoute()
    const router = useRouter()
    const routeName = ref(route.name)
    watch(
      () => router.currentRoute.value.name,
      (newValue, oldValue) => {
        console.log(oldValue)
        routeName.value = newValue
        if (isWap.value) {
          $('.middle-box').hide()
          $('.header-menu').show()
          $('.header-menu-close').hide()
        }
      },
      { immediate: true }
    )
    return {
      loading,
      routeName
    }
  }
})
</script>
<style lang="less">
header,
section,
footer,
aside,
nav,
article,
figure {
  display: block;
}
li {
  list-style: none;
}
img {
  vertical-align: middle;
}
i {
  font-style: normal;
}
input,
textarea {
  border: none;
  outline: none;
  resize: none;
}
a {
  color: #333;
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  box-sizing: border-box;
  touch-action: none;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  overflow: hidden;
}
@font-face {
  font-family: 'Montserrat';
  src: url(@/assets/fonts/Montserrat/Montserrat-Regular-8.otf);
  font-weight: 400;
}
@font-face {
  font-family: 'Teko';
  src: url(@/assets/fonts/Teko/Teko-Regular-2.ttf);
  font-weight: 400;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Montserrat, Teko, 'PingFang SC', 'Helvetica Neue',
    STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;
  font-size: 1.4rem;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  color: #000;
  background: #f0f0f0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.clearfix {
  display: block;
  &:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
.hidden {
  display: none;
}
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat"); */

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
}
.btn {
  position: relative;
  background-image: linear-gradient(
    60deg,
    #f0f0f0,
    #f0f0f0 10%,
    #ff4125 10%,
    #ff4125 10.5%,
    #f0f0f0 10.5%,
    #f0f0f0 11.2%,
    #f43619 11.2%,
    #ff4125 13%,
    #ff4125 89%,
    #f43619 90.8%,
    #f0f0f0 90.8%,
    #f0f0f0 91.5%,
    #ff4125 91.5%,
    #ff4125 92%,
    #f0f0f0 92%,
    #f0f0f0 100%
  );
  background-size: 150%;
  background-position: center;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.25s all ease-in-out;
  text-align: center;
  color: white;
  font-family: Montserrat, sans-serif;
  user-select: none;
  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 1.2rem;
    background-size: 100%;
  }
  &:active {
    transform: scale(0.95);
    box-shadow: none;
    background-size: 150%;
  }
  span {
    font-weight: 600;
  }
}

.graybtn {
  background-color: #a0a4b0;
  background-image: unset;
  &:hover {
    transform: unset;
    box-shadow: unset;
    background-size: unset;
  }
  &:active {
    transform: unset;
    box-shadow: unset;
    background-size: unset;
  }
}

.loading-main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1c1a1c;
  z-index: 1000000000;
  .video-box {
    position: relative;
    height: 100vh;
    overflow: hidden;
    .video-background {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 100vh;
    }
  }
  .loading-box {
    margin: 0 auto;
    .loading-info {
      position: absolute;
      width: 88%;
      bottom: 8.8rem;
      left: 6%;
      .loading-text {
        font-family: Teko;
        font-weight: 400;
        font-size: 4.8rem;
        line-height: 6.9rem;
        color: #fff;
        padding-bottom: 0.4rem;
        span {
          color: #ff4125;
        }
      }
      .loading-skip {
        width: 50%;
      }
      #nprogress {
        position: relative;
        width: 100%;
        height: 1rem;
        background: rgba(255, 255, 255, 0.1);
        -webkit-transform: skew(-45deg);
        -moz-transform: skew(-45deg);
        -o-transform: skew(-45deg);
        overflow: hidden;
        .spinner {
          display: none;
        }
        .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 10rem;
          height: 100%;
          box-shadow: 0 0 10px #fff, 0 0 5px #fff;
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0, -0.4rem);
          -ms-transform: rotate(3deg) translate(0, -0.4rem);
          transform: rotate(3deg) translate(0, -0.4rem);
        }
        .bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 1rem;
          width: 100%;
          background: #eeeeee;
          box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6.4rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  z-index: 99999999;
  .info {
    position: relative;
    height: 6.4rem;
    .logo {
      position: absolute;
      width: 4rem;
      height: 4rem;
      top: 1.2rem;
      left: 3.2rem;
    }
    .middle-box {
      nav {
        margin-left: 8.8rem;
        > a {
          font-family: Montserrat;
          font-weight: 400;
          text-align: center;
          text-transform: uppercase;
          color: #465358;
          flex: none;
          order: 0;
          flex-grow: 0;
          padding: 0 2.4rem;
          line-height: 6.4rem;
          display: block;
          float: left;
          &:not(.active):hover {
            font-weight: 600;
            color: #ff4125;
          }
          &.active {
            position: relative;
            font-family: Montserrat;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            color: #000;
            &::before {
              content: '';
              position: absolute;
              top: 3.1rem;
              left: 0;
              width: 100%;
              height: 0.2rem;
              background: red;
              position: absolute;
              background: #ff4125;
              z-index: -1;
            }
          }
        }
      }
      .top-right {
        position: absolute;
        right: 3.2rem;
        .link-list {
          float: left;
          /* position: absolute;
  top: 0;
  right: 29.8rem;
  right: 23rem; */
          /* margin-right: 1.2rem; */
          a {
            padding: 0 1.35rem;
            height: 6.4rem;
            line-height: 6.4rem;
            img {
              width: 2.4rem;
            }
          }
        }
        .language {
          display: none;
          float: left;
          /* position: absolute;
  top: 1.4rem;
  right: 22.9rem; */
          width: 5.7rem;
          height: 3.6rem;
          line-height: 3.6rem;
          background: #ffffff;
          border-radius: 0.4rem;
          font-family: Montserrat;
          font-weight: 400;
          text-align: center;
          color: #465358;
          cursor: pointer;
          margin-top: 1.4rem;
          margin-right: 1.2rem;
        }
        .user-btn-box {
          float: left;
          margin-top: 1.4rem;
          position: relative;
          display: none;
          .login-btn,
          .user-btn {
            display: block;
            width: 18.5rem;
            height: 3.6rem;
            line-height: 3.6rem;
            /* background: #ff4125; */
            border-radius: 0.4rem;
            font-family: Montserrat;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
          }

          .logout-btn {
            position: absolute;
            right: 0;
            top: 3.6rem;
            width: 18.5rem;
            height: 3.6rem;
            line-height: 3.6rem;
            background: #ffffff;
            border-radius: 0.4rem;
            position: absolute;
            font-family: Montserrat;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            color: #ff4125;
            z-index: 9999;
          }
        }
      }
    }
    .menu-box {
      display: none;
    }
  }
}

.main {
  width: 100%;
  min-height: 60rem;
}

footer {
  width: 100%;
  height: 40.1rem;
  background: #465358;
  .info {
    position: relative;
    height: 40.1rem;
    /* margin: 0 auto; */
    .logo {
      position: absolute;
      width: 11.7rem;
      left: 8.8rem;
      top: 4.8rem;
    }
    .sub-box {
      position: absolute;
      left: 22.9rem;
      top: 6.7rem;
      .sub-title {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.8rem;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 0.4rem;
      }
      .sub-input-box {
        .sub-input {
          width: 25.8rem;
          height: 4.8rem;
          padding-left: 1.6rem;
          float: left;
          border: none;
          outline: none;
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.8rem;
          &::-webkit-input-placeholder,
          &:-moz-placeholder,
          &::-moz-placeholder,
          &:-ms-input-placeholder {
            font-family: Montserrat;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.8rem;
            color: #a8a8a8;
          }
        }

        .sub-btn {
          width: 11.7rem;
          height: 4.8rem;
          line-height: 4.8rem;
          background: #ff4125;
          font-family: Montserrat;
          font-weight: 600;
          font-size: 1.4rem;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
          float: left;
        }
      }
    }
    .link-list {
      position: absolute;
      right: 8.95rem;
      top: 10.1rem;
      a {
        img {
          width: 2.4rem;
          margin-left: 2.7rem;
        }
      }
    }
    .footer-logo {
      text-align: center;
      padding: 18.9rem 0 0;
      img {
        width: 24rem;
      }
    }
    .help-link-list {
      text-align: center;
      padding: 3.6rem 0 1.2rem;
      height: 6.6rem;
      a {
        border-right: 0.1rem solid #2a2a2a;
        display: inline-block;
        padding: 0 2.4rem;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #a0a4b0;
        flex: none;
        order: 0;
        flex-grow: 0;
        display: none;
        &:last-child {
          border-right: 0;
        }
      }
    }
    .copyright {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: #ffffff;
      text-align: center;
    }
  }
}

@media screen and (max-width: 960px) {
  html {
    font-size: 62.5%;
  }
  .loading-main {
    .loading-box {
      .loading-info {
        width: 81.8%;
        bottom: 9.6vw;
        left: 9.6%;
        .loading-text {
          font-size: 2.4rem;
          line-height: 3.4rem;
          padding-bottom: 1.2rem;
        }
        .loading-skip {
          width: 100%;
        }
      }
    }
  }
  header {
    height: 5.2rem;
    .info {
      width: 100%;
      height: 5.2rem;
      .logo {
        position: unset;
        width: 4rem;
        height: 4rem;
        margin: 0.6rem 1.2rem;
      }
      .middle-box {
        display: none;
        nav {
          margin-left: 0;
          position: fixed;
          top: 5.2rem;
          left: 0;
          /* height: calc(100vh - 5.2rem); */
          width: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(1rem);
          /* height: calc(100vh - 5.2rem - 17.5rem); */
          height: calc(100vh - 5.2rem - 8.7rem);
          > a {
            float: unset;
            margin: 0 32%;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 5.6rem;
            color: #465358;
            &.active::before {
              top: 2.7rem;
            }
          }
        }
        .top-right {
          position: fixed;
          /* top: calc(100vh - 17.5rem); */
          top: calc(100vh - 8.7rem);
          left: 0;
          right: unset;
          background: #f0f0f0;
          text-align: center;
          width: 100%;
          .link-list {
            background: #f0f0f0;
            position: unset;
            top: unset;
            right: unset;
            text-align: center;
            padding-top: 3.9rem;
            padding-bottom: 2.4rem;
            float: unset;
            margin-right: 0;
            a {
              line-height: unset;
            }
          }
          .language {
            display: none;
          }
          .user-btn-box {
            position: relative;
            background: #f0f0f0;
            padding: 2.8rem 3.2rem 3.6rem;
            float: unset;
            margin-top: 0;
            .login-btn,
            .user-btn {
              display: block;
              position: unset;
              top: unset;
              right: unset;
              width: 100%;
              height: 4.8rem;
              line-height: 4.8rem;
            }
            .logout-btn {
              width: calc(100% - 6.4rem);
              top: 7rem;
              right: unset;
            }
          }
        }
      }
      .menu-box {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        img {
          &.header-menu {
            width: 2.4rem;
            margin-top: 1.6rem;
            margin-right: 2.5rem;
          }
          &.header-menu-close {
            width: 2rem;
            margin-top: 1.6rem;
            margin-right: 2.5rem;
          }
        }
      }
    }
  }

  footer {
    position: relative;
    width: 100%;
    height: 37.8rem;
    background: #465358;
    padding: 4rem 2.4rem 3.6rem;
    .info {
      position: unset;
      width: 100%;
      height: unset;
      .logo {
        position: absolute;
        width: 6rem;
        left: 2.4rem;
        top: 2.4rem;
      }
      .sub-box {
        position: unset;
        left: unset;
        top: unset;
        height: 9.2rem;
        .sub-title {
          font-size: 1.4rem;
          margin-bottom: 1.6rem;
          text-align: center;
        }
        .sub-input-box {
          max-width: 50rem;
          margin: 0 auto;
          .sub-input {
            width: 64.2%;
            -webkit-appearance: none;
            border-radius: 0;
            line-height: normal;
          }
          .sub-btn {
            width: 35.8%;
          }
        }
      }

      .link-list {
        position: unset;
        right: unset;
        top: unset;
        margin: 4rem 0;
        text-align: center;
        a {
          img {
            margin: 0 1.35rem;
          }
        }
      }
      .footer-logo {
        text-align: center;
        padding: 0;
        img {
          width: 10.8rem;
        }
      }
      .help-link-list {
        padding: 2.4rem 0;
        a {
          padding: 0 2rem;
          font-size: 1rem;
          line-height: 1.2rem;
          &:last-child {
            padding-right: 0;
            border-right: 0;
          }
          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 640px) and (max-width: 960px) {
  html {
    font-size: 125%;
  }
  .loading-main {
    .loading-box {
      .loading-info {
        width: 81.25%;
        bottom: 9.375vw;
        left: 9.375%;
        .loading-text {
          font-size: 4.8rem;
          line-height: 6.9rem;
          padding-bottom: 1.2rem;
        }
      }
    }
  }
}
@media screen and (min-width: 640px) and (max-width: 720px) {
  html {
    font-size: 106%;
  }
}
</style>
