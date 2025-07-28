<template>
  <section class="intro">
    <h1>{{ t("main.title") }}</h1>
    <div class="intro-description">
      <p>{{ t("main.description") }}</p>
    </div>
  </section>
  <section class="projects">
    <h2>{{ t("main.projects") }}</h2>
    <ul>
      <li>
        <nuxt-link :to="localePath('/project/learners-high')"
          >Learner's High</nuxt-link
        >
      </li>
      <li>
        <nuxt-link :to="localePath('/project/halmang-vision')"
          >Halmang Vision</nuxt-link
        >
      </li>
      <li>
        <nuxt-link :to="localePath('/project/design')">Design</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const localePath = useLocalePath();
</script>
<style scoped></style>
