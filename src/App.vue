<template>
  <div id="app" class="body">
    <div class="headerContainer">
      <Header />
    </div>
     <router-view />
  </div>
</template>

<script>
import "tailwindcss/tailwind.css"
import Header from './components/Header.vue'



export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');



/* CSS RESET */
#app {
 @apply text-center w-full;
}

/* TAILWINDCSS STYLE */

.body {
  @apply 
  bg-garageBlack-solid   
  text-garageWhite-solid;
}

.headerContainer {
  @apply text-base w-screen bg-gradient-to-r from-garageGreen-One to-garageBlue-One;
}

</style>
