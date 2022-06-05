<template>
  <section class="main">
    <section
      class="banner-box"
      :style="`background-image: url(${bannerInfo.material_list.material.url})`"
    >
      <div class="title">{{ bannerInfo.name }}</div>
      <div class="desc" v-html="bannerInfo.html"></div>
    </section>
    <section class="missions-box">
      <div class="missions-block">
        <div class="title inside">{{ missionsInfo.name }}</div>
        <div class="missions-info-box-list clearfix" v-html="missionsInfo.html"></div>
      </div>
    </section>
    <section class="manifesto-box">
      <div
        class="manifesto-info-box-list clearfix"
        :style="
          isWap ? '' : `background-image: url(${manifestoInfo[0].material_list.material.url})`
        "
        v-if="manifestoInfo.length > 1"
      >
        <div class="manifesto-info-box" v-for="(item, i) in manifestoInfo" :key="i">
          <div class="manifesto-color"></div>
          <div class="manifesto-info" v-html="item.html"></div>
        </div>
      </div>
    </section>
    <section class="team-box">
      <div class="team-block">
        <div class="title inside">{{ teamInfo[0].name }}</div>
        <div class="desc">{{ teamInfo[0].introduction }}</div>
        <div class="team-box-list clearfix">
          <template v-for="(v, i) in teamInfo">
            <div class="team-info-box" :key="i" v-if="i > 0">
              <div class="team-member-avatar-box">
                <img :src="v.material_list.material.url" />
              </div>
              <div class="team-member-info" v-html="v.html"></div>
            </div>
          </template>
        </div>
        <div class="view-all">View all</div>
      </div>
    </section>
  </section>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
import $ from 'jquery'
import { onCheckMaterial } from '@/utils/index.js'
import { getBlockInfoApi } from '@/api/block/index'

export default defineComponent({
  name: 'AboutUs',
  setup() {
    const isWap = ref(false)
    const bannerInfo = ref({
      name: '',
      html: '',
      material_list: {
        material: { type: '', url: '' },
        material_pc: { type: '', url: '' },
        material_mob: { type: '', url: '' }
      }
    })
    const missionsInfo = ref({
      name: '',
      html: ''
    })
    const manifestoInfo = ref([
      {
        html: '',
        material_list: {
          material: { type: '', url: '' },
          material_pc: { type: '', url: '' },
          material_mob: { type: '', url: '' }
        }
      }
    ])
    const teamInfo = ref([
      {
        name: '',
        introduction: ''
      }
    ])
    onMounted(async () => {
      const bannerInfoRes = await getBlockInfoApi('aboutusBanner')
      if (bannerInfoRes.code === 200) {
        if (bannerInfoRes.data.length > 0) {
          bannerInfo.value.name = bannerInfoRes.data[0].name
          bannerInfo.value.html = bannerInfoRes.data[0].html
          bannerInfo.value.material_list = onCheckMaterial(
            bannerInfoRes.data[0].material,
            bannerInfoRes.data[0].material_mob
          )
        }
      }

      const missionsInfoRes = await getBlockInfoApi('aboutusOurMissions')
      if (missionsInfoRes.code === 200) {
        if (bannerInfoRes.data.length > 0) {
          missionsInfo.value.name = missionsInfoRes.data[0].name
          missionsInfo.value.html = missionsInfoRes.data[0].html
        }
      }

      const manifestoInfoRes = await getBlockInfoApi('aboutusManifesto')
      if (manifestoInfoRes.code === 200) {
        manifestoInfo.value = []
        manifestoInfoRes.data.forEach((v) => {
          manifestoInfo.value.push({
            html: v.html,
            material_list: onCheckMaterial(v.material, v.material_mob)
          })
        })
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
      $('.view-all').bind('click', () => {
        $(this).hide()
        $('.team-info-box').show()
      })
      function checkFontSize() {
        const oldIsWap = isWap.value
        isWap.value = !($(window).width() > 960)
        if (isWap.value !== oldIsWap) {
          bannerInfo.value.material_list.material = isWap.value
            ? bannerInfo.value.material_list.material_mob
            : bannerInfo.value.material_list.material_pc
        }
      }
      $(document).ready(checkFontSize)
      $(window).resize(checkFontSize)
    })
    // watch(
    //   () => isWap,
    //   (newValue, oldValue) => {
    //     console.log('##########')
    //     console.log(newValue, oldValue)
    //   },
    //   { immediate: true }
    // )
    return {
      isWap,
      bannerInfo,
      missionsInfo,
      manifestoInfo,
      teamInfo
    }
  }
})
</script>
<style lang="less" scoped>
.banner-box {
  position: relative;
  width: 100%;
  height: 64rem;
  background-size: 100%;
  .title {
    padding: 40.8rem 0 0 8.8rem;
    font-family: Teko;
    font-weight: 400;
    font-size: 9.6rem;
    line-height: 9.2rem;
    text-transform: uppercase;
    color: #fff;
  }
  /deep/.desc {
    width: 49rem;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #ffffff;
    padding: 0 0 0 8.8rem;
  }
}

.missions-box {
  padding-bottom: 6.6rem;
  .missions-block {
    width: 109.6rem;
    margin: 0 auto;
    > .title {
      font-family: Teko;
      font-style: normal;
      font-weight: 400;
      font-size: 6.4rem;
      line-height: 9.2rem;
      text-transform: uppercase;
      margin: 6rem 0 2.4rem;
    }
    /deep/.missions-info-box {
      float: left;
      width: 50rem;
      margin-right: 9.6rem;
      &:last-child {
        margin-right: 0;
      }
      .title {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2rem;
        color: #ff4125;
        padding-bottom: 0.8rem;
      }
      .desc {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 3rem;
        color: #ffffff;
      }
    }
  }
}

.manifesto-box {
  padding: 6.6rem 0 4.8rem;
  .manifesto-info-box-list {
    width: 126.4rem;
    margin: 0 auto;
    height: 47.8rem;
    background-size: 100% auto;
    background-position: center;
    .manifesto-info-box {
      float: left;
      width: 20%;
      height: 19.4rem;
      margin-bottom: 1.2rem;
      .manifesto-color {
        width: 100%;
        height: 34rem;
        opacity: 0.6;
      }
      .manifesto-info {
        position: relative;
        height: 13.8rem;
        background: rgba(0, 0, 0, 0.8);
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 3rem;
        display: flex;
        align-items: center;
        color: #ffffff;
        padding: 2.4rem 2.4rem 2.4rem 3.8rem;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          margin-top: -1.5rem;
          left: 2.4rem;
          width: 0.2rem;
          height: 3rem;
          background: #ff4125;
          border-radius: 0.1rem;
        }
      }
      &:nth-child(1) {
        .manifesto-color {
          background: #ed371c;
        }
      }
      &:nth-child(2) {
        .manifesto-color {
          background: #ff9a10;
        }
      }
      &:nth-child(3) {
        .manifesto-color {
          background: #1d9be9;
        }
      }
      &:nth-child(4) {
        .manifesto-color {
          background: #2ddc92;
        }
      }
      &:nth-child(5) {
        .manifesto-color {
          background: #7e2cd8;
        }
      }
    }
  }
}
.team-box {
  position: relative;
  .team-block {
    width: 144rem;
    margin: 0 auto;
    padding: 6rem 8.8rem 7.2rem;
    > .title {
      font-family: Teko;
      font-style: normal;
      font-weight: 400;
      font-size: 6.4rem;
      line-height: 9.2rem;
      text-transform: uppercase;
      color: #fff;
      float: left;
      margin-bottom: -1.2rem;
    }
    > .desc {
      margin-top: 8rem;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: #fff;
      padding-bottom: 1.5rem;
    }
    .team-box-list {
      padding-bottom: 1rem;
      .team-info-box {
        float: left;
        width: 23.3rem;
        min-height: 38.2rem;
        filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1));
        margin-right: 2.4rem;
        margin-top: 2.1rem;
        &:nth-child(5n + 5) {
          margin-right: 0;
        }
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
          width: 100%;
          min-height: 14.9rem;
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
    .view-all {
      display: none;
    }
  }
}
@media screen and (max-width: 960px) {
  .banner-box {
    position: relative;
    width: 100%;
    height: 64rem;
    background-size: 100%;
    .title {
      font-size: 4.8rem;
      line-height: 95.8%;
      padding: 41.3rem 0 0 3.6rem;
    }
    /deep/.desc {
      width: 100%;
      padding: 0 3.6rem;
    }
  }

  .missions-box {
    padding-bottom: 4rem;
    .missions-block {
      width: 100%;
      margin: 0 auto;
      padding: 0 3.6rem;
      > .title {
        font-size: 3.6rem;
        line-height: 5.2rem;
        margin: 8rem 0 0;
      }
      /deep/.missions-info-box {
        float: unset;
        width: 100%;
        margin-right: 0;
        .title {
          font-weight: 700;
          font-size: 2.4rem;
          line-height: 2.9rem;
          color: #ff4125;
          text-align: center;
          margin-top: 3.6rem;
          margin-bottom: 1.6rem;
        }
        .desc {
          font-size: 1.4rem;
          line-height: 2.4rem;
        }
      }
    }
  }

  .manifesto-box {
    padding: 4rem 0 2.8rem;
    .manifesto-info-box-list {
      width: 100%;
      margin: 0 auto;
      padding: 0 3.6rem;
      height: unset;
      background: unset;
      .manifesto-info-box {
        float: unset;
        width: 100%;
        height: unset;
        margin-bottom: 1.2rem;
        .manifesto-color {
          display: none;
        }
        .manifesto-info {
          height: unset;
        }
      }
    }
  }
  .team-box {
    position: relative;
    .team-block {
      width: 100%;
      margin: 0 auto;
      padding: 4rem 3.6rem 4.4rem;
      > .title {
        font-size: 3.6rem;
        line-height: 5.2rem;
        float: unset;
        margin-bottom: -0.4rem;
        text-align: center;
      }
      > .desc {
        line-height: 2.4rem;
        text-align: center;
        margin-top: 0;
        padding: 0;
        margin-bottom: -1.2rem;
      }
      .team-box-list {
        padding-bottom: 0;
        .team-info-box {
          float: unset;
          width: 100%;
          min-height: 45.2rem;
          margin-right: 0;
          margin-top: 2.4rem;
          /deep/.team-member-avatar-box {
            position: relative;
            max-height: unset;
            overflow: hidden;
            > img {
              width: 100%;
              overflow: hidden;
            }
          }
          /deep/.team-member-info {
            .desc {
              line-height: 2.4rem;
            }
          }
        }
      }
      .view-all {
        display: none;
      }
    }
  }
}
</style>
