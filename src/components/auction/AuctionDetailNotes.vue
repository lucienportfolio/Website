<script setup lang="ts">
import type { AuctionNotes } from '@/types/auction'
import { cleanupHTML } from '@/utils'

interface Props {
  notes: AuctionNotes
}

defineProps<Props>()
</script>

<template>
  <div class="bg-black/50 p-6">
    <div class="text-white">
      <span class="text-2xl uppercase italic font-bold leading-30px">{{ notes.title }}</span>
      <span class="text-base relative top-0.75 uppercase italic font-bold leading-30px ml-3">{{
        notes.subtitle
      }}</span>
    </div>
    <p
      class="text-sm not-italic text-white mt-3 leading-24px notes-content"
      v-html="cleanupHTML(notes.content)"
    ></p>
  </div>
</template>

<style>
/* a tag is not inside the component */
.notes-content a {
  @apply underline;
}
</style>
