<template>
  <div>
    <!-- Header -->
    <header class="site-header">
      <h1 class="brand">🌱 Veg Delights</h1>
    </header>

    <!-- Login Content -->
    <div class="login-container">
      <div class="login-card">
        <!-- Info Panel -->
        <div class="info-panel">
          <h1>Hi! Welcome to Veg Delights</h1>
          <p class="quote">“Eat fresh, feel premium.”</p>
          <p>Order the freshest vegetables delivered to your door.</p>
        </div>

        <!-- Login Form Panel -->
        <div class="form-panel">
          <h2>Sign In</h2>
          <form @submit.prevent="handleLogin">
            <input v-model="username" type="text" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />

            <div class="options">
              <label><input type="checkbox" v-model="rememberMe" /> Remember me</label>
              <a href="#" class="forgot">Forgot?</a>
            </div>

            <button type="submit" class="btn">Login</button>
          </form>
          <p class="signup">No account? <a href="#">Sign Up</a></p>
        </div>
      </div>

      <!-- Background images -->
      <img src="@/assets/a.jpeg" class="bg-img bg-img-left" alt="veg bg" />
      <img src="@/assets/d.jpeg" class="bg-img bg-img-right" alt="veg bg" />
    </div>

    <!-- Footer -->
    <footer class="site-footer">
      <p>© 2025 Veg Delights. Eat fresh, live happy!</p>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      try {
        await this.login({ username: this.username });
        this.router.push('/order');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
});
</script>

<style scoped>
/* Full-page layout */
.login-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #388E3C, #FBC02D);
  overflow: hidden;
}

/* Background images */
.bg-img {
  position: absolute;
  width: 60%;
  height: auto;
  opacity: 0.07;
  z-index: 1;
  object-fit: cover;
  border-radius: 50%;
  pointer-events: none;
}
.bg-img-left { top: 5%; left: -10%; }
.bg-img-right { bottom: 5%; right: -10%; }

/* Card layout */
.login-card {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 900px;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}
.info-panel {
  flex: 1;
  padding: 2.5rem;
  background: #E8F5E9;
  color: #2E7D32;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.info-panel h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.info-panel .quote {
  font-style: italic;
  color: #558B2F;
  margin-bottom: 1rem;
}
.form-panel {
  flex: 1;
  padding: 2.5rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-panel h2 {
  text-align: center;
  color: #333;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}
.form-panel input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.9rem;
  border: 2px solid #C8E6C9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.07);
}
.form-panel input:focus {
  border-color: #43A047;
  outline: none;
  box-shadow: 0 6px 12px rgba(67, 160, 71, 0.2);
}

/* Options row */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}
.options label {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
}
.options label input[type="checkbox"] {
  margin-right: 0.4rem;
  width: 16px;
  height: 16px;
  accent-color: #388E3C;
}
.options .forgot {
  font-size: 0.9rem;
  color: #388E3C;
  text-decoration: none;
}

/* Submit button */
.btn {
  width: 100%;
  padding: 0.85rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #43A047, #66BB6A);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* Sign-up text */
.signup {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.95rem;
}
.signup a {
  color: #2E7D32;
  text-decoration: none;
  font-weight: bold;
}

/* Header + Footer */
.site-header,
.site-footer {
  position: fixed;
  left: 0;
  width: 100%;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  color: #fff;
  font-family: inherit;
}
.site-header { top: 0; }
.site-footer { bottom: 0; }
.site-header .brand {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.site-footer p {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .login-card {
    flex-direction: column;
    margin: 4rem 1rem; /* room for header/footer */
  }
  .info-panel,
  .form-panel {
    padding: 1.5rem;
  }
  .info-panel h1 {
    font-size: 1.5rem;
  }
}
</style>
