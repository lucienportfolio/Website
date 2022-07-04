<script setup lang="ts">
import PageMain from '@components/layout/PageMain.vue'
import NFTBanner from '@components/mint/NFTBanner.vue'
import NFTDisclaimer from '@components/mint/NFTDisclaimer.vue'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { getNFTItemInfo } from '@/api'
import type { NFTItem } from '@/types'

const initData: NFTItem = { id: 0, bannerImages: [], disclaimer: { images: [], content: '' } }
const route = useRoute()
const nftData = ref<NFTItem>(initData)

watchEffect(async () => {
  const nftId = String(route.params?.id)
  nftData.value = await getNFTItemInfo(nftId)
})
</script>

<template>
  <PageMain>
    <div class="flex flex-col relative gap-36px pt-60px pb-114px">
      <NFTBanner :images="nftData.bannerImages" />
      <NFTDisclaimer :images="nftData.disclaimer.images" :content="nftData.disclaimer.content" />
    </div>
  </PageMain>
</template>

<style scoped>
#header {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}
</style>
