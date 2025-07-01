<template>
  <div class="banner">
    <img :src="img1" alt="img" />
    <blockquote v-for="q in quotes" :key="q">{{ q }}</blockquote>
    <img :src="img2" alt="img" />
  </div>
</template>

<script>
export default { name: 'QuoteBanner', props: ['quotes', 'img1', 'img2'] };
</script>

<style scoped>
.banner { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.banner img { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; }
blockquote { font-style: italic; color: #555; }
</style>