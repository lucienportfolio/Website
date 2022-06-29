<script setup lang="ts">
interface Props {
  to: string
}

defineProps<Props>()
</script>

<template>
  <a :href="to" target="_blank" rel="noopener">
    <slot />
  </a>
</template>
