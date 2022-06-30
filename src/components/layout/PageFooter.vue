<script setup lang="ts">
import IconAmbrus from '../icons/IconAmbrus.vue'
import ImageAmbrusStudio from '../images/ImageAmbrusStudio.vue'
import SocialNav from './SocialNav.vue'
import FooterNavItem from './FooterNavItem.vue'
import NewsletterSubscribe from './NewsletterSubscribe.vue'
</script>

<template>
  <footer class="py-48px bg-grey-dark">
    <div class="flex flex-col max-w-1264px mx-auto">
      <div class="flex flex-row justify-between items-center mb-42px">
        <div class="flex flex-row flex-nowrap items-center">
          <IconAmbrus class="h-118px w-118px text-white mr-24px" />
          <NewsletterSubscribe />
        </div>
        <SocialNav />
      </div>
      <div class="mx-auto mb-36px">
        <ImageAmbrusStudio />
      </div>
      <div class="flex flex-row flex-nowrap justify-center items-center mb-12px">
        <FooterNavItem to="https://example.com" name="Terms of Service" />
        <FooterNavItem to="https://example.com" name="Privacy Policy" />
        <FooterNavItem to="https://example.com" name="Get Help" />
      </div>
      <div class="font-normal text-12px text-center text-white">© 2021 Ambrus Studio</div>
    </div>
  </footer>
</template>
