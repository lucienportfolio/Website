<script setup lang="ts">
import HeadTitle from '@components/auction/HeadTitle.vue'

import AuctionDetail from '@/components/auction/AuctionDetail.vue'
import SlidehowCard from '@/components/auction/SlidehowCard.vue'
import { auction } from '@/data/auction'
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
