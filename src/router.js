import Vue from 'vue'
import Router from 'vue-router'

 import Index from './views/Index'
 import Details from './views/Details'
// import NotFound from './views/NotFound'
//ES6

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: '/', component: Home, children:[
        { path:"/", component: Index },
        { path:"/details", component: Details }
    // ]},
    // { path: '/login', component: Login },
    // { path: '/*', component:NotFound }
  ]
})
