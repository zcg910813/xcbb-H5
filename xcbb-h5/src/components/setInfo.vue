<template>
    <div class="setInfo">
        <div class="kong"></div>
        <ul >
            <li class="title">头像</li>
            <li id="touxiang"><img class="touxiang" src="" alt=""></li>
            <li><img class="jiantouR" src="@/assets/img/右箭头@2x.png" alt=""></li>    
        </ul>
        <ul class="marginT">
            <li class="title">昵称</li>
            <li class="info">弹吉他的程序猿</li>
            <li><img class="jiantouR" src="@/assets/img/右箭头@2x.png" alt=""></li>    
        </ul>
        <ul>
            <li class="title">用户ID</li>
            <li  class="info">978234923823498</li>    
        </ul>
        <ul>
            <li class="title">性别</li>
            <li class="info">男生</li>
            <li><img class="jiantouR" src="@/assets/img/右箭头@2x.png" alt=""></li>    
        </ul>
        <ul>
            <li class="title">年龄</li>
            <li class="info">26  处女座</li>
            <li><img class="jiantouR" src="@/assets/img/右箭头@2x.png" alt=""></li>    
        </ul>
        <ul>
            <li class="title">家乡</li>
            <li class="info">宁夏吴忠</li>
            <li><img class="jiantouR" src="@/assets/img/右箭头@2x.png" alt=""></li>    
        </ul>
        <ul>
            <li class="title">签名</li>
            <li class="info">我就是我，独一无二！</li>
            <li><img class="jiantouR" src="@/assets/img/右箭头@2x.png" alt=""></li>    
        </ul>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
.setInfo{
    /* margin-top:1.2rem 90/75; */
    width:10rem;
    height:100%;
    background: linear-gradient(to bottom,rgb(39,32,69), rgb(21,17,35));
    position: absolute;
    z-index:1000;
}
.kong{
    width: 10rem;
    height: .333333rem /* 25/75 */;
    border-bottom: .04rem /* 3/75 */ solid rgb(53,46,74);
}
#touxiang{
    width: .8rem /* 60/75 */;
    height: .8rem /* 60/75 */;
    border:.026667rem /* 2/75 */ solid rgba(98, 80, 103);
    border-radius: 50%;
    background:#f90;
    margin-left:5.333333rem /* 400/75 */;
    margin-top: .133333rem /* 10/75 */;
    margin-right: .2rem /* 15/75 */;
}
.setInfo ul{
    width: 10rem;
    height: 1.173333rem /* 88/75 */;
    background: rgb(32,26,54);
    border-bottom: .04rem /* 3/75 */ solid rgb(53,46,74);
    overflow: hidden;
}
.setInfo ul li{
    float:left;
    height: 1.173333rem /* 88/75 */;
    line-height: 1.173333rem /* 88/75 */;
}
.title{
    width: 2.773333rem /* 208/75 */;
    padding-left:.2rem /* 15/75 */; 
    font-size: .373333rem /* 28/75 */;
    color:#b4b4ff;
}
.info{
    width: 6.4rem /* 480/75 */;
    font-size: .373333rem /* 28/75 */;
    color:#beaa78;
}
.jiantouR{
    height: .506667rem /* 38/75 */;
    margin-top:.333333rem /* 25/75 */;
}
.marginT{
    margin-top:.266667rem /* 20/75 */;
    border-top:.04rem /* 3/75 */ solid rgb(53,46,74);
}
</style>
