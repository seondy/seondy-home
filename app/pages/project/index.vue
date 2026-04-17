<template>
  <h1>Seondy Project List</h1>
  <ul>
    <li v-for="project in projects" :key="project.path">
      <nuxt-link :to="localePath(project.path)">{{ project.name }}</nuxt-link>
    </li>
  </ul>
</template>
<script setup>
const localePath = useLocalePath();

const projects = [
  { path: "/project/good-news", name: "Good News" },
  { path: "/project/youniverse", name: "Youniverse" },
  { path: "/project/halmang-vision", name: "Halmang Vision" },
  { path: "/project/learners-high", name: "Learner's High" },
  { path: "/project/design", name: "Design" },
];
</script>
<style scoped></style>
