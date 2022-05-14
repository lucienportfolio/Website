<template>
  <section class="main">
    <section class="banner-box">
      <div class="title">Ambrus Studio</div>
      <div class="desc">
        “Ambrus” stands for immortal in Greek. We aim to build lasting games and an everlasting
        metaverse, connect our player community from all over the world, and work our way towards a
        better future.
      </div>
    </section>
    <section class="team-box">
      <div class="title"><span>E4C</span> Team</div>
      <div class="desc">DM us on Twitter, it's free</div>
      <div class="team-box-list clearfix">
        <div class="team-info-box" v-for="(v, i) in teamList" :key="i">
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
        </div>
      </div>
      <div class="view-all">View all</div>
    </section>
    <section class="missions-box">
      <div class="title">Our <span>Missions</span></div>
      <div class="missions-info-box-list clearfix">
        <div class="missions-info-box">
          <div class="title">Studio Mission</div>
          <div class="desc">
            An impact-driven studio that makes good game for a good cause – a unique mission towards
            climate change
          </div>
        </div>
        <div class="missions-info-box">
          <div class="title">E4C: Final Salvation game mission</div>
          <div class="desc">
            A player experience focused game with large DAU and Esports experience, while leveraging
            web3 infrastructure to bring 10M players to seamlessly transition from web2 to web3
          </div>
        </div>
      </div>
    </section>
    <section class="manifesto-box">
      <div class="title">Ambrus STudio <span>Manifesto</span></div>
      <div class="manifesto-info-box-list clearfix">
        <div class="manifesto-info-box">
          <div class="manifesto-info"><p>Player experience first</p></div>
        </div>
        <div class="manifesto-info-box">
          <div class="manifesto-info"><p>Think long term, think big</p></div>
        </div>
        <div class="manifesto-info-box">
          <div class="manifesto-info">
            <p>Challenge convention like there is no convention</p>
          </div>
        </div>
        <div class="manifesto-info-box">
          <div class="manifesto-info">
            <p>Love what you do, use your passion to drive you</p>
          </div>
        </div>
        <div class="manifesto-info-box">
          <div class="manifesto-info">
            <p>Be humble and self-aware, and always be learning</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { defineComponent, reactive, onMounted } from 'vue'
import $ from 'jquery'
import { teamList as getTeamList } from '@/api/index'

export default defineComponent({
  name: 'AboutUs',
  setup() {
    const teamList = reactive(getTeamList)
    onMounted(() => {
      $('.view-all').bind('click', () => {
        $(this).hide()
        $('.team-info-box').show()
      })
    })
    return { teamList }
  }
})
</script>
<style lang="less" scoped>
.banner-box {
  position: relative;
  width: 100%;
  height: 63.6rem;
  background-image: url('@/assets/images/aboutus-banner.jpg');
  background-size: 100%;
  .title {
    padding: 40.8rem 0 0 8.8rem;
    font-family: Teko;
    font-weight: 400;
    font-size: 9.6rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    color: #ff4125;
  }
  .desc {
    width: 49rem;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #ffffff;
    margin: 0 0 0 8.8rem;
  }
}
.team-box {
  position: relative;
  padding: 6rem 8.8rem 7.2rem;
  background: #ffffff;
  > .title {
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
  > .desc {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #465358;
    padding-bottom: 0.9rem;
  }
  .team-box-list {
    padding-bottom: 1rem;
    .team-info-box {
      float: left;
      width: 18.4%;
      min-height: 35.9rem;
      filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1));
      border-radius: 4px 36px 0px 0px;
      margin-right: 2%;
      margin-top: 2.1rem;
      &:nth-child(5n + 5) {
        margin-right: 0;
      }
      .team-member-avatar-box {
        position: relative;
        max-height: 21rem;
        overflow: hidden;
        > img {
          width: 100%;
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
        width: 100%;
        min-height: 14.9rem;
        padding: 1.6rem 1.6rem 0;
        background: #ffffff;
        border-radius: 0px 0px 4px 12px;
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
  .view-all {
    display: none;
  }
}

.missions-box {
  padding: 6rem 8.8rem;
  > .title {
    font-family: Teko;
    font-style: normal;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    color: #000000;
    span {
      color: #ff4125;
    }
  }
  .missions-info-box {
    float: left;
    width: 49%;
    min-height: 16.4rem;
    background: #ffffff;
    border-radius: 0.4rem 3.6rem 0.4rem 1.2rem;
    margin-right: 2%;
    padding: 2.4rem 3.6rem 0;
    &:last-child {
      margin-right: 0;
    }
    .title {
      font-family: Montserrat;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2rem;
      color: #ff4125;
      padding-bottom: 2.4rem;
    }
    .desc {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: #000000;
    }
  }
}

.manifesto-box {
  padding: 6rem 8.8rem;
  background: #fff;
  > .title {
    font-family: Teko;
    font-style: normal;
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    color: #000000;
    span {
      color: #ff4125;
    }
  }
  .manifesto-info-box-list {
    margin-bottom: -1.2rem;
    .manifesto-info-box {
      float: left;
      height: 19.4rem;
      margin-bottom: 1.2rem;
      .manifesto-info {
        height: 19.4rem;
        background: rgba(240, 240, 240, 0.3);
        backdrop-filter: blur(0.8rem);
        background-size: auto 100%;
        background-position: left top;
        background-repeat: no-repeat;
        padding: 13.8rem 3.6rem 0;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2rem;
        text-transform: uppercase;
        color: #000000;
        border-radius: 0.4rem;
      }
      &:nth-child(1) {
        width: 27.3%;
        padding-right: 1.2rem;
        .manifesto-info {
          background-image: url(@/assets/images/aboutus-manifesto-bg-1.png);
          border-radius: 3.6rem 1.2rem 0.4rem 1.2rem;
        }
      }
      &:nth-child(2) {
        width: 30.7%;
        padding-right: 1.2rem;
        .manifesto-info {
          background-image: url(@/assets/images/aboutus-manifesto-bg-2.png);
          border-radius: 1.2rem 1.2rem 0.4rem 0.4rem;
        }
      }
      &:nth-child(3) {
        width: 42%;
        .manifesto-info {
          background-image: url(@/assets/images/aboutus-manifesto-bg-3.png);
          background-position: right top;
          border-radius: 1.2rem 3.6rem 1.2rem 0.4rem;
        }
      }
      &:nth-child(4) {
        width: 52.1%;
        padding-right: 1.2rem;
        .manifesto-info {
          background-image: url(@/assets/images/aboutus-manifesto-bg-4.png);
          border-radius: 1.2rem 0.4rem 1.2rem 3.6rem;
        }
      }
      &:nth-child(5) {
        width: 47.9%;
        .manifesto-info {
          background-image: url(@/assets/images/aboutus-manifesto-bg-5.png);
          background-position: right top;
          border-radius: 0.4rem 1.2rem 3.6rem 1.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .aboutus-main {
    width: 100%;
  }
  .banner-box {
    height: 64rem;
    background-image: url('@/assets/images/aboutus-banner.jpg');
    background-size: 100%;
    .title {
      padding: 43.5rem 0 0 2.4rem;
      font-size: 4.8rem;
      line-height: 95.8%;
    }
    .desc {
      padding: 0 2.4rem;
      margin: 0;
      width: unset;
    }
  }
  .team-box {
    padding: 3.6rem 2.4rem 2.4rem;
    width: 100%;
    > .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
      margin-bottom: -0.4rem;
    }
    > .desc {
      padding-bottom: 0.9rem;
    }
    .team-box-list {
      padding-bottom: 1rem;
      .team-info-box {
        width: 100%;
        margin-right: 0;
        margin-top: 2.1rem;
        min-height: 42.9rem;
        display: none;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          display: block;
        }
        .team-member-avatar-box {
          max-height: 28rem;
          > img {
            width: 100%;
            max-height: 84.3vw;
            overflow: hidden;
          }
        }
        .team-member-info {
          width: 100%;
          position: unset;
        }
      }
    }
    .view-all {
      display: block;
      font-family: Montserrat;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-transform: uppercase;
      color: #ff4125;
      padding: 1.2rem 3rem;
      text-align: center;
      margin-top: 0.6rem;
    }
  }

  .missions-box {
    width: 100%;
    padding: 3.6rem 2.4rem 2.4rem;
    > .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
    }
    .missions-info-box {
      float: unset;
      width: 100%;
      padding-bottom: 3.6rem;
      margin-bottom: 2.4rem;
    }
  }

  .manifesto-box {
    width: 100%;
    padding: 3.6rem 2.4rem 2.4rem;
    > .title {
      font-size: 3.6rem;
      line-height: 5.2rem;
    }
    .manifesto-info-box-list {
      .manifesto-info-box {
        float: unset;
        width: 100%;
        .manifesto-info {
          position: relative;
          line-height: 3rem;
          p {
            position: absolute;
            left: 2.4rem;
            bottom: 2.4rem;
          }
        }
        &:nth-child(1) {
          width: 100%;
          padding-right: 0;
          border-radius: 0.4rem;
        }
        &:nth-child(2) {
          width: 100%;
          padding-right: 0;
          border-radius: 0.4rem;
        }
        &:nth-child(3) {
          width: 100%;
          padding-right: 0;
          border-radius: 0.4rem;
          .manifesto-info {
            background-image: url(@/assets/images/aboutus-manifesto-bg-wap-3.png);
            background-position: left top;
          }
        }
        &:nth-child(4) {
          width: 100%;
          padding-right: 0;
          border-radius: 0.4rem;
        }
        &:nth-child(5) {
          width: 100%;
          padding-right: 0;
          border-radius: 0.4rem;
          .manifesto-info {
            background-image: url(@/assets/images/aboutus-manifesto-bg-wap-5.png);
            background-position: left top;
          }
        }
      }
    }
  }
}
</style>
