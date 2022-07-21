<script setup lang="ts">
// Import Swiper styles
import 'swiper/css'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const auction = {
  images: [
    'http://localhost:3000/demo/images/nft-disclaimer.png',
    'http://localhost:3000/demo/images/nft-disclaimer.png',
    'http://localhost:3000/demo/images/nft-disclaimer.png'
  ],
  detail: [
    {
      title: 'The Ultimate Utilities',
      introduction: [
        {
          title: '10%',
          content: 'Revenue share of corresponding in-game hero/skin'
        },
        {
          title: 'E4C',
          content: 'Governance token airdrop'
        },
        {
          title: 'Loots',
          content: '& other in-game assets airdrops'
        },
        {
          title: '5',
          content: 'Free gifts to friends'
        }
      ]
    },
    {
      title: 'Details of the Auction Event',
      introduction: [
        {
          title: 'When',
          content: 'July 31st 9AM EST - August 6th 9AM EST'
        },
        {
          title: 'How',
          content:
            'Open ascending bid auction in which the highest bidder wins and pays the second highest price'
        },
        {
          title: 'Where',
          content: 'OpenSea'
        },
        {
          title: 'How much',
          content: 'Starting from 6.5 ETH'
        }
      ]
    }
  ]
}
</script>

<template>
  <main id="main" class="pt-68px xl:pt-100px bg-black-bg bg-cover bg-top bg-repeat-y">
    <div class="max-w-1280px p-x-2.5 mx-auto">
      <h2 class="text-2xl uppercase text-white leading-29px mt-15 not-italic">
        E4C Rangers NFT Series 1
        <span class="text-2xl font-bold uppercase text-rust leading-29px">Ultimate Edition</span>
      </h2>
      <h1 class="text-5xl font-bold uppercase text-white leading-59px mt-1 mb-3 not-italic">
        auction event
      </h1>
      <div class="w-40 h-2 bg-gradient-to-r from-[#b7220c] to-[#ff4125]"></div>
    </div>

    <!-- h-[480px]  -->
    <div class="m-y-9">
      <swiper
        class="auction-swiper"
        :slides-per-view="3"
        :space-between="24"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(image, index) in auction.images" :key="index">
          <a href="#">
            <img class="w-full h-auto select-none" :src="image" alt="Disclaimer Image" />
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <div class="max-w-1264px p-x-2.5 mx-auto grid grid-cols-2 gap-x-9 p-b-14.25">
      <div class="grid gap-y-32.5">
        <div v-for="(detail, index) in auction.detail" :key="index">
          <h4 class="text-base font-semibold not-italic uppercase text-[#a0a4b0] mb-3">
            {{ detail.title }}
          </h4>
          <div class="w-693px grid grid-cols-2 gap-3">
            <section
              v-for="(item, indexJ) in detail.introduction"
              :key="indexJ"
              class="flex flex-col justify-center items-center px-6 py-3 bg-black/50"
            >
              <p class="text-64px font-bold text-center text-white leading-78px not-italic">
                {{ item.title }}
              </p>
              <p class="text-sm text-center text-[#f0f0f0] leading-24px not-italic">
                {{ item.content }}
              </p>
            </section>
          </div>
        </div>
      </div>

      <div class="fixed bottom-15 right-15 max-w-[532px] z-100">
        <div class="bg-black p-6">
          <div class="text-white">
            <span class="text-2xl uppercase italic font-bold leading-30px">Rin</span>
            <span class="text-base relative top-0.75 uppercase italic font-bold leading-30px ml-3"
              >Heir of Musashi</span
            >
          </div>
          <p class="text-sm not-italic text-white mt-3 leading-24px">
            Rin is the first ranger came to life in E4C Verse. We crafted 15 best-quality 3D arts as
            our one-of-one NFTs, each having a meaningful background, the most special texture and
            color combinations, and ultimately unique vibes. She’ll also make an appearance in our
            upcoming games, E4C Final Salvation and E4C Fallen Arena.
          </p>
        </div>
        <div class="bg-white p-9 text-center">
          <p class="text-2xl not-italic font-bold text-[#ff4125] leading-29px">
            15 ULTIMATELY UNIQUE NFTs
          </p>
          <button
            class="bg-[#ff4125] text-2xl font-semibold uppercase text-white leading-29px p-y-5.5 p-x-19.25 mt-6"
          >
            RSVP for the auction
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

.auction-swiper {
  @apply m-0 w-full h-auto;
}

.auction-swiper .swiper-slide {
}
/* .disclaimer-swiper > .swiper-pagination {
  @apply left-24px bottom-24px w-auto text-left;
}
.disclaimer-swiper > .swiper-pagination > .swiper-pagination-bullet {
  @apply w-30px xl:w-60px h-2px bg-none bg-white opacity-50 rounded-none;
}
.disclaimer-swiper
  > .swiper-pagination
  > .swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply opacity-100;
} */
</style>
