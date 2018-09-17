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

          </div>
          <div class="xcId">
            <b>小草ID： {{cid}}</b><br>
            <i>今日已播：{{time}}分</i>
          </div>
          <div class="xcId jinBi">
            <b>阳光 6000</b><br>
            <i>金币 300000</i>
            <img src="" alt="" style="float:right;margin-left:32px">
          </div>
          <div class="kong">

          </div>
          <div class="gift">
            送礼区域
          </div>
          <div class="danMu">
            弹幕区域
          </div>
          <div class="speak">
            常规聊天区域
          </div>
          <ul class="footbtnList">
            <li id="marginR">
              <input type="text" placeholder="请输入聊天内容">
            </li>
            <li>
              <img src="@/assets/img/zbRoom/礼物-@2x.png" alt="">
            </li>
            <li>
              <img src="@/assets/img/zbRoom/阳光礼物@2x.png" alt="">
            </li>
            <li>
              <img src="@/assets/img/zbRoom/下载@2x.png" alt="">
            </li>
            <li>
              <img src="@/assets/img/zbRoom/关闭@2x.png" alt="">
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';
export default {
  data () {
    return {
      zbroomInfo:null,
      photoUrl:this.zbroomInfo.headimgurl,
      zbName:this.zbroomInfo.zbname,
      populary:this.zbroomInfo.populary,
      cid:this.zbroomInfo.cid,
      time:this.zbroomInfo.time,
      playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '9:16', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "application/x-mpegURL",
          src: this.zbroomInfo.rtmbUrl, //'http://3286.liveplay.myqcloud.com/live/3286_81f3fd243bb377fda3b65fc5f1555ca4.m3u8',
          withCredentials: false//"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
        }],
        poster: "poster.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
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
    that.zbroomInfo = that.$route.params.zbroomInfo;
    console.log(that.zbroomInfo)
  },
  components: {
    videoPlayer
  },
  methods: {
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
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
   position:relative;
   left:0;
   top: 0;
 }
 .roomShow{
   width: 10rem;
   height: 100%;
   position: relative;
   left: 0;
   top: -17.786667rem /* 1334/75 */;
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
   line-height: .346667rem /* 26/75 */;
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
   margin-left:4rem /* 300/75 */;
 }
 .kong{
   width: 10rem;
   height: 4.533333rem /* 340/75 */;
 }
 .gift{
   width: 10rem;
   height: 2.666667rem /* 200/75 */;
   background: rgba(0, 0, 0, 0.2);
 }
 .danMu{
   width: 10rem;
   height: 1.066667rem /* 80/75 */;
   margin-top:.266667rem /* 20/75 */;
   background:rgba(0, 0, 0, 0.2);
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
</style>
