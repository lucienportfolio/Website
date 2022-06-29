<template>
  <div class="nav-item relative flex flex-row flex-nowrap justify-center items-center px-24px">
    <div class="nav-item__line absolute left-0 h-2px w-0 bg-rust" />
    <span class="nav-item__text text-14px text-white text-center uppercase">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.nav-item .nav-item__line {
  transform-origin: left;
  transition: width 0.25s ease-in-out;
}

.router-link-active .nav-item .nav-item__text,
.nav-item:hover .nav-item__text {
  font-weight: 600;
}

.router-link-active .nav-item .nav-item__line,
.nav-item:hover .nav-item__line {
  width: 100%;
}
</style>
