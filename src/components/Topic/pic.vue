<template>
    <div class="to_cen">
        <div class="swiper-container lb">
            <ul class="swiper-wrapper" >
                <li class="swiper-slide">
                    <img src='./hua/1.png'>
                </li>
                <li class="swiper-slide">
                    <img src='./hua/2.png'>
                </li>
                <li class="swiper-slide">
                    <img src='./hua/3.png'>
                </li>
                <li class="swiper-slide">
                    <img src='./hua/4.png'>
                </li>
                <li class="swiper-slide">
                    <img src='./hua/5.png'>
                </li>
            </ul>
            <div class="swiper-pagination"></div>
        </div>
        <div class="center">
            <ul class="biao">
                <li>
                    <img src="./hua/h_1.jpg">
                    <p>投票区</p>
                </li>
                <li>
                    <img src="./hua/h_2.jpg">
                    <p>问答区</p>
                </li>
                <li>
                    <img src="./hua/h_3.jpg">
                    <p>美食随手拍</p>
                </li>
                <li>
                    <img src="./hua/h_4.jpg">
                    <p>烘培区</p>
                </li>
                <li>
                    <img src="./hua/h_5.jpg">
                    <p>全部小组</p>
                </li>
            </ul>
            <div class="list" v-for="(item,index) in arr" :key="index">
                <div class="user">
                    <router-link :to='"/topic/user/"+item.ID' tag='div'>
                        <img :src="item.user_img" alt="">
                    </router-link>
                    <div>
                        <div>
                            {{item.user_name}}
                        </div>
                        <div>{{item.public_time}}</div>
                    </div>
                </div>
                <router-link tag='div' :to='"/topic/hua/"+item.ID'>
                    <div v-if='item.title!="none"' class="title">{{item.title}}</div>
                    <div class="title conten_tit">{{item.conten_tit}}</div>
                    <div class="img" >
                        <img v-if='i<3' v-for="(e,i) in item.imgarr" :key="i" :src="e" alt="">
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import Axios from "axios";
export default {
     data() {
        return {
            arr:[]
        };
    },
    mounted(){
        var mySwiper = new Swiper('.lb', {
            autoplay:true,
            loop:true,
            pagination: {
				el: '.swiper-pagination'
		    }
        },500)
    },
    created(){
        Axios.get('api/menu/topic/').then(res=>{
            this.arr = res.data
            this.arr.forEach(ele => {
                if (ele.imgarr.indexOf(";") == -1) {
                    var imgarr = ele.imgarr.split("&");
                    ele.imgarr = imgarr;
                } else if (ele.imgarr.indexOf("&")) {
                    var imgarr = ele.imgarr.split(";");
                    ele.imgarr = imgarr;
                }
            });
            console.log(this.arr);
        })
    }
}
</script>

<style scoped lang='scss'>
    .to_cen{
        width: 100%;
        overflow: auto;
        .lb{
            width: 100%;
            height: 5rem;
            img{
                width: 100%;
                height: 100%;
            }
            .swiper-pagination-bullets{
                text-align: right;
            }
        }
        .center{
            width: 100%;
            box-sizing: border-box;
            padding-left:calc(80rem / 67.5);
            .biao{
                width: 100%;
                display: flex;
                height: calc(266rem / 67.5);
                align-items: center;
                border-bottom: 1px solid #e9e7e7;
                li{
                    flex-grow: 1;
                    text-align: center;
                    padding-right: 3.1%;
                    img{
                        width: 50%;
                    }
                    p{
                        font-size: .5rem;
                    }
                }
            }
            .list {
                .img img{
                    width: 25%;
                    margin-right:1.5%;
                }
                padding: calc((54rem / 67.5)) 0;
                border-bottom: 1px solid #f2f2f2;
                .user {
                    display: flex;
                    img {
                        width: calc(108rem / 67.5);
                        height: calc(108rem / 67.5);
                        border-radius: 50%;
                    }
                    div {
                        margin-right: calc(25rem / 67.5);

                        div:nth-child(1) {
                            font-size: 0.67rem;
                            color: #000;
                        }
                        div:nth-child(2) {
                            font-size: 0.38rem;
                            color: #d1d1d1;
                        }
                    }
                }
                .title {
                    font-size: 0.6rem;
                    font-weight: bold;
                    margin: calc((22rem / 67.5)) 0;
                }
                .conten_tit {
                    color: #fb6683;
                }
            }
        }
    }
</style>