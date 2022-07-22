<script setup lang="ts">
const auction = {
  subtitle: 'E4C Rangers NFT Series 1',
  subtitleFocus: 'Ultimate Edition',
  title: 'auction event',
  // TODO: 时间设置
  images: [
    'https://i.imgur.com/uo7YvMO.jpg',
    'https://i.imgur.com/3fL1nMr.jpg',
    'https://i.imgur.com/bAHWfBZ.jpg',
    'https://i.imgur.com/KDb0h62.jpg'
  ],
  detail: [
    {
      title: 'The Ultimate Utilities',
      introduction: [
        {
          title: '10%',
          content: 'Revenue share of corresponding in-game hero/skin',
          style: {}
        },
        {
          title: 'E4C',
          content: 'Governance token airdrop',
          style: {}
        },
        {
          title: 'Loots',
          content: '& other in-game assets airdrops',
          style: {}
        },
        {
          title: '5',
          content: 'Free gifts to friends',
          style: {}
        }
      ]
    },
    {
      title: 'Details of the Auction Event',
      introduction: [
        {
          title: 'When',
          content: 'July 31st 9AM EST - <br> August 6th 9AM EST',
          style: {
            lineHeight: '51px',
            fontSize: '42px'
          }
        },
        {
          title: 'How',
          content:
            'Open ascending bid auction in which the highest bidder wins and pays the second highest price',
          style: {
            lineHeight: '51px',
            fontSize: '42px'
          }
        },
        {
          title: 'Where',
          content: 'OpenSea',
          style: {
            lineHeight: '51px',
            fontSize: '42px'
          }
        },
        {
          title: 'How much',
          content: 'Starting from 6.5 ETH',
          style: {
            lineHeight: '51px',
            fontSize: '42px'
          }
        }
      ]
    }
  ],
  notes: {
    title: 'Rin',
    subtitle: 'Heir of Musashi',
    content: `Rin is the first ranger came to life in E4C Verse. We crafted 15 best-quality 3D arts as
            our one-of-one NFTs, each having a meaningful background, the most special texture and
            color combinations, and ultimately unique vibes.<br><br> She’ll also make an appearance in our
            upcoming games, <a href="#">E4C Final Salvation</a> and <a href="#">E4C Fallen Arena</a>.`
  },
  actions: {
    text: '15 ULTIMATELY UNIQUE NFTs',
    button: 'RSVP for the auction', // Big on Opensea
    buttonStyle: {
      backgroundColor: '#ff4125' // #2081E2
    }
  }
}
</script>

<template>
  <main id="main" class="pt-68px xl:pt-100px bg-black-bg bg-cover bg-top bg-repeat-y">
    <div class="max-w-1332px p-x-9 mx-auto">
      <h2 class="text-2xl uppercase text-white leading-29px mt-15 not-italic">
        {{ auction.subtitle }}
        <span class="text-2xl font-bold uppercase text-rust leading-29px">{{
          auction.subtitleFocus
        }}</span>
      </h2>
      <h1 class="text-5xl font-bold uppercase text-white leading-59px mt-1 mb-3 not-italic">
        {{ auction.title }}
      </h1>
      <div class="w-40 h-2 bg-gradient-to-r from-[#b7220c] to-[#ff4125]"></div>
    </div>

    <div class="m-y-9 overflow-hidden w-full">
      <div class="logoShowcase">
        <div
          v-for="(image, index) in [...auction.images, ...auction.images]"
          :key="index"
          class="w-240px h-240px sm:w-280px sm:h-280px md:w-320px md:h-320px xl:w-480px xl:h-480px"
        >
          <a href="#">
            <img class="w-full h-auto select-none" :src="image" alt="Disclaimer Image" />
          </a>
        </div>
      </div>
    </div>

    <div
      class="max-w-1332px p-x-9 mx-auto grid grid-cols-1 xl:grid-cols-2 xl:gap-x-9 gap-y-9 xl:gap-y-0 p-b-14.25"
    >
      <div class="grid gap-y-9">
        <div v-for="(detail, index) in auction.detail" :key="index">
          <h4 class="text-base font-semibold not-italic uppercase text-[#a0a4b0] mb-3">
            {{ detail.title }}
          </h4>
          <div class="xl:w-693px grid grid-cols-1 md:grid-cols-2 gap-3">
            <section
              v-for="(item, indexJ) in detail.introduction"
              :key="indexJ"
              class="flex flex-col items-center px-6 py-3 bg-black/50 min-h-148px"
            >
              <p
                class="text-64px font-bold text-center text-white leading-78px not-italic',"
                :style="item.style"
              >
                {{ item.title }}
              </p>
              <p
                class="text-sm text-center text-[#f0f0f0] leading-24px not-italic"
                v-html="item.content"
              ></p>
            </section>
          </div>
        </div>
      </div>

      <div class="xl:fixed xl:bottom-15 xl:right-15 xl:max-w-[532px] z-100">
        <div class="bg-black/50 p-6">
          <div class="text-white">
            <span class="text-2xl uppercase italic font-bold leading-30px">{{
              auction.notes.title
            }}</span>
            <span
              class="text-base relative top-0.75 uppercase italic font-bold leading-30px ml-3"
              >{{ auction.notes.subtitle }}</span
            >
          </div>
          <p
            class="text-sm not-italic text-white mt-3 leading-24px notes-content"
            v-html="auction.notes.content"
          ></p>
        </div>
        <div class="bg-white p-9 text-center">
          <p class="text-2xl not-italic font-bold text-[#ff4125] leading-29px">
            {{ auction.actions.text }}
          </p>
          <button
            :style="auction.actions.buttonStyle"
            class="bg-[#ff4125] text-2xl font-semibold uppercase text-white leading-29px p-y-5.5 p-x-19.25 mt-6"
          >
            {{ auction.actions.button }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
#main {
  background-image: url('~@/assets/images/bg/bg-page.png');
  background-image: image-set(
    url('~@/assets/images/bg/bg-page.png') 1x,
    url('~@/assets/images/bg/bg-page@2x.png') 2x,
    url('~@/assets/images/bg/bg-page@3x.png') 3x
  );
}
</style>

<style>
.notes-content a {
  text-decoration: underline;
}
</style>

<style>
.logoShowcase {
  animation: conveyerBelt 30s linear infinite forwards;
  display: flex;
  width: fit-content;
  white-space: nowrap;
}

.logoShowcase > * {
  overflow: hidden;
  background: #000;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform: translateZ(0);
  margin-left: 12px;
  margin-right: 12px;
}
.logoShowcase img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes conveyerBelt {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
