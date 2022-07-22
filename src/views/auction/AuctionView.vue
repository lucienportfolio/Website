<script setup lang="ts">
import HeadTitle from '@components/auction/HeadTitle.vue'

import AuctionDetail from '@/components/auction/AuctionDetail.vue'
import SlidehowCard from '@/components/auction/SlidehowCard.vue'

const auction = {
  subtitle: 'E4C Rangers NFT Series 1',
  subtitleFocus: 'Ultimate Edition',
  title: 'auction event',
  // TODO: animation time
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
    <HeadTitle :auction="auction" />
    <SlidehowCard :auction="auction" />
    <AuctionDetail :auction="auction" />
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
