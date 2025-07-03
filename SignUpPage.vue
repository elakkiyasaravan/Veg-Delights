<template>
  <div
    class="split-layout"
    :style="{ backgroundImage: `url(${bgImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }"
  >
    <!-- LEFT SIDE -->
    <div class="left-side center">
      <h1>Don't worry — we're here to create a healthy account for you!</h1>
    </div>

    <!-- RIGHT SIDE -->
    <div class="right-side">
      <h2>Create Account 🌱</h2>
      <form @submit.prevent="signup" class="fade-in">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <AnimatedButton>Sign Up</AnimatedButton>
      </form>
      <router-link to="/" class="link">Already have an account? Login</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AnimatedButton from '@/components/AnimatedButton.vue'
import bgImg from '@/assets/images/img1.jpeg' // ✅ Import image to avoid Vite error

const router = useRouter()
const username = ref('')
const password = ref('')

const signup = () => {
  // Optional: Save auth status here
  localStorage.setItem('auth', 'true')
  router.push('/order') // Redirect to order page after sign-up
}
</script>

<style scoped>
@import '@/assets/split.css'; /* ✅ Split layout styles */

.right-side {
  background: rgba(254, 243, 199, 0.9);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left-side {
  background: rgba(189, 246, 222, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.link {
  margin-top: 1rem;
  text-decoration: underline;
  color: #2563eb;
  font-weight: 500;
}

h2 {
  margin-bottom: 1rem;
  color: #065f46;
}
</style>
