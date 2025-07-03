<template>
  <div class="page">
    <header class="page-header">
      <h1 class="logo-text">GreenBite 🍃</h1>
    </header>

    <main class="payment-wrapper">
      <div class="payment-card">
        <!-- Left Side - Quotes -->
        <div class="quote-side">
          <transition-group name="quote-slide" tag="div" class="quote-container">
            <div v-for="(quote, index) in quotes" 
                 :key="quote"
                 class="quote-item"
                 v-show="currentQuote === index">
              <p class="quote-text">"{{ quote }}"</p>
              <p class="quote-author">{{ authors[index] }}</p>
            </div>
          </transition-group>
          <div class="decorative-circle"></div>
        </div>

        <!-- Right Side - Form -->
        <div class="form-side">
          <div class="form-header">
            <h2>Checkout <span class="decorative-icon">🛒</span></h2>
            <div class="header-divider"></div>
          </div>
          
          <form @submit.prevent="submit" v-if="!done" class="form-container">
            <div class="payment-option" 
                 v-for="option in paymentOptions" 
                 :key="option.value"
                 @click="method = option.value"
                 :class="{active: method === option.value}">
              <input type="radio" 
                     :value="option.value" 
                     v-model="method" 
                     :id="option.value" />
              <label :for="option.value">
                <span class="option-icon">{{ option.icon }}</span>
                <span class="option-text">{{ option.label }}</span>
              </label>
            </div>
            
            <AnimatedButton class="payment-button">Proceed to Payment</AnimatedButton>
          </form>
          
          <div v-else class="success-message">
            <div class="success-icon">🎉</div>
            <h3>Payment Successful!</h3>
            <p>Your order has been placed</p>
            <div class="confetti"></div>
          </div>
        </div>
      </div>
    </main>

    <footer class="page-footer">
      <p>© 2025 GreenBite – Eat clean, stay green.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AnimatedButton from '@/components/AnimatedButton.vue'
import bgImage from '@/assets/images/img2.jpeg'

const method = ref('wallet')
const done = ref(false)

const submit = () => {
  done.value = true
}

// Quotes system
const quotes = [
  'Secure transactions, happy customers',
  'Your safety is our priority',
  'Fast, simple, and secure payments',
  'Good food deserves good payment experience'
]
const authors = [
  'GreenBite Promise',
  'Our Policy',
  'Payment Motto',
  'Customer First'
]
const currentQuote = ref(0)

onMounted(() => {
  setInterval(() => {
    currentQuote.value = (currentQuote.value + 1) % quotes.length
  }, 4000)
})

const paymentOptions = [
  { value: 'wallet', label: 'GreenBite Wallet', icon: '💳' },
  { value: 'cod', label: 'Cash on Delivery', icon: '💰' },
  { value: 'online', label: 'Online Payment', icon: '🌐' }
]
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
  background-image: url('@/assets/images/img2.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.3;
  z-index: -1;
}

/* Header & Footer (consistent with other pages) */
.page-header, .page-footer {
  text-align: center;
  padding: 1rem 0;
  background: transparent;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 600;
  color: #065f46;
  margin: 0;
}

.page-footer p {
  color: #0f172a;
  font-size: 0.9rem;
}

/* Main Payment Card */
.payment-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.payment-card {
  display: flex;
  width: clamp(320px, 90%, 900px);
  min-height: 480px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 
    inset 0 4px 12px rgba(0,0,0,0.1),
    0 12px 28px rgba(0,0,0,0.25);
  position: relative;
}

.payment-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, #065f46, #10b981);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Left Side - Quotes */
.quote-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(6, 95, 70, 0.9), rgba(16, 185, 129, 0.8));
  position: relative;
  overflow: hidden;
}

.quote-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
}

.quote-item {
  position: absolute;
  width: 100%;
  padding: 1rem;
  color: white;
}

.quote-text {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.quote-author {
  font-size: 0.9rem;
  font-style: italic;
  opacity: 0.9;
}

.decorative-circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  top: -50px;
  right: -50px;
  z-index: 1;
}

/* Right Side - Form */
.form-side {
  flex: 1;
  padding: 3rem 2rem;
  background: rgba(254, 243, 199, 0.95);
  display: flex;
  flex-direction: column;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.5rem;
  color: #065f46;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.decorative-icon {
  font-size: 1.2em;
}

.header-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #065f46, #10b981);
  margin: 0 auto;
  border-radius: 3px;
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.payment-option {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.payment-option:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.payment-option.active {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.05);
}

.payment-option label {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-weight: 500;
  color: #1e293b;
}

.option-icon {
  font-size: 1.5rem;
}

.option-text {
  flex: 1;
}

.payment-option input {
  display: none;
}

.payment-button {
  margin-top: 2rem;
}

.success-message {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 0.6s ease-in-out;
}

.success-message h3 {
  font-size: 1.5rem;
  color: #065f46;
  margin-bottom: 0.5rem;
}

.success-message p {
  color: #64748b;
}

.confetti {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

/* Animations */
.quote-slide-enter-active,
.quote-slide-leave-active {
  transition: all 0.8s ease;
  position: absolute;
  width: 100%;
}
.quote-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.quote-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Responsive */
@media (max-width: 768px) {
  .payment-card {
    flex-direction: column;
  }

  .quote-side,
  .form-side {
    width: 100%;
  }
  
  .quote-side {
    padding: 1.5rem;
    min-height: 200px;
  }
  
  .quote-text {
    font-size: 1.2rem;
  }
}
</style>