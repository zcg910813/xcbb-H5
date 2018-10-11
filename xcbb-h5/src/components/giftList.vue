<template>
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
        <swiper-slide>
            <ul class="giftSwiper">
                <li v-for="(item,index) in giftList1" :key="index">
                    <img :src="'http://www.xiuktv.com/live/images/'+item.icon" alt=""><br>
                    <b>{{item.name}}</b><br>
                    <i>{{item.price}}金币</i>
                </li>
            </ul>
        </swiper-slide>
        <swiper-slide>
            <ul class="giftSwiper">
                <li v-for="(item,index) in giftList2" :key="index">
                    <img :src="'http://www.xiuktv.com//live/images/'+item.icon" alt=""><br>
                    <b>{{item.name}}</b><br>
                    <i>{{item.price}}金币</i>
                </li>
            </ul>
        </swiper-slide>
        <swiper-slide>
            <ul class="giftSwiper">
                <li v-for="(item,index) in giftList3" :key="index">
                    <img :src="'http://www.xiuktv.com//live/images/'+item.icon" alt=""><br>
                    <b>{{item.name}}</b><br>
                    <i>{{item.price}}金币</i>
                </li>
            </ul>
        </swiper-slide>
        <swiper-slide>
            <ul class="giftSwiper">
                <li v-for="(item,index) in giftList4" :key="index">
                    <img :src="'http://www.xiuktv.com//live/images/'+item.icon" alt=""><br>
                    <b>{{item.name}}</b><br>
                    <i>{{item.price}}金币</i>
                </li>
            </ul>
        </swiper-slide>
        <swiper-slide>
            <ul class="giftSwiper">
                <li v-for="(item,index) in giftList5" :key="index">
                    <img :src="'http://www.xiuktv.com//live/images/'+item.icon" alt=""><br>
                    <b>{{item.name}}</b><br>
                    <i>{{item.price}}金币</i>
                </li>
            </ul>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                giftList1:[],                //直播间礼品卡礼品列表
                giftList2:[],
                giftList3:[],
                giftList4:[],
                giftList5:[],
                swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: false,//自动轮播
                setWrapperSize :true,//说明：开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到
                loop:false,//、是否循环播放
                pagination:{el: '.swiper-pagination'}//添加分页器
                }
            }
        },
        created(){
            let that = this;
            //请求直播间礼品列表
            that.$http.get("/api/xcbb_web/common/room/tools",{
            params:{
                    uid: "20264733",     //20264733
                    token:"TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==" ,   //"TWpBeU5qUTNNelBDcHpOamF6aDJjWFF5TUdveE5UTXpOVE0yTXpJNE5qQXp3cWN4TlRNek5UTTJNekk0TmpZNA==  ",
                    category1: 1,
                    category2: 17
                            }          
            }).then(res=>{
                console.log(res.data.body)
                for(let i=0; i<res.data.body.length; i++){
                    if(i<8){
                        that.giftList1.push(res.data.body[i])
                    }  
                }
                for(let i=0; i<res.data.body.length; i++){
                    if(i>=8 && i<16){
                        that.giftList2.push(res.data.body[i])
                    }
                }
                for(let i=0; i<res.data.body.length; i++){
                    if(i>=16 && i<24){
                        that.giftList3.push(res.data.body[i])
                    }
                }
                for(let i=0; i<res.data.body.length; i++){
                    if(i>=24 && i<32){
                        that.giftList4.push(res.data.body[i])
                    }
                }
                for(let i=0; i<res.data.body.length; i++){
                   if(i>=32){
                        that.giftList5.push(res.data.body[i])
                    } 
                }
                // console.log(that.giftList1)
                // console.log(that.giftList2)
                // console.log(that.giftList3)
                // console.log(that.giftList4)
                // console.log(that.giftList5)
                //图片拼接方式  http://图片域名/live/images//3e53a293-b6ad-477c-8519-33e07345a1c0.png
            }).catch(res=>{
                console.log(res);
            })
        },
        components:{swiper, swiperSlide}
    }
</script>

<style scoped>
    .swiper-container {
        width: 10rem;
        height: 5.466667rem /* 410/75 */;
    }
    .swiper-container ul{
        width: 10rem;
        height: 5.733333rem /* 430/75 */;
    }
    .giftSwiper li{
        float:left;
        width: 24%;
        height: 2.533333rem /* 190/75 */;
        margin-left:0.8%;
        margin-bottom: 1%;
        /* background: #f90; */
        overflow: hidden;
    }
    .giftSwiper li img{
        width: .866667rem /* 65/75 */;
        margin-top:.333333rem /* 25/75 */;
    }
    .giftSwiper li b{
        color:#fff;
    }
    .giftSwiper li i{
        color:#fff;
        font-size: .186667rem /* 14/75 */;
    }
    .swiper-pagination-bullets{
        bottom: 0.2rem ;
    } 
</style>