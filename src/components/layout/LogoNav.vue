<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconFavicon from '../icons/IconFavicon.vue'
</script>

<template>
  <RouterLink to="/" title="Home">
    <IconFavicon class="h-40px w-40px text-white mr-16px" />
  </RouterLink>
</template>
