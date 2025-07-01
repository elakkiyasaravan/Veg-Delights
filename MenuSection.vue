<template>
  <section :id="id" class="section">
    <h2>{{ title }}</h2>
    <div class="grid">
      <FoodCard v-for="(item,i) in items" :key="i" :item="item" @order="$emit('order', $event)" />
    </div>
  </section>
</template>

<script>
import FoodCard from './FoodCard.vue';
export default {
  name: 'MenuSection',
  components: { FoodCard },
  props: { id: String, title: String, items: Array }
};
</script>

<style scoped>
.section { margin-bottom: 2rem; }
h2 { margin-bottom: 0.6rem; }
.grid { display: flex; flex-wrap: wrap; gap: 1rem; }
</style>
