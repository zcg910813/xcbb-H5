<template>
    <div class="liveList">
        <!-- <div class="banner">欢迎来到小草播播！</div> -->
        
        <ul class="listBox">
            <mySwiper></mySwiper>
            <li v-for="(item,index) in zhuboList" :key="index" @click="toZbroom(index)"> 
                <img :src="'http://image.xcbobo.com/PubImgSour/'+item.photo+'.png'" alt="">
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
    export default{
        data(){
            return {
                zhuboList:null,
                tozbroomData:null
            }
        },
        created() {
            let that = this;
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

            let wsIp={
                "success": true,
                "hall": "59.110.125.134:30000",
                "websocket": "mq.xiuktv.com:10443"
            }
            //创建websocket长连接
            let ws = new WebSocket("wss://mq.xiuktv.com:10443/ws?host=59.110.125.134&port=30000")
            ws.onopen = function(){
                console.log("连接已成功");

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

            //请求热门主播列表
            that.$http.post('../xcbb_web/mobileLive/searchRecentUserLiveResult?uid=90000146&token=T1RBd01EQXhORGJDcDI1Nk4yRnZlbVJ1ZUhjeE5USXdNekkyTmpVeE9ESTR3cWN4TlRNME1UUTROVFU1TnpBeQ==&sex=1&province=beijing&type=3&packageName=release&version=1.4.11&channel=dev&clientType=2&page=1&pageSize=16',
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
            //   console.log(index)
            //   console.log(that.zhuboList)
            //点击事件触发后获取当前主播直播间
              for(let i=0;i<that.zhuboList.length;i++){
                  if(index==i){
                    //   console.log(that.zhuboList[i]);
                      var zbroomInfo = that.zhuboList[i];
                  }
              }
              that.$router.push({
                    name:"zbRoom",
                    params:{
                      zbroomInfo: zbroomInfo 
                    }
                })
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