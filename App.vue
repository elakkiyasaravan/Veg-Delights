

<!--<script setup lang="ts">
import VslotEx from './components/Watches/slot/CardWrapper.vue';

</script>

<script setup lang="ts">
import StudentGrade from './components/StudentGrade.vue';

</script>

<script setup lang="ts">
import ImmediateWatch from './components/ImmediateWatch.vue';

</script>

<script setup lang="ts">
import MessageComp from './components/MessageComp.vue';

</script>

<template>
   <img alt="Vue logo" src="./assets/logo.png">
  ,<HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!--<AddingNumbers />
  <DropDown />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import AddingNumbers from './components/AddingNumbers.vue'
import DropDown from './components/DropDown.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
   // AddingNumbers
   DropDown
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
<!--<template>
  <ProductCard
  title="kiya"
  price="250"
  stock="instock"
  />
</template>
<script>

</script>-->

<!--<template>
  <UserDetails 
    name="elakkiya"
    email="elakiya31@gmail.com"
    location="erode"
  />
</template>

<script>
import UserDetails from './components/UserDetails.vue'

export default {
  components: {
    UserDetails
  }
}
</script>
<template>
  <ProductCard 
  title="kiya"
  price="100"
  stock="instock"/>
</template>
<script>
import ProductCard from './components/ProductCard.vue'
export default{
  components:{
    ProductCard
  }
}
</script>-->
<!-- <template>
  <ImmidiateWatch/>
</template>
<script>
import ImmidiateWatch from './components/Watches/ImmidiateWatch.vue';
export default{ -->
  <!-- components:{
    ImmidiateWatch
  }
}
</script> 
<template>
  <StudentGrade/>
</template>
<script>
import StudentGrade from './components/StudentGrade.vue';
export default{
  components:{
    StudentGrade
  }
  }
</script>

<template>
  <UserAdmin/>
</template>
<script>
import UserAdmin from './components/UserAdmin.vue';
export default{
  components:{
   UserAdmin  
  }
  }
</script>

<template>
  <NewTask/>
</template>
<script>
import NewTask from './components/NewTask.vue';
export default{
  components:{
   NewTask 
  }
  }
</script>


<template>
  <WeatherStatus/>
</template>
<script>
import WeatherStatus from './components/WeatherStatus.vue';
export default{
  components:{
    WeatherStatus
  }
  }
</script>
<template>
  <div>
    <CardWrapper>
      <template v-slot:left>
        <p>👈 This is content for the LEFT side</p>
      </template>

      <template v-slot:right>
        <p>👉 This is content for the RIGHT side</p>
      </template>
    </CardWrapper>
  </div>
</template>

<script>
import CardWrapper from './components/Watches/slot/CardWrapper.vue';

export default {
  name: 'App',
  components: {
    CardWrapper
  }
};
</script>
                   slot   
<template>
  <LayoutWrapper>
    <template v-slot:header>
      <h1>My Vue Layout</h1>
    </template>

    <template v-slot:top>
      <p>Welcome All!!</p>
    </template>

    <template v-slot:left>
      <ul>
        <h3>Directive Types</h3>
        <li>v-if</li>
        <li>v-for</li>
        <li> v-model</li>
         <li>v-on</li>
         <li>v-bind</li>
      </ul>
    </template>

    <template v-slot:default>
      <CardWrapper>
        <template v-slot:left>
          <ul>
            <li>Vue.js is a progressive JavaScript framework.</li>
            <li>It is used to build user interfaces and single-page applications.</li>
          </ul>
        </template>

        <template v-slot:right>
          <ul>
            <li>Uses HTML templates, JavaScript logic, and CSS styling inside .vue files</li>
            <li>Supports Options API and Composition API for organizing code</li>
          </ul>
        </template>
      </CardWrapper>
    </template>

    <template v-slot:right>
      <ul>
        <h2>Course</h2>
        <li>Java</li>
        <li>HTML</li>
        <li>JavaScript</li>
      </ul>
    </template>

    <template v-slot:footer>
      <p>elakkiya@gmail.com</p>
      <p>987654321</p>
    </template>
  </LayoutWrapper>
</template>

<script>
import LayoutWrapper from './components/Watches/slot/LayoutWrapper.vue';
import CardWrapper from './components//Watches/slot/CardWrapper.vue';

export default {
  name: 'App',
  components: {
    LayoutWrapper,
    CardWrapper
  }
};
</script>-->
<!-- src/components/UserProfile.vue -->

<!--<template>
  <div id="app">
    <UserNameDisplay />
  </div>
</template>

<script>
import UserNameDisplay from './components/UserNameDisplay.vue';

export default {
  components: {
    UserNameDisplay
  }
};
</script>
<template>
  <div>
    <FruitList />
  </div>
</template>

<script>
import FruitList from './components/FruitList.vue';

export default {
  components: {
    FruitList
  }
};
</script>

<template>
  <div :class="['app', theme]">
    <ThemeToggle />

    <h1>Hello {{ theme }} Theme</h1>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ThemeToggle from './components/ThemeToggle.vue';

export default {
  components: { ThemeToggle },
  setup() {
    const store = useStore();
    const theme = computed(() => store.getters.currentTheme);
    return { theme };
  }
};
</script>

<style scoped>
.app {
  min-height: 100vh;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.app.light {
  background-color: #f5f5f5;
  color: #333;
}

.app.dark {
  background-color: #1e1e1e;
  color: #eee;
}
</style><template>
  <div id="app">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    LoginPage
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<template>
  <div id="app">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from './components/food/LoginPage.vue';
export default { name: 'App', components: { LoginPage } };
</script>

<style>
/* Prevent scrolling */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>-->
<template>
  <div id="app" class="min-h-screen flex flex-col font-sans bg-gray-100">
    <!-- Header -->
    <header class="bg-green-600 text-white p-4 shadow-md">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">🌱 Veggie Delight</h1>
        <nav class="space-x-4">
          <router-link to="/" class="hover:underline">Login</router-link>
          <router-link to="/order" class="hover:underline">Order</router-link>
          <router-link to="/payment" class="hover:underline">Payment</router-link>
          <router-link to="/booking" class="hover:underline">Book Table</router-link>
          <router-link to="/feedback" class="hover:underline">Feedback</router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow p-6">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 p-4 text-center">
      © {{ currentYear }} Veggie Delight. Eat healthy, live happily!
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
npm run
const currentYear = computed(() => new Date().getFullYear());
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, sans-serif;
}
</style>
