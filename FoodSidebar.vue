<template>
  <nav class="sidebar">
    <ul>
      <li @click="$emit('navigate', 'morning')">Morning</li>
      <li @click="$emit('navigate', 'afternoon')">Afternoon</li>
      <li @click="$emit('navigate', 'evening')">Evening</li>
      <li @click="$emit('navigate', 'dinner')">Dinner</li>
    </ul>
  </nav>
</template>

<script>
export default { name: 'FoodSidebar' };
</script>

<style scoped>
.sidebar { width: 200px; background: #E8F5E9; height: 100vh; padding: 1rem; }
ul { list-style: none; padding: 0; }
li { padding: 0.75rem 0; cursor: pointer; }
li:hover { background: #C8E6C9; }
</style>