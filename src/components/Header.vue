<template>
    <div class="container"> 
            <div class="mainTitle">
                <div>
                <img :src="require('@/assets/logoPNG.png')" alt="LOGO">
                </div>
                <h1>Garage Bordeaux</h1>
                <nav class="nav">
                    <router-link  class="menuItem" :to="{ name: 'index'}">Accueil</router-link>
                    <router-link v-if="token" class="menuItem" :to="{ name: 'home'}">Tableau de bord</router-link>
                    <router-link v-if="!token"  class="menuItem" :to="{ name: 'register'}">S'inscrire</router-link>
                    <router-link v-if="!token" class="menuItem" :to="{ name: 'login'}">Se connecter</router-link>
                </nav>
            </div>
        </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
      return {
          token:''
      }
  },
  mounted(){
    this.token = localStorage.getItem('auth-token');

    }
}

</script>
<style scoped>
.container {
    @apply md:w-full w-screen;
}

.mainTitle {
  @apply md:flex
  w-screen
  pl-6 pr-6 
  md:justify-between 
  items-center 
  font-title 
  md:text-5xl
  text-2xl 
  border-b-2 
  border-white 
  shadow-inner 
  text-garageWhite-solid 
  pt-0 pb-0;
  
}
img {
    @apply md:w-40 md:h-40 w-20 h-20;
}
.nav {
    @apply flex justify-center;
}
.menuItem {
    @apply pl-5 pr-5 flex font-nav md:text-xl text-base;
}
</style>