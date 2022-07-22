<script setup lang="ts">
interface Props {
  auction: any
}

defineProps<Props>()
</script>
<template>
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
          <span class="text-base relative top-0.75 uppercase italic font-bold leading-30px ml-3">{{
            auction.notes.subtitle
          }}</span>
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
        <a :href="auction.actions.link" target="_blank" rel="noopener">
          <button
            :style="auction.actions.buttonStyle"
            class="bg-[#ff4125] text-2xl font-semibold uppercase text-white leading-29px p-y-5.5 p-x-19.25 mt-6"
          >
            {{ auction.actions.button }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.notes-content a {
  text-decoration: underline;
}
</style>
