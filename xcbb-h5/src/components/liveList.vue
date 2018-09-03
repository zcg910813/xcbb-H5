<template>
    <div class="liveList">
        <div class="banner">欢迎来到小草播播！</div>
        <mySwiper></mySwiper>
        <ul class="listBox">
            <li class="listItem">
                <img src="@/assets/img/photo.png" alt="">
                <b>小七</b><i>5251人</i>
            </li>
            <li class="listItem">
                <img src="@/assets/img/photo.png" alt="">
                <b>小七</b><i>5251人</i>
            </li>
            <li class="listItem">
                <img src="@/assets/img/photo.png" alt="">
                <b>小七</b><i>5251人</i>
            </li>
            <li class="listItem">
                <img src="@/assets/img/photo.png" alt="">
                <b>小七</b><i>5251人</i>
            </li>
            <li class="listItem">
                <img src="@/assets/img/photo.png" alt="">
                <b>小七</b><i>5251人</i>
            </li>
            <li class="listItem">
                <img src="@/assets/img/photo.png" alt="">
                <b>小七</b><i>5251人</i>
            </li>
            <li class="listItem">
                <img src="@/assets/img/photo.png" alt="">
                <b>小七</b><i>5251人</i>
            </li>
            <li class="listItem">
                <img src="@/assets/img/photo.png" alt="">
                <b>小七</b><i>5251人</i>
            </li>
        </ul>
    </div>    
</template>

<script>
    import mySwiper from '@/components/mySwiper'
    export default{
        data(){
            return {}
        },
        created() {
            
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
    height: 14.666667rem /* 1100/75 */;
    overflow: scroll;
}
.listBox li{
    float:left;
    width: 4.933333rem /* 370/75 */;
    height: 5.4rem /* 405/75 */;
    color:white;
    margin-right: .066667rem /* 5/75 */;
    margin-bottom: .066667rem /* 5/75 */;
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