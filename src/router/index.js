import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import activemessage from '../components/activemessage'
import homepage from '../components/homepage'
import contactus from '../components/contactus'
import teacherteam from '../components/teacherteam'
import studentinfo from '../components/studentinfo'
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
        },
        {
          path:'/contactus',
          component:contactus
        },
        {
          path:'/teacherteam',
          component:teacherteam
        },
        {
          path:'/studentinfo',
          component:studentinfo
        }
      ]
    }
  ]
})
