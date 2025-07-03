<template>
  <div class="card fade-in" @click="$emit('add')">
    <img :src="food.img" alt="food" />
    <h3>{{ food.name }}</h3>
    <p class="price">₹ {{ food.price }}</p>
    <div class="stars">⭐️ {{ food.rating }}</div>
  </div>
</template>

<script>
export default { props:{ food:Object } };
</script>

<style scoped>
.card {
  background:#fff; border-radius:12px; padding:1rem; box-shadow:0 4px 8px rgba(0,0,0,0.1);
  display:flex; flex-direction:column; align-items:center; cursor:pointer; transition:transform 0.3s;
}
.card:hover { transform:translateY(-6px); }
.card img { width:100%; height:120px; object-fit:cover; border-radius:8px; }
.price { font-weight:600; margin:0.5rem 0; }
.stars { color:#facc15; }
.fade-in { animation:slideUp 0.4s ease forwards; }
@keyframes slideUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
</style>
