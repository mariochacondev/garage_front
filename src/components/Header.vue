<template>
    <div class="container"> 
            <div class="mainTitle">
                <div>
                <img :src="require('@/assets/logoPNG.png')" alt="LOGO">
                </div>
                <h1>Garage Bordeaux</h1>
                <nav class="nav">
                    <router-link  class="menuItem" :to="{ name: 'home'}">Home</router-link>
                    <router-link  class="menuItem" :to="{ name: 'register'}">Register</router-link>
                    <router-link  class="menuItem" :to="{ name: 'login'}">Login</router-link>
                </nav>
            </div>
        </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>
<style scoped>
.container {
    @apply w-screen;
}

.mainTitle {
  @apply md:flex 
  pl-6 pr-6 
  md:justify-between 
  items-center 
  font-title 
  text-5xl 
  border-b-2 
  border-white 
  shadow-inner 
  text-garageWhite-solid 
  pt-0 pb-0;
  
}
img {
    @apply w-40 h-40;
}
.nav {
    @apply flex justify-center;
}
.menuItem {
    @apply pl-5 pr-5 flex font-nav text-xl;
}
</style>