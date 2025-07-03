<template>
  <header class="header">
    <img :src="logo" alt="Veg Logo" class="logo" />
    <nav>
      <router-link to="/order">Order</router-link>
      <router-link to="/booking">Table Booking</router-link>
      <router-link to="/feedback">Feedback</router-link>
      <router-link to="/payment">Payment</router-link>
      <router-link v-if="!isAuth" to="/">Sign In</router-link>
      <button v-else class="logout" @click="logout">Logout</button>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import logoImg from '@/assets/images/ig4.jpeg';

export default {
  setup() {
    const router = useRouter();
    const isAuth = computed(() => localStorage.getItem('auth') === 'true');
    const logout = () => {
      localStorage.removeItem('auth');
      router.push('/');
    };
    return { logout, isAuth, logo: logoImg };
  }
};
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 10;
}
.logo { height: 40px; }
nav a {
  margin: 0 0.75rem;
  font-weight: 600;
  position: relative;
  transition: color 0.3s;
}
nav a::after {
  content: "";
  position: absolute;
  left: 0; bottom: -4px; width: 0; height: 2px;
  background: #16a34a; transition: width 0.3s;
}
nav a:hover::after { width: 100%; }
.logout { background:none;border:none;font-weight:600;cursor:pointer;}
.logout:hover { color:#16a34a; }
</style>
