<script setup lang="ts">
import type { Auction } from '@/types/auction'

import AuctionDetailActions from './AuctionDetailActions.vue'
import AuctionDetailItem from './AuctionDetailItem.vue'
import AuctionDetailNotes from './AuctionDetailNotes.vue'

interface Props {
  auction: Auction
}

defineProps<Props>()
</script>

<template>
  <div
    class="max-w-1332px p-x-9 mx-auto grid grid-cols-1 xl:grid-cols-2 xl:gap-x-9 gap-y-9 xl:gap-y-0 p-b-14.25"
  >
    <div class="grid gap-y-9">
      <div v-for="(detail, index) in auction.detail" :key="index">
        <h4
          class="text-xs md:text-base font-semibold not-italic uppercase text-greyMedium mb-3 leading-15px md:leading-20px"
        >
          {{ detail.title }}
        </h4>
        <div class="xl:w-693px grid grid-cols-1 md:grid-cols-2 gap-3">
          <AuctionDetailItem
            v-for="(item, indexJ) in detail.introduction"
            :key="indexJ"
            :introduction="item"
          >
          </AuctionDetailItem>
        </div>
      </div>
    </div>

    <div class="xl:fixed xl:bottom-15 xl:right-15 xl:max-w-[532px] xl:z-100">
      <AuctionDetailNotes :notes="auction.notes" />
      <AuctionDetailActions :actions="auction.actions" />
    </div>
  </div>
</template>
