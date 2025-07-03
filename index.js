import { createRouter, createWebHistory } from 'vue-router';

// ======================
// Component Imports (Using Vue CLI '@' alias)
// ======================
import LoginPage from '@/components/views/LoginPage.vue';
import SignUpPage from '@/components/views/SignUpPage.vue';
import OrderPage from '@/components/views/OrderPage.vue';
import PaymentPage from '@/components/views/PaymentPage.vue';
import FeedbackPage from '@/components/views/FeedbackPage.vue';
import TableBookingPage from '@/components/views/TableBookingPage.vue';

// ======================
// Route Definitions
// ======================
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    meta: {
      guestOnly: true,
      title: 'Login'
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage,
    meta: {
      guestOnly: true,
      title: 'Sign Up'
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: OrderPage,
    meta: {
      requiresAuth: true,
      title: 'Order'
    }
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentPage,
    meta: {
      requiresAuth: true,
      title: 'Payment'
    }
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: FeedbackPage,
    meta: {
      requiresAuth: true,
      title: 'Feedback'
    }
  },
  {
    path: '/booking',
    name: 'Booking',
    component: TableBookingPage,
    meta: {
      requiresAuth: true,
      title: 'Table Booking'
    }
  },
  // Fallback for unknown routes
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

// ======================
// Create Router Instance
// ======================
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return savedPosition || { top: 0, behavior: 'smooth' };
  }
});

// ======================
// Navigation Guard
// ======================
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  // Set page title
  document.title = to.meta.title ? `${to.meta.title} | Veg App` : 'Veg App';

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'Login', query: { redirect: to.fullPath }, replace: true });
  }

  if (to.meta.guestOnly && isAuthenticated) {
    return next({ name: 'Order', replace: true });
  }

  next();
});

export default router;
