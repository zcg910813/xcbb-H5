<template>
    <div class="setInfo">
        <div class="infoItem">
            <div class="photo">
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <router-link to="">
                    <img src="@/assets/img/编辑ibt-拷贝@2x.png" alt="">
            </router-link>
        </div>
        <div class="nick">
            <b><这个杀手太猛></b>
            <i>斯嘉丽约翰逊</i>
            <span></span>
        </div>
        <div class="jinduTiao">
            <img class="jindubg" src="@/assets/img/进度条底@2x.png" alt="">
            <img class="jindu" src="@/assets/img/进度条紫色@2x.png" alt="">
            <span>1000/2000</span>
            <img class="xiangqing" src="@/assets/img/详情@2x.png" alt="">
            <img class="shenfen" src="@/assets/img/壕@2x.png" alt="">
        </div>
        <div class="xcId">小草ID:4685/5633</div>
        <div class="liuyan">这家伙很懒，什么也没留下</div>
        <ul class="redu">
            <li class="guanzhu borderRight">
                <b>8888</b><br>
                <i>关注</i>
            </li>
            <li class="fensi">
                <b>6666</b><br>
                <i>粉丝</i>
            </li>
        </ul>
        <div class="kongBox"></div>
        <div class="jinbi">
            <div>金币</div>
            <ul>
                <li>
                    <span>3000</span>
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

    }
</script>

<style scoped>
.setInfo{
    margin-top:1.2rem /* 90/75 */;
    width: 10rem;
    height: 15.4rem /* 1155/75 */;
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
}
.infoItem a{
    display: block;
    width: .506667rem /* 38/75 */;
    height: .506667rem /* 38/75 */;
    position: relative;
    left: 6.2rem /* 465/75 */;
}
.infoItem a img{
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
    width: 2.266667rem /* 170/75 */;
    color:#beaa78;
    font-size:.373333rem /* 28/75 */;
    margin-left:6.666667rem /* 500/75 */;
}
.jinbi ul li{
    height: 1.173333rem /* 88/75 */;
    line-height: 1.173333rem /* 88/75 */;
    float:left;
    margin-right: .133333rem /* 10/75 */;
}
.jinbi ul li img{
    width: .466667rem /* 35/75 */;
    height: .466667rem /* 35/75 */;
}
.jinbi ul li img.jiantou{
    width: .333333rem /* 25/75 */;
}
</style>