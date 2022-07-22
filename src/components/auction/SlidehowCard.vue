<script setup lang="ts">
interface Props {
  auction: any
}

defineProps<Props>()
</script>

<!-- TODO: animation time -->
<template>
  <div class="m-y-9 overflow-hidden w-full">
    <div class="logoShowcase">
      <div
        v-for="(image, index) in [...auction.images, ...auction.images]"
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

<style>
.logoShowcase {
  animation: conveyerBelt 30s linear infinite forwards;
  display: flex;
  width: fit-content;
  white-space: nowrap;
}

.logoShowcase > * {
  overflow: hidden;
  background: #000;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform: translateZ(0);
  margin-left: 12px;
  margin-right: 12px;
}
.logoShowcase img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
