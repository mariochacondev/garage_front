<template v-model="access_token">
    <div v-if="access_token === '' ">
        <button v-on:click="useAuth(code)">Continue</button>
    </div>
</template>
<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)



export default {
  name: 'UseAuth',
  data(){
    return {
      access_token:'',
      token_type: '',
      refresh_token:'',
      expires_in: '',
      scope:'',
    }
  },
  props: {
    code:{},
  },
  methods: {
      useAuth: function(code){
        Vue.axios.post('http://localhost:3001/login', {
          code,
          })
      .then(res => {
        console.log(res.data);
        this.access_token = res.data.access_token;
        this.token_type = res.data.token_type;
        this.refresh_token = res.data.refresh_token;
        this.expires_in = res.data.expires_in;
        this.scope = res.data.scope;
        this.$emit("clicked", res.data.access_token)
        window.history.pushState({}, null, '/home')
      })
      .catch(() =>{
        window.location ='/home'
    },[code] )        
    },
    refresh: function() {
       
    Vue.axios.post('http://localhost:3001/refresh', this.refresh_token)
      .then(res => {
        console.log(res.data)
        this.access_token = res.data.access_token;
        this.expires_in = res.data.expires_in;
      }).catch(() =>{
        window.location ='/home'
      }, [this.refresh_token, this.expires_in])
    return this.access_token
    }
  },
  updated(){
     this.interval = setInterval(function() {
      if(!this.refresh_token || !this.expires_in) return this.refresh();
    }.bind(this), 60 * 1000) 
    return () => clearInterval(this.interval);

    
   

  }
}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>