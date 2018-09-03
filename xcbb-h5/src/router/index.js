import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import liveList from '@/components/liveList'
import liveRoom from '@/components/liveRoom'
import woDe from '@/components/woDe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'liveList',
      component: liveList
    },
    {
      path: '/liveRoom',
      name: 'liveRoom',
      component: liveRoom
    },
    {
      path: '/woDe',
      name: 'woDe',
      component: woDe
    }
  ]
})
