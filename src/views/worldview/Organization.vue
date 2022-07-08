<template>
  <section class="main worldview-organization-main">
    <section class="banner-box">
      <router-link to="/worldview">
        <div class="map-box">E4C: Verse<span>/</span>Organization - A.E.R.L</div></router-link
      >
      <div class="img-box">
        <img src="@/assets/images/worldview-organization-aerl-banner-logo.png" class="logo" />
        <img src="@/assets/images/worldview-organization-aerl-banner-text.png" class="text" />
      </div>
      <div class="text-box">
        <div class="desc">Animal Equal Rights League</div>
        <button class="btn">#Non-profit Organization</button>
      </div>
      <div class="code-box">
        <div class="before"></div>
        <div class="title">A.E.R.L</div>
        <div class="line"></div>
      </div>
    </section>
    <section class="info-box clearfix">
      <div class="members-box">
        <div class="title">Members</div>
        <div class="member-box-list clearfix">
          <div class="member-box">
            <img src="@/assets/images/worldview-ranger-rin-c1.png" alt="" />
            <div class="member-info">
              <div class="title">Kit</div>
              <div class="desc">Uncaged Reaper</div>
            </div>
          </div>
          <div class="member-box">
            <img src="@/assets/images/worldview-ranger-rin-c3.png" alt="" />
            <div class="member-info">
              <div class="title">Rin</div>
              <div class="desc">Heir of Musashi</div>
            </div>
          </div>
        </div>
      </div>
      <div class="philosophy-box">
        <div class="title">Philosophy</div>
        <div class="content">
          After mutation, animals, led by Kit, stand up (literally) against humans to protect their
          home. They ask for equal rights as the humans to survive and to continue their own
          reproduction.
        </div>
      </div>
      <div class="income-box">
        <div class="title">Income</div>
        <div class="content">
          <ul>
            <li>Natural Resources Trading</li>
            <li>Resource Processing</li>
            <li>Public Donations</li>
          </ul>
        </div>
      </div>
      <div class="member-num-box">
        <div class="title">No. of Members</div>
        <div class="content">
          <div class="num">556.3</div>
          <div class="unit">K</div>
        </div>
      </div>
      <div class="location-box">
        <div class="title">Location(s)</div>
        <div class="location-box-list">
          <div class="location-box">
            <img src="@/assets/images/worldview-organization-aerl-location-1.png" alt="" />
            <div class="info">
              <div class="address">Tokyo, Japan</div>
              <div class="desc">Headquarter</div>
            </div>
          </div>
          <div class="location-box">
            <img src="@/assets/images/worldview-organization-aerl-location-2.png" alt="" />
            <div class="info">
              <div class="address">Woodlands</div>
              <div class="desc">Around the world</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="history-box">
      <div class="title">History</div>
      <div class="history-list clearfix">
        <div class="history-info-box">
          <div class="skip">
            <div class="square"></div>
            <div class="line"></div>
          </div>
          <div class="history-info">
            <div class="year">2082</div>
            <div class="desc">A.E.R.L was founded by Kit and his fellow animals</div>
          </div>
        </div>
        <div class="history-info-box">
          <div class="skip">
            <div class="square"></div>
            <div class="line"></div>
          </div>
          <div class="history-info">
            <div class="year">2088</div>
            <div class="desc">
              Rin joined A.E.R.L and started fighting alongside Kit to protect their home woodlands
              from poachers and illegal logging operations
            </div>
          </div>
        </div>
        <div class="history-info-box">
          <div class="skip">
            <div class="square"></div>
            <div class="line"></div>
          </div>
          <div class="history-info">
            <div class="year">2095</div>
            <div class="desc">
              After years of fighting, World Parliament passed an act allowing mutant animals to be
              able to get jobs and trade equally with the human society
            </div>
          </div>
        </div>
        <div class="history-info-box">
          <div class="skip">
            <div class="square"></div>
            <div class="line"></div>
          </div>
          <div class="history-info">
            <div class="year">2100</div>
            <div class="desc">
              Dr. Mannes founded Hive to manufacture robotic bees as a substitution of bees that
              were endangered
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-box">
      <p>
        Surrounded by treacherous seas, Ionia is composed of a number of allied provinces scattered
        across a massive archipelago, known to many as the First Lands. Since Ionian culture has
        long been shaped by the pursuit of balance in all things, the border between the material
        and spirit realms tends to be more permeable here, especially in the wild forests and
        mountains.
      </p>

      <p>
        Although these lands’ enchantments can be fickle, its creatures dangerous and fae, for many
        centuries most Ionians led lives of plenty. The warrior monasteries, provincial militias—and
        even Ionia itself—had been enough to protect them.
      </p>

      <p>
        But that ended twelve years ago, when Noxus attacked the First Lands. The empire’s seemingly
        endless warhosts savaged Ionia, and were only defeated after many years, and at great cost.
      </p>

      <p>
        Now, Ionia exists in an uneasy peace. Different reactions to the war have divided the
        region—some groups, such as the Shojin monks or the Kinkou, seek a return to isolationist
        pacifism, and pastoral traditions. Other more radical factions, such as the Navori
        Brotherhood and the Order of Shadow, demand a militarization of the land’s magic, to create
        a single, unified nation that can take vengeance on Noxus.
      </p>

      <p>
        The fate of Ionia hangs in a delicate balance that few are willing to overturn, but all can
        feel shifting uneasily beneath their feet.
      </p>
    </section>
  </section>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import $ from 'jquery'

export default defineComponent({
  name: 'WorldviewOrganization',
  setup() {
    const isWap = ref(false)
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
      $('body').css({
        backgroundImage: 'url(https://ambrus.s3.amazonaws.com/1654997771178_0.80_BG-PATTERN.png)'
      })
      document.addEventListener('scroll', scrollFun, false)
      $('html').attr({ style: 'overflow-y:auto' })
      $('header,.main,footer').show()
      $('.code-box .line').css(
        'width',
        $('.code-box').width() - $('.code-box .before').width() * 3 - $('.code-box .title').width()
      )

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
.worldview-organization-main {
  width: 100%;
  .banner-box {
    position: relative;
    width: 100%;
    height: 61.9rem;
    background-image: url(@/assets/images/worldview-organization-aerl-banner-bg.png);
    background-size: cover;
    background-position: center;
    text-align: center;
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
      span {
        margin: 0 1.2rem;
      }
    }
    .img-box {
      padding-top: 18.9rem;
      text-align: center;
      .logo {
        width: 10rem;
      }
      .text {
        display: block;
        width: 48.3rem;
        margin: 5.8rem auto 0;
      }
    }
    .text-box {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 6rem;
      .desc {
        font-family: Montserrat;
        font-style: italic;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-align: center;
        color: #ffffff;
        margin: 0 0 1.2rem;
      }

      .btn {
        width: 24rem;
        height: 4.1rem;
        line-height: 4.1rem;
        background: rgba(255, 255, 255, 0.25);
        outline: none;
        border: none;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.7rem;
        text-align: center;
        color: #ffffff;
      }
    }

    .code-box {
      position: absolute;
      bottom: 0.8rem;
      left: 8rem;
      font-family: Teko;
      font-weight: 300;
      font-size: 3.6rem;
      line-height: 5.2rem;
      width: calc(61.9rem - 18.9rem - 6rem);

      text-transform: uppercase;
      color: #ffffff;

      transform: rotate(-90deg);
      transform-origin: 0 0;

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
  }
  .info-box {
    width: 126.4rem;
    margin: 12rem auto 0;
    .members-box {
      float: left;
      width: 63.2rem;
      height: 45.4rem;
      background: #465358;
      padding: 3.6rem 3.6rem 0;
      > .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 3.6rem;
      }
      .member-box-list {
        .member-box {
          width: 26.8rem;
          height: 31.7rem;
          float: left;
          position: relative;
          margin-right: 2.4rem;
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 26.8rem;
          }
          .member-info {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 26.8rem;
            height: 9.4rem;
            background: #ffffff;
            padding: 2.4rem;
            .title {
              font-family: Montserrat;
              font-style: italic;
              font-weight: 700;
              font-size: 2.4rem;
              line-height: 2.9rem;
              text-transform: uppercase;

              color: #000000;
            }
            .desc {
              font-family: Montserrat;
              font-style: italic;
              font-weight: 300;
              font-size: 1.4rem;
              line-height: 1.7rem;
              /* identical to box height */

              color: #000000;
            }
          }
        }
      }
    }
    .philosophy-box {
      float: left;
      width: 31.6rem;
      height: 45.4rem;
      background: #3c5473;
      padding: 3.6rem;
      .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 3.6rem;
      }
      .content {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 3rem;
        /* or 188% */

        color: #ffffff;
      }
    }
    .income-box {
      float: left;
      width: 31.6rem;
      height: 45.4rem;
      background: #364559;
      padding: 3.6rem;
      .title {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;

        /* #FFFFFF */

        color: #ffffff;
        margin-bottom: 3.6rem;
      }
      .content {
        ul {
          font-family: Montserrat;
          font-size: 1.6rem;
          line-height: 3rem;
          /* or 188% */

          color: #ffffff;
          li {
            list-style-type: disc;
            margin-left: 2rem;
          }
        }
      }
    }
    .member-num-box {
      float: left;
      width: 63.2rem;
      height: 33rem;
      background: #73603c;
      padding: 3.6rem;
      .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 3.6rem;
      }
      .content {
        .num {
          font-family: Montserrat;
          font-weight: 700;
          font-size: 12.8rem;
          line-height: 15.6rem;
          color: #ffffff;
          display: inline-block;
        }
        .unit {
          font-family: Montserrat;
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 2rem;
          text-transform: uppercase;
          color: #ffffff;
          display: inline-block;
          margin-left: 1.2rem;
        }
      }
    }
    .location-box {
      float: left;
      position: relative;
      width: 63.2rem;
      height: 33rem;
      background: #403521;
      .title {
        position: absolute;
        top: 3.6rem;
        left: 3.6rem;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-transform: uppercase;
        color: #ffffff;
        z-index: 1;
      }

      .location-box-list {
        .location-box {
          position: relative;
          width: 50%;
          float: left;
          text-align: center;
          vertical-align: middle;
          line-height: 33rem;
          img {
            width: 6rem;
          }
          .info {
            position: absolute;
            left: 0;
            bottom: 6rem;
            width: 100%;
            .address {
              font-family: Montserrat;
              font-weight: 400;
              font-size: 1.6rem;
              line-height: 3rem;
              /* identical to box height, or 188% */

              text-align: center;

              color: #ffffff;
            }
            .desc {
              font-family: Montserrat;
              font-weight: 400;
              font-size: 1.2rem;
              line-height: 1.5rem;
              /* identical to box height */

              text-align: center;

              color: rgba(255, 255, 255, 0.5);
            }
          }
        }
      }
    }
  }
  .history-box {
    width: 126.4rem;
    height: 51.1rem;
    margin: 0 auto;
    background: #8a8171;
    padding: 3.6rem;
    .title {
      font-family: Montserrat;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.9rem;
      text-transform: uppercase;
      color: #ffffff;
    }
    .history-list {
      .history-info-box {
        position: relative;
        width: 25%;
        height: 41rem;
        float: left;
        &:nth-child(2n + 2) {
          .history-info {
            top: 24.8rem;
            bottom: unset;
          }
        }
        .skip {
          width: 100%;
          position: absolute;
          left: 0;
          top: 22.2rem;
          .square {
            position: absolute;
            left: 0;
            top: -0.7rem;
            width: 1.6rem;
            height: 1.6rem;
            background: #d2b684;
            transform: rotate(-45deg);
          }
          .line {
            width: calc(100% - 0.8rem);
            margin-left: 0.8rem;
            height: 0.2rem;
            background: #d2b684;
          }
        }
        .history-info {
          position: absolute;
          left: 0;
          bottom: 21.2rem;
          margin-left: 0.2rem;
          .year {
            font-family: Teko;
            font-weight: 400;
            font-size: 3.6rem;
            line-height: 5.2rem;
            text-transform: uppercase;
            color: #ebcf9d;
            margin-bottom: -1rem;
          }
          .desc {
            font-family: Montserrat;
            font-weight: 400;
            width: 28rem;
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: #ffffff;
          }
        }
      }
    }
  }
  .content-box {
    width: 60rem;
    padding: 12rem 0;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #ffffff;
    margin: 0 auto;
    p {
      margin-bottom: 3.6rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .worldview-organization-main {
    .banner-box {
      height: 100vh;
      background-image: url(@/assets/images/worldview-organization-aerl-banner-bg-mobile.png);
      .map-box {
        top: 10.4rem;
        left: 3.6rem;
      }
      .img-box {
        padding-top: 26.4rem;
        .text {
          width: 25.8rem;
          margin: 2.4rem auto 0;
        }
      }
      .text-box {
        bottom: 3.6rem;
        .desc {
          font-size: 1.6rem;
          line-height: 2rem;
        }
      }
      .code-box {
        display: none;
      }
    }
    .info-box {
      width: 100%;
      margin: 0;
      .members-box {
        float: unset;
        width: 100%;
        height: unset;
        padding: 3.6rem;
        .member-box-list {
          .member-box {
            width: calc((100% - 1.2rem) / 2);
            height: 20.5rem;
            margin-right: 1.2rem;
            text-align: center;
            &:last-child {
              margin-right: 0;
            }
            img {
              width: 14.5rem;
            }
            .member-info {
              width: 14.5rem;
              height: 6.1rem;
              padding: 1.2rem;
              left: 50%;
              margin-left: -7.25rem;
              text-align: left;
              .title {
                font-size: 2rem;
                line-height: 2.4rem;
              }
              .desc {
                font-size: 1.1rem;
                line-height: 1.3rem;
              }
            }
          }
        }
      }
      .philosophy-box {
        float: unset;
        width: 100%;
        height: unset;
        padding: 3.6rem;
        .title {
          margin-bottom: 2.4rem;
        }
      }
      .income-box {
        float: unset;
        width: 100%;
        height: unset;
        padding: 3.6rem;
        .title {
          margin-bottom: 2.4rem;
        }
        .content {
          ul {
            li {
              margin-left: 2rem;
            }
          }
        }
      }
      .member-num-box {
        float: unset;
        width: 100%;
        height: unset;
        padding: 3.6rem;
        .title {
          margin-bottom: 1.2rem;
        }
        .content {
          .num {
            font-size: 7.2rem;
            line-height: 8rem;
          }
        }
      }
      .location-box {
        float: unset;
        width: 100%;
        height: unset;
        .title {
          position: absolute;
          top: 3.6rem;
          left: 3.6rem;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 700;
          font-size: 2.4rem;
          line-height: 2.9rem;
          text-transform: uppercase;
          color: #ffffff;
          z-index: 1;
        }

        .location-box-list {
          .location-box {
            line-height: 26.6rem;
            img {
              width: 6rem;
            }
            .info {
              bottom: 3.6rem;
            }
          }
        }
      }
    }
    .history-box {
      width: 100%;
      height: unset;
      margin: 0 auto;
      .title {
        margin-bottom: 1.2rem;
      }
      .history-list {
        .history-info-box {
          width: 100%;
          height: unset;
          float: unset;
          &:nth-child(2n + 2) {
            .history-info {
              top: unset;
              bottom: unset;
            }
          }
          &:first-child {
            .line {
              height: calc(100% - 2.7rem);
              margin-top: 2.7rem;
            }
          }
          &:last-child {
            .history-info {
              padding-bottom: 0;
            }
          }
          .skip {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            .square {
              left: 0.4rem;
              top: 1.7rem;
            }
            .line {
              height: 100%;
              width: 0.2rem;
              margin-left: 1.1rem;
            }
          }
          .history-info {
            position: unset;
            left: 0;
            bottom: unset;
            margin-left: unset;
            padding-left: 3.6rem;
            padding-bottom: 1.2rem;
          }
        }
      }
    }
    .content-box {
      width: 100%;
      padding: 3.6rem;
    }
  }
}
</style>
