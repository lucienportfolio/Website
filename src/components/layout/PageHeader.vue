<script setup lang="ts">
import SiteNav from './SiteNav.vue'
import SocialNav from './SocialNav.vue'
import LogoNav from './LogoNav.vue'
import WalletButton from './WalletButton.vue'
</script>

<template>
  <header class="flex flex-row items-center h-100px px-32px">
    <LogoNav />
    <SiteNav />
    <SocialNav />
    <WalletButton connected>0x80 ... E417</WalletButton>
  </header>
</template>
