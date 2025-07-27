<template>
  <h1>Seondy Project List</h1>
  <ul>
    <nuxt-link :to="localePath('/project/good-news')">Good News</nuxt-link>
    <nuxt-link :to="localePath('/project/youniverse')">Youniverse</nuxt-link>
    <nuxt-link :to="localePath('/project/halmang-vision')"
      >Halmang Vision</nuxt-link
    >
    <nuxt-link :to="localePath('/project/learners-high')"
      >Learner's High</nuxt-link
    >
    <nuxt-link :to="localePath('/project/design')">Design</nuxt-link>
  </ul>
</template>
<script setup>
const localePath = useLocalePath();
</script>
<style scoped></style>
