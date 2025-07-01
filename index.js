import { createStore } from 'vuex';
export default createStore({
  state: () => ({
    user: null,
    cart: [],
    bookings: [],           // new
    feedbacks: []           // new
  }),
  mutations: {
    SET_USER(state, user) { state.user = user; },
    ADD_TO_CART(state, item) { state.cart.push(item); },
    CLEAR_CART(state) { state.cart = []; },                // new
    ADD_BOOKING(state, booking) { state.bookings.push(booking); },  // new
    ADD_FEEDBACK(state, fb) { state.feedbacks.push(fb); }            // new
  },
  actions: {
    login({ commit }, payload) { commit('SET_USER', payload.username); },
    addToCart({ commit }, item) { commit('ADD_TO_CART', item); },
    proceedToPayment({ commit }) { commit('CLEAR_CART'); },         // new
    submitBooking({ commit }, booking) { commit('ADD_BOOKING', booking); },  // new
    submitFeedback({ commit }, feedback) { commit('ADD_FEEDBACK', feedback); } // new
  }
});
