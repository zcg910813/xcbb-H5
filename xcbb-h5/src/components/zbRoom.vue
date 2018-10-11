<template>
    <div class="zbRoom">
        <!-- vue直播播放组件 -->
        <div class="player">
            <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions">
            </video-player>
        </div>
        <!-- 直播间信息功能展示 -->
        <div class="roomShow">
          <div class="banner">
          </div>
          <div class="zbInfo">
            <p class="photo">
              <img :src="photoUrl" alt="">
            </p>
            <p class="name">
              <b>{{zbName}}</b><br>
              <i>{{populary}}人</i>
            </p>
            <p class="guanzhuBtn">
              关注
            </p>
          </div>
          <div class="onlineUsers">
            在线用户列表
          </div>
          <div class="xcId">
            <b>小草ID： {{cid}}</b>
          </div>
          <div class="xcId jinBi">
            <b>阳光 6000</b><br>
            <i>金币 300000</i>
            <img src="" alt="" style="float:right;margin-left:32px">
          </div>
          <div class="kong">

          </div>
          <div class="gift">
            <ul class="giftTexiao" :style="giftTexiao">
              <li class="userIcon">
                <img src="" alt="">
              </li>
              <li class="userName">
                <b>最爱下午茶</b><br>
                <i>送出玫瑰</i>
              </li>
              <li class="giftIcon">
                <img src="" alt="">
              </li>
              <li class="giftNum">
                x2
              </li>
            </ul>

          </div>
          <div class="danMu">
            <ul class="danmuTexiao" :style="danmuTexiao">
              <li class="danmuIcon">
                <img src="" alt="">
              </li>
              <li class="danmuContent">
                <b>小豆芽</b><br>
                <i>主播是混血么</i>
              </li>
            </ul>
          </div>
          <div class="speak">
            常规聊天区域
          </div>
          <ul class="footbtnList">
            <li id="marginR">
              <input type="text" placeholder="请输入聊天内容">
            </li>
            <li @click="gift">
              <img src="@/assets/img/zbRoom/礼物-@2x.png" alt="">
            </li>
            <li @click="sungift">
              <img src="@/assets/img/zbRoom/阳光礼物@2x.png" alt="">
            </li>
            <li>
              <img src="@/assets/img/zbRoom/下载@2x.png" alt="">
            </li>
            <li @click="quit">
              <img src="@/assets/img/zbRoom/关闭@2x.png" alt="">
            </li>
          </ul>
        </div>
        <div class="giftList" v-if="giftShow">
            <p @click="unGift"></p>
            <div class='giftBox'>
              <div class="giftTitel">
                <p>礼物</p>
              </div>
              
              <gift-list />
              <div class="giftBtn">
                <p @click="jinBi">2 <i style="color:rgb(201,166,190)">金币&gt;</i> </p>
                <span>1</span>
                <span>赠送</span>
              </div>
            </div>
        </div>
        <div class="giftList" v-if="sunShow">
            <p @click="unSungift"></p>
            <div class='giftBox'>
              <div class="sungiftTitel">
                <p>阳光可送免费礼物，主播、自己都升级</p>
              </div>
              <ul class="sungiftList">
                <li v-for="(item,index) in sungiftList" :key="index">
                  <img :src="'http://www.xiuktv.com//'+item.icon" alt=""><br>
                  <b>{{item.name}}</b><br>
                  <i>{{item.num}}阳光</i>
                </li>
              </ul>
              <div class="sungiftBtn">
                <div class="sunInfo">
                  <b>950</b> <i>阳光</i> 
                  <img src="" alt=""><br>
                  <p>距产出阳光：11分钟</p>
                </div>
                <span>赠送</span>
              </div>
            </div>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';
import giftList from '@/components/giftList'
import toPay from '@/components/toPay'
export default {
  data () {
    return {
      zbroomInfo:null,            //当下主播直播间信息
      photoUrl:this.zbroomInfo.headimgurl,
      zbName:this.zbroomInfo.zbname,
      populary:this.zbroomInfo.populary,
      cid:this.zbroomInfo.cid,
      time:this.zbroomInfo.time,
      giftShow:false,             //礼物显示控制
      sunShow:false,              //阳光显示控制
      sungiftList:[],
      giftTexiao:"margin-left:-10rem",
      danmuTexiao:"margin-left:10rem",
      playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '9:16', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player
        sources: [{
          type: "application/x-mpegURL",
          src: this.zbroomInfo.rtmbUrl, //'http://3286.liveplay.myqcloud.com/live/3286_81f3fd243bb377fda3b65fc5f1555ca4.m3u8',
          withCredentials: false//"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
        }],
        poster: "poster.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
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
        setTimeout(function(){
          that.danmuTexiao = "margin-left:10rem"
        },7000)
      }
    },7000)
    
    //获取上级选中的主播直播间信息
    that.zbroomInfo = that.$route.params.zbroomInfo;
    console.log(that.zbroomInfo);
    that.$http.get("/api/xcbb_web/business/mobile/dig/getBackPackItemList?uid=20264733&token=TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==",{
      // params:{}
    }).then(res=>{
      console.log(res.data)
      that.sungiftList = res.data.itemList
    }).catch(res=>{
      console.log(res)
    })
    //请求直播间在线用户列表信息(后台暂时重写接口)
    // that.$http.post("/api/xcbb_web/business/mobile/guard/liveUserOnline?90000146&token=T1RBd01EQXhORGJDcDI1Nk4yRnZlbVJ1ZUhjeE5USXdNekkyTmpVeE9ESTR3cWN4TlRNME1UUTROVFU1TnpBeQ==&zid=10002311&roomid=100756",
    //   {

    //   }
    // ).then(res=>{
    //   console.log(res.data)
    // })

  },
  components: {
    videoPlayer,
    giftList,
    toPay
  },
  methods: {
    //退出直播间
    quit(){
      this.$router.replace({
        name:"liveList"
      })
    },
    //弹出礼品列表
    gift(){
      this.giftShow = !this.giftShow
    },
    //隐藏礼品列表
    unGift(){
      console.log(this.giftShow)
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
    jinBi(){
      this.$router.push({
        name:"toPay",
        params:{}
      })
    }
  },
  computed: {
    // player() {
    //   return this.$refs.videoPlayer.player
    // },
    // photoUrl(){
    //   return 'http://image.xcbobo.com/PubImgSour/'+this.zbroomInfo.photo+'.png'
    // }
  }
}
</script>

<style scoped>
/*直播组件容器样式*/
 .container {
    width: 10rem;
    height: 100%;
    background-color: #efefef;
    min-height: 100%;
  }
 .zbRoom{
     position:absolute;
     z-index: 1000;
     width: 10rem;
     height: 100%;
     overflow: hidden;
     background: #fff;
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
   height: 100%;
   position: relative;
   left: 0;
   top: -16.786667rem /* 1334/75 */;
 }
 .banner,.zbInfo,.onlineUsers{
   float: left;
 }
 .banner{
   width: 10rem;
   height: .826667rem /* 62/75 */;
   background: url('../assets/img/horse.png')  
 }
 .zbInfo{
   width: 3.933333rem /* 295/75 */;
   height: .853333rem /* 64/75 */;
   background: rgba(0, 0, 0, 0.2);
   border-radius: .426667rem /* 32/75 */;
   margin-left: .266667rem /* 20/75 */;
   margin-top: .08rem /* 6/75 */;
 }
 .photo,.name,.guanzhuBtn,.xcId,.kong,.gift,.danMu,.speak,.footbtnList{
   float: left
 }
 .photo{
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
   width: 5.466667rem /* 410/75 */;
   height: .853333rem /* 64/75 */;
   background: rgba(0,0,0,0.2);
   margin-top: .08rem /* 6/75 */;
   margin-left: .133333rem /* 10/75 */;
 }
 .xcId{
   width: 2.693333rem /* 202/75 */;
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
   width: 2.293333rem /* 172/75 */;
   margin-left:4rem /* 300/75 */;
   padding-left:.4rem /* 30/75 */;
   line-height: .346667rem /* 26/75 */;
   text-align: left;
 }
 .kong{
   width: 10rem;
   /* height: 4.533333rem 340/75; */
   height: 2.4rem /* 180/75 */  ;
 }
 .gift{
   width: 10rem;
   height: 3.8rem /* 285/75 */;
   background: rgba(0, 0, 0, 0.2);
   overflow: hidden;
 }
 .gift .giftTexiao{
   width: 5.733333rem /* 430/75 */;
   height: 1.133333rem /* 85/75 */;
   border-radius: .553333rem /* 41.5/75 */ 0 0 .553333rem /* 41.5/75 */;
   background: rgba(0, 0, 0, 0.2);
   margin-bottom: .2rem /* 15/75 */;
   transition: all 0.5s;
 }
 .gift .giftTexiao li{
   float: left;
   height: 1.133333rem /* 85/75 */;
 }
 .gift .giftTexiao .userIcon{
   width: 1.133333rem /* 85/75 */;
   border: pink solid .026667rem /* 2/75 */;
   box-sizing: border-box;
   border-radius: 5.62rem /* 421.5/75 */;
   background: #f90;
   
 }
 .gift .giftTexiao .userName{
   width: 2rem /* 150/75 */;
   line-height: .553333rem /* 41.5/75 */;
   margin-left:.2rem /* 15/75 */;

 }
 .gift .giftTexiao .userName b{
   color:white;
   font-size: .373333rem /* 28/75 */;
   font-weight: 500
 }
 .gift .giftTexiao .userName i{
   color:rgb(244,235,180);
 }
 .gift .giftTexiao .giftIcon{
   width: 1.133333rem /* 85/75 */;
 }
 .gift .giftTexiao .giftNum{
   line-height: 1.133333rem /* 85/75 */;
   color:rgb(243,215,71);
   font-size: .506667rem /* 38/75 */;
 }
 .danMu{
   width: 10rem;
   height: .866667rem /* 65/75 */   ;
   margin-top:.266667rem /* 20/75 */;
   background:rgba(0, 0, 0, 0.2);
   overflow: hidden;
 }
 .danMu .danmuTexiao{
   float: left;
   width: 3.8rem /* 285/75 */;
   height: .866667rem /* 65/75 */;
   border-radius: .433333rem /* 32.5/75 */;
   background: rgba(0, 0, 0, 0.2);
   transition: all 8s;
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
 }
 .danMu .danmuTexiao b,i{
   color: #fff;
 }
 .speak{
   width: 10rem;
   height: 4.933333rem /* 370/75 */;
   margin-top: .266667rem /* 20/75 */;
   background: rgba(0, 0, 0, 0.2);
 }
 .footbtnList{
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
 .giftList{
   position: fixed;
   left: 0;
   bottom: 0;
   width: 10rem;
   height: 90%;
 }
 .giftList p{
   height: 7.333333rem /* 700/75 */;
 }
 .giftList .giftBox{
   width: 10rem;
   height: 7.866667rem;
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
   margin-right: 1.6rem /* 120/75 */;
   text-align: left;
 }
 .giftBtn span{
   width: 1.666667rem /* 125/75 */;
   height: .8rem /* 60/75 */;
   background: rgb(107,97,157);
   border-radius: .4rem /* 30/75 */;
   color:rgb(242,224,240);
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
</style>

