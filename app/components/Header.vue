<template>
  <header>
    <nav>
      <ul>
        <nuxt-link :to="localePath('/')">SEONDY</nuxt-link>
        <div class="nav-links">
          <nuxt-link v-for="link in navLinks" :key="link.path" :to="localePath(link.path)">
            {{ t(link.key) }}
          </nuxt-link>

          <!-- button ver -->
          <div class="lang-select">
            <NuxtLink :to="switchLocalePath('ko')">가</NuxtLink>
            <NuxtLink :to="switchLocalePath('ja')">あ</NuxtLink>
          </div>
          <!-- //button ver -->

          <!-- select box ver -->
          <select :value="locale" @change="(e) => navigateTo(switchLocalePath(e.target.value))" class="lang-select">
            <option value="ko" :selected="locale === 'ko'">한국어</option>
            <option value="ja" :selected="locale === 'ja'">日本語</option>
          </select>
          <!-- //select box ver -->
        </div>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const navLinks = [
  { path: "/", key: "header.main" },
  { path: "/project", key: "header.project" },
  { path: "/test", key: "header.test" },
  { path: "/guestbook", key: "header.guestbook" },
];
</script>
<style scoped>
header {
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    width: 100%;
    max-width: 90%;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-links {
        display: flex;
        gap: 20px;
        a {
          /* color: #fff; */
          background-color: rgba(255, 255, 255, 0.5);
          padding: 12px 16px;
          border-radius: 24px;
          &:hover,
          &.router-link-active {
            background-color: red;
          }
        }
        .lang-select {
          display: flex;
          a {
            &:hover,
            &.router-link-active {
              background-color: blue;
            }
          }
        }
      }
    }
  }
}
</style>
