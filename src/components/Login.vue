<template>
    <form>
        <div>
            <div class="container">
              <h1>Saisis ton email et mot de pass</h1>
                <div class="detailsContainer">
                  <input type="email" v-model="email" placeholder="Email"/>
                <br>
                  <input type="password" v-model="password" placeholder="Mot de pass"/>
                <br>
                  <button v-on:click="login">Se connecter</button>
                <br>
                </div>
                <div>{{ error }}</div>
            </div>
        </div>
    </form>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)

export default {
  name: 'Login',
  data(){
      return {
        email: '',
        password: '',
        error: '',
      }     
  },
  methods: {
     login(){
         let newLogin = {
             email: this.email,
             password: this.password,
         }
       Vue.axios.post('http://localhost:4000/login', newLogin)
       .then( res=> {
           if(res.status === 200) {
               localStorage.setItem('auth-token', res.data.token);
               localStorage.setItem('refresh-token', res.data.refreshToken);
               localStorage.setItem('userId', res.data.userId);
               localStorage.setItem('username', res.data.username);
               window.location.href = 'home';
           }
      }).catch( err =>{
        console.log(err.response);
        this.error = err.response.data
      })
      }
  },
}
</script>

<style scoped>

h1 {
  @apply text-lg;
}

button {
  @apply rounded-full text-sm py-2 px-3 border-2 border-garageBlue-One bg-garageBlue-Three hover:bg-garageBlack-light hover:text-white
}

.container {
  @apply block w-screen m-auto font-text;
}

.detailsContainer {
  @apply block;
}

input {
  @apply m-3 p-1 text-garageBlack-solid;
}
</style>