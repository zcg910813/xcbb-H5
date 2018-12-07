// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/mian.css'
import './js/flexible'
import './js/socket'    //socket 相关

// 引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引入axios
import axios from 'axios'
Vue.prototype.$http= axios;

//引入vue直播组件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import 'videojs-contrib-hls'
Vue.use(VideoPlayer);

//剪切板功能
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

//引入微信sdk
import wx from 'weixin-js-sdk'
Vue.prototype.$wx = wx;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
