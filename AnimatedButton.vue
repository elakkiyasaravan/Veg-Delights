<template>
  <button class="ani-btn"><slot /></button>
</template>
<style scoped>
.ani-btn {
  background:#16a34a; color:#fff; padding:0.75rem 1.5rem; border:none; border-radius:8px;
  font-weight:600; cursor:pointer; transition:transform 0.3s, box-shadow 0.3s;
}
.ani-btn:hover { transform:translateY(-3px); box-shadow:0 6px 12px rgba(0,0,0,0.15); }
</style>