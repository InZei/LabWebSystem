import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import activemessage from '../components/activemessage'
import homepage from '../components/homepage'
import laboratoryintro from '../components/laboratoryintro'
import contactus from '../components/contactus'
import teacherteam from '../components/teacherteam'
import studentinfo from '../components/studentinfo'
import eduachievements from '../components/eduachievements'
import sciachievements from '../components/sciachievements'
import teachinfo from '../components/teachinfo'
import sciproject from '../components/sciproject'
import admissioninfo from '../components/admissioninfo'
import intercooperation from '../components/intercooperation'
import readmessage from '../components/readmessage'
import login from '../pages/login'
import adminusermanagement from '../components/adminusermanagement'
import adminadduser from '../components/adminadduser'
import adminqueryuser from '../components/adminqueryuser'
import writemail from '../components/writemail'
import changepsd from '../components/changepsd'
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
          path:"/changepsd",
          component:changepsd
        },
        {
            path:'/writemail',
            component:writemail
        },
        {
          path:'/activemessage',
          component:activemessage
        },
        {
          path:'/readmessage',
          component:readmessage
        },
        {
            path:'/laboratoryintro',
            component:laboratoryintro
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
      },
      {
        path:'/adminusermanagement',
        component:adminusermanagement,
      },
      {
        path:'/adminadduser',
        component:adminadduser,
      },
      {
        path:'/adminqueryuser',
        component:adminqueryuser,
      }

      ]
    },
    {
      path:'/login',
      name:'login',
      component:login,
    }
  ]
})
