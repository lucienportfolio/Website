<script setup lang="ts">
import type { AuctionImages } from '@/types/auction'

interface Props {
  auctionImages: AuctionImages[]
}

defineProps<Props>()
</script>

<!-- TODO: animation time -->
<template>
  <div class="m-t-6 md:m-t-9 m-b-9 overflow-hidden w-full">
    <div class="logoShowcase" :style="{ 'animation-duration': 6 * auctionImages.length + 's' }">
      <div
        v-for="(image, index) in [...auctionImages, ...auctionImages]"
        :key="index"
        class="w-240px h-240px sm:w-280px sm:h-280px md:w-320px md:h-320px xl:w-480px xl:h-480px"
      >
        <a>
          <img class="w-full h-auto select-none" :src="image" alt="Disclaimer Image" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logoShowcase {
  animation: conveyerBelt 30s linear infinite forwards;
  width: fit-content;
  white-space: nowrap;
  @apply flex;
}

.logoShowcase > * {
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  @apply bg-black m-x-3 overflow-hidden translate-z-1;
}
.logoShowcase img {
  @apply w-full h-full object-cover;
}

@keyframes conveyerBelt {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
