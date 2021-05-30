<template>
<div class="container">
     <h1> Bienvenue à Garage</h1>
      <p>Rejoins-nous pour faire partie de la communauté et profiter de plus de contenu</p>
      <div>
          <h2>Notre Concept</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>
      <h1>Voici les playlists du moment</h1>
  <div class="containerEmbeds">
      <div class="embed">
            <iframe :src="embed[0].musicChart.iFrame" width="320" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div class="embed">
            <iframe :src="embed[2].musicChart.iFrame" width="320" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div class="embed">
            <iframe :src="embed[3].musicChart.iFrame" width="320" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
  </div>
   <div>
          <h2>Acteurs et Actrices de la scène musicale</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>
</div>
</template>


<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)


export default {
  name: 'Index',
  components: {
    
  },
  data(){
      return {
          embed:{}
      }
    
  },
  prpos: {
   
  },
  created(){
      this.getEmbeds();
  
    
  },
  methods: {
      getEmbeds(){
       Vue.axios.get('http://localhost:3000/embed')
       .then((res)=> {
          this.embed=res.data;
          console.log(res.data);
      }).catch((errors) =>{
        console.log({message:errors})
      })
      }

  }

  
}
</script>

<style scoped>

h1{
    @apply text-5xl m-5 font-bold;
}

h2{
    @apply text-2xl;
}
p{
    @apply m-5;
}

.container {
    @apply w-screen md:w-full m-auto font-text;
}

.containerEmbeds {
    @apply md:flex md:w-full justify-center;
}

.embed{
    @apply md:m-10;

}



</style>