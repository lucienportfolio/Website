<script setup lang="ts">
import type { AuctionDetailIntroduction } from '@/types/auction'
import { cleanupHTML } from '@/utils'

interface Props {
  introduction: AuctionDetailIntroduction
}

defineProps<Props>()
</script>

<template>
  <section class="flex flex-col items-center px-6 py-3 bg-black/50 min-h-124px md:min-h-148px">
    <p
      class="text-48px md:text-64px font-bold text-center text-white leading-59px md:leading-78px not-italic"
      :style="introduction.style"
    >
      {{ introduction.title }}
    </p>
    <p
      class="text-sm text-center text-white_1 leading-24px not-italic"
      v-html="cleanupHTML(introduction.content)"
    ></p>
  </section>
</template>
