<template>
  <h1>Seondy Test List</h1>
  <ul>
    <nuxt-link :to="localePath('/test/scroll')">scroll</nuxt-link>
  </ul>
</template>
<script setup>
const localePath = useLocalePath();
</script>
<style scoped></style>
