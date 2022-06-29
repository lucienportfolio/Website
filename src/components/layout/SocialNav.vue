<script setup lang="ts">
import ExternalLink from '../link/ExternalLink.vue'
import IconDiscord from '../icons/IconDiscord.vue'
import IconOpensea from '../icons/IconOpensea.vue'
import IconTwitter from '../icons/IconTwitter.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconMedium from '../icons/IconMedium.vue'
</script>

<template>
  <nav
    class="flex flex-row flex-nowrap items-center gap-28px px-26px text-white"
    title="Social Nav"
  >
    <ExternalLink to="https://example.com" title="Discord">
      <IconDiscord />
    </ExternalLink>
    <ExternalLink to="https://example.com" title="Opensea">
      <IconOpensea />
    </ExternalLink>
    <ExternalLink to="https://example.com" title="Twitter">
      <IconTwitter />
    </ExternalLink>
    <ExternalLink to="https://example.com" title="Instagram">
      <IconInstagram />
    </ExternalLink>
    <ExternalLink to="https://example.com" title="Medium">
      <IconMedium />
    </ExternalLink>
  </nav>
</template>
