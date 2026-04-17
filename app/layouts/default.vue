<template>
  <div class="default-layout">
    <Header />
    <div class="contents-layout">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useHead({
  title: t("meta.title"),
  meta: [
    { name: "description", content: t("meta.description") },
    { property: "og:title", content: t("meta.ogTitle") },
    { property: "og:description", content: t("meta.ogDescription") },
    { property: "og:image", content: t("meta.ogImage") },
    { name: "twitter:title", content: t("meta.twitterTitle") },
    { name: "twitter:description", content: t("meta.twitterDescription") },
    { name: "twitter:image", content: t("meta.twitterImage") },
  ],
});
</script>
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
