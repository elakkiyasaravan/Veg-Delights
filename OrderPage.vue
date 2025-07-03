<template>
  <div class="split-layout order-page">
    <Sidebar :open="open" :categories="categories" :current="current" @toggle="open=!open" @select="selectCategory" />
    <div class="right-side">
      <h2>{{ current }} Menu</h2>
      <div class="cards-grid">
        <FoodCard v-for="f in displayed" :key="f.name" :food="f" @add="addToCart" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import FoodCard from '@/components/FoodCard.vue';

// Import all images
import mrg1 from '@/assets/images/order/mrg1.jpeg';
import mrg2 from '@/assets/images/order/mrg2.jpeg';
import mrg3 from '@/assets/images/order/mrg3.jpeg';
import mrg4 from '@/assets/images/order/mrg4.jpeg';
import mrg5 from '@/assets/images/order/mrg5.jpeg';
import mrg6 from '@/assets/images/order/mrg6.jpeg';
import aftn1 from '@/assets/images/order/aftn1.jpeg';
import aftn2 from '@/assets/images/order/aftn2.jpeg';
import aftn3 from '@/assets/images/order/aftn3.jpeg';
import aftn4 from '@/assets/images/order/aftn4.jpeg';
import aftn5 from '@/assets/images/order/aftn5.jpeg';
import aftn6 from '@/assets/images/order/aftn6.jpeg';
import sk1 from '@/assets/images/order/sk1.jpeg';
import sk2 from '@/assets/images/order/sk2.jpeg';
import sk3 from '@/assets/images/order/sk3.jpeg';
import sk4 from '@/assets/images/order/sk4.jpeg';
import sk5 from '@/assets/images/order/sk5.jpeg';
import sk6 from '@/assets/images/order/sk6.jpeg';
import nyt1 from '@/assets/images/order/nyt1.jpeg';
import nyt2 from '@/assets/images/order/nyt2.jpeg';
import nyt3 from '@/assets/images/order/nyt3.jpeg';
import nyt4 from '@/assets/images/order/nyt4.jpeg';
import nyt5 from '@/assets/images/order/nyt5.jpeg';
import nyt6 from '@/assets/images/order/nyt6.jpeg';

export default {
  components: { Sidebar, FoodCard },
  setup() {
    const open = ref(false);
    const categories = ['Morning','Afternoon','Evening','Night'];
    const current = ref('Morning');
    
    const foods = {
      Morning:[
        {name:'Idli', price:80, img:mrg1, rating:4.5},
        {name:'Wholesome Dosa', price:60, img:mrg2, rating:4.2},
        {name:'South Idian Combo Bite', price:50, img:mrg3, rating:4.4},
        {name:'Masala Dosa', price:55, img:mrg4, rating:4.3},
        {name:'Sweet berry Toast', price:40, img:mrg5, rating:4.6},
        {name:'Fruity Oatmeal', price:65, img:mrg6, rating:4.7}
      ],
      Afternoon:[
        {name:'Veg Biryani', price:120, img:aftn1, rating:4.6},
        {name:'Veg Pulao', price:150, img:aftn2, rating:4.4},
        {name:'Dal Tadka', price:90, img:aftn3, rating:4.2},
        {name:'Veg Power Bowl', price:20, img:aftn4, rating:4.1},
        {name:'Spinach Dal Curry ', price:70, img:aftn5, rating:4.3},
        {name:'Creamy Cottage panner', price:60, img:aftn6, rating:4.5}
      ],
      Evening:[
        {name:'Spiced panner kebabs', price:25, img:sk1, rating:4.4},
        {name:'Crispy veg Croqutte', price:30, img:sk2, rating:4.1},
        {name:'Toasted Cheese Delight', price:45, img:sk3, rating:4.3},
        {name:'Veggie Soft taco', price:35, img:sk4, rating:4.2},
        {name:'Cheesy Pizza', price:40, img:sk5, rating:4.5},
        {name:'Crunchy Sandwich', price:15, img:sk6, rating:4.7}
      ],
      Night:[
        {name:'Spaghetti', price:180, img:nyt1, rating:4.6},
        {name:'Salad', price:120, img:nyt2, rating:4.3},
        {name:'Rainbow Bowl', price:140, img:nyt3, rating:4.4},
        {name:'Curd Rice', price:160, img:nyt4, rating:4.2},
        {name:' Veg Pasta', price:70, img:nyt5, rating:4.3},
        {name:'Mixed Veg Spaghetti', price:110, img:nyt6, rating:4.5}
      ]
    };

    const displayed = computed(() => foods[current.value]);
    const selectCategory = c => { current.value = c; };
    const addToCart = () => { location.href = '/payment'; };

    return { open, categories, current, displayed, selectCategory, addToCart };
  }
};
</script>

<style scoped>
.order-page { 
  background: #ecfccb;
  display: flex;
  min-height: 100vh;
}

.cards-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 1.5rem;
}

.right-side { 
  flex: 1; 
  padding: 2rem; 
  overflow-y: auto;
  max-width: 1200px;
  margin: 0 auto;
}

h2 { 
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>