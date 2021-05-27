<template>
    <div class="container">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Name" v-model="username" />
        <br>
        <input type="email" placeholder="Email" v-model="email" />
        <br>
        <input type="password" placeholder="Mot de passe" v-model="password" />
        <br>
        <button class="btnSignUp" @click="signUp">S'inscrire</button>
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
       Vue.axios.post('http://localhost:3000/user/register', newSignUp)
       .then((res)=> {
        console.log(res)
      }).catch((errors) =>{
        console.log(errors)
      })
      }

  },
}
</script>

<style scoped>
.container {
    @apply font-text;
},
input {
  @apply m-2;
},
.btnSignUp {
  @apply rounded-full text-sm py-2 px-3 border-2 border-garageBlue-One bg-garageBlue-Three hover:bg-garageBlack-light hover:text-white;
}
</style>