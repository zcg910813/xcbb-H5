<template>
  <div id="app">
    <div class="header">小草播播</div>
    <router-view></router-view>
    <ul class="tabBar">
      <li>
        <router-link to="/">
          <img src="@/assets/img/videogl.png" alt=""><br>
          直播
        </router-link>
      </li>
      <li>
        <router-link to="/woDe">
          <img src="@/assets/img/wodel.png" alt=""><br>
          我的
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import liveList from '@/components/liveList'
import woDe from '@/components/woDe'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  created() {
    
  },
  components:{woDe,liveList}
}
</script>

<style>
  .header{
    width: 10rem;
    height:1.2rem /* 90/75 */;
    line-height: 1.2rem /* 90/75 */;
    text-align: center;
    color:white;
    background: rgb(24,14,38);
    font-size:.613333rem /* 46/75 */;
    position: fixed;
    left: 0;
    top: 0;
    /* z-index: 900; */
  }
  .tabBar{
    position: fixed;
    left: 0;
    bottom:0;
    width: 10rem;
    height: 1.173333rem /* 88/75 */;
    background-image: url('assets/img/userbkbj.png');
    background-size: 100% 100%;
    overflow: hidden;
    /* z-index: 900; */
  }
  .tabBar li{
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    
  }
  .tabBar li img{
    margin-top:.133333rem /* 10/75 */;
    width: .6rem /* 45/75 */;
  }
  .tabBar li a{
    color: white;
    font-size:.16rem /* 12/75 */;
  }
</style>
