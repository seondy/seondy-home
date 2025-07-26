<template>
  <div class="default-layout">
    <Header />
    <div class="contents-layout">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup></script>
<style scoped>
.default-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contents-layout {
  max-width: 90%;
  width: 1200px;
}
</style>
