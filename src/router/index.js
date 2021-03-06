import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import Home from '../components/Home'
import Index from '../components/Index'
import PostComments from '../components/PostComments.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/index', name:'index', component: Index},
    {path: '/home', name:'home', component: Home},
    {path: '/register', name:'register', component: SignUp},
    {path: '/login', name:'login', component: Login},
    {path: '/comments', name:'postComments', component: PostComments},
    
  ]
  
  const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
  })

  export default router;
  