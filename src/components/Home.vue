<template>
  <div class="container">
    <div class="logOutBox">
      <button class="btnLogOut" v-on:click="logOut">Deconnexion</button>
    </div>
     <div class="welcomeBox">
        <h1>Bienvenue chez Garage {{ username }}, t'es connecté !</h1>
    </div>
    <!-- <div v-if="code">
      <SpotifyDashboard v-bind= {code} />
    </div>
    <div v-else>
      <Spotify />
    </div> -->
    <div>
      <h2> Selection des Playlists de cette semaine </h2>
      <p> Cette semaine DeepInside est sur le top </p>
      <Embed1 />
    </div>

  </div>
</template>


<script>




import Embed1 from './Embed1'
// import Spotify from './Spotify'
// import SpotifyDashboard from './SpotifyDashboard'

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)


export default {
  name: 'Home',
  components: {
    Embed1,
    // Spotify,
    // SpotifyDashboard
  },
  data(){
    return {
      // code: '{{ code }}',
      username: '',
      refreshToken: '',
      token: '',
    }
  },
  prpos: {
    // code: {},
    // access_token:{},
  },
  mounted(){
    // this.code = new URLSearchParams(window.location.search).get('code');
    this.username = localStorage.getItem('username');
    this.refreshToken = localStorage.getItem('refresh-token');
    this.token = localStorage.getItem('auth-token');
    if(localStorage.getItem('auth-token') === null) return window.location.href = 'login'
    
  },
  methods: {
    logOut(){
      let token = localStorage.getItem('refresh-token')

      Vue.axios.delete('http://localhost:4000/logout/'+token)
       .then( res=> {
           if(res.status === 200) {
             console.log(token)
          localStorage.clear();
          window.location.href = 'login'
           }
      }).catch( err =>{
        console.log(err.response);
        this.error = err.response.data
      })
    
    },
    refreshTokens(){
       let token = localStorage.getItem('refresh-token')
       Vue.axios.post('http://localhost:4000/token/'+token)
       .then( res=> {
           if(res.status === 200) {
               localStorage.setItem('auth-token', res.data.token)
           }
      }).catch( err =>{
        console.log(err.response);
        this.error = err.response.data
      })
      }

  },
  created(){
        this.interval = setInterval(function() {
      return this.refreshTokens();
    }.bind(this), 540000)
    return () => clearInterval(this.interval);
  },
  updated(){
    if(this.token == '') return this.logOut()
  }

  
}
</script>

<style scoped>
.container {
  @apply font-text m-auto w-screen md:w-full;
},
h1 {
  @apply text-3xl p-0;
}
h2{
  @apply text-2xl p-0;
}
p{
  @apply text-xl p-0;
}
.welcomeBox {
   @apply flex justify-center items-center m-5 pb-5;
}
.logOutBox {
  @apply justify-end flex;
}
.btnLogOut {
  @apply rounded-full py-2 px-4 border-2 border-garageBlue-One bg-garageBlue-Three hover:bg-garageBlack-light hover:text-white;
}
</style>