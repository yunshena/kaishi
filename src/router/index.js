import Vue from 'vue'
import Router from 'vue-router'

import Swiper from 'swiper'; 
import '../../node_modules/swiper/dist/css/swiper.min.css'
import '../../node_modules/swiper/dist/js/swiper.min.js'

import VIscroll from 'viscroll';

import Big from '@/big'
import relea from '@/fa'
import Menu from '@/components/Menu/menu'
import Page from '@/components/Menu/page'
import Fen from '@/components/Menu/fen'
import Food from '@/components/Menu/food'
import Video from '@/components/Menu/video'

import Topic from '@/components/Topic/topic'
import Pic from '@/components/Topic/pic'
import New from '@/components/Topic/new'
import Hot from '@/components/Topic/hot'
import Elite from '@/components/Topic/elite'

import Atten from '@/components/Atten/atten'
import Mys from '@/components/Mys/mys'

import detail from '@/components/Menu/detail/detail'
import sub from '@/components/Menu/detail/subject'
import pag from '@/components/Menu/detail/pagem'

import list from '@/components/Menu/page_list'
import imgae from "@/imgae"
import pass from "@/pass"
import register from "@/register"
import Inp from "@/Inp"
import InpV from "@/Inp_value"

import details from '@/components/Topic/details/det'
import picuser from '@/components/Topic/details/user'
Vue.use(Router)
Vue.use(VIscroll, {
  mouseWheel: true,
  click: false,
  preventDefault: true,
  tap: false,
  bounce: false,
  disableTouch: true,
  scrollX:false,
  scrollY:true
});
export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      // name: 'big',
      component: Big,
      children: [
        {
          path: '/',
          // name: 'menu',       
          meta:{
            requireAuth:true
          },
          component: Menu,
          children:[
            {
              path: '/',
              name: 'Page',
              component: Page
            },{
              path: '/fen',
              name: 'Fen',
              component:Fen
            },{
              path: '/food',
              name: 'Food',
              component: Food
            },{
              path: '/video',
              name: 'Video',
              component: Video
            }
          ]
        },
        {
          path: '/topic',
          name: 'Topic',
          component: Topic,
          children:[
            {
              path: '/topic',
              name: 'Pic',
              component: Pic
            },{
              path: '/topic/new',
              name: 'New',
              component:New,
            },{
              path: '/topic/hot',
              name: 'Hot',
              component: Hot
            },{
              path: '/topic/elite',
              name: 'Elite',
              component: Elite
            }
          ]
        },
        {
          path: '/atten',
          name: 'Atten',
          component: Atten
        },
        {
          path: '/mys',
          name: 'Mys',
          component: Mys
        }
      ]
    },
    {
      path:'/zhuan/:id',
      name:'detail',
      component:detail,
      children:[
        {
          path:'/zhuan/:id',
          name:'subject',
          component:sub
        },
        {
          path:'/zhuan/:id/pag',
          name:'pagem',
          component:pag 
        }
      ]
    },
    {
      path:'/list/:id',
      name:'list',
      component:list
    },
    {
      path:'/tu/:id/:shu',
      component:imgae
    },
    // {
    //   path:'/pass/:id',
    //   component:pass
    // },
    {
      path:'/pass',
      component:pass
    },
    {
      path:'/register/:id',
      component:register
    },
    {
      path:'/topic/hua/:id',
      name:'details',
      component:details,
    },
    {
      path:'/topic/user/:id',
      name:'picuser',
      component:picuser,
    },
    {
      path:'/relea',
      name:'relea',
      component:relea,
    },
    {
      path:'/inp',
      name:'inp',
      component:Inp,
    },
    {
      path:'/inpV',
      name:'inpV',
      component:InpV,
    }
  ]
})
