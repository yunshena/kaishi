<template>
    <div id="xqy">
        <header id="header">
            <router-link exact to="/topic" tag="div" class="pageup">
                <img src="/static/img/bannerxq1.jpg" alt="">
            </router-link>
            <div class="subject">{{arr.user_name}}</div>
            <div class="share">
                <img src="/static/img/bannerfx.png" alt="">
            </div>
        </header>
        <div id="centen">
            <div class="user">
                <div>
                    <img :src="arr.user_img" alt="">
                </div>
                <p>{{arr.user_place}}</p>
                <div><span>+关注</span><span>发私信</span></div>
                <p>关注{{num[0]}} / 粉丝{{num[1]}} / 访问量{{num[2]}}万</p>
            </div>
             <ul class='list'>
                <li>菜谱</li>
                <li>话题</li>
                <li>菜单</li>
                <li>收藏</li>
            </ul>
            <div class="sect">
                <div class="ti">
                    <span class="ti_l">2018年10月18日加入，查看TA的动态</span>
                    <div class="ti_j"></div>
                </div>
                <div class="ti">
                    <!-- <div class="d_yuan">
                        <div class="x_yuan"></div>
                    </div> -->
                    <span class="ti_l">TA的个人资料，认识一下</span>
                    <span class="ti_r">Lv.4</span>
                    <div class="ti_j"></div>
                </div>
                <div class="cai_list">
                    <div class="d_yuan">
                        <div class="x_yuan"></div>
                    </div>
                    <span class="ti_l">上传的菜谱</span>
                </div>
                <ul class="ul1">
                    <li v-for="(item,key) in arr.menu_list" :key="key">
                        <img :src="item[1]">
                        <p>{{item[0]}}</p>
                    </li>
                </ul>
                <div class="fa_topic">
                    <div class="d_yuan">
                        <div class="x_yuan"></div>
                    </div>
                    <span class="ti_l">上传的菜谱</span>
                </div>
                <div class="hua_list"  v-for="(item,index) in arr.user_comment" :key="index">
                    <div class="u_t">
                        <router-link :to='"/topic/user/"+arr.ID' tag='div'>
                            <img :src="item[3]" alt="">
                        </router-link>
                        <div>
                            <div>
                                {{item[4]}}
                            </div>
                            <div>{{item[5]}}</div>
                        </div>
                    </div>
                    <router-link tag='div' class="u_b" :to='"/topic/hua/"+item.ID'>
                        <div class="title conten_tit">{{arr.conten_tit}}</div>
                        <div v-if='item.title!="none"' class="title">{{item[0]}}</div>
                        <div class="img">
                            <img v-if='i<3' v-for="(e,i) in arr.imgarr" :key="i" :src="e" alt="">
                        </div>
                        <div class="x_img">
                            <span>{{item[1]}}</span>喜欢，<span>{{item[2]}}</span>评论
                            <b>♥</b>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            arr:{},
            num:[]
        };
    },
    mounted(){
        var id = this.$route.params.id
        Axios.get('api/menu/topic/').then(res=>{
            res.data.forEach(ele => {
                if (id == ele.ID) {
                    this.arr = ele;
                    console.log(ele)
                    if (ele.imgarr.indexOf(";") == -1) {
                        var imgarr = ele.imgarr.split("&");
                        this.arr.imgarr = imgarr;
                    } else if (ele.imgarr.indexOf("&")) {
                        var imgarr = ele.imgarr.split(";");
                        this.arr.imgarr = imgarr;
                    }


                    var m = ele.menu_list.split('&')
                    var u = [];
                    m.map(e=>{
                        var n = e.split('=');
                        u.push(n)
                    })
                    this.arr.menu_list=u

                    var a = ele.user_comment.split('&')
                    var b = []
                    a.map(i=>{
                        i = i.split("=")
                        i.forEach((k,x)=>{
                            if(k==''){
                                i.splice(x,1)
                            }
                        })
                            b.push(i)  
                    })
                    console.log(b)
                    this.arr.user_comment = b
                    // console.log(this.arr.comment)
                    this.num = ele.number.split('=')
                }
            });
        })
    },
}
</script>

<style scoped lang='scss'>
.active{
    color: rgb(250, 54, 54);
    border-bottom: 2px solid rgb(250, 54, 54);
}
header{
    color: #fff;
    text-align: center;
    line-height: calc(165rem / 67.5);
    .pageup{
        width: calc(160rem / 67.5);
        box-sizing: border-box;
        padding-top: 1%;
        img{
            height: 50%;
        }
    }
    .subject{
        flex: 1;
        font-size: 0.9rem;
    }
    .share{
        width: calc(160rem / 67.5);
        box-sizing: border-box;
        padding-top: 1%;
        img{
            height: 50%;
        }
    }
}
#centen{
    flex: 1;
    overflow: auto;
    box-sizing: border-box;
    .user {
        box-sizing: border-box;
        text-align: center;
        padding: 5% 0;
        div{
            span{
                display: inline-block;
                font-size: .5rem;
                color: #ff6767;
                width: 20%;height: 1.2rem;line-height: 1.2rem;
                border: 1px solid #ff6767;
                border-radius: 10px;
                text-align: center;
                margin: .6rem 1.4rem;
            }
        }
        img {
            width: calc(186rem / 67.5);
            // height: calc(138rem / 67.5);
            border-radius: 50%;
        }
        p{
            font-size: .5rem;
            color: #807676;
            font-weight: 200;
        }
    }
     .list {
        width: 100%;
        height: calc(156rem / 67.5);
        background: #dddddd;
        color: #121212;
        display: flex;
        li{
            flex: 1;
            text-align: center;
        }
        line-height: calc(153rem / 67.5);
        font-size: calc(55rem / 67.5);
    }
    .sect{ 
        padding-left:calc(80rem / 67.5);
        box-sizing: border-box;
        .hua_list {
            padding-top: calc(54rem / 67.5);
            border-bottom: 1px solid #e9e7e7;
            .u_b{
                .x_img{
                    position: relative;
                    font-size: .5rem;
                    font-weight: 200;
                    color: #959595;
                    padding: calc(54rem / 67.5) 0;
                } 
                b{
                    font-size: .8rem;
                    position: absolute;
                    right: 0;
                }
                
                .title {
                    font-size: 0.7rem;
                    font-weight:400;
                    margin: calc((22rem / 67.5)) 0;
                }
                .conten_tit {
                    color: #fb6683;
                }
                .img img{
                    width: 25%;
                    margin-right:1.5%;
                }
            }
           
            .u_t,.u_b{
                box-sizing: border-box;
                padding-right: calc(80rem / 67.5);
            }
            .u_t {
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
                        color: #959595;
                    }
                }
            }
        }
        .fa_topic{
            position: relative;
            padding: calc(40rem / 67.5) 0;
            border-bottom: 1px solid #e9e7e7;
            .d_yuan{
                position: absolute;
                left: 0;bottom: 30%;
                width: .8rem;height: .8rem;
                background: #ff6767;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .x_yuan{
                    width: 50%;
                    height: 50%;
                    background: #fff;
                    border-radius: 50%;
                }
            }
            .ti_l{
                font-size: .6rem;
                color: #121212;
                margin-left: 1rem;
            }
        }
        .ti{
            position: relative;
            padding: calc(40rem / 67.5) 0;
            border-bottom: 1px solid #e9e7e7;
            .d_yuan{
                position: absolute;
                left: 0;bottom: 30%;
                width: .8rem;height: .8rem;
                background: #ff6767;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .x_yuan{
                    width: 50%;
                    height: 50%;
                    background: #fff;
                    border-radius: 50%;
                }
            }
            .ti_l{
                font-size: .6rem;
                color: #121212;
            }
            .ti_r{
                font-size: .2rem;
                color: rgb(250, 54, 54);
                position: absolute;
                right: calc(120rem / 67.5);
                bottom:calc(60rem / 67.5);
            }
            .ti_j{
                // flex: 1;
                position: absolute;
                width: calc(28rem / 67.5);
                height: 35%;top:calc(50% - 35% / 2) ;
                right:calc(53rem / 67.5) ;
                background:url(/static/img/lg.png) no-repeat;
                background-size: 100% 100%;
            }
        }
        .cai_list{
            position: relative;
            padding: calc(60rem / 67.5) 0 calc(40rem / 67.5);
            .d_yuan{
                position: absolute;
                left: 0;bottom: 20%;
                width: .8rem;height: .8rem;
                background: #ff6767;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .x_yuan{
                    width: 50%;
                    height: 50%;
                    background: #fff;
                    border-radius: 50%;
                }
            }
            .ti_l{
                font-size: .6rem;
                color: #121212;
                margin-left: 1rem;
            }
        }
        .ul1{
            display: flex;
            padding-right: calc(80rem / 67.5);
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 48.5%;
                text-align: center;
                img{
                    width: 100%;
                    display: block;
                }
                p{
                    font-size: .8rem;
                    padding: .4rem 0;
                }
            }
        }
    }
}
</style>