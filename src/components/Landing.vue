<template>
    <div class="container">
        <h1>Logging in...</h1>
        <button v-on:click="logOut">LogOut</button>
    </div>
</template>

<script>
export default {
  name: 'Landing',
  created() {
   if(localStorage.getItem('token') === null){
     this.$router.push({ name: 'login' });
   }
  },
  methods: {
    logOut(){
      localStorage.clear();
      this.$router.push({ name: 'home' });
    }
  }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    text-align: center;
}
h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 30px;
}
</style>