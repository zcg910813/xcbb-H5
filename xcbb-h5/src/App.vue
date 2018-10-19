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
import zbRoom from '@/components/zbRoom'
import giftList from '@/components/giftList'
export default {
  name: 'App',
  data(){
    return {
      ws:null,
      ws2:null,
      ws_zbRoom:null,
      baesUrl:"/api/",                   //  "/"
    }
  },
  giftData:{
                    cmd:"PSendGift",
                    uid:10000022,           //用户id
                    sid:0,                  //房间id
                    uid_onmic:0,            //主播id
                    id:0,                   //礼物id
                    type:0,                 //礼物类型
                    num:0,                  //礼物数量
                    flag:1,                 //连送标识  0-非连送  1-连送
                    buy:1,                  //是否消耗金币或阳光值  0-否  1-是
                    serialNum:1,            //连送序号
                    cid:1,                  //固定值 1
                    sendTime:null,          //赠送时  当前时间戳  毫秒级
                    sender:"今天开始做自",              //用户昵称
                    receiver:""             //主播昵称
  },
  userInfo:null,
  created() {
    
  },
  components:{woDe,liveList,zbRoom,giftList}
}
</script>

<style>
#app{
  position: absolute;
  width: 10rem;
  height: 100%;
  background: rgb(33,25,46);
}
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
    z-index: 100;
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
