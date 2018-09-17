<template>
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide> <img src="@/assets/img/notice1.jpg" alt=""> </swiper-slide>
    <swiper-slide> <img src="@/assets/img/notice2.jpg" alt=""></swiper-slide>
    <swiper-slide> <img src="@/assets/img/notice3.png" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: true,//自动轮播
                setWrapperSize :true,//说明：开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到
                loop:true,//、是否循环播放
                pagination:{el: '.swiper-pagination'}//添加分页器
                }
            }
        },
        created(){
            //请求首页banner接口
            let that = this;
            that.$http.get("/api/xcbb_web/mobile/api/headlines/findStartupOrBanner",{
                    params:{
                        uid: "20264733",     //20264733
                        token:"TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==" ,   //"TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==  ",
                        flag: 2 
                    }
                }
            )
            .then(res=>{
                // console.log("banner图=>")
                // console.log(res.data)
            })
            .catch(res=>{
                console.log(res)
            });
        },
        components:{swiper, swiperSlide}
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        height: 2rem /* 150/75 */;
    }
    .swiper-container img{
        width: 10rem /* 750/75 */;
    }
</style>