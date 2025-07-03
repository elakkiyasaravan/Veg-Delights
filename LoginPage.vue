<template>
  <div class="page">
    <!-- HEADER -->
    <header class="page-header">
      <div class="header-content">
        <h1 class="logo-text">GreenBite <span class="logo-leaf">🍃</span></h1>
        <p class="tagline">Nourish your body, delight your senses</p>
      </div>
    </header>

    <!-- MAIN LOGIN BOX -->
    <main class="login-wrapper">
      <section class="login-card">
        <!-- QUOTES SIDE -->
        <div class="quotes-side">
          <div class="quote-pattern"></div>
          <transition-group name="quote-rotate" tag="div" class="quotes">
            <div v-for="(q, index) in visibleQuote" 
                 :key="q" 
                 class="quote-item"
                 v-show="currentIndex === index">
              <p class="quote">“{{ q }}”</p>
              <p class="quote-author">— {{ authors[index] }}</p>
            </div>
          </transition-group>
          <div class="decorative-leaf"></div>
        </div>

        <!-- LOGIN FORM SIDE -->
        <div class="form-side">
          <div class="form-header">
            <h2 class="form-heading">Welcome Back <span class="heading-icon">🌿</span></h2>
            <div class="header-divider"></div>
          </div>
          
          <form @submit.prevent="login" class="form-body">
            <div class="input-group">
              <label for="email">Email</label>
              <input v-model="email" 
                     id="email" 
                     type="email" 
                     placeholder="your@email.com" 
                     required 
                     class="input-field" />
              <span class="input-icon">✉️</span>
            </div>
            
            <div class="input-group">
              <label for="username">Username</label>
              <input v-model="username" 
                     id="username" 
                     placeholder="username" 
                     required 
                     class="input-field" />
              <span class="input-icon">👤</span>
            </div>
            
            <div class="input-group">
              <label for="password">Password</label>
              <input v-model="password" 
                     id="password" 
                     type="password" 
                     placeholder="••••••••" 
                     required 
                     class="input-field" />
              <span class="input-icon">🔒</span>
            </div>
            
            <div class="row">
              <label class="checkbox-container">
                <input type="checkbox" v-model="remember" />
                <span class="checkmark"></span>
                Remember me
              </label>
              <router-link to="/forgot-password" class="forgot-link">Forgot password?</router-link>
            </div>
            
            <AnimatedButton class="login-button">
              <span class="button-text">Login</span>
              <span class="button-icon">→</span>
            </AnimatedButton>
          </form>
          
          <div class="signup-prompt">
            <p>Don't have an account?</p>
            <router-link to="/signup" class="signup-link">
              Sign up <span class="link-arrow">↗</span>
            </router-link>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="page-footer">
      <div class="footer-content">
        <p class="copyright">© 2025 GreenBite – Eat clean, stay green.</p>
        <div class="footer-links">
          <router-link to="/privacy">Privacy</router-link>
          <router-link to="/terms">Terms</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AnimatedButton from '@/components/AnimatedButton.vue'
import bgImg from '@/assets/images/ig4.jpeg'

const router = useRouter()
const email = ref('')
const username = ref('')
const password = ref('')
const remember = ref(false)

const login = () => {
  localStorage.setItem('auth', 'true')
  router.push('/order')
}

const quotes = [
  'Eat food, not too much, mostly plants.',
  'Good food is the foundation of genuine happiness.',
  'Healthy eating starts with you.',
  'Let food be thy medicine and medicine be thy food.',
]
const authors = [
  'Michael Pollan',
  'Auguste Escoffier',
  'Our Philosophy',
  'Hippocrates'
]
const visibleQuote = ref(quotes)
const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % quotes.length
  }, 4000)
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  background: transparent;
}

.page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('@/assets/images/ig4.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.3;
  z-index: -1;
}

/* HEADER */
.page-header {
  text-align: center;
  padding: 2rem 0 1rem;
  background: transparent;
  position: relative;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo-text {
  font-size: 2.2rem;
  font-weight: 700;
  color: #065f46;
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-leaf {
  font-size: 1.8rem;
  animation: float 3s ease-in-out infinite;
}

.tagline {
  font-size: 0.9rem;
  color: #334155;
  margin-top: 0.5rem;
  font-weight: 400;
  letter-spacing: 0.5px;
}

/* FOOTER */
.page-footer {
  text-align: center;
  padding: 1.5rem 0;
  background: transparent;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.copyright {
  color: #0f172a;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  color: #475569;
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #065f46;
}

/* MAIN LOGIN WRAPPER */
.login-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

/* LOGIN CARD CONTAINER */
.login-card {
  display: flex;
  width: clamp(320px, 90%, 1000px);
  min-height: 520px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    inset 0 4px 12px rgba(255, 255, 255, 0.1);
  position: relative;
}

.login-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, #065f46, #10b981);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* LEFT SIDE - QUOTES */
.quotes-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(6, 95, 70, 0.9), rgba(16, 185, 129, 0.85));
  position: relative;
  overflow: hidden;
}

.quote-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.5;
}

.quotes {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.quote-item {
  position: absolute;
  width: 100%;
  padding: 2rem;
  text-align: center;
}

.quote {
  font-size: 1.6rem;
  line-height: 1.6;
  color: white;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.quote-author {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.8);
  font-style: normal;
}

.decorative-leaf {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 2.5rem;
  opacity: 0.15;
  z-index: 1;
  animation: float 4s ease-in-out infinite;
}

/* RIGHT SIDE - FORM */
.form-side {
  flex: 1;
  padding: 3rem 2.5rem;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.form-heading {
  font-size: 1.8rem;
  color: #065f46;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.heading-icon {
  font-size: 1.5rem;
}

.header-divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #065f46, #10b981);
  margin: 0 auto;
  border-radius: 3px;
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  position: relative;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #334155;
  font-weight: 500;
}

.input-field {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 2.5rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background-color: #f8fafc;
}

.input-field:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  background-color: white;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(10%);
  font-size: 1.1rem;
  opacity: 0.6;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0 1rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: #475569;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  height: 18px;
  width: 18px;
  margin-right: 0.75rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #f1f5f9;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #10b981;
  border-color: #10b981;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.forgot-link {
  font-size: 0.85rem;
  color: #4f46e5;
  text-decoration: none;
  transition: color 0.2s ease;
}

.forgot-link:hover {
  color: #4338ca;
  text-decoration: underline;
}

.login-button {
  margin-top: 0.5rem;
}

.signup-prompt {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #64748b;
}

.signup-link {
  color: #065f46;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
  transition: all 0.2s ease;
}

.signup-link:hover {
  color: #064e3b;
}

.link-arrow {
  font-size: 1.1rem;
  transition: transform 0.2s ease;
}

.signup-link:hover .link-arrow {
  transform: translate(2px, -2px);
}

/* ANIMATIONS */
.quote-rotate-enter-active,
.quote-rotate-leave-active {
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  position: absolute;
}
.quote-rotate-enter-from {
  opacity: 0;
  transform: rotateY(90deg);
}
.quote-rotate-leave-to {
  opacity: 0;
  transform: rotateY(-90deg);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .login-card {
    flex-direction: column;
    min-height: auto;
  }

  .quotes-side,
  .form-side {
    width: 100%;
    padding: 2rem;
  }

  .quotes-side {
    min-height: 250px;
  }

  .quote {
    font-size: 1.3rem;
  }

  .form-heading {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .forgot-link {
    margin-top: 0.5rem;
  }
}
</style>