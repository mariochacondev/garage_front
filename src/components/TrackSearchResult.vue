<template>
    <div>
        
        <div class="track-container" @click="handlePlay" v-for="(item, index) in tracks" :key="index">
           <div class="albumPhoto">
             <img :src="item.albumUrl" alt="X"/>
        </div>
        <div class="track-info">
            <div> {{ item.title }} </div>
            <div> {{ item.artist }} </div>
        </div>
        </div> 
    </div>
</template>


<script>



export default {
    name: 'TrackSearchResult',
    components: {
        
  },
    props: {
        tracks: {
            Array,
            required: true
        },
    },
    data(){
        return {
            chooseTrack: {},
        }

    },
    methods: {
        handlePlay(){
            this.chooseTrack(this.tracks)
        }
         
  },

}
</script>

<style scoped>

.track-container {
    @apply flex m-2 items-center cursor-pointer;
}

.track-info{
    @apply ml-5 text-garageWhite-solid;
}



</style>