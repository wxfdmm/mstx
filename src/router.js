import Vue from 'vue'
import Router from 'vue-router'

 import Index from './views/Index'
 import Details from './views/Details'
 import Details2 from './views/Details2'
 import Details3 from './views/Details3'
// import Login from './views/Login'
// import NotFound from './views/NotFound'
//ES6

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: '/', component: Home, children:[
        { path:"/", component: Index },
        { path:"/details", component: Details },
        { path:"/details2", component: Details2 },
        { path:"/details3", component: Details3 },
    // ]},
    // { path: '/login', component: Login },
    // { path: '/*', component:NotFound }
  ]
})
