<template>
  <div class="payment-container">
    <h2>Payment</h2>
    <form @submit.prevent="handlePayment">
      <div>
        <label>Card Number</label>
        <input
          v-model="payment.cardNumber"
          type="text"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      <div>
        <label>UPI ID</label>
        <input
          v-model="payment.upiId"
          type="text"
          placeholder="username@bank"
        />
      </div>
      <div>
        <label>Digital Wallet</label>
        <select v-model="payment.wallet">
          <option disabled value="">Select Wallet</option>
          <option>Paytm</option>
          <option>Google Pay</option>
          <option>PhonePe</option>
        </select>
      </div>
      <button type="submit">Pay Now</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { processPayment } from '@/utils/paymentGateway';

const store = useStore();
const router = useRouter();

const payment = reactive({
  cardNumber: '',
  upiId: '',
  wallet: ''
});

async function handlePayment() {
  const result = await processPayment(payment);
  if (result.success) {
    store.dispatch('proceedToPayment');
    router.push('/feedback');
  } else {
    alert('Payment failed. Please try again.');
  }
}
</script>

<style scoped>
.payment-container {
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', sans-serif;
}

.payment-container h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2e7d32;
  margin-bottom: 1.5rem;
  text-align: center;
}

.payment-container label {
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: block;
  color: #333;
}

.payment-container input,
.payment-container select {
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border 0.3s;
}

.payment-container input:focus,
.payment-container select:focus {
  border-color: #4caf50;
  outline: none;
}

.payment-container button {
  width: 100%;
  background: #2e7d32;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.payment-container button:hover {
  background: #1b5e20;
}
</style>
