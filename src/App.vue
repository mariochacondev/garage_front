<template>
  <div id="app" class="body">
    <div class="headerContainer">
      <Header />
    </div>
     <router-view />
     <div class="footerContainer">
     <Footer />
     </div>
  </div>
</template>

<script>
import "tailwindcss/tailwind.css"
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    Header,
    Footer
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
  w-screen
  md:w-full
  m-auto
  bg-garageBlack-solid   
  text-garageWhite-solid;
}


.headerContainer {
  @apply text-base md:w-full w-screen bg-gradient-to-r from-garageGreen-One to-garageBlue-One;
}
.footerContainer {
   @apply md:w-full w-screen h-20 bg-gradient-to-r from-garageGreen-One to-garageBlue-One;
}

</style>
