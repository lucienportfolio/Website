<script setup lang="ts">
import type { AuctionActions } from '@/types/auction'

interface Props {
  actions: AuctionActions
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-white p-4 md:p-9 text-center fixed bottom-0 left-0 z-100 right-0 xl:static actions"
  >
    <p class="text-xl md:text-2xl not-italic font-bold text-rust leading-24px md:leading-29px">
      {{ actions.text }}
    </p>
    <a :href="actions.link" target="_blank" rel="noopener" class="inline-flex">
      <button
        :style="actions.buttonStyle"
        class="bg-rust text-xl md:text-2xl font-semibold uppercase text-white leading-24px md:leading-29px p-y-4 md:p-y-5.5 p-x-9 md:p-x-19.25 mt-3 md:mt-6"
      >
        {{ actions.button }}
      </button>
    </a>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .actions {
    padding-bottom: calc(12px + constant(safe-area-inset-bottom));
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
  }
}
</style>
