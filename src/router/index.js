import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import activemessage from '../components/activemessage'
import homepage from '../components/homepage'
Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path:'/',
          component:homepage
        },
        {
            path:'/activemessage',
            component:activemessage
        }
      
      ]
    }
  ]
})
