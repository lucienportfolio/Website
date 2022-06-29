<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavItem from './NavItem.vue'
</script>

<template>
  <nav class="flex flex-row flex-1 items-center gap-24px" title="Site Nav">
    <RouterLink to="/">
      <NavItem>Home</NavItem>
    </RouterLink>
    <RouterLink to="verse">
      <NavItem>E4C: Verse</NavItem>
    </RouterLink>
    <RouterLink to="/about">
      <NavItem>About Us</NavItem>
    </RouterLink>
  </nav>
</template>
