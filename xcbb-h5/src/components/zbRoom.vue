<template>
    <div class="zbRoom" >  
        <!-- vue直播播放组件 -->
<<<<<<< HEAD
        <div class="player" :style="{height:ht}">
          <video-player  class="video-player vjs-custom-skin"
=======
        <!-- <div class="player"> -->
            <video-player  class="player video-player vjs-custom-skin"
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
                     ref="videoPlayer"
                     x5-playsinline="true"
                     :playsinline="true"
                     :options="playerOptions">
<<<<<<< HEAD
          </video-player>
        </div>
        
        <!-- 直播间信息功能展示 -->
          <!-- <div class="banner" v-if="true">
          </div> -->
=======
            </video-player>
        <!-- </div> -->
        
        直播间信息功能展示
        <div class="roomShow">
          <div class="banner" v-if="false">
          </div>
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
          <div class="zbInfo">
            <p class="photo">
              <img :src="imgUrl+'PubImgSour/'+photoUrl+'.png'" alt="">
            </p>
            <p class="name">  
              <b>{{zbName}}</b><br>
              <i>{{populary}}人</i> 
            </p>
            <p class="guanzhuBtn" @click="guanZhu">
              {{isFollowText}}
            </p>
          </div>
          <div class="onlineUsers">
            <ul>
<<<<<<< HEAD
              <li v-for="(item,index) in onlineUser" :key="index">
                <img :src="imgUrl+'PubImgSour/'+item.photo+'.png'" alt="">
              </li>
=======
              <!-- <li v-for="(item,index) in onlineUser" :key="index">
                <img :src="'http://image.xcbobo.com/PubImgSour/'+item.photo+'.png'" alt="">
              </li> -->
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
            </ul>
          </div>
          <div class="xcId">
            <b>小草ID： {{zbid}}</b>
          </div>
          <div class="xcId jinBi">
            <b>阳光 {{zbsunTotal}}</b><br>
            <i>金币 {{zbjinbiTotal}}</i>
            <img src="" alt="" style="float:right;margin-left:32px">
          </div>

          <div class="gift">
            <ul class="giftTexiao" :style="giftTexiao" v-if="isGiftTexiao"
            v-for="(item,index) in giftGuangBoList" :key="index">
              <li class="userIcon">
                <img :src="imgUrl+'PubImgSour/'+item.list[0].photo+'.png'" alt="">
              </li>
              <li class="userName">
                <b>{{item.list[0].nick}}</b><br>
                <i>送出{{item.list[0].giftName}}</i>
              </li>
              <li class="giftIcon">
                <img :src="imgUrl+'/live/images/'+item.list[0].imgUrl+'.png'" alt="">
              </li>
              <li class="giftNum">
                x{{item.list[0].num}}
              </li>
            </ul>

          </div>
          <div class="danMu">
            <ul class="danmuTexiao" :style="danmuTexiao" v-if="isDanMuTexiao"
            v-for="(item,index) in danMuList" :key="index" >
              <li class="danmuIcon">
                <img :src="imgUrl+'PubImgSour/'+item.photo+'.png'" alt="">
              </li>
              <li class="danmuContent">
                <b>{{item.nickname}}</b><br>
                <i>{{item.context}}</i>
              </li>
            </ul>
          </div>
          <div class="jinChang">
              <div class="xinRen" :style="jinChangTexiao" v-if="shenFen == 1">
                <span>{{shenFenName}}</span>
                <b>{{ruchangNick}}</b>
                <i>进入直播间</i>
              </div>
              <div class="lv30" :style="jinChangTexiao" v-if="shenFen == 2">
                <span>{{shenFenName}}级</span>
                <b>{{ruchangNick}}</b>
                <i>进入直播间</i>
              </div>
              <div class="caiFu" :style="jinChangTexiao" v-if="shenFen == 3">
                <span>{{shenFenName}}</span>
                <b>{{ruchangNick}}</b>
                <i>进入直播间</i>
              </div>
              <div class="puTong" :style="jinChangTexiao" v-if="shenFen == 4">
                <span>
                  <img src="@/assets/img/zbRoom/1-20.png" alt="">
                  {{shenFenName}}
                </span>
                <b>{{ruchangNick}}</b>
                <i>进入直播间</i>
              </div>
          </div>
          <div id="speakBox" class="speak">
            <ul id="speakList">
              <li>
                <u style="color:#9dffff">
                  欢迎来到直播间，小草播播提倡健康直播环境，对直播内容24小时巡查。
                  任何传播违法、违规、低俗等不良信息将被封号。
                </u>
              </li>
              <li v-for="(item,index) in LiaotianList" :key="index">
                <i v-if="item.activeLevel>=1 && item.activeLevel<=20"
                style="background:rgb(106,201,169)">
                  <img src="@/assets/img/zbRoom/1-20.png"  alt="">
                  {{item.activeLevel}}</i>
                <i v-else-if="item.activeLevel>=21 && item.activeLevel<=40"
                style="background:rgb(73,215,110)">
                  <img src="@/assets/img/zbRoom/21-40.png"  alt="">
                  {{item.activeLevel}}</i>
                <i v-else-if="item.activeLevel>=41 && item.activeLevel<=60"
                style="background:rgb(98,183,218)">
                  <img src="@/assets/img/zbRoom/41-60.png"  alt="">
                  {{item.activeLevel}}</i>
                <i v-else-if="item.activeLevel>=61 && item.activeLevel<=80"
                style="background:rgb(173,148,255)">
                  <img src="@/assets/img/zbRoom/61-80.png"  alt="">
                  {{item.activeLevel}}</i>
                <i v-else-if="item.activeLevel>=81 && item.activeLevel<=100"
                style="background:rgb(253,175,63)">
                  <img src="@/assets/img/zbRoom/81-100.png"  alt="">
                  {{item.activeLevel}}</i>
                <i v-else-if="item.activeLevel>=101 && item.activeLevel<=120"
                style="background:rgb(250,89,89)">
                  <img src="@/assets/img/zbRoom/101-120.png"  alt="">
                  {{item.activeLevel}}</i>
                <b>{{item.nickname}}:</b>
                <u>{{item.context}}</u>
              </li>
            </ul>
          </div>
          <ul class="footbtnList" >
            <li id="marginR">
              <input type="text" placeholder="请输入聊天内容" 
              v-if="isLiaotian"
              @click="getLiaotian">
            </li>
            <li @click="gift">
              <img src="@/assets/img/zbRoom/礼物-@2x.png" alt="">
            </li>
            <li @click="sungift">
              <img src="@/assets/img/zbRoom/阳光礼物@2x.png" alt="">
            </li>
            <li @click="downLoad">
              <img src="@/assets/img/zbRoom/下载@2x.png" alt="">
            </li>
            <li @click="quit">
              <img src="@/assets/img/zbRoom/关闭@2x.png" alt="">
            </li>
          </ul>
          <div class="shuRuBox" v-if="!isLiaotian">
            <p style="width:10rem;height:10rem" @click="offLiaotian"></p>
            <div>
              <i @click="isDanmuSend" :style="DanmuBg">弹幕</i>
              <input id="LiaotianText" style="color:black;" type="text" placeholder="说点什么...">
              <span @click="sendLiaotian">发送</span>
            </div>
          </div>
        
        //金币礼物盒子
        <div class="giftList" v-if="giftShow">
            <p @click="unGift"></p>
            <div class='giftBox'>
              <div class="giftTitel">
                <p>礼物</p>
              </div>
              
              <giftList />
              <div class="giftBtn">
                <p @click="toJinBi">{{shengYuJinbi}} <i style="color:rgb(201,166,190)">金币&gt;</i> </p>
                <span>
                  <i @click="giftNuMDru">-</i>
                  <input id="giftNumId" type="text" value="1"  disabled="disabled" >
                  <i @click="giftNumAdd">+</i>
                </span>
                <span @click="sendGift">赠送</span>
              </div>
            </div>
        </div>
        //阳光礼物盒子
        <div class="giftList" v-if="sunShow">
            <p @click="unSungift"></p>
            <div class='giftBox'>
              <div class="sungiftTitel">
                <p>阳光可送免费礼物，主播、自己都升级</p>
              </div>
              <ul class="sungiftList">
                <li class="sunItem" v-for="(item,index) in sungiftList" :key="index" :data-type="item.type" :data-id="item.id" @click="xuanzhongSunGift($event,item.id,index,item.gift_type)">
                  <img :src="'http://www.xiuktv.com//'+item.icon" alt=""><br>
                  <b>{{item.name}}</b><br>
                  <i>{{item.num}}阳光</i>
                </li>
              </ul>
              <div class="sungiftBtn">
                <div class="sunInfo">
                  <b>{{shengYuSun}}</b> <i>阳光</i> 
                  <img src="" alt=""><br>
                  <p>距产出阳光：11分钟</p>
                </div>
                <span @click="sendSunGift">赠送</span>
              </div>
            </div>
        </div>
        //阳光掉落
        <div class="SunTexiao" v-show="isSunTexiao" @click="linQuSun">
          <img src="@/assets/img/zbRoom/阳光@2x.png" />
        </div>
        //小资料卡
        <div class="smallKa">

        </div>
        //支付页面
        <toPay v-show="isChongzhi" />
    </div>
</template>

<script>
<<<<<<< HEAD
import {strToArray,transform_u8,headPacking,typeConvert,untieHead} from "@/js/socket"; 
=======
import {strToArray} from "@/js/socket" 
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
import { videoPlayer } from 'vue-video-player';
import giftList from '@/components/giftList'
import toPay from '@/components/toPay'
import AppVue from '../App.vue';
import giftListVue from './giftList.vue';
import toPayVue from './toPay.vue';
export default {
  data () {
    return {
      ht:"",
      imgUrl:"http://www.xiuktv.com/",  
      zbroomInfo:null,            //当下主播直播间信息
<<<<<<< HEAD
      ws_zbroomInfo:null,         //socket直播间长连接信息
      LiaotianList:[],            //聊天广播数据列表
      onlineUser:[],              //在线用户列表
      zbjinbiTotal:0,             //主播累计金币值
      zbsunTotal:0,               //主播累计阳光值
      isFollow:null,              //用户主播关注关系
      isFollowText:"",            //按钮显示
      isSocketOnline:1,           //判断是否主动关闭socket
      photoUrl:this.zbroomInfo.photo,
=======
      onlineUser:[],
      photoUrl:this.zbroomInfo.headimgurl,
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
      zbName:this.zbroomInfo.zbname,
      populary:this.zbroomInfo.populary,
      zbid:this.zbroomInfo.zbid,
      time:this.zbroomInfo.time,  
      shenFenName:"",             //入场身份名称
      shenFen:0,                  //入场身份判断值
      jinChangTexiao:"",          //入场特效过渡样式
      giftShow:false,             //礼物显示控制
      isGiftTexiao:true,          //礼物广播显示控制
      giftGuangBoList:[],         //送礼广播列表
      sunShow:false,              //阳光显示控制
      sungiftList:[],
      giftTexiao:"margin-left:-10rem",
<<<<<<< HEAD
      isDanMuTexiao:true,         //控制弹幕显示
      danMuList:[],
      danmuTexiao:"margin-left: 10rem",
      isDanmu:false,              //是否发送弹幕
      DanmuBg:"background:rgb(233,228,234)",
      src: this.zbroomInfo.rtmbUrl, 
      isLiaotian:1,
      isChongzhi:false,           //控制充值页面的显示
      shengYuJinbi:0,             //用户剩余金币总数
      shengYuSun:0,               //用户剩余阳光总数
      isSunTexiao:false,
=======
      danmuTexiao:"margin-left:10rem",
      src: this.zbroomInfo.rtmbUrl, 
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
      playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '9:16', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: false, // 当true时，Video.js player
<<<<<<< HEAD
=======
        
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
        sources: [{
          type: "application/x-mpegURL",
          src: this.zbroomInfo.rtmbUrl, //'http://3286.liveplay.myqcloud.com/live/3286_81f3fd243bb377fda3b65fc5f1555ca4.m3u8',
          withCredentials: true,//"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
        }],
<<<<<<< HEAD
        poster: 'http://www.xiuktv.com/PubImgSour/'+this.zbroomInfo.photo+'.png', //你的封面地址
        width: "100%",
        height: "100%",
=======
        poster: "poster.jpg", //你的封面地址
        // width: "auto",
        // height: "auto",
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
       controlBar: {
         timeDivider: false,
         durationDisplay: false,
         remainingTimeDisplay: false,
         fullscreenToggle: false  //全屏按钮
       }
      },
    }
  },
  beforeCreate(){
<<<<<<< HEAD
    var that = this; 
=======
    
    let that = this;
    setTimeout(function(){
      that.giftTexiao = "margin-left:0.3rem";
      setTimeout(function(){
        that.giftTexiao = "margin-left:0.3rem;margin-top:-1.5rem"
      },3000)
    },2000)
    
    setInterval(function(){
      that.danmuTexiao = "margin-left:-10rem"
      if(that.danmuTexiao == "margin-left:-10rem"){
        // setTimeout(function(){
        //   that.danmuTexiao = "margin-left:10rem"
        // },7000)
      }
    },7000)
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
    
    //获取上级选中的主播直播间信息
    that.zbroomInfo = that.$route.params.zbroomInfo;
    console.log(that.$route.params.zbroomInfo);
    that.ht = document.body.clientHeight

    // 获取阳光礼物列表
    that.$http.get("/api/xcbb_web/business/mobile/dig/getBackPackItemList?uid=10000022&token=TVRBd01EQXdNakxDcDJ0ck4yb3pZbXhuTW1NeE5EazBPVEUwTURFNE1UWTJ3cWN4TlRReE56UXpNVEk0TlRFMQ==",{
      //uid=20264733&token=TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==
      // params:{}
    }).then(res=>{
      // consoresle.log(res.data)
      that.sungiftList = res.data.itemList
    }).catch(res=>{
      console.log(res)
    })

    //获取用户与主播关注关系
    that.$http.get("/api/xcbb_web/mobileFollow/findRelationUid",{
      params:{
        uid:10000022,
        fid:that.$route.params.zbroomInfo.zbid,
        token:'TVRBd01EQXdNakxDcDJ0ck4yb3pZbXhuTW1NeE5EazBPVEUwTURFNE1UWTJ3cWN4TlRReE56UXpNVEk0TlRFMQ=='
      }
    }).then(res=>{
      that.isFollow = res.data.isFollow
      if(res.data.isFollow){
        that.isFollowText = "已关注";
      }else{
        that.isFollowText = "关注"
      }
      // console.log(res);
    }).catch(res=>{
      console.log(res)
    })
    //请求直播间在线用户列表信息(后台暂时重写接口)
<<<<<<< HEAD
    let roomid = this.zbroomInfo.cid   //&roomid=389365
    let qs = require('qs');
    that.$http.post("/api/xcbb_web/business/mobile/guard/liveUserOnline?uid=10000022&token=TVRBd01EQXdNakxDcDJ0ck4yb3pZbXhuTW1NeE5EazBPVEUwTURFNE1UWTJ3cWN4TlRReE56UXpNVEk0TlRFMQ==&zid=20196339",
    //uid=20264733&token=TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==
      qs.stringify({ 
        'roomid': this.zbroomInfo.cid,
        "zid":this.zbroomInfo.zbid
        })
    ).then(res=>{
=======
    that.$http.post("/api/xcbb_web/business/mobile/guard/userOnline?uid=20264733&token=TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==&zid=20196339&roomid=395090",
      {

      }
    ).then(res=>{
      console.log(res.data.onLineDatas);
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
      let users = []; 
      for(let i=0;i<8;i++){
        users.push(res.data.onLineDatas[i])
      }
<<<<<<< HEAD
      that.onlineUser = users
    }).catch((res)=>{
      console.log(res)
    })

    // 获取直播间长连接ip & host
    function getRoom(){
      let sid = that.zbroomInfo.cid;
      let num = 35<<8 | 4;
      let head = headPacking(19,num,that.$route.params.zbroomInfo.cid,200,0);
      let sid1 = strToArray().StringToUint32Array(sid);
      let type = strToArray().StringToUint16Array(4);
      let roomArr = new Uint8Array(head.concat(sid1,type));
      let roomMsg = transform_u8(roomArr,0)
      // return roomMsg
      AppVue.data.ws2.send(roomMsg)
    }
    getRoom();
    AppVue.data.ws2.addEventListener("message",function(res){
      let reader = new FileReader();
        reader.readAsArrayBuffer(res.data);
        reader.onload = function(e) {
          let arrbuffer = e.target.result;
          //根据消息包头uri判断消息类型，然后进行消息包解析
          untieHead(arrbuffer,function(res){
          if(res.uri== 9220){
            let strlength = typeConvert(arrbuffer).u16(21);
            let strneirong = new Uint8Array(arrbuffer,23,strlength);
            let zbroomId = typeConvert(arrbuffer).u32(13);
            let zbroomIp = typeConvert(arrbuffer).Uint8ArrayToString(strneirong);
            let zbroomHost = typeConvert(arrbuffer).u16(43,2);
            
            // that.ws_zbroomInfo = {
            //   roomId:zbroomId,
            //   roomIp:zbroomIp,
            //   roomHost:zbroomHost
            // }
            let ws_zbroomIp = "wss://mq.xiuktv.com:10443/ws?host="+zbroomIp+"&port="+zbroomHost;
            // console.log(ws_zbroomIp)
            AppVue.data.ws_zbRoom = new WebSocket(ws_zbroomIp);
            AppVue.data.ws_zbRoom.onopen = function(){
              console.log("第三次长连接已接通")
              function ruchang(){
                let num = 32<<8 | 2;
                // console.log(num)
                let head = headPacking(33,num,that.$route.params.zbroomInfo.cid,200,0)
                let uid = strToArray().StringToUint32Array(10000022); //uid 用户id
                let guding1 = strToArray().StringToUint16Array("");  //固定值“”
                let sid =strToArray().StringToUint32Array(zbroomId); //房间id
                let guding2 = strToArray().StringToUint32Array(1);   //固定值1
                let guding3 = strToArray().StringToUint16Array("");  //固定值“”
                let guding4 = strToArray().StringToUint32Array(100);  //固定值“”
                let arr = head.concat(uid,guding1,sid,guding2,guding3,guding4);
                let ruchangArr = new Uint8Array(arr);
                let ruchangMsg = transform_u8(ruchangArr,0);
                return ruchangMsg;
              }
              AppVue.data.ws_zbRoom.send(ruchang());
              AppVue.data.ws_zbRoom.addEventListener("close",function(e){
                console.log(e)
              })
              AppVue.data.ws_zbRoom.addEventListener("message",function(res){
                let reader = new FileReader();
                reader.readAsArrayBuffer(res.data);
                  reader.onload = function(e){
                    let arrbuffer = e.target.result;
                    untieHead(arrbuffer,function(res){
                      let RuChangRsId = 243 << 8 | 2;   //入场答复消息id
                      let roomGuangBoId = 254<< 8 | 2;  //直播间业务回复及广播包  （聊天与送礼答复）
                      
                      // console.log(res,RuChangRsId)
                      //入场答复消息处理
                      if(res.uri == RuChangRsId && res.rescode == 200){
                        let isZip = typeConvert(arrbuffer).u8(13)
                        
                        if(isZip){
                          // console.log("你好")
                        }else{
                          // console.log("你好")
                          let strlength = typeConvert(arrbuffer).u32(14);
                          let strArr = new Uint8Array(arrbuffer,24);
                          let strData = typeConvert(arrbuffer).Uint8ArrayToString(strArr);
                          // console.log(strData)
                        }
                        //业务请求消息打包发送方法
                        function yeWurq(data){
                          let num1 = 1<<8 | 23;
                          let num2 = 253<<8 | 2;
                          let dataArr = strToArray().strarry(JSON.stringify(data));

                          let bufLength1 = 13+4+dataArr[0];
                          let dataLength1 = strToArray().StringToUint32Array(dataArr.length);
                          let bufLength1Arr = strToArray().StringToUint32Array(bufLength1)
                          let head1 = headPacking(bufLength1,num1,data.sid,200,0);
                          // let xiaoxiMsg1 = transform_u8(xiaoxiArr1,0)

                          let bufLength2 = 13+4+4+bufLength1
                          let head2 = headPacking(bufLength2,num2,data.sid,200,0)
                          let pi_type = strToArray().StringToUint32Array(6);
                          let dataLength2 = strToArray().StringToUint32Array(bufLength1);

                          let xiaoxiArr =new Uint8Array(head2.concat(pi_type,bufLength1Arr,head1,dataArr)); 
                          let xiaoxiMsg = transform_u8(xiaoxiArr)
                          AppVue.data.ws_zbRoom.send(xiaoxiMsg);
                        }
                        //第二次发送入场请求
                        let ruchangData  = {
                          cmd:"PEnterChannel",
                          uid:10000022,
                          sender:"今天开始做自",
                          uid_onmic:that.$route.params.zbroomInfo.zbid,
                          sid:that.$route.params.zbroomInfo.cid
                        };
                        yeWurq(ruchangData);

                        let SunJinbirqData = {
                          cmd:"PGetAnchorSun",
                          singerid:that.$route.params.zbroomInfo.zbid
                        }
                        yeWurq(SunJinbirqData);
                        // 发送周期性心跳
                        function xintiao(){
                              let num = 12<<8 | 4;
                              let uid = strToArray().StringToUint32Array(10000022);
                              let miao = strToArray().StringToUint32Array(Date.parse(new Date()));
                              let sid = strToArray().StringToUint32Array(zbroomId);
                              let xintiaoHead = headPacking(29,num,zbroomId,200,0);
                              let xintiaoArr = new Uint8Array(xintiaoHead.concat(uid,sid,miao,miao));
                              let xintiaoMsg = transform_u8(xintiaoArr,0);
                              AppVue.data.ws_zbRoom.send(xintiaoMsg)
                        }
                        // xintiao();
                        setInterval(()=>{
                          xintiao();
                        },15000)
                      }
=======
      console.log(users)
      that.onlineUser = users
    })

    //socket 消息序列化方法
    console.log();
    
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92

                      if(res.uri == roomGuangBoId){
                        let strlength = typeConvert(arrbuffer).u32(17);
                        let roomGuangBoArr = new Uint8Array(arrbuffer,42);
                        let roomGuangBoData = JSON.parse(typeConvert(arrbuffer).Uint8ArrayToString(roomGuangBoArr))
                        // console.log(rooroomGuangBoDatamGuangBoData)
                        if(roomGuangBoData.cmd == "RGetAnchorSun"){   //右上角金币阳光数值答复
                          // console.log(roomGuangBoData);
                          that.zbjinbiTotal = roomGuangBoData.moneyFinal;
                          that.zbsunTotal = roomGuangBoData.lightFinal;
                        }else if(roomGuangBoData.cmd == "BTextChat"){   //判断收到消息是聊天广播
                          that.LiaotianList.push(roomGuangBoData)
                          setTimeout(()=>{
                            let speakBox = document.getElementById("speakBox");
                            if(document.getElementById("speakList").offsetHeight){
                              let speakTop = document.getElementById("speakList").offsetHeight;
                              if(speakTop>speakBox.offsetHeight){
                                speakBox.scrollTop = speakTop - speakBox.offsetHeight;
                              }
                            }
                          },500)
                        }else if(roomGuangBoData.cmd == "REnterChannel"){   //判断收到消息是入场答复
                          // console.log(roomGuangBoData)
                          that.shengYuJinbi = roomGuangBoData.money
                          that.shengYuSun = roomGuangBoData.totalSun
                        }else if(roomGuangBoData.cmd == "BEnterChannel"){    //判断收到消息入场广播
                          that.ruchangNick = roomGuangBoData.nick;
                          // console.log(roomGuangBoData)
                          if(roomGuangBoData.new !=0){
                            that.shenFen = 1
                            if(roomGuangBoData.new ==1){
                              that.shenFenName = "新人"
                            }else if(roomGuangBoData.new ==2){
                              that.shenFenName = "新锐"
                            }
                          }else if(roomGuangBoData.richManEffect ==1){
                            that.shenFen = 3
                            that.shenFenName = roomGuangBoData.richManTitile
                          }else if(roomGuangBoData.activeLevel > 30){
                            that.shenFen = 2
                            that.shenFenName = roomGuangBoData.activeLevel
                          }else{
                            that.shenFen = 4
                            that.shenFenName = roomGuangBoData.activeLevel
                          }
                          setTimeout(()=>{
                            that.jinChangTexiao = "margin-left:0"
                            setTimeout(()=>{
                              that.shenFen = false;
                              that.jinChangTexiao = "margin-left:-150%"
                            },5000)
                          },500)
                        }else if(roomGuangBoData.cmd == "BSendGift"){   //判断收到礼物信息
                          // console.log(roomGuangBoData)
                          that.giftGuangBoList.push(roomGuangBoData)
                          that.isGiftTexiao = true;
                          setTimeout(function(){
                            that.giftTexiao = "margin-left:0.2rem";
                            setTimeout(function(){
                              that.giftTexiao = "margin-left:0.2rem;height:0rem;"
                              setTimeout(()=>{
                                that.giftTexiao = "margin-left:-10rem";
                                that.isGiftTexiao = false;
                                that.giftGuangBoList.length = 0
                              },1500)
                            },3000)
                          },500)
                        }else if(roomGuangBoData.cmd == "RSendGift"){   //发送礼物答复
                          that.shengYuJinbi = roomGuangBoData.money;
                          that.shengYuSun = roomGuangBoData.totalSun;
                        }else if(roomGuangBoData.cmd == "BSendBarrage"){
                          console.log(roomGuangBoData)
                          that.danMuList.push(roomGuangBoData)
                          that.LiaotianList.push(roomGuangBoData)
                          setTimeout(()=>{
                            let speakBox = document.getElementById("speakBox");
                            if(document.getElementById("speakList").offsetHeight){
                              let speakTop = document.getElementById("speakList").offsetHeight;
                              if(speakTop>speakBox.offsetHeight){
                                speakBox.scrollTop = speakTop - speakBox.offsetHeight;
                              }
                            }
                          },500)
                          that.isDanMuTexiao = true;
                          that.danmuTexiao = "margin-left:10rem"
                          setInterval(function(){
                            that.danmuTexiao = "margin-left:"+(-3.8*that.danMuList.length)+"rem"
                            
                          },500)
                          setTimeout(()=>{
                            that.isDanMuTexiao = false;
                            that.danMuList.length = 0;
                          },4500)
                        }else if(roomGuangBoData.cmd == "RSendBarrage"){
                          that.shengYuJinbi = roomGuangBoData.money;
                        }else if(roomGuangBoData.cmd == "BCreateSunshune"){
                          if(roomGuangBoData.sun_num>0){
                            that.isSunTexiao = true;
                            let sun = document.getElementsByClassName("SunTexiao");
                            setTimeout(()=>{
                              sun[0].style = "top:13rem;transform:rotate(-720deg)"
                            },200)
                          }
                        }


                      }

                    })
                  }
              })
            }
          }
        })
      }
    })
  },
  created(){
    
  },
  components: {
    videoPlayer,
    giftList,
    toPay
  },
  methods: {
    //点击关注
    guanZhu(){
      let that = this;
      if(that.isFollow == true){
        return
      }else{
        let qs = require("qs")
        that.$http.post("/api/xcbb_web/mobileFollow/addFollowme",
          qs.stringify({ 
            "uid": 10000022,
            "fid": that.$route.params.zbroomInfo.zbid,
            "sid": that.$route.params.zbroomInfo.cid,
            "token": "TVRBd01EQXdNakxDcDJ0ck4yb3pZbXhuTW1NeE5EazBPVEUwTURFNE1UWTJ3cWN4TlRReE56UXpNVEk0TlRFMQ==",
            "type": 1,
          })
        ).then(res=>{
          // console.log(res.data)
          if(res.data.success){
            alert("亲，关注成功！你已经是主播的粉丝了哦！")
            that.isFollowText = "已关注"
          }else{
            alert(res.data.error_code_desc)
          }
        })
      }
    },
    //获取聊天内容
    getLiaotian(){
      let that = this;
      that.isLiaotian = 0;
      setTimeout(()=>{
        document.getElementById("LiaotianText").focus();
      },200)
    },
    offLiaotian(){
      this.isLiaotian = 1;
    },
    isDanmuSend(){
      this.isDanmu = !this.isDanmu
      if(this.isDanmu){
        this.DanmuBg = "background:rgb(121,88,205)"
      }else{
        this.DanmuBg = "background:rgb(233,228,234)";
      }
    },
    sendLiaotian(){
      let that = this;
      let context = document.getElementById("LiaotianText").value;
      if(context==""){
          alert("聊天内容不能是空的哦~")
      }else{
        let Cmd = ""
        if(that.isDanmu){
          Cmd = "PSendBarrage"
        }else{
          Cmd = "PTextChat"
        }
        that.isLiaotian = 1;
        let liaoTianData ={
          cmd:Cmd,
          uid:10000022,
          sid:that.$route.params.zbroomInfo.cid,
          singerid:that.$route.params.zbroomInfo.zbid,
          context:context
        }
        that.yeWurq(liaoTianData);
        that.isDanmu = !that.isDanmu;
        that.DanmuBg = "background:rgb(233,228,234)";
      }
    },
    sendGift(){
      let that = this;
      AppVue.giftData.sid = that.$route.params.zbroomInfo.cid;
      AppVue.giftData.uid_onmic = that.$route.params.zbroomInfo.zbid;
      AppVue.giftData.receiver = that.$route.params.zbroomInfo.zbname
      AppVue.giftData.sendTime = (new Date()).valueOf();
      let giftNum = document.getElementById("giftNumId");
      AppVue.giftData.num = giftNum.value;
      that.yeWurq(AppVue.giftData)
      that.giftShow = !that.giftShow
    },
    giftNumAdd(){
      let giftNum = document.getElementById("giftNumId");
      giftNum.value++
    },
    giftNuMDru(){
      let giftNum = document.getElementById("giftNumId");
      if(giftNum.value>1){
        giftNum.value--
      }else{
        giftNum.value=1
      }
    },
    linQuSun(){
      let sunData = {
        cmd:"PGetSunValue",
        uid:10000022
      }
      this.yeWurq(sunData);
      let sun = document.getElementsByClassName("SunTexiao");
      sun[0].style = "top:15.5rem;right:2.6rem"
      setTimeout(()=>{
        this.isSunTexiao = false;
        sun[0].style = "top:4.5rem;right:0.266667rem;transform:none"
      },1100)
      
    },
    sendSunGift(){
      let that  = this;
      that.yeWurq(AppVue.giftData)
      that.sunShow = !that.sunShow
    },
    xuanzhongSunGift(e,id,index,type){
      let lis = document.getElementsByClassName("sunItem");
      for(let i = 0;i<lis.length;i++){
        lis[i].style = "background:none"
      }
      let that = this;
      AppVue.giftData.sid = that.$route.params.zbroomInfo.cid;
      AppVue.giftData.uid_onmic = that.$route.params.zbroomInfo.zbid;
      AppVue.giftData.receiver = that.$route.params.zbroomInfo.zbname
      AppVue.giftData.sendTime = (new Date()).valueOf();
      AppVue.giftData.id = e.currentTarget.getAttribute("data-id");
      AppVue.giftData.type = e.currentTarget.getAttribute("data-type");
      AppVue.giftData.num = 1
      e.currentTarget.style = "background: linear-gradient(to left, #fff, #fff) left top no-repeat, linear-gradient(to bottom, #fff, #fff) left top no-repeat, linear-gradient(to left, #fff, #fff) right top no-repeat,linear-gradient(to bottom, #fff, #fff) right top no-repeat, linear-gradient(to left, #fff, #fff) left bottom no-repeat,linear-gradient(to bottom, #fff, #fff) left bottom no-repeat,linear-gradient(to left, #fff, #fff) right bottom no-repeat,linear-gradient(to left, #fff, #fff) right bottom no-repeat;background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;"
    },
    //业务请求方法
    yeWurq(data){
      let num1 = 1<<8 | 23;
      let num2 = 253<<8 | 2;
      let dataArr = strToArray().strarry(JSON.stringify(data));

      let bufLength1 = 13+4+dataArr[0];
      let dataLength1 = strToArray().StringToUint32Array(dataArr.length);
      let bufLength1Arr = strToArray().StringToUint32Array(bufLength1)
      let head1 = headPacking(bufLength1,num1,data.sid,200,0);
      // let xiaoxiMsg1 = transform_u8(xiaoxiArr1,0)

      let bufLength2 = 13+4+4+bufLength1
      let head2 = headPacking(bufLength2,num2,data.sid,200,0)
      let pi_type = strToArray().StringToUint32Array(6);
      let dataLength2 = strToArray().StringToUint32Array(bufLength1);

      let xiaoxiArr =new Uint8Array(head2.concat(pi_type,bufLength1Arr,head1,dataArr)); 
      let xiaoxiMsg = transform_u8(xiaoxiArr)
      AppVue.data.ws_zbRoom.send(xiaoxiMsg);
    },
    //退出直播间
    quit(){
      this.isSocketOnline = 0;
      let liChangData = {
        cmd:"PLeaveChannel",
        uid:10000022,
        sid:this.$route.params.zbroomInfo.cid,
        singerid:this.$route.params.zbroomInfo.zbid,
      }
      this.yeWurq(liChangData);
      this.$router.replace({
        name:"liveList"
      })
    },
    //弹出礼品列表
    gift(){
      this.giftShow = !this.giftShow
      console.log(this.giftShow)
    },
    //隐藏礼品列表
    unGift(){
      if(this.giftShow == true){
        this.giftShow = !this.giftShow;
      }
    },
    //阳光礼品
    sungift(){
      this.sunShow = !this.sunShow;
    },
    //阳光礼品隐藏
    unSungift(){
      if(this.sunShow == true){
        this.sunShow = !this.sunShow
      }
    },
    //点击跳转充值金币页面
<<<<<<< HEAD
    toJinBi(){
      this.isChongzhi = true;
      let toPay = document.getElementsByClassName("toPay");
      toPay[0].style.display = "block"
=======
    jinBi(){
      this.$router.push({
        name:"toPay",
        params:{}
      })
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
    },
    //复制下载链接地址
    downLoad(){
      let herf  =  "www.baidu.com"
      this.$copyText(herf).then(function (e) {
          alert("下载地址复制成功，请前往浏览器下载！");
<<<<<<< HEAD
        }, function (e) {
          alert('下载链接复制失败！请重试')
=======
          console.log(e)
        }, function (e) {
          alert('下载链接复制失败！')
          console.log(e)
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
        })
    },
  },
}
</script>

<style scoped>
/*直播组件容器样式*/
 .zbRoom{
     position:absolute;
     z-index: 1000;
     width: 10rem;
     height: 100%;
     overflow: hidden;
     background: rgb(0,0,0);
 }
 .player{
   width: 10rem;
   height: 100%;
   position:relative;
   left:0;
   top: 0;
   background: black;
 }
 .roomShow{
   width: 10rem;
   height: 80%;
   position: absolute;
   left: 0;
<<<<<<< HEAD
   top: 0; /* 1334/75 */;
   overflow: hidden;
=======
   top: -16.3rem /* 1334/75 */;
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
 }
 /* .banner,.zbInfo,.onlineUsers{
   float: left;
 } */
 .banner{
   width: 10rem;
   height: .826667rem /* 62/75 */;
   background: url('../assets/img/horse.png') ;
   position: absolute; 
   top:0;
   left: 0;
 }
 .zbInfo{
   position: absolute;
   left: 0;
   top:1.1rem;
   width: 3.933333rem /* 295/75 */;
   height: .853333rem /* 64/75 */;
   background: rgba(0, 0, 0, 0.2);
   border-radius: .426667rem /* 32/75 */;
   margin-left: .266667rem /* 20/75 */;
   margin-top: .133333rem /* 10/75 */;
 }
 .photo,.name,.guanzhuBtn,.xcId,.kong,.gift,.danMu,.speak,.footbtnList{
   float: left
 }
 .phospeak.scrollTopto{
   width: .826667rem /* 62/75 */;
   height: .826667rem /* 62/75 */;
   border-radius: 50%;
   background: #fff;
   margin-left: .013333rem /* 1/75 */;
   margin-top:.013333rem /* 1/75 */;
   overflow: hidden; 
 }
 .guanzhuBtn{
   width: .826667rem /* 62/75 */;
   height: .426667rem /* 32/75 */;
   line-height: .4rem /* 30/75 */;
   border-radius: .213333rem /* 16/75 */;
   background:rgba(0, 0, 0, 0.2);
   margin-left: .013333rem /* 1/75 */;
   margin-top:.013333rem /* 1/75 */;
   overflow: hidden; 
   text-align: center;
   margin-top: .213333rem /* 16/75 */;
   box-sizing: border-box;
   border: #fff .026667rem /* 2/75 */ solid;
   color: #fff;
   font-size: .24rem /* 18/75 */;
 }
 .photo{
   width: .826667rem /* 62/75 */;
   height: .826667rem /* 62/75 */;
   overflow: hidden;
   border-radius: 50%;
 }
 .photo img{
   width: .8rem /* 60/75 */;
 }
 .name{
   width: 2.106667rem /* 158/75 */;
   height: .853333rem /* 64/75 */;
   line-height: .426667rem /* 32/75 */;
   margin-left: .133333rem /* 10/75 */;
 }
 .name b{
   font-size:.32rem /* 24/75 */;
   color:rgb(244,229,232);
 }
 .name i{
   color:#fff;
 }
 .onlineUsers{
<<<<<<< HEAD
   position: absolute;
   left: 4.266667rem /* 320/75 */;
   top: 1.2rem;
   width: 4.666667rem /* 350/75 */;
   height: .853333rem /* 64/75 */;
   /* background: rgba(0,0,0,0.2); */
   /* margin-top: .133333rem 10/75; */
=======
   width: 4.666667rem /* 350/75 */;
   height: .853333rem /* 64/75 */;
   /* background: rgba(0,0,0,0.2); */
   margin-top: .08rem /* 6/75 */;
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
   margin-left: .933333rem /* 70/75 */;
   overflow-x: scroll;
 }
 .onlineUsers ul{
   width:7.733333rem /* 580/75 */;
   height: .853333rem /* 64/75 */;
   overflow: scroll;
 }
 .onlineUsers ul li{
   float: left;
   width: .826667rem /* 62/75 */;
   height: .826667rem /* 62/75 */;
   margin-right: .133333rem /* 10/75 */;
   overflow: hidden;
   border-radius: 50%;
 }
 .onlineUsers ul li img{
   width: .826667rem /* 62/75 */;
   
 }
 .xcId{
   position: absolute;
   top:2.053333rem /* 154/75 */;
   left: 0;
   width:3.4rem;
   height: .72rem /* 54/75 */;
   line-height: .72rem /* 54/75 */;
   margin-left: .266667rem /* 20/75 */;
   margin-top: .16rem /* 12/75 */;
   background: rgba(0,0,0,0.2);
   border-radius: .36rem /* 27/75 */;
   color:#fff;
   text-align: center;   
 }
 .xcId b{
   font-weight: 500;
   font-size: .293333rem /* 22/75 */;
 }
 .xcId i{
   font-size: .266667rem /* 20/75 */;
 }
 .jinBi{
   left:3.533333rem /* 265/75 */;
   width: 2.293333rem /* 172/75 */;
   margin-left:3rem;
   padding-left:.4rem /* 30/75 */;
   line-height: .346667rem /* 26/75 */;
   text-align: left;
 }
 /* .kong{
   width: 10rem;
   height: 4.533333rem 340/75;
   height: 2.4rem 180/75  ;
 } */
 .gift{
   position: absolute;
   left: 0;
   top: 5.5rem;
   width:  4rem /* 300/75 */;
   height: 3.8rem /* 285/75 */;
   /* background: rgba(0, 0, 0, 0.2); */
<<<<<<< HEAD
   overflow: scroll;
=======
   overflow: hidden;
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
 }
 .gift .giftTexiao{
   width: 4rem /* 300/75 */;
   height: .866667rem /* 65/75 */;
   border-radius: .553333rem /* 41.5/75 */ 0 0 .553333rem /* 41.5/75 */;
   background: rgba(0, 0, 0, 0.2);
   margin-bottom: .2rem /* 15/75 */;
   transition: all 0.5s;
   overflow: hidden;
 }
 .gift .giftTexiao li{
   float: left;
   height: .866667rem /* 65/75 */;
 }
 .gift .giftTexiao .userIcon{
   width: .866667rem /* 65/75 */;
   border: pink solid .026667rem /* 2/75 */;
   box-sizing: border-box;
   border-radius: 5.62rem /* 421.5/75 */;
   background: #f90;
   overflow: hidden;
 }
 .gift .giftTexiao .userIcon img{
   width: .866667rem /* 65/75 */;
 }
 .gift .giftTexiao .userName{
   width: 1.733333rem /* 130/75 */;
   line-height:.466667rem /* 35/75 */;
 }
 .gift .giftTexiao .userName b{
   display: inline-block;
   color:white;
   font-size: .32rem /* 24/75 */;
   font-weight: 500;
   overflow: hidden;
 }
 .gift .giftTexiao .userName i{
   color:rgb(244,235,180);
   font-size: .266667rem /* 20/75 */;
 }
 .gift .giftTexiao .giftIcon{
   width:.8rem /* 60/75 */;
 }
 .gift .giftTexiao .giftNum{
   line-height: 1.133333rem /* 85/75 */;
   color:rgb(243,215,71);
   font-size: .32rem /* 24/75 */;
 }
 .danMu{
   position: absolute;
   left: 0;
   top: 9.733333rem /* 730/75 */;
   width: 10rem;
   height: .866667rem /* 65/75 */   ;
   margin-top:.266667rem /* 20/75 */;
   /* background:rgba(0, 0, 0, 0.2); */
   overflow: hidden;
 }
 .danMu .danmuTexiao{
   float: left;
   width: 3.8rem /* 285/75 */;
   height: .866667rem /* 65/75 */;
   border-radius: .433333rem /* 32.5/75 */;
   background: rgba(0, 0, 0, 0.2);
   transition: all 4s linear;
   
 }
 .danMu .danmuTexiao li{
   float: left;
   height: .866667rem /* 65/75 */;
   
 }
 .danMu .danmuTexiao .danmuIcon{
   width: .866667rem /* 65/75 */;
   height: .866667rem /* 65/75 */;
   border:.026667rem /* 2/75 */ solid pink;
   border-radius: .433333rem /* 32.5/75 */;
   box-sizing: border-box;
   background: #03ccbb;
   margin-right: .133333rem /* 10/75 */;
   overflow: hidden;
 }
 .danMu .danmuTexiao .danmuIcon img{
   width: .866667rem /* 65/75 */;
 }
 .danMu .danmuTexiao b,i{
   color: #fff;
 }
 .jinChang{
   position: absolute;
   left: 0;
   top: 10.866667rem /* 815/75 */;
   width: 10rem;
   height: .8rem /* 60/75 */;
   line-height: .8rem /* 60/75 */;
   margin-top:.266667rem /* 20/75 */;
   margin-left: .266667rem /* 20/75 */;
   /* background:rgba(0, 0, 0, 0.2); */
   overflow: hidden;
 }
 
 .jinChang div{
   margin-left: -150%;
   transition: all linear 1s;
 }
 .jinChang_active{
   margin-left: 0; 
 }
 .jinChang span{
   display: inline-block;
   margin: 0;
   height: 100%;
   width: 1.466667rem /* 110/75 */;
   text-align: center;
   color: #fff;
 }
 .jinChang b{
   color: rgb(248,253,199);
 }
 .jinChang .xinRen{
   background:no-repeat url("../assets/img/zbRoom/新人新锐背景@2x.png");
   background-size: 70% 100%;
 }
 .jinChang .xinRen span{
   background: url("../assets/img/zbRoom/新用户进场@2x.png");
   background-size: 100% 100%;
 }
 .jinChang .lv30{
   background:no-repeat url("../assets/img/zbRoom/30级活跃等级以上进场背景@2x.png");
   background-size: 70% 100%;
 }
 .jinChang .lv35 span{
   background: url("../assets/img/zbRoom/30级活跃等级以上进场@2x.png");
   background-size: 100% 100%;
 }
 .jinChang .caiFu{
   background:no-repeat url("../assets/img/zbRoom/子爵及子爵以上爵位背景@2x.png");
   background-size: 70% 100%;
 }
 .jinChang .caiFu span{
   background: url("../assets/img/zbRoom/子爵及以上爵位进场@2x.png");
   background-size: 100% 100%;
 }
 .jinChang .puTong{
   background:no-repeat url("../assets/img/zbRoom/普通用户进场背景@2x.png");
   background-size: 70% 100%;
 }
 .jinChang .puTong span{
   background:rgb(106,201,169);
   height: .4rem /* 30/75 */;
   line-height: .4rem /* 30/75 */;
   margin-top:.2rem /* 15/75 */;
   margin-left: .133333rem /* 10/75 */;
   margin-right: .133333rem /* 10/75 */;
   display: inline-block;
   width: .866667rem /* 65/75 */;
   background: rgb(109,195,166);
   border-radius: .08rem /* 6/75 */;
   text-align: center;
   color: #fff;
   font-size: .32rem /* 24/75 */;
 }
 .jinChang .puTong span img{
   height: .266667rem /* 20/75 */;
 }

 .speak{
   position: absolute;
   left: 0;
   top: 11.866667rem /* 890/75 */;  
   width: 7.386667rem /* 554/75 */;
   height: 3.666667rem /* 275/75 */;
   margin-top: .266667rem /* 20/75 */;
<<<<<<< HEAD
   overflow:scroll;
   /* background: rgba(0, 0, 0, 0.2); */
 }
 .speak ul{
   width: 100%;
   float: right;
 }
 .speak ul li{
   width: 7.12rem /* 534/75 */;
   /* height: .773333rem 58/75; */
   line-height: .773333rem /* 58/75 */;
   margin-left: .266667rem /* 20/75 */;
 }
 .speak ul li i,b,u{
   /* display: inline-block; */
   height: .4rem /* 30/75 */;
   line-height: .4rem /* 30/75 */;
   margin-right: .133333rem /* 10/75 */;
 }
 .speak ul li i{
   display: inline-block;
   width: .866667rem /* 65/75 */;
   background: rgb(109,195,166);
   border-radius: .08rem /* 6/75 */;
   text-align: center;
   color: #fff;
 }
 .speak ul li i img{
   height: .266667rem /* 20/75 */;
 }
 .speak ul li b{
   height: .4rem /* 30/75 */;
   font-size:.4rem /* 30/75 */;
   color: rgb(248,253,199);
   font-weight: 500;
 }
 .speak ul li u{
   color:#fff;
   font-size: .4rem /* 30/75 */;
=======
   /* background: rgba(0, 0, 0, 0.2); */
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
 }
 .footbtnList{
   position: absolute;
   left: 0;
   top: 15.733333rem /* 1180/75 */;
   width: 10rem;
   height: 1.066667rem /* 80/75 */;
   margin-top:.133333rem /* 10/75 */;
 }
 .footbtnList li{
   float: left;
   width: 1.066667rem /* 80/75 */;
   height: 1.066667rem /* 80/75 */;
   background: rgba(0, 0, 0, 0.2);
   margin-left: .266667rem /* 20/75 */;
   border-radius: .533333rem /* 40/75 */;
 }
 .footbtnList li>img{
   width: 1.066667rem /* 80/75 */;
 }
 #marginR{
   width: 4.133333rem /* 310/75 */;
   line-height: 1.066667rem /* 80/75 */;
   overflow: hidden;
   text-align: center;
 }
 #marginR>input{
   width: 3.6rem /* 270/75 */;
   height: .933333rem /* 70/75 */;
   background: rgba(0, 0, 0, 0);
   color: #fff;
   border:none;
 }

 .shuRuBox{
   position: fixed;
   bottom: 0;
   width: 10rem;
 }
 .shuRuBox div{
   background: #fff;
   height: 1.133333rem /*85/75*/;
 }
 .shuRuBox div i,input,span{
   display: block;
   float: left;
   height: .773333rem /* 58/75 */;
   line-height: .773333rem /* 58/75 */;
   border-radius: .386667rem /* 29/75 */;
   border:none;
   margin-top:.186667rem /* 14/75 */;
   margin-left: .266667rem /* 20/75 */;
 }
 .shuRuBox div i{
   width: .773333rem /* 58/75 */;
   height: .773333rem /* 58/75 */;
   line-height: .773333rem /* 58/75 */;
   border-radius: 50%;
   text-align: center;
 }
 .shuRuBox div input{
   width: 5.866667rem /* 440/75 */;
   height: .773333rem /* 58/75 */;
   line-height: .773333rem /* 58/75 */;
   background: rgb(233,228,234);
   padding-left:.386667rem /* 29/75 */; 
 }
 .shuRuBox div span{
   width: 1.706667rem /* 128/75 */;
   background: rgb(89,80,133);
   color:rgb(255,244,255);
   text-align: center;
 }
 .giftList{
   position: fixed;
   left: 0;
   bottom: 0;
   width: 10rem;
   height: 15.1rem;
 }
 .giftList p{
   height: 7.333333rem /* 700/75 */;
 }
 .giftList .giftBox{
   width: 10rem;
   height: 7.7rem;
   background: rgba(38,26,40,0.9);
   text-align: center;
   color:#fff;
 }
 .giftList .giftTitel{
   width: 10rem;
   height: .986667rem /* 74/75 */;
   border-bottom:.026667rem /* 2/75 */ solid rgb(64,51,69);
 }
 .giftList .giftTitel p{
   margin: 0 auto;
   width: 3.733333rem /* 280/75 */;
   height: .893333rem /* 67/75 */;
   line-height: .893333rem /* 67/75 */;
   text-align: center;
   font-size: .426667rem /* 32/75 */;
   border-bottom: .053333rem /* 4/75 */ solid rgb(180,213,232);
 }
 .giftBtn{
   height: 1.146667rem /* 86/75 */;
   color: #fff;
   border-top:.026667rem /* 2/75 */ solid rgb(60,52,73)
 }
 .giftBtn p,span{
   float: left;
   /* width: 1.333333rem 100/75; */
   margin-left:.266667rem /* 20/75 */;
   margin-top:.133333rem /* 10/75 */;
   height: .8rem /* 60/75 */;
   line-height: .8rem /* 60/75 */;
   font-size: .426667rem /* 32/75 */;
 }
 .giftBtn p{
   width: 4rem /* 300/75 */;
   margin-right: 1.066667rem /* 80/75 */;
   text-align: left;
 }
 .giftBtn span{
   width:2.066667rem /* 155/75 */;
   height: .8rem /* 60/75 */;
   background: rgb(107,97,157);
   border-radius: .4rem /* 30/75 */;
   color:rgb(242,224,240);
   text-align: center;
 }
 .giftBtn span i,input{
   float: left;
   display: inline-block;
   margin-top:.133333rem /* 10/75 */;
   height:  .533333rem /* 40/75 */;
   color: #fff;
 }
 .giftBtn span i{
   width: .533333rem /* 40/75 */;
   line-height:.533333rem /* 40/75 */;
   margin-left:.026667rem /* 2/75 */; 
   border:.026667rem /* 2/75 */ solid #fff;
   border-radius: 50%;
   text-align: center;
 }
 .giftBtn span input{
   outline: none;
   background: transparent;
   border: none;
   outline:medium;
   width: .533333rem /* 40/75 */;
   margin-top:.133333rem /* 10/75 */;
 }
 .giftList .sungiftTitel{
   width: 10rem;
   height: .986667rem /* 74/75 */;
   border-bottom:.026667rem /* 2/75 */ solid rgb(64,51,69);
 }
 .giftList .sungiftTitel p{
   width: 10rem;
   height: .986667rem /* 74/75 */;
   line-height: .986667rem /* 74/75 */;
   text-align: center;
   font-size: .426667rem /* 32/75 */;
   color:rgb(215,184,137);
 }
 .giftList .sungiftList{
   width: 10rem;
   height: 5.733333rem /* 430/75 */;
   border-bottom:.026667rem /* 2/75 */ solid rgb(64,51,69);
   overflow:scroll;
 }
 .giftList .sungiftList li{
    float:left;
    width: 24%;
    height: 2.533333rem /* 190/75 */;
    margin-left:0.8%;
    margin-bottom: 1%;
    overflow: hidden;
  }
  .giftList .sungiftList li img{
    width: .866667rem /* 65/75 */;
    margin-top:.333333rem /* 25/75 */;
  }
  .giftList .sungiftList li b{
    color:#fff;
  }
  .giftList .sungiftList li i{
    color:#fff;
    font-size: .186667rem /* 14/75 */;
  }
  .giftList .sungiftBtn{
    height: 1.146667rem /* 86/75 */;
    color: #fff;
    border-top:.026667rem /* 2/75 */ solid rgb(60,52,73)
  }
  .giftList .sungiftBtn .sunInfo,span{
    float: left;
    margin-left: .266667rem /* 20/75 */;
  }
  .giftList .sungiftBtn .sunInfo{
    text-align: left;
    line-height: .4rem /* 30/75 */;
    margin-right: 5.066667rem /* 380/75 */;
  }
  .giftList .sungiftBtn .sunInfo b{
    font-size: .4rem /* 30/75 */;
  }
  .giftList .sungiftBtn .sunInfo i{
    font-size: .266667rem /* 20/75 */;
    color: rgb(174,145,164);
  }
  .giftList .sungiftBtn .sunInfo p{
    font-size:.266667rem /* 20/75 */;
  }
  .giftList .sungiftBtn span{
    width: 1.666667rem /* 125/75 */;
    height: .8rem /* 60/75 */;
    line-height: .8rem /* 60/75 */;
    font-size:.426667rem /* 32/75 */;
    background: rgb(107,97,157);
    border-radius: .4rem /* 30/75 */;
    margin-top:0;
  }
  /* 阳光掉落特效 */
  .SunTexiao{
    position: absolute;
    right: .266667rem /* 20/75 */ ;
    top: 4.5rem;
    width:1.733333rem /* 130/75 */;
    height:1.733333rem /* 130/75 */;
    border-radius: 50%;
    overflow: hidden;
    transition: all linear 1s;
  }
  .SunTexiao img{
    width:1.733333rem /* 130/75 */;
  }
  /* 小资料卡 */
  .smallKa{
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>

