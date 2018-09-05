<template>
    <div class="toPay">
        <div class="userInfo">
            <p>
                <img src="" alt="">
            </p>
            <span>百里龙吟</span><br>
            <i>余额：</i>
            <b> 197金币</b>
        </div>
        <div class="jiageList">
            <p>选择充值金额：</p>
            <ul>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
                <li>
                    <b>200金币</b><br>
                    <i>2元</i>
                </li>
            </ul>
        </div>
        <div class="payBtn">
            <button>充值</button><br>
            <span>如有问题，请联系QQ客服：3061680386</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.toPay{
    position: absolute;
    z-index: 1000;
    width: 10rem;
    height: 100%;
    background: linear-gradient(to bottom,rgb(39,32,69), rgb(21,17,35));  
}
.userInfo{
    width: 10rem;
    height: 3.6rem /* 270/75 */;
    margin-bottom: .266667rem /* 20/75 */;
    background: rgb(34,28,52);
    border-bottom:rgb(50,45,65) .04rem /* 3/75 */ solid;
    padding-top:.4rem ;
    margin-bottom: .266667rem /* 20/75 */;
    text-align: center;
    font-size: .426667rem /* 32/75 */
}
.userInfo p{
    width: 1.4rem /* 105/75 */;
    height: 1.4rem /* 105/75 */;
    border-radius: 50%;
    background: #f90;
    margin: 0 auto;
    margin-bottom: .2rem /* 15/75 */;
}
.userInfo span{
    display: inline-block;
    color:white;
    margin-bottom:.266667rem /* 20/75 */; 
}
.userInfo b,i{
    font-size: .4rem /* 30/75 */;

}
.userInfo i{
    color:  rgb(147,129,122);
}
.userInfo b{
    color:rgb(122,158,202);
}
.jiageList{
    width: 10rem;
    backgroud:rgb(34,28,52);
    border-top:rgb(50,45,65) .04rem /* 3/75 */ solid;
}
.jiageList p{
    width: 8rem;
    height: 1.066667rem /* 80/75 */;
    line-height: 1.066667rem /* 80/75 */;
    padding-left: .266667rem /* 20/75 */; 
    font-size: .426667rem /* 32/75 */;
    color:rgb(108,108,158);
}
.jiageList ul{
    width: 10rem;
    height: 9.6rem /* 720/75 */;
    overflow: scroll;
}
.jiageList ul li{
    float: left;
    width: 4.6rem /* 345/75 */;
    height: 1.866667rem /* 140/75 */;
    box-sizing: border-box;
    border:.026667rem /* 2/75 */ solid rgb(89,88,130);
    border-radius: .133333rem /* 10/75 */;
    margin-left:.266667rem /* 20/75 */;
    margin-bottom: .266667rem /* 20/75 */;
    text-align: center;
    color:  rgb(147,129,122);
    font-size: .4rem /* 30/75 */;
}
.jiageList ul li b,i{
    display: inline-block;
    margin-top:.266667rem /* 20/75 */;
}
.payBtn{
    width: 10rem;
    height: 2.266667rem /* 170/75 */;
    background: rgb(24, 19,38);
    position: fixed;
    bottom: 0;
    text-align: center; 
}
.payBtn button,span{
    display: inline-block;
}
.payBtn button{
    margin: 0;
    padding: 0;
    margin-top:.266667rem /* 20/75 */;
    width: 7.466667rem /* 560/75 */;
    height: 1.133333rem /* 85/75 */;
    line-height: 1.133333rem /* 85/75 */;
    border: 0;
    border-radius: .533333rem /* 40/75 */ ;
    background: rgb(112,103,163);
    outline: none;
    font-size:.466667rem /* 35/75 */;
    color:rgb(238,219,233);
}
.payBtn span{
    width: 10rem;
    height: .733333rem /* 55/75 */;
    line-height: .733333rem /* 55/75 */;
    text-align: center;
    font-size:.4rem /* 30/75 */;
    color:rgb(147,129,122);
}
</style>
