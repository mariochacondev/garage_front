<template>
    <div>
        <h1>EMBED HERE</h1>
        <div>
          <button v-on:click="spotifyLoigIn">Enter Spotify</button>
        </div>
    </div>
</template>

<script>



export default {
  name: 'Spotify',
  methods:{
    spotifyLoigIn(){
      const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=cb68540409d947c8a34d95a24dbe65d7&response_type=code&redirect_uri=http://localhost:8080/home&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
      window.location.href = AUTH_URL
    }
  },
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