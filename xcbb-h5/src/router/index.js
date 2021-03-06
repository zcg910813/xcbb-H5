import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import liveList from '@/components/liveList'
import woDe from '@/components/woDe'
import setInfo from '@/components/setInfo'
import toPay from '@/components/toPay'
import zbRoom from '@/components/zbRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'liveList',
      component: liveList,
    },
    {
      path: '/woDe',
      name: 'woDe',
      component: woDe
    },
    {
      path: '/setInfo',
      name: 'setInfo',
      component: setInfo
    },
    {
      path: '/zbRoom',
      name: 'zbRoom',
      component: zbRoom
    }
  ]
})
