<template>
<div class="container">
  <div>
        <div class="embed-container">
            <iframe :src="embed[1].musicChart.iFrame" width="320" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div class="comments-box">
            <GetComments />
        </div>
  </div>
</div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import GetComments from './GetComments'


Vue.use(VueAxios,axios)

export default {
  name: 'Embed',
  components: {
      GetComments
  },
  data(){
      return {
          embed:{}
      
      }     
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

.embed-container {
    @apply md:flex md:w-full md:justify-center;
}
.comments-box {
    @apply md:flex md:w-full md:justify-center;
}



</style>