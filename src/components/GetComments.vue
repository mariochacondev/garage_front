<template>
<div class="container">
        <div>
           <p> {{this.number}} COMMENTAIRES </p>
        </div>
      <div id="commentsScroll" class="comment-box">
          <section v-for="(comment, index) in comments" :key="index">
              <div class="comment">
                <p>{{comment.message}}</p>
              </div>
                <p class="postedBy">Posté par: {{comment.postedBy.username}}</p>
              <div v-if="username === comment.postedBy.username">
                <button class="btnDelete" @click="deleteComment(comment._id)">Effacer commentaire</button>
              </div>
          </section>
      </div>
      <div class="addComment" v-if="userId === true">
        <PostComments />
      </div>
</div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import PostComments from './PostComments.vue';
import logOut from './Home';

Vue.use(VueAxios,axios)

export default {
  name: 'GetComments',
  components: {
    PostComments,
  },
  data(){
      return {
        comments: {},
        userId: false,
        username: "",
        number:"",
      }     
  },
  mounted(){
     this.userId = localStorage.getItem('userId');
     if(this.userId) this.userId = true;
     this.username = localStorage.getItem('username');


    this.getComments();
    this.interval = setInterval(function() {
      this.getComments()
    }.bind(this), 50000);
  },
  methods: {
      getComments(){
       Vue.axios.get('http://localhost:3000/comments')
       .then((res)=> {
          this.comments=res.data;
          this.number=res.data.length;
          console.log(res.data);
          this.scrollToEnd();
      }).catch((errors) =>{
        console.log(errors)
      })
      },
      scrollToEnd: function() {    	
      var container = this.$el.querySelector("#commentsScroll");
      container.scrollTop = container.scrollHeight;
    },
    populate: function() {
      for(var i = 0; i<100; i++) {
        this.formData.push(+i);
      }    
    },
    deleteComment(_id){
      let auth = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'userId': localStorage.getItem('userId'),
          },
      }
       Vue.axios.delete('http://localhost:3000/comments/'+_id, auth)
       .then(()=> {
          this.getComments();
          alert('Ton commentaire ça etait effacé')
      }).catch((errors) =>{
        console.log(errors)
        alert('Votre session as expiré')
        return logOut();

      })
      },

  }
}
</script>

<style scoped>
.container {
  @apply max-w-xs md:max-w-6xl bg-garageBlack-medium rounded-xl font-text;
}
h1 {
  @apply text-base;
}
h2 {
  @apply text-sm;
}
.comment {
  @apply p-3 w-auto border-t-4 border-l-4 border-r-4 border-garageGreen-Two bg-garageBlue-Three text-white;
}
.comment p {
  @apply break-words text-sm;
}
.postedBy {
  @apply py-1 pl-3 border-b-2 border-garageGreen-Two text-xs text-left;

}
.comment-box {
  @apply md:max-w-full p-2 border-solid border-2 border-garageBlack-solid max-w-md max-h-80 overflow-auto rounded-lg;
}
.addComment {
  @apply py-2;
}
.btnDelete {
  @apply rounded-full text-xs my-2 py-1 px-2 border-2 border-garageBlue-One bg-garageBlue-Three hover:bg-garageBlack-light hover:text-white;
}


</style>