<template>
  <header>
    <nav>
      <ul>
        <nuxt-link :to="localePath('/')">SEONDY</nuxt-link>
        <nuxt-link :to="localePath('/project')">프로젝트</nuxt-link>
        <nuxt-link :to="localePath('/test')">테스트</nuxt-link>
        <nuxt-link :to="localePath('/guestbook')">방명록</nuxt-link>
      </ul>
    </nav>
  </header>
</template>
<script setup>
const localePath = useLocalePath();
</script>
<style scoped>
header {
  width: 100%;
  background-color: #f8f9fa;
  padding: 10px;
}
</style>
