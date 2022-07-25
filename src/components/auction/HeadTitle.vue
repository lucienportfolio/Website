<script setup lang="ts">
import type { Auction } from '@/types/auction'

interface Props {
  auction: Auction
}

defineProps<Props>()
</script>

<template>
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
    <div class="w-40 h-2 bg-gradient-to-r from-red_1 to-rust"></div>
  </div>
</template>
