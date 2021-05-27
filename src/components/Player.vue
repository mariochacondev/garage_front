<template>
    <div>
        <div v-for="(item, index) in tracks" :key="index">
        <Aplayer autoplay
        :music="{
            title: item.title,
            artist: item.artist,
            src: item.url,
            pic: item.albumUrl
        }"
        />
        </div>
    </div>
</template>

<script>

import VueAplayer from 'vue-aplayer'

export default {
    components:{
         'Aplayer': VueAplayer,
         
    },
    props: {
        tracks: {
            Array,
            required: true
        },
    }

}
</script>

<style>

</style>































