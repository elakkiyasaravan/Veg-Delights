<template>
  <div class="card">
    <img :src="item.imageUrl" alt="food" />
    <h3>{{ item.name }}</h3>
    <p>₹{{ item.price }}</p>
    <button @click="$emit('order', item)">Add</button>
  </div>
</template>

<script>
export default { name: 'FoodCard', props: { item: Object } };
</script>

<style scoped>
.card { width: 160px; background: #fff; border-radius: 8px; padding: 0.8rem; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.card img { width: 100%; height: 100px; object-fit: cover; border-radius: 6px; }
button { margin-top: 0.4rem; padding: 0.4rem 0.8rem; border: none; background: #66BB6A; color: #fff; border-radius: 4px; cursor: pointer; }
button:hover { opacity: 0.9; }
</style>