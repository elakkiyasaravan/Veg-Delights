<template>
  <div class="feedback-container">
    <h2>Feedback</h2>
    <form @submit.prevent="submitFeedback">
      <div>
        <label>Rating (1–5)</label>
        <select v-model.number="fb.rating">
          <option disabled value="0">Select rating</option>
          <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
      <div>
        <label>Comments</label>
        <textarea v-model="fb.comments" rows="4"></textarea>
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const fb = reactive({ rating: 0, comments: '' });

function submitFeedback() {
  if (fb.rating === 0 || fb.comments.trim() === '') {
    alert('Please provide both rating and comments.');
    return;
  }

  store.dispatch('submitFeedback', { ...fb });
  alert('✅ Thank you for your feedback!');
  fb.rating = 0;
  fb.comments = '';
}
</script>

<style scoped>
.feedback-container {
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', sans-serif;
}

.feedback-container h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #6a1b9a;
  margin-bottom: 1.5rem;
  text-align: center;
}

.feedback-container label {
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: block;
  color: #333;
}

.feedback-container select,
.feedback-container textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border 0.3s;
}

.feedback-container select:focus,
.feedback-container textarea:focus {
  border-color: #ab47bc;
  outline: none;
}

.feedback-container button {
  width: 100%;
  background: #7b1fa2;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.feedback-container button:hover {
  background: #4a148c;
}
</style>
