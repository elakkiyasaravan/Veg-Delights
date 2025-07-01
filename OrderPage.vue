could you enhance my css <template>
  <div class="order-container">
    <!-- Hamburger icon -->
    <div class="hamburger" @click="sidebarVisible = !sidebarVisible">
      <span></span><span></span><span></span>
    </div>

    <!-- Enhanced Sidebar -->
    <FoodSidebar
      class="sidebar"
      :class="{ active: sidebarVisible }"
      @navigate="handleNavigate"
    />

    <!-- Main Content -->
    <div class="main-content">
      <QuoteBanner
        :quotes="quotes"
        :img1="imgA"
        :img2="imgB"
        class="mb-6 animate-fade-in"
      />

      <!-- 3-item cart rows -->
      <transition name="fade" mode="out-in">
        <MenuSection
          v-if="activeMenu"
          :key="activeMenu.id"
          :id="activeMenu.id"
          :title="activeMenu.title"
          :items="activeMenu.items"
          @order="addToCart"
        />
      </transition>
      
      <!-- New Footer -->
      <footer class="site-footer">
        <p>© 2023 FreshFoods. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import FoodSidebar from '@/components/cart/FoodSidebar.vue';
import QuoteBanner from '@/components/cart/QuoteBanner.vue';
import MenuSection from '@/components/cart/MenuSection.vue';

const store = useStore();

/* ----- State ----- */
const state = reactive({
  sidebarVisible: false,
  activeSection: 'morning',
  quotes: [
    'Eat fresh, live fresh!',
    'Green on your plate, happy in your heart.'
  ],
  imgA: require('@/assets/c.jpeg'),
  imgB: require('@/assets/b.jpeg'),
  menus: [
    { id: 'morning', title: 'Morning Menu', items: [
      { name: 'Poha', price: 50, imageUrl: require('@/assets/mrg1.jpeg') },
      { name: 'Idli', price: 40, imageUrl: require('@/assets/mrg2.jpeg') },
      { name: 'Upma', price: 45, imageUrl: require('@/assets/mrg3.jpeg') },
      { name: 'Dosa', price: 60, imageUrl: require('@/assets/mrg4.jpeg') },
      { name: 'Paratha', price: 55, imageUrl: require('@/assets/mrg5.jpeg') },
      { name: 'Vada', price: 35, imageUrl: require('@/assets/mrg6.jpeg') }
    ]},
    { id: 'afternoon', title: 'Afternoon Menu', items: [
      { name: 'Veg Thali', price: 120, imageUrl: require('@/assets/aftn1.jpeg') },
      { name: 'Fried Rice', price: 100, imageUrl: require('@/assets/aftn2.jpeg') },
      { name: 'Veg Biryani', price: 130, imageUrl: require('@/assets/aftn3.jpeg') },
      { name: 'Paneer Butter Masala', price: 140, imageUrl: require('@/assets/aftn4.jpeg') },
      { name: 'Dal Fry', price: 90, imageUrl: require('@/assets/aftn5.jpeg') },
      { name: 'Chapati', price: 30, imageUrl: require('@/assets/aftn6.jpeg') }
    ]},
    { id: 'evening', title: 'Evening Menu', items: [
      { name: 'Samosa', price: 20, imageUrl: require('@/assets/sk1.jpeg') },
      { name: 'Chaat', price: 50, imageUrl: require('@/assets/sk2.jpeg') },
      { name: 'Pakora', price: 45, imageUrl: require('@/assets/sk3.jpeg') },
      { name: 'Tea', price: 15, imageUrl: require('@/assets/sk4.jpeg') },
      { name: 'Coffee', price: 20, imageUrl: require('@/assets/sk5.jpeg') },
      { name: 'Sandwich', price: 60, imageUrl: require('@/assets/sk6.jpeg') }
    ]},
    { id: 'dinner', title: 'Dinner Menu', items: [
      { name: 'Veg Pulao', price: 110, imageUrl: require('@/assets/nyt1.jpeg') },
      { name: 'Mixed Veg Curry', price: 100, imageUrl: require('@/assets/nyt2.jpeg') },
      { name: 'Matar Paneer', price: 130, imageUrl: require('@/assets/nyt3.jpeg') },
      { name: 'Jeera Rice', price: 90, imageUrl: require('@/assets/nyt4.jpeg') },
      { name: 'Naan', price: 40, imageUrl: require('@/assets/nyt5.jpeg') },
      { name: 'Raita', price: 30, imageUrl: require('@/assets/nyt6.jpeg') }
    ]}
  ]
});

/* ----- Computed ----- */
const activeMenu = computed(() => state.menus.find(m => m.id === state.activeSection));

/* ----- Methods ----- */
function addToCart(item) {
  store.dispatch('addToCart', item);
}

function handleNavigate(id) {
  state.activeSection = id;
  state.sidebarVisible = false;
}
</script>

<style scoped>
.order-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background: #f5fff5;
  position: relative;
}

/* Hamburger icon */
.hamburger {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 30;
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.hamburger span {
  width: 24px;
  height: 3px;
  background: #2e7d32;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.sidebar.active ~ .hamburger span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.sidebar.active ~ .hamburger span:nth-child(2) {
  opacity: 0;
}
.sidebar.active ~ .hamburger span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger { display: flex; }
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: #2e7d32;
  height: 100vh;
  padding: 1.5rem 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  color: white;
  transition: transform 0.3s ease;
}

.sidebar :deep(ul) {
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebar :deep(li) {
  padding: 12px 1.5rem;
  margin: 4px 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar :deep(li:hover) {
  background: rgba(255, 255, 255, 0.1);
}

.sidebar :deep(.active) {
  background: #1b5e20;
  font-weight: 600;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    transform: translateX(-100%);
    z-index: 25;
  }
  .sidebar.active {
    transform: translateX(0);
  }
}

/* Main content */
.main-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

/* 3-item grid */
.main-content :deep(.menu-grid) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.main-content :deep(.menu-item) {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.main-content :deep(.menu-item:hover) {
  transform: translateY(-5px);
}

@media (max-width: 1024px) {
  .main-content :deep(.menu-grid) {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .main-content :deep(.menu-grid) {
    grid-template-columns: 1fr;
  }
}

/* Footer */
.site-footer {
  margin-top: auto;
  padding: 1.5rem;
  background: #2e7d32;
  color: white;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>