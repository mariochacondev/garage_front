<template>
<div class="container">
  <div>
      <div class="embed-container">
        <div class="embed">
            <iframe :src="embed[1].musicChart.iFrame" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
         <div class="embed">
            <iframe :src="embed[4].musicChart.iFrame" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
         <div class="embed">
            <iframe :src="embed[5].musicChart.iFrame" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        </div>
        <div class="embed-container">
         <div class="embed">
            <iframe :src="embed[6].musicChart.iFrame" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
         <div class="embed">
            <iframe :src="embed[7].musicChart.iFrame" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
         <div class="embed">
            <iframe :src="embed[8].musicChart.iFrame" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
         <div class="embed">
            <iframe :src="embed[9].musicChart.iFrame" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    </div>
    <div class="comments-title">
        <div>
                <h1> Dis-nous en commentaire quelle playlist tu as préféré ? Laquelle tu aimerais voir ici ? </h1>
        </div>
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
iFrame{
    @apply md:w-80 md:h-80 w-64 h-64;
}

.container{
    @apply md:w-full w-screen;
}
.embed{
    @apply md:m-5 m-5;
}
.embed-container {
    @apply md:flex md:justify-center md:m-10;
}
.comments-box {
    @apply md:flex md:w-full m-auto md:justify-center;
}



</style>