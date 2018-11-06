<template>
    <router-link :to="'/list/'+arr.ID"  tag='div' id="tu">
        <p class="p1">美食天下</p>
        <div class="conten">
            <div class="swiper-container lb1">
                <ul v-if="this.shu!=1" class="swiper-wrapper" >                       
                    <li class="swiper-slide a" v-for="(liimg,liname,k) in list_img" :key="k">
                        <img :src='liimg'>
                    </li>
                </ul>
                <ul v-else class="swiper-wrapper" >                       
                    <li class="swiper-slide"  v-for="(item,key) in imgarr" :key="key.id">
                        <img  :src='item'>
                    </li>
                </ul>
                
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div>
            <nav v-if="this.shu!=1">/{{this.leng}}</nav>
            <nav v-else >/{{this.length}}</nav>
        </div>
        <p class="p2">{{this.arr.sub_tit}}</p>
    </router-link>
</template>

<script>
import Swiper from 'swiper';
import Axios from 'axios'
export default {
    data() {
        return {
            arr:{},
            imgarr:{},
            list_img:{},
            length:'',
            leng:'',
            shu:'',
            key:''
        };
    },
    mounted(){
        var id = this.$route.params.id
        var shu = this.$route.params.shu
        this.shu = shu
        console.log(this.shu)
       Axios.get('/api/menu/menuList').then(res=>
            res.data.forEach(ele => {
                if (id == ele.ID) {
                    this.arr = ele;
                    console.log(this.arr)
                    //几张图片
                    var a = ele.imgarr.split(';');
                    a.forEach((k,i)=>{
                        if(k==''){
                            a.splice(i,1)
                            i = i-1;
                        }
                    })
                    this.imgarr = a
                    this.length = a.length
                    console.log(this.length)
                    var list = ele.list_order.split('&');
                    this.leng = list.length
                    console.log(this.leng)
                    list.map((i,a)=>{
                        // this.materia.push(i.split('='))
                        var g = i.split('=')
                        for(var z = 0; z<g.length; z++){
                            this.list_img[g[0]]=g[1]
                        }
                    })
                    console.log(this.list_img)
                }
            }
        ) 
    )},
    updated(){
        var mySwiper = new Swiper('.lb1', {
            autoplay:false,
        },500)
    }
}
</script>

<style scoped lang='scss'>
#tu{
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    .conten{
        width: 100%;
        flex: 1;
    }
    
    .p1{
        font-size: 1rem;
        text-align: right;
        color: white;
        box-sizing: border-box;
        height: 10.5rem;
        line-height: 3.5rem;
        padding: 0 5%;
    }
    nav{
        color: rgb(160, 159, 159);
        box-sizing: border-box;
        height: 1rem;
        line-height: 1rem;
        padding: 0 5%;
        font-size: .2rem;
    }
    .p2{
        font-size: .8rem;
        color: white;
        box-sizing: border-box;
        height: 4.5rem;
        line-height: 1.5rem;
        padding: 0 5%;
        letter-spacing: 3px;
    }
    .lb1{
        width: 100%;
        li{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
