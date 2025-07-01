<template>
  <div class="booking-container">
    <h2>Table Booking</h2>

    <form @submit.prevent="submitBooking">
      <!-- Date Field with Icon -->
      <div class="form-group">
        <label>Date</label>
        <div class="input-with-icon">
          <input
            type="date"
            v-model="booking.date"
            :min="minDate"
            required
          />
          <span class="icon">📅</span>
        </div>
      </div>

      <!-- Time Field -->
      <div class="form-group">
        <label>Time</label>
        <input type="time" v-model="booking.time" required />
      </div>

      <!-- Guest Count -->
      <div class="form-group">
        <label>Number of Guests</label>
        <input
          type="number"
          v-model="booking.guests"
          min="1"
          placeholder="e.g. 2"
          required
        />
      </div>

      <!-- Special Requests -->
      <div class="form-group">
        <label>Special Requests</label>
        <textarea
          v-model="booking.notes"
          rows="3"
          placeholder="Any special requests?"
        ></textarea>
      </div>

      <button type="submit">Book Table</button>
    </form>

    <!-- Confirmation Message -->
    <transition name="fade">
      <div v-if="booking.confirmed" class="confirmation-message">
        🎉 Your table has been booked!
      </div>
    </transition>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const booking = reactive({
  date: '',
  time: '',
  guests: 1,
  notes: '',
  confirmed: false
});

// Get today as YYYY-MM-DD
const minDate = computed(() => {
  const today = new Date();
  return today.toISOString().split('T')[0];
});

function submitBooking() {
  if (!booking.date || !booking.time || booking.guests < 1) {
    alert('Please fill all required fields.');
    return;
  }

  store.dispatch('submitBooking', {
    date: booking.date,
    time: booking.time,
    guests: booking.guests,
    notes: booking.notes
  });

  booking.confirmed = true;
  setTimeout(() => (booking.confirmed = false), 3000);

  // Reset form
  booking.date = '';
  booking.time = '';
  booking.guests = 1;
  booking.notes = '';
}
</script>

<style scoped>
.booking-container {
  max-width: 550px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', sans-serif;
  transition: box-shadow 0.3s ease;
}

.booking-container:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.booking-container h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.25rem;
}

label {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.4rem;
  display: block;
  color: #333;
}

.input-with-icon {
  position: relative;
}

.input-with-icon input {
  width: 90%;
  padding: 0.6rem 2.5rem 0.6rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-with-icon .icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #888;
}

input,
textarea {
  width: 95%;
  padding: 0.65rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: #fafafa;
}

input:focus,
textarea:focus {
  border-color: #1976d2;
  background: #fff;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

button {
  width: 100%;
  background: #1976d2;
  color: white;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 0.5rem;
}

button:hover {
  background: #0d47a1;
}

.confirmation-message {
  margin-top: 1.5rem;
  background: #e8f5e9;
  border: 1px solid #81c784;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  color: #2e7d32;
  font-weight: 600;
  animation: pop-in 0.4s ease-in-out;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Optional animation */
@keyframes pop-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile Responsive */
@media (max-width: 600px) {
  .booking-container {
    padding: 1.25rem;
  }

  .booking-container h2 {
    font-size: 1.5rem;
  }

  button {
    font-size: 0.95rem;
    padding: 0.6rem;
  }
}
</style>

