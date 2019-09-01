import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import activemessage from '../components/activemessage'
import homepage from '../components/homepage'
import contactus from '../components/contactus'
import teacherteam from '../components/teacherteam'
import studentinfo from '../components/studentinfo'
import eduachievements from '../components/eduachievements'
import sciachievements from '../components/sciachievements'
import teachinfo from '../components/teachinfo'
import sciproject from '../components/sciproject'
import admissioninfo from '../components/admissioninfo'
import intercooperation from '../components/intercooperation'
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
            path:'/eduachievements',
            component:eduachievements
        },
        {
          path:'/sciachievements',
          component:sciachievements
        },
        {
        path:'/teachinfo',
        component:teachinfo
        },
        {
          path:'/sciproject',
          component:sciproject
        },
        {
          path:'/admissioninfo',
          component:admissioninfo
        },
        {
          path:'/intercooperation',
          component:intercooperation
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
