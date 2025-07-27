<template>
  <section class="error-page">
    <!-- <img src="/error.png" alt="Error Image" /> -->
    <h1>{{ props.error.statusCode }}</h1>
    <p>{{ $t("error.title") }}</p>
    <nuxt-link :to="localePath('/')">{{ $t("error.button") }}</nuxt-link>
  </section>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const localePath = useLocalePath();
const props = defineProps<{
  error: NuxtError;
}>();
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  gap: 20px;

  h1 {
    font-size: 50px;
    font-weight: 600;
  }
  p {
    font-size: 15px;
    font-weight: 500;
    color: #666;
  }
  a {
    padding: 16px 20px;
    background-color: #007bff;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
  }
}
</style>
