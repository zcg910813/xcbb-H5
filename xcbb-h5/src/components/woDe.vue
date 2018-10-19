<template>
    <div class="setInfo">
        <div class="infoItem">
            <div class="photo">
                <div>
                    <img :src="'http://www.xiuktv.com/PubImgSour/'+userInfo.photo+'.png'" alt="">
                </div>
            </div>
            <span @click="userInfoChange">
                    <img src="@/assets/img/编辑ibt-拷贝@2x.png" alt="">
            </span>
        </div>
        <div class="nick">
            <b>&lt;{{userInfo.guild}}&gt;</b>
            <i>{{userInfo.nick}}</i>
            <span></span>
        </div>
        <div class="jinduTiao">
            <img class="jindubg" src="@/assets/img/进度条底@2x.png" alt="">
            <img class="jindu" src="@/assets/img/进度条紫色@2x.png" alt="">
            <span>1000/2000</span>
            <img class="xiangqing" src="@/assets/img/详情@2x.png" alt="">
            <img class="shenfen" src="@/assets/img/壕@2x.png" alt="">
        </div>
        <div class="xcId">小草ID:{{userInfo.uid}}</div>
        <div class="liuyan">{{userInfo.sign}}</div>
        <ul class="redu">
            <li class="guanzhu borderRight">
                <b>{{guanZhuNum}}</b><br>
                <i>关注</i>
            </li>
            <li class="fensi">
                <b>{{fenSiNum}}</b><br>
                <i>粉丝</i>
            </li>
        </ul>
        <div class="kongBox"></div>
        <div class="jinbi" >
            <div>金币</div>
            <ul>
                <li>
                    {{jinBiNum}}
                </li>
                <li>
                    <img src="@/assets/img/金币@2x.png" alt="">
                </li>
                <li>
                    <img class="jiantou" src="@/assets/img/右箭头@2x.png" alt="">
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default{
        data () {
            return {
                userInfo: null,
                guanZhuNum:null,
                fenSiNum:null,
                jinBiNum:null,
            }
        },
        created(){
            let that = this;
            //获取我的tab数据
            let qs = require("qs");
            that.$http.post("/api/xcbb_web/business/mobile/api/getinfo",
                qs.stringify({ 
                    'uid': 10000022,
                    "token":'TVRBd01EQXdNakxDcDJ0ck4yb3pZbXhuTW1NeE5EazBPVEUwTURFNE1UWTJ3cWN4TlRReE56UXpNVEk0TlRFMQ=='
                })
            ).then(res=>{
                that.userInfo = res.data.userInfo;
                that.guanZhuNum = res.data.followTotal;
                that.fenSiNum = res.data.useFinsTotal;
                that.jinBiNum = res.data.jinbiamount;
                if(res.data.userInfo.sign == ""){
                    that.userInfo.sign = "这家伙很懒，什么也没留下"
                }
                console.log(res.data);
            }).catch(res=>{
                console.log(res.data);
            })
        },
        methods:{
            //点击金币进入充值页面
            jinBi(){
            },
            userInfoChange(){
                this.$router.push({
                    name:"setInfo",
                    params:{
                        userInfo:this.userInfo
                    }
                })
            }
        }
    }
</script>

<style scoped>
.setInfo{
    margin-top:1.2rem /* 90/75 */;
    width: 10rem;
    background:  linear-gradient(rgb(36,29,55), rgb(24,21,39));
}
.infoItem{
   width: 10rem;
   height: 2.24rem /* 168/75 */;
   position: absolute;
}
.photo{
    width: 1.466667rem /* 110/75 */;
    height: 1.466667rem /* 110/75 */;
    line-height: 1.466667rem /* 110/75 */;
    margin: 0 auto;
    border:1px solid rgb(72,63,78);
    border-radius: 50%;
    position: relative;
    top:.506667rem /* 38/75 */;
    color:white;    
}
.photo div{
    width: 1.333333rem /* 100/75 */;
    height: 1.333333rem /* 100/75 */;
    border:.04rem /* 3/75 */ rgb(223,204,207) solid;
    box-sizing: border-box;
    border-radius: 50%;
    margin:.066667rem /* 5/75 */ auto;
    background: #f90;
    overflow: hidden;
}
.photo div img{
    width: 1.333333rem /* 100/75 */;
}
.infoItem span{
    display: block;
    width: .506667rem /* 38/75 */;
    height: .506667rem /* 38/75 */;
    position: relative;
    left: 6.2rem /* 465/75 */;
}
.infoItem span img{
    width: .506667rem /* 38/75 */;
}
.nick{
    padding-top:2.4rem /* 180/75 */;
    width: 10re;
    height: .666667rem /* 50/75 */;
    text-align: center;
    font-size: .4rem /* 30/75 */;
}
.nick b{
    color: #f0be5a;
}
.nick i{
    color:white;
}
.jinduTiao{
    width: 10rem;
    height: .533333rem /* 40/75 */;
    overflow: hidden;
}
.jinduTiao *{
    float: left;
}
.jinduTiao .shenfen{
    width: .533333rem /* 40/75 */;
    z-index: 1000;
    margin-left: -4.666667rem /* 350/75 */;
}
.jinduTiao .jindubg{
    width: 4rem /* 300/75 */;
    height: .266667rem /* 20/75 */;
    margin-top:.133333rem /* 10/75 */;
    margin-left:3.066667rem /* 230/75 */;  
}
.jinduTiao .jindu{
    width: 2.3rem /* 150/75 */;
    height: .266667rem /* 20/75 */;
    margin-left: -4rem /* 300/75 */;
    margin-top:.133333rem /* 10/75 */;
}
.jinduTiao .xiangqing{
    width: .533333rem /* 40/75 */;
}
.jinduTiao span{
    color:white;
    margin-left: -2.533333rem /* 190/75 */;
}
.xcId{
    width: 10rem;
    height: .6rem /* 45/75 */;
    line-height: .6rem /* 45/75 */;
    text-align: center;
    font-size: .373333rem /* 28/75 */;
    color:#b4b4ff;
}
.liuyan{
    width: 10rem;
    height: .6rem /* 45/75 */;
    line-height: .6rem /* 45/75 */;
    text-align: center;
    font-size:.373333rem /* 28/75 */;
    color: #beaa78;
}
.redu{
    width: 10rem;
    overflow: hidden;
    padding-bottom: .266667rem /* 20/75 */;
    border-bottom: rgb(35,29,46) solid .04rem /* 3/75 */; 
}
.redu .guanzhu,.fensi{
    float: left;
    width: 4.933333rem /* 370/75 */;
    text-align: center;
}
.redu b{
    font-size: .373333rem /* 28/75 */;
    color:#b4b4ff;
}
.redu i{
    font-size:.32rem /* 24/75 */;
    color:#beaa78;
}
.borderRight{
    border-right: 1px solid rgb(60,60,80);
}
.kongBox{
    width: 10rem;
    height: .533333rem /* 40/75 */;
    background: rgb(43,35,60);
    border-bottom:.04rem /* 3/75 */ solid rgb(35,29,46);
}

.jinbi{
    width: 10rem;
    height: 1.173333rem /* 88/75 */;
    line-height: 1.173333rem /* 88/75 */;
    border-bottom:.04rem /* 3/75 */ solid rgb(35,29,46) ;
    background:rgb(37,31,52);
    overflow: hidden;
}
.jinbi div,ul{
    float:left;
    height: 1.173333rem /* 88/75 */;
}
.jinbi div{
    width: .8rem /* 60/75 */;
    margin-left:.266667rem /* 20/75 */;
    font-size: .373333rem /* 28/75 */;
    color:#b4b4ff;
}
.jinbi ul{
    /* width: 2.266667rem 170/75; */
    color:#beaa78;
    font-size:.373333rem /* 28/75 */;
    margin-left:5.333333rem /* 400/75 */;
}
.jinbi ul li{
    height: 1.173333rem /* 88/75 */;
    line-height: 1.173333rem /* 88/75 */;
    float:left;
    margin-right: .133333rem;
}
.jinbi ul li img{
    width: .466667rem /* 35/75 */;
    height: .466667rem /* 35/75 */;
    margin-top:0.3rem;
}
.jinbi ul li img.jiantou{
    width: .333333rem /* 25/75 */;
    margin-top:0.3rem;
}
</style>