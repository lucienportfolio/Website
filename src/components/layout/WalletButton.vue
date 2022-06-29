<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  connected?: boolean
}

const props = defineProps<Props>()
const hover = ref(false)
const handleHover = (s: boolean) => {
  hover.value = Boolean(props.connected) && s
}
</script>

<template>
  <button
    class="wallet-button flex flex-row flex-nowrap justify-center items-center rounded-4px h-36px w-186px"
    :class="{ hover: hover }"
    type="button"
    @mouseover="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <span class="font-semibold text-14px text-center uppercase" v-if="hover">Disconnect</span>
    <span class="font-semibold text-14px text-center uppercase" v-else><slot /></span>
  </button>
</template>

<style scoped>
.wallet-button {
  color: #ffffff;
  background-image: linear-gradient(to right, white 50%, #ff4125 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.25s ease-out;
}
.wallet-button.hover:hover {
  color: #ff4125;
  background-position: left bottom;
}
</style>
