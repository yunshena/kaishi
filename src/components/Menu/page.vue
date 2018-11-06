<template>
        <div class="s_box">
             <scroller :on-infinite="infinite"  :on-refresh = "refresh"  ref="my_scroller">
                 <div class="inp">
                <img src="./shou/inp_03.jpg" alt="">
                <router-link tag="div" to="/inp" class="search"><input type="text" v-on:input="search" placeholder="搜索菜谱、食材或菜单..."></router-link>
                <button>今日签到</button>
            </div>
            <div class="swiper-container lb1">
                <ul class="swiper-wrapper" >
                    <router-link :to="'/zhuan/'+ item.ID" tag="li" class="swiper-slide" v-for="(item,key) in arr" :key="key.id">
                        <img :src='item.img_src'>
                    </router-link>
                </ul>
                <div class="swiper-pagination"></div>
            </div>
            <ul class="p_kind">
                <li>
                    <img src="./shou/s1.jpg">
                    <div>菜谱分类</div>
                </li>
                <li>
                    <img src="./shou/s2.jpg">
                    <div>食材大全</div>
                </li>
                <li>
                    <img src="./shou/s3.jpg">
                    <div>专题</div>
                </li>
                <li>
                    <img src="./shou/s4.jpg">
                    <div>菜单</div>
                </li>
                <li>
                    <img src="./shou/s5.jpg">
                    <div>珍选</div>
                </li>
                <li>
                    <img src="./shou/s6.jpg">
                    <div>一周热门</div>
                </li>
                <li>
                    <img src="./shou/s7.jpg">
                    <div>人气菜肴</div>
                </li>
                <li>
                    <img src="./shou/s8.jpg">
                    <div>家常菜</div>
                </li>
                <li>
                    <img src="./shou/s9.jpg">
                    <div>食疗养生</div>
                </li>
                <li>
                    <img src="./shou/s10.jpg">
                    <div>福利社</div>
                </li>
            </ul>
            <div>
                <div class=""></div>
                <div></div>
            </div>
            
            <div class="p_aft" ref="Myiscroll">
                <ul class="p_after">
                    <li>
                        <dl>
                            <dd>
                                <img src="./shou/ss1.jpg" alt="">
                            </dd>
                            <dt>
                                <ul>
                                    <li>
                                        <img src="./shou/ss2.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="./shou/ss3.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="./shou/ss4.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="./shou/ss5.jpg" alt="">
                                    </li>
                                </ul>
                            </dt>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>
                                <img src="./shou/ss1.jpg" alt="">
                            </dd>
                            <dt>
                                <ul>
                                    <li>
                                        <img src="./shou/ss2.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="./shou/ss3.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="./shou/ss4.jpg" alt="">
                                    </li>
                                    <li>
                                        <img src="./shou/ss5.jpg" alt="">
                                    </li>
                                </ul>
                            </dt>
                        </dl>
                    </li>
                </ul>
            </div>
          
            <h5 class="adver">无双三国OL</h5>
            <div class="adver_img">
                <img src="./shou/lb2.jpg" alt="">
            </div>
            <div class="adver_text">
                <div>广告 · 下载APP</div>
            </div>
         
            <h5 class="adver">【视频菜谱】月饼的做法大全</h5>
            <div class="shou_video">
                <img src="./shou/ss7.jpg" alt="">
                <img src="./shou/ss8.jpg" alt="">
                <img src="./shou/ss9.jpg" alt="">
            </div>
            <div class="adver_text">
                <div>专题</div>
            </div>
            <router-link  tag="div" :to="'/list/'+i.ID" class="moods" v-for="(i,k) in date" :key="k">
                
                <div v-if="i.list_name == 'nothing'">
                    <h5 class="daadver">{{i.sub_tit}}</h5>
                    <img class="da" :src="i.imgarr" alt="">
                    <div class="daadver_text">
                        <div>{{i.menu}}</div>
                        <p class="dian">...</p>
                    </div>
                </div>
                <div v-else class="mood">
                    <div class="moods_l">
                        <img :src="i.imgarr" alt="">
                    </div>
                    <div class="moods_r">
                        <h5>{{i.sub_tit}}</h5>
                        <p class="list">{{i.list_name}}</p>
                        <p class="types">{{i.menu}}</p>
                        <p class="dian">...</p>
                    </div>
                </div>
            </router-link>
            </scroller>
        </div>
</template>
<script>
import Swiper from 'swiper';
import Axios from "axios";
import BScroll from 'better-scroll';
export default {
    data() {
        return {
            arr:[],
            date:[],
            inpVal:'',
            content:[],
            infinitee:'',
            iNows:0
        };
    },  
    methods:{
        //搜索
       
        search(e) {
      if (
        e.target.value.indexOf(" ") != 0 &&
        e.target.value != "" &&
        e.target.value.indexOf("'") != 0
      ) {
        console.log(e)
        Axios.get("api/menu/find/" + e.target.value).then(res => {
          this.content = res.data;
        });
      } else {
        this.content = "";
      }
        },
         infinite:function(){
      console.log('infinite')
        var that=this;
       var is= that.iNows+1;
        console.log(that.iNows++)
      this.timeout = setTimeout(()=>{
        if (this.infinitee.length >= 4) {
         this.$refs.my_scroller.finishInfinite(true);
        }else{
                     
          Axios.get("api/menu/res/"+is).then(res=>{
            console.log(is)
            this.infinitee=res.data;
                               
                for (let i in this.infinitee) {
                    let o = {};
                    o = this.infinitee; 
                }
                this.infinitee.forEach((item)=>{
                    this.date.push(item)
                    
                })
                console.log(this.date)
                this.$refs.my_scroller.finishInfinite(false);
        })
        }
        //this.$refs.my_scroller.resize();//已弃用，
      }, 1000)
            if(is>=4){
                clearInterval(this.timeout);
                this.$refs.my_scroller.finishInfinite(true);
            }
    }, 
    refresh:function(){
      console.log('refresh')
      this.timeout = setTimeout(()=>{
    console.log( this.$refs)
        this.$refs.my_scroller.finishPullToRefresh(false)
      }, 1500)
    }, 
    },
  
    mounted(){
        this.date
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    },
    created(){
        Axios.get('api/menu/silderPage').then(res=>{
            this.arr = res.data
            // this.$nextTick(()=>{
            //     this.mycroll()
            // })
        })
        Axios.get('api/menu/menuList').then(res=>{
            this.date = res.data            
            // console.log(this.date)
            
            this.date.map(i=>{
                var z = i.imgarr.split(";")   
                i.imgarr=''
                i.imgarr=(z[0])
                
            })
            // console.log(this.date)
        })
    },
    updated(){
        var mySwiper = new Swiper('.lb1', {
            autoplay:true,
            loop:true,
            pagination: {
				el: '.swiper-pagination'
		    }
        },500)
    }
};
</script>

<style scoped lang='scss'>
.da{
    width: 100%;
    height: calc(556rem / 67.5);
    margin: calc(40rem / 67.5) 0;
}
.daadver_text{
    width: 100%;
    color: #999999;
    // padding-left:calc(80rem / 67.5);
    position: relative;
    div{
        width: 100%;
        font-size: 10px;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: calc(40rem / 67.5);
    }
    .dian{
        position: absolute;
        right: calc(80rem / 67.5);bottom:calc(50rem / 67.5);
        color: #aaaaaa;
    }
}
.aaa{
    height: 100px;
}
.s_box{
    width: 100%;
    overflow: auto;
}
.inp {
    width: 100%;
    height: calc(170rem / 67.5);
    padding: calc(26rem / 67.5) calc(28rem / 67.5);
    position: relative;
    img{
        position: absolute;
        left: 6%;top: 30%;
        width: 5%;
    }
    input {
        width: calc(850rem / 67.5);
        height: calc(100rem / 67.5);
        border: none;
        border: 1px solid #e6dae8;
        outline: none;
        border-radius: 15px;
        padding-left: 12%;
        font-size: 12px;
    }
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #939393;
}
    button {
        width: calc(390rem / 67.5);
        height: calc(100rem / 67.5);
        background: none;
        border: none;
        border: 1px solid #e6dae8;
        color: #768771;
        font-size: 12px;
        outline: none;
        border-radius: 15px;
        position: absolute;
        top: 20%;right:calc(28rem / 67.5) ;
    }
}
.lb1{
    width: 100%;
    img{
        width: 100%;
    }
}
.p_kind{
    width: calc(100% - 120rem / 67.5) ;
    height:calc(417rem / 67.5) ;
    // border-bottom: 1px solid #e0e0e0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 auto;
    li{
        width: 20%;
        font-size: 10px;
        padding-top:calc(417rem / 67.5 / 2 / 2 / 2) ;
        img{
            margin:auto;
            width: 30%;
            display: block;
        }
    }
}
.p_aft{
    padding: calc(80rem / 67.5) 0;
    overflow: hidden;
}
.p_after{
    width: 200%;
    display: flex;
    &>li{
        width: calc(1200rem / 67.5);
        margin: 0 calc(8rem / 67.5);
        dl{
            width: 100%;
            display: flex;
            dd{
                width: 50%;
                padding-right: calc(20rem / 67.5);
                padding-bottom: calc(20rem / 67.5);
                img{
                    width: 100%;height: 100%;
                    display: inline-block;
                }
            }
            dt{
                width: 50%;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        width: 50%;
                        padding-right: calc(20rem / 67.5);
                        padding-bottom: calc(20rem / 67.5);
                        img{
                            width: 100%;height: 100%;
                        }
                    }
                }
            }
        }
    }
}
.moods{
    width: 100%;
    padding:0 calc(80rem / 67.5);
    // padding-bottom: calc(60rem / 67.5);
    .mood{
        width: 100%;
        padding: calc(40rem / 67.5) 0;
        display: flex;
        border-bottom: 1px solid #e0e0e0;
        .moods_l{
            width: 32.5%;
            height: 5.6rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .moods_r{
            width: 70%;
            padding: calc(15rem / 67.5) calc(30rem / 67.5);
            position: relative;
            .list{
                position: absolute;
                top: 30%;
                height: 15%;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                // white-space: nowrap;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 10px;
                color: #aaaaaa;
            }
            .types{
                font-size: 10px;
                color: #aaaaaa;
                position: absolute;
                bottom: 0.4rem;
            }
            .dian{
                position: absolute;
                right: calc(80rem / 67.5);bottom: 0.4rem;
                color: #aaaaaa;
            }
        }
    }
}
.adver{
    padding-left: calc(80rem / 67.5);
}
.adver_img{
    width: 100%;
    padding: calc(40rem / 67.5) calc(80rem / 67.5);
    img{
        width: 100%;
        display: block;
    }
}
.adver_text{
    width: 100%;
    font-size: 10px;
    color: #999999;
    padding-left:calc(80rem / 67.5);
    div{
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: calc(40rem / 67.5);
    }
}
.shou_video{
    width: 100%;
    padding: calc(40rem / 67.5) calc(80rem / 67.5);
    img{
        width: calc(100% / 3.12);
    }
}
</style>
