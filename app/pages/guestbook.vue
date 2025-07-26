<template>
  <h1>방명록</h1>
  <p>
    방문하신 분들의 소중한 피드백 및 메시지를 남겨주세요!
  </p>

  <section>
    <h2>방명록 작성</h2>
    <form @submit.prevent="submitGuestbook">
      <label for="name">이름:</label>
      <input type="text" id="name" v-model="guestName" required />

      <label for="message">메시지:</label>
      <textarea id="message" v-model="guestMessage" required></textarea>

      <button type="submit">작성하기</button>
    </form>
  </section>
  <section>
    <h2>방명록 목록</h2>
    <ul>
      <li v-for="(entry, index) in guestbookEntries" :key="index">
        <strong>{{ entry.name }}</strong
        >: {{ entry.message }}
      </li>
    </ul>
  </section>
</template>
<script setup></script>
<style scoped></style>
