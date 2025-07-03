<template>
  <div class="page">
    <header class="page-header">
      <h1 class="logo-text">GreenBite 🍃</h1>
    </header>

    <main class="feedback-wrapper">
      <div class="feedback-card">
        <!-- Left Side - Quotes -->
        <div class="quote-side">
          <transition-group name="quote-fade" tag="div" class="quote-container">
            <div v-for="(quote, index) in quotes" 
                 :key="quote"
                 class="quote-item"
                 v-show="currentQuote === index">
              <p class="quote-text">"{{ quote }}"</p>
              <p class="quote-author">{{ authors[index] }}</p>
            </div>
          </transition-group>
          <div class="decorative-wave"></div>
        </div>

        <!-- Right Side - Form -->
        <div class="form-side">
          <div class="form-header">
            <h2>Share Your Experience <span class="decorative-icon">🌟</span></h2>
            <div class="header-divider"></div>
          </div>
          
          <form @submit.prevent="submit" v-if="!done" class="form-container">
            <input v-model="username" placeholder="Name" required class="input-box" />
            <input v-model="number" type="tel" placeholder="Phone Number" required class="input-box" />
            
            <div class="rating-container">
              <p>Your Rating:</p>
              <div class="stars">
                <span v-for="n in 5" 
                      :key="n" 
                      @click="rating = n"
                      :class="{active: n <= rating}">★</span>
              </div>
            </div>
            
            <textarea v-model="desc" 
                     placeholder="Describe your experience..." 
                     rows="4"
                     class="textarea-box"></textarea>
            
            <AnimatedButton>Submit Feedback</AnimatedButton>
          </form>
          
          <div v-else class="success-message">
            <div class="success-icon">💚</div>
            <h3>Thank You!</h3>
            <p>We appreciate your feedback</p>
            <div class="floating-hearts"></div>
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
import bgImage from '@/assets/images/ig1.jpeg'

const username = ref('')
const number = ref('')
const rating = ref(0)
const desc = ref('')
const done = ref(false)

const submit = () => {
  done.value = true
}

// Quotes system
const quotes = [
  'Your voice shapes our future',
  'Good feedback is like a compass',
  'We listen to grow better',
  'Your experience matters to us'
]
const authors = [
  'GreenBite Value',
  'Our Philosophy',
  'Improvement Motto',
  'Customer First'
]
const currentQuote = ref(0)

onMounted(() => {
  setInterval(() => {
    currentQuote.value = (currentQuote.value + 1) % quotes.length
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
  background-image: url('@/assets/images/ig1.jpeg');
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

/* Main Feedback Card */
.feedback-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.feedback-card {
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

.feedback-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, #6d28d9, #8b5cf6);
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
  background: linear-gradient(135deg, rgba(109, 40, 217, 0.85), rgba(139, 92, 246, 0.8));
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

.decorative-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E");
  background-size: cover;
  z-index: 1;
}

/* Right Side - Form */
.form-side {
  flex: 1;
  padding: 3rem 2rem;
  background: rgba(237, 233, 254, 0.95);
  display: flex;
  flex-direction: column;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.5rem;
  color: #6d28d9;
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
  background: linear-gradient(90deg, #6d28d9, #8b5cf6);
  margin: 0 auto;
  border-radius: 3px;
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.input-box, .textarea-box {
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 0.95rem;
  width: 100%;
  transition: all 0.3s ease;
  background: white;
}

.input-box:focus, .textarea-box:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
}

.textarea-box {
  resize: vertical;
  min-height: 100px;
}

.rating-container {
  margin: 1rem 0;
}

.rating-container p {
  margin-bottom: 0.5rem;
  color: #6d28d9;
  font-weight: 500;
}

.stars {
  display: flex;
  gap: 0.5rem;
}

.stars span {
  font-size: 1.8rem;
  color: #ddd;
  cursor: pointer;
  transition: all 0.2s ease;
}

.stars span.active {
  color: #f59e0b;
  transform: scale(1.1);
}

.stars span:hover {
  transform: scale(1.2);
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
  animation: pulse 1.5s ease infinite;
}

.success-message h3 {
  font-size: 1.5rem;
  color: #6d28d9;
  margin-bottom: 0.5rem;
}

.success-message p {
  color: #64748b;
}

.floating-hearts {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

/* Animations */
.quote-fade-enter-active,
.quote-fade-leave-active {
  transition: all 0.8s ease;
  position: absolute;
  width: 100%;
}
.quote-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.quote-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Responsive */
@media (max-width: 768px) {
  .feedback-card {
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
  
  .stars span {
    font-size: 1.5rem;
  }
}
</style>