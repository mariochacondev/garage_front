<template>
    <div class="container">
        <h1>S'inscrire</h1>
        <input type="text" placeholder="Nom d'utilisateur" v-model="username" />
        <br>
        <input type="email" placeholder="Email" v-model="email" />
        <br>
        <input type="password" placeholder="Mot de passe" v-model="password" />
        <br>
        <button class="btnSignUp" @click="signUp">S'inscrire</button>
        <div class="info">
          <h2> Inscrption à Garage </h2>
          <h2>Inscris-toi pour profiter de contenu exclusif et faire partie de la communauté</h2>
          <p> Conditions Générales d'Utilisation </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  name: 'SignUp',
  data(){
      return {
        username: '',
        email: '',
        password: '',
      }     
  },
  methods: {
      signUp(){
        let newSignUp =  {
             username: this.username,
             email: this.email,
             password: this.password,
         }
       Vue.axios.post('http://localhost:4000/register', newSignUp)
       .then((res)=> {
        console.log(res)
        window.location.href = 'login'
      }).catch((errors) =>{
        console.log(errors)
      })
      }

  },
}
</script>

<style scoped>
.container {
    @apply font-text md:w-full w-screen m-auto;
},
h2{
  @apply text-xl font-bold;
},
input {
  @apply m-2 text-black p-1;
},
.btnSignUp {
  @apply rounded-full text-sm py-2 px-3 border-2 border-garageBlue-One bg-garageBlue-Three hover:bg-garageBlack-light hover:text-white;
}
</style>