<template>
  <div class="page">
    <header class="page-header">
      <h1 class="logo-text">GreenBite 🍃</h1>
    </header>

    <main class="booking-wrapper">
      <div class="booking-card">
        <!-- Left Side - Animated Dining Quotes -->
        <div class="quote-side">
          <transition-group name="quote-rotate" tag="div" class="quote-container">
            <div v-for="(quote, index) in quotes" 
                 :key="quote"
                 class="quote-item"
                 v-show="currentQuote === index">
              <p class="quote-text">"{{ quote }}"</p>
              <p class="quote-author">– {{ authors[index] }}</p>
            </div>
          </transition-group>
          <div class="decorative-fork-knife"></div>
        </div>

        <!-- Right Side - Booking Form -->
        <div class="form-side">
          <div class="form-header">
            <h2>Book a Table <span class="decorative-icon">🍽️</span></h2>
            <div class="header-divider"></div>
          </div>

          <form @submit.prevent="book" v-if="!done" class="form-container">
            <div class="input-group">
              <label for="username">Name</label>
              <input v-model="username" id="username" required class="input-box" />
            </div>

            <div class="input-group">
              <label for="members">Guests</label>
              <div class="guest-selector">
                <button type="button" @click="decrementMembers" :disabled="members <= 1">−</button>
                <input v-model.number="members" 
                       type="number" 
                       id="members" 
                       min="1" 
                       max="12" 
                       required 
                       class="input-box guest-count" />
                <button type="button" @click="incrementMembers" :disabled="members >= 12">+</button>
              </div>
            </div>

            <div class="input-group">
              <label for="date">Date & Time</label>
              <input v-model="date" type="datetime-local" id="date" required class="input-box" />
            </div>

            <div class="premium-toggle" @click="premium = !premium">
              <div class="toggle-track" :class="{active: premium}">
                <div class="toggle-thumb"></div>
              </div>
              <span>Premium Seating (+$15)</span>
              <span class="premium-badge" v-if="premium">Selected</span>
            </div>

            <AnimatedButton class="booking-button">
              {{ premium ? 'Reserve Premium Table' : 'Reserve Table' }}
            </AnimatedButton>
          </form>

          <div v-else class="success-message">
            <div class="success-icon">✨</div>
            <h3>Reservation Confirmed!</h3>
            <p>We've saved your table for {{ members }} {{ members > 1 ? 'guests' : 'guest' }}</p>
            <p class="confirmation-details">
              <span v-if="premium" class="premium-confirm">Premium Seating</span>
              {{ formattedDate }}
            </p>
            <div class="floating-utensils"></div>
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
import { ref, computed, onMounted } from 'vue'
import AnimatedButton from '@/components/AnimatedButton.vue'
import diningImage from '@/assets/images/tb.jpeg'
import bgImage from '@/assets/images/img2.jpeg'

const username = ref('')
const members = ref(2)
const date = ref('')
const premium = ref(false)
const done = ref(false)

const decrementMembers = () => members.value > 1 && members.value--
const incrementMembers = () => members.value < 12 && members.value++

const book = () => {
  done.value = true
}

// Quotes system
const quotes = [
  'Good food is the foundation of genuine happiness',
  'A meal should delight the senses before it nourishes the body',
  'Dining is and always was a supreme human pleasure',
  'Food tastes better when you eat it with your family'
]
const authors = [
  'Auguste Escoffier',
  'Thomas Keller',
  'M.F.K. Fisher',
  'GreenBite Philosophy'
]
const currentQuote = ref(0)

onMounted(() => {
  setInterval(() => {
    currentQuote.value = (currentQuote.value + 1) % quotes.length
  }, 4000)
  
  // Set default date to tomorrow at 7pm
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(19, 0, 0, 0)
  date.value = tomorrow.toISOString().slice(0, 16)
})

const formattedDate = computed(() => {
  if (!date.value) return ''
  const options = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  }
  return new Date(date.value).toLocaleDateString('en-US', options)
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
  background-image: url('@/assets/images/img2.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.3;
  z-index: -1;
}

/* Header & Footer */
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

/* Main Booking Card */
.booking-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.booking-card {
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

.booking-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, #ea580c, #f59e0b);
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
  background: linear-gradient(135deg, rgba(234, 88, 12, 0.85), rgba(249, 115, 22, 0.8));
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

.decorative-fork-knife {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.1;
  z-index: 1;
}

.decorative-fork-knife::before {
  content: '🍴';
}

/* Right Side - Form */
.form-side {
  flex: 1;
  padding: 3rem 2rem;
  background: rgba(255, 251, 235, 0.95);
  display: flex;
  flex-direction: column;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.5rem;
  color: #9a3412;
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
  background: linear-gradient(90deg, #ea580c, #f59e0b);
  margin: 0 auto;
  border-radius: 3px;
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #9a3412;
}

.input-box {
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 0.95rem;
  width: 100%;
  transition: all 0.3s ease;
  background: white;
}

.input-box:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}

.guest-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.guest-selector button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #f59e0b;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.guest-selector button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.guest-selector button:not(:disabled):hover {
  background: #ea580c;
  transform: scale(1.05);
}

.guest-count {
  text-align: center;
  flex: 1;
  max-width: 60px;
}

.premium-toggle {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(254, 243, 199, 0.5);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0;
}

.premium-toggle:hover {
  background: rgba(254, 243, 199, 0.8);
}

.toggle-track {
  width: 50px;
  height: 24px;
  border-radius: 12px;
  background: #e2e8f0;
  position: relative;
  transition: all 0.3s ease;
}

.toggle-track.active {
  background: rgba(234, 88, 12, 0.3);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.toggle-track.active .toggle-thumb {
  left: calc(100% - 22px);
  background: #ea580c;
}

.premium-badge {
  margin-left: auto;
  font-size: 0.8rem;
  font-weight: 600;
  color: #9a3412;
  background: rgba(234, 88, 12, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.booking-button {
  margin-top: 1rem;
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
  color: #9a3412;
  margin-bottom: 0.5rem;
}

.success-message p {
  color: #57534e;
  margin-bottom: 0.5rem;
}

.confirmation-details {
  background: rgba(254, 243, 199, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-weight: 500;
}

.premium-confirm {
  color: #9a3412;
  font-weight: 600;
  margin-right: 0.5rem;
}

.floating-utensils {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

/* Animations */
.quote-rotate-enter-active,
.quote-rotate-leave-active {
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  position: absolute;
  width: 100%;
}
.quote-rotate-enter-from {
  opacity: 0;
  transform: rotateY(90deg);
}
.quote-rotate-leave-to {
  opacity: 0;
  transform: rotateY(-90deg);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Responsive */
@media (max-width: 768px) {
  .booking-card {
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
  
  .form-container {
    gap: 1rem;
  }
}
</style>