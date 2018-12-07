<template>
    <div class="liveList">
        <!-- <div class="banner">欢迎来到小草播播！</div> -->
        
        <ul class="listBox">
            <mySwiper></mySwiper>
            <li v-for="(item,index) in zhuboList" :key="index" @click="toZbroom(index)"> 
                <img :src="'http://www.xiuktv.com/PubImgSour/'+item.photo+'.png'" alt="">
                <span>{{item.zbname}}</span><br>
                <b>{{item.province}}</b><i>{{item.showdata}}人</i>
            </li>
            <!-- <li>
                <img src="@/assets/img/photo.png" alt="">
                <span>猫小七</span><br>
                <b>小七</b><i>5251人</i>
            </li>-->
        </ul>
    </div>    
</template>

<script>
    import {strToArray,transform_u8,headPacking,typeConvert,untieHead} from "@/js/socket"; 
    import mySwiper from '@/components/mySwiper';       
<<<<<<< HEAD
    import AppVue from '../App.vue';
=======
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
    export default{
        data(){
            return {
                zhuboList:null,
                tozbroomData:null,
                ws_zbroomInfo:null,
                ip:null,
                host:null,
            }
        },
        created() {
            let that = this;
            //  获取首页banner图片
            // that.$http.get("/api/xcbb_web/business/mobile/billing/list/goods",{
            //         params:{
            //             uid: "20264733",
            //             token: "TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==  ",
            //             platform: "1" 
            //         }
            //     }
            // )
            // .then(res=>{
            //     console.log(res)
            // })
            // .catch(res=>{
            //     console.log(res)
            // })
            
            //获取websocket连接地址
            // that.$http.post('/api/xcbb_web/weixin/miniProgram/liveRoomAddreeInfo?uid="20264733"&token="TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA=="',{
            //     // params:{
            //     //     uid: "20264733", 
            //     //     token: "TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==" ,   //"TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==  "
            //     // }
            // }).then(res=>{
            //     console.log(res)
            // })
            
            //获取用户信息
            let qs = require("qs");
            that.$http.post("/api/xcbb_web/business/mobile/api/getinfo",
                qs.stringify({ 
                    'uid': 10000022,
                    "token":'TVRBd01EQXdNakxDcDJ0ck4yb3pZbXhuTW1NeE5EazBPVEUwTURFNE1UWTJ3cWN4TlRReE56UXpNVEk0TlRFMQ=='
                })
            ).then(res=>{
                
                AppVue.userInfo = res.data.userInfo;
            }).catch(res=>{
                console.log(res.data);
            })

            let wsIp={
                "success": true,
                "hall": "59.110.125.134:30000",
                "websocket": "mq.xiuktv.com:10443"
            }
            //创建websocket长连接
            
            AppVue.data.ws = new WebSocket("wss://mq.xiuktv.com:10443/ws?host=59.110.125.134&port=30000")
            // console.log(AppVue.data.ws)
            AppVue.data.ws.onopen = function(){
                console.log("连接已成功");
<<<<<<< HEAD
                let head = headPacking(23,1,0,200,0)         //消息封包方法  其中消息体再方法本身内容里
                let a = strToArray().StringToUint32Array(200811040);
                let b = strToArray().StringToUint32Array(5295391642);
                let c = strToArray().StringToUint16Array(4);

                let msgArr =new Uint8Array(head.concat(a,b,c)); 
                let message =  transform_u8(msgArr,0);
                AppVue.data.ws.send(message);           //将封装好的消息发送给后台
            }
            AppVue.data.ws.addEventListener("message", function(res) {
                // console.log(res)
                var reader = new FileReader();
                reader.readAsArrayBuffer(res.data);
                reader.onload = function(e) {
                    var arrbuffer = e.target.result;
                    // untieHead(arrbuffer,function(res){
                    //     console.log(res)
                    // })
                   var strlength = typeConvert(arrbuffer).u16(13);
                   var strneirong = new Uint8Array(arrbuffer,15,strlength);
                //    console.log(strlength)
                   that.ip = typeConvert(arrbuffer).Uint8ArrayToString(strneirong)
                   that.host = typeConvert(arrbuffer).u16(33,2)
                    // console.log(typeConvert(arrbuffer))
                    // console.log(that.ip,that.host)  
                    //断开第一次长连接
                    if(that.ip){
                        AppVue.data.ws.close(); //关闭TCP连接
                    }
                    

                    //建立第二次长连接
                    let wsIp2 = "wss://mq.xiuktv.com:10443/ws?host="+that.ip+"&port="+that.host;
                    // console.log(wsIp2)
                    AppVue.data.ws2 = new WebSocket(wsIp2);
                    AppVue.data.ws2.onopen = function(){
                        console.log("第二次长连接已接通")
                        let num = 206 << 8 | 4
                        let head = headPacking(134,num,0,200,0);
                        let a = strToArray().StringToUint8Array(0); //是否匿名登录
                        let b = strToArray().str2array("");    //固定为“”
                        let c = strToArray().StringToUint32Array(100); //固定100
                        let d = strToArray().str2array("123");  //固定为“123”
                        let e = strToArray().str2array("");
                        let f = strToArray().StringToUint32Array(2);    //登录类型
                        let g = strToArray().StringToUint32Array(10000022);   //用户id  uid
                        let h = strToArray().str2array("");  //account用户账号
                        let i = strToArray().str2array("token");    //kind 类型
                        let j = strToArray().str2array("TVRBd01EQXdNakxDcDJ0ck4yb3pZbXhuTW1NeE5EazBPVEUwTURFNE1UWTJ3cWN4TlRReE56UXpNVEk0TlRFMQ==")
                        //以上token值
                        let loginArr = new Uint8Array(head.concat(a,b,c,d,e,f,g,h,i,j)) 
                        let loginMsg =  transform_u8(loginArr,0);
                        AppVue.data.ws2.send(loginMsg)
=======

                let message = headPacking(23,1,0,200,0)
                // let l = strToArray().StringToUint32Array(23)
                // let h = strToArray().StringToUint32Array(1);
                // let u = strToArray().StringToUint16Array(0);
                // let r = strToArray().StringToUint16Array(200);
                // let t =  strToArray().StringToUint8Array(0);
                // let a = strToArray().StringToUint32Array(200811040);
                // let b = strToArray().StringToUint32Array(5295391642);
                // let c = strToArray().StringToUint16Array(4);
                // let messageData = [];
                // let message1 =new Uint8Array(messageData.concat(l,h,u,r,t,a,b,c)) ;

                // console.log(message1);

                
                ws.send(message);
            }
            ws.addEventListener("message", function(res) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var arrbuffer = e.target.result;
                    untieHead(arrbuffer,function(res){
                        console.log(res)
                    })
                   var strlength = typeConvert(arrbuffer).u16(13);
                   var strneirong = new Uint8Array(arrbuffer,15,strlength);
                   console.log(strlength)
                   typeConvert(arrbuffer).Uint8ArrayToString(strneirong,function(res){
                        console.log(res)
                   })
                  console.log(typeConvert(arrbuffer).u16(33,2,function(res){
                    console.log(res)
                  }))                    
                    // console.log('affbufer',arrbuffer)
                }; 
                reader.readAsArrayBuffer(res.data);

                
                // // 处理数据
            });
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92

                        //发送周期性心跳
                        setInterval(()=>{
                            let num = 12<<8 | 4;
                            let uid = strToArray().StringToUint32Array(10000022);
                            let miao = strToArray().StringToUint32Array(Date.parse(new Date()));
                            let sid = strToArray().StringToUint32Array(0);
                            let xintiaoHead = headPacking(29,num,0,200,0);
                            let xintiaoArr = new Uint8Array(xintiaoHead.concat(uid,sid,miao,miao));
                            let xintiaoMsg = transform_u8(xintiaoArr,0);
                            AppVue.data.ws2.send(xintiaoMsg)
                        },15000)
                    }
                    AppVue.data.ws2.addEventListener("close",function(e){
                        // console.log("第二次长连接断开",e)
                    })
                    AppVue.data.ws2.addEventListener("message",function(res){
                        // console.log(res.data)
                        let reader = new FileReader();
                        reader.readAsArrayBuffer(res.data);
                        reader.onload = function(e) {
                            let arrbuffer = e.target.result;
                            //根据消息包头uri判断消息类型，然后进行消息包解析
                            untieHead(arrbuffer,function(res){
                                let DatingGuangboId = 400<<8 | 4
                                if(res.uri == DatingGuangboId){
                                   let strlength = typeConvert(arrbuffer).u32(17);
                                   let DatingGuangboArr = new Uint8Array(arrbuffer,21,strlength);
                                   let DatingGuangboData = JSON.parse(typeConvert(arrbuffer).Uint8ArrayToString(DatingGuangboArr))
                                   if(DatingGuangboData.cmd == "BBroadcast"){
                                       //此处做大厅广播消息处理
                                   }
                                }
                            })
                        }
                    }) 
                    AppVue.data.ws2.onerror = function(res){
                        console.log(res)
                    }  
                    
                }; 
                
            });
            
            
            //请求热门主播列表
<<<<<<< HEAD
            that.$http.post('/api/xcbb_web/mobileLive/tabHot?uid=10000022&token=TVRBd01EQXdNakxDcDJ0ck4yb3pZbXhuTW1NeE5EazBPVEUwTURFNE1UWTJ3cWN4TlRReE56UXpNVEk0TlRFMQ==&sex=1&province=beijing&type=3&packageName=release&version=1.4.11&channel=dev&clientType=2&page=1&pageSize=16',
                //uid=90000146  token=T1RBd01EQXhORGJDcDI1Nk4yRnZlbVJ1ZUhjeE5USXdNekkyTmpVeE9ESTR3cWN4TlRNME1UUTROVFU1TnpBeQ==
=======
            that.$http.post('../xcbb_web/mobileLive/searchRecentUserLiveResult?uid=90000146&token=T1RBd01EQXhORGJDcDI1Nk4yRnZlbVJ1ZUhjeE5USXdNekkyTmpVeE9ESTR3cWN4TlRNME1UUTROVFU1TnpBeQ==&sex=1&province=beijing&type=3&packageName=release&version=1.4.11&channel=dev&clientType=2&page=1&pageSize=16',
>>>>>>> cc1772d9085cc8e7f5fc83ebbc50e7914a393e92
                //"/api/xcbb_web/mobileLive/tabHot?packageName=release&clientType=2&token=T1RBd01EQXhORGJDcDI1Nk4yRnZlbVJ1ZUhjeE5USXdNekkyTmpVeE9ESTR3cWN4TlRNME1UUTROVFU1TnpBeQ==&version=1.4.11&uid=90000146&channel=dev&page=1&pageSize=20",
                {
                    // params:{
                    //     // uid: "20264733",     //20264733
                    //     // token:"TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==" ,   //"TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==  ",
                    //     // flag: 2 
                    // }
                }
            )
            .then(res=>{
                // console.log("热门主播列表=>")
                that.zhuboList = res.data.list;
                // console.log(res)
            })
            .catch(res=>{
                console.log(res)
            })
        },
        methods:{
            toZbroom(index){
                let that = this;    
                //点击事件触发后获取当前主播直播间
                let zbroomInfo = that.zhuboList[index];
                let sid = that.zhuboList[index].cid;
                //   console.log(that.zhuboList[i]);
                that.$router.push({
                    name:"zbRoom",
                    params:{
                        zbroomInfo: zbroomInfo,
                    }
                })
                //请求后台接口  获取wx.config所需参数
                // that.$http.post("",{        

                // }).then(res=>{
                //     console.log(res)
                // })
                // that.$wx.config({
                //     debug: true, // 开启调试模式,
                //     appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                //     timestamp: res.timestamp, // 必填，生成签名的时间戳
                //     nonceStr: res.nonceStr, // 必填，生成签名的随机串
                //     signature: res.signature,// 必填，签名，见附录1
                //     jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                // })
            },  
        },
        components:{mySwiper}
    }
</script>

<style lang="css" scoped>
.liveList{
    width: 10rem;
    background: rgb(19,19,47);
    margin-top:1.2rem /* 90/75 */;
}
.banner{
    width: 10rem;
    height: .733333rem /* 55/75 */;
    line-height: .733333rem /* 55/75 */;
    text-align: center;
    background: url('../assets/img/horse.png');
    margin-bottom : .2rem /* 15/75 */;
    color:aliceblue;
}
.listBox{
    width: 10rem;
    margin-top:.133333rem /* 10/75 */;
    padding-bottom: 1rem;
    height: 14.666667rem /* 1100/75 */;
    overflow: scroll;
}
.listBox li{
    float:left;
    width: 4.933333rem /* 370/75 */;
    height: 5.933333rem /* 445/75 */;
    color:white;
    margin-right: .066667rem /* 5/75 */;
    margin-bottom: .066667rem /* 5/75 */;
}
.listBox span{
    height: .533333rem /* 40/75 */;
    line-height: .533333rem /* 40/75 */;
    font-size: .466667rem /* 35/75 */;
    color:rgb(108,108,158);
}
.listBox li img{
    width: 4.933333rem /* 370/75 */;
}
.listBox li b,i{
    display: inline-block;
}
.listBox li i{
    margin-left: 2.933333rem /* 220/75 */;
}
    
</style>