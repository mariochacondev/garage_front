<template>
    <div class="containerPost">
        <textarea placeholder="Votre message" name="comment" v-model="formData.message"></textarea>
        <br>
        <button class="btnSubmit" @click="saveComment">Ajouter un commentaire</button>
    </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import logOut from './Home'

Vue.use(VueAxios,axios)

export default {
  name: 'PostComments',
  data(){
      return {
        formData: {
          message: this.message,
        },
     }     
  },
  methods: {
    saveComment(){
      let auth = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'userId': localStorage.getItem('userId')
          } 
    }
        Vue.axios.post('http://localhost:3000/comments', this.formData, auth)
      .then((res)=> {
          this.message=res.data;
          this.formData.message = ''
          console.log(res.data);    
      }).catch( err =>{
        console.log(err.response)
        return logOut();
        
      })
    }
  },
  props: {
    msg: String,
  }
}
</script>

<style scoped>

textarea {
  @apply text-garageBlack-solid;
}

.containerPost {
  @apply block;
}
.btnSubmit {
  @apply rounded-full text-sm py-2 px-3 border-2 border-garageBlue-One bg-garageBlue-Three hover:bg-garageBlack-light hover:text-white;
}
</style>