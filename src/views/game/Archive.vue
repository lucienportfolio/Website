<template>
  <section class="main empty-main">game archive</section>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import $ from 'jquery'

export default defineComponent({
  name: 'GameArchive',
  setup() {
    const isWap = ref(false)
    onMounted(async () => {
      $('html').attr({ style: 'overflow-y:auto' })
      $('header,.main,footer').show()

      function checkFontSize() {
        const oldIsWap = isWap.value
        isWap.value = !($(window).width() > 960)
        if (isWap.value !== oldIsWap) {
          console.log('change')
        }
      }
      $(document).ready(checkFontSize)
      $(window).resize(checkFontSize)
    })
    return {}
  }
})
</script>
<style lang="less" scoped></style>
