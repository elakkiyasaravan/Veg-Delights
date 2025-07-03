<template>
  <aside :class="['sidebar', { open }]">
    <div class="hamburger" @click="$emit('toggle')">
      <span></span><span></span><span></span>
    </div>
    <ul v-show="open" class="menu-list fade-in">
      <li v-for="c in categories" :key="c" :class="{active:c===current}" @click="$emit('select', c)">
        {{ c }}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: { open:Boolean, categories:Array, current:String }
}
</script>

<style scoped>
.sidebar {
  width: 60px;
  transition: width 0.3s;
  background:#bbf7d0;
  position: relative;
}
.sidebar.open { width: 200px; }
.hamburger { cursor:pointer; padding:1rem; display:flex; flex-direction:column; gap:4px; }
.hamburger span { width:24px;height:3px;background:#064e3b;border-radius:2px; }
.menu-list { list-style:none; padding:1rem; }
.menu-list li { padding:0.75rem 0; cursor:pointer; transition:color 0.2s; }
.menu-list li.active, .menu-list li:hover { color:#064e3b; font-weight:600; }
.fade-in { animation:fadeIn 0.4s ease forwards; }
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
</style>
