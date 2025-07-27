<template>
  <header>
    <nav>
      <ul>
        <nuxt-link :to="localePath('/')">SEONDY</nuxt-link>
        <div class="nav-links">
          <nuxt-link :to="localePath('/')">{{ t("header.main") }}</nuxt-link>
          <nuxt-link :to="localePath('/project')">{{
            t("header.project")
          }}</nuxt-link>
          <nuxt-link :to="localePath('/test')">{{
            t("header.test")
          }}</nuxt-link>
          <nuxt-link :to="localePath('/guestbook')">{{
            t("header.guestbook")
          }}</nuxt-link>
          <select v-model="locale" class="lang-select">
            <option value="ko">한국어</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const localePath = useLocalePath();
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
      }
    }
  }
}
</style>
