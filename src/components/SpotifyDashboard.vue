<template>
    <div>
        <h1>Spotify Dashboard</h1>
        <form>
          <div>
             <div>
             <Player :tracks="tracks"/>
             </div>
          <input class="text-black" v-model="search" placeholder="Search Here">
          </div>
        </form>
        <UseAuth @clicked="getToken" v-bind= {code} />
        <div>
         <TrackSearchResult :tracks="tracks" />
        </div>
    </div>
</template>

<script>
import UseAuth from './UseAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from './TrackSearchResult';
import Player from './Player';


const spotifyApi = new SpotifyWebApi({
clientId: "cb68540409d947c8a34d95a24dbe65d7",
});

export default {
  name: 'SpotifyDashboard',
  components: {
    UseAuth,
    TrackSearchResult,
    Player,
  },
  data() {
    return {
      access_token: {},
      search: '',
      searchResults: [],
    } 
 },
 computed: {
    tracks(){
      return this.searchResults.map(track => {
        const smallestAlbumImage = track.album.images.reduce((smallest, image) =>{
          if(image.height < smallest.height) return image
          return smallest
        }, track.album.images[0])
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url,
          url: track.external_urls.spotify
        }
      })
    }
 },
  props:{
    code: {},
  },
  methods: {
    getTracks(search){
      search = this.search
      spotifyApi.setAccessToken(this.access_token);
      spotifyApi.searchTracks(search).then((res) => {
      this.searchResults = res.body.tracks.items
        
      console.log(this.tracks);
    },

      
    ).catch((err) =>{
      console.log(err.message)
    });[this.search, this.access_token, this.searchResults] 
    },

    getToken(access_token){
      console.log(access_token)
      this.access_token = access_token;
      this.$emit("access_token", access_token);
      [this.access_token]
    },
  },
  updated(){

    if(!this.access_token) return
    else
    spotifyApi.setAccessToken(this.access_token),[this.access_token];

    if(!this.search) return this.searchResults;
    if(!this.access_token) return;
     
    this.timeout = setTimeout(function() {
      if(this.search != '')
      return this.getTracks();
    }.bind(this), 6000)
    return () => clearTimeout(this.timeout);
  },
}
</script>

<style scoped>

</style>