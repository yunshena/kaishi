<template>
    <div id="xqy">
        <header id="header">
            <router-link exact to="/topic" tag="div" class="pageup">
                <img src="/static/img/bannerxq1.jpg" alt="">
            </router-link>
            <div class="subject">话题</div>
            <div class="share">...</div>
        </header>
        <div id="centen">
            <div class="user">
                <div>
                    <img :src="arr.user_img" alt="">
                </div>
                <div class="ming">
                    <div>
                        {{arr.user_name}} <span>楼主</span>
                    </div>
                    <div>{{arr.public_time}}</div>
                </div>
            </div>
            <div class="cont">
                {{arr.content}}
            </div>
            <div class="imgarr" v-for="(i,index) in arr.imgarr" :key="index">
                <img :src="i" alt="">
            </div>
            <div class="ti">
                <div class="d_yuan">
                    <div class="x_yuan"></div>
                </div>
                <span class="ti_l">全部评论</span>
                <span class="ti_r">点击步骤进入全屏模式</span>
            </div>
            <div class="ping" v-for="(ping,b) in arr.comment" :key="b.id"> 
                <div class="user">
                    <div>
                        <img :src="ping[1]" alt="">
                    </div>
                    <div class="ming">
                        <div>
                            {{ping[2]}}
                        </div>
                        <div>{{ping[3]}}</div>
                    </div>
                </div>
                <p>
                    {{ping[0]}}
                </p>
            </div>
            
        </div>
        <footer>
            <div class="foo_inp">
                <img src="/static/img/b.png" alt="">
                <router-link :to="'/pass/'+arr.ID"><input type="text" placeholder="写评论/..."></router-link>
            </div>
            <div class="foo_b">
                <div><img class="b1" src="/static/img/b_1.png" alt="">
                <p>评论</p>
                </div>
                <div><img class="b2" src="/static/img/b_2.png" alt="">
                <p>收藏</p></div>
                <div><img class="b3" src="/static/img/b_3.png" alt="">
                <p>加入菜单</p></div>
                <div><img class="b4" src="/static/img/b_4.png" alt="">
                <p>分享</p></div>
            </div>
        </footer>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            arr:{}
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
                    var a = ele.comment.split('||')
                    var b = []
                    a.map(i=>{
                        i = i.split("&")
                        i.forEach((k,x)=>{
                            if(k==''){
                                i.splice(x,1)
                                // x = x-1;
                            }
                        })
                        i.map(d=>{
                            d = d.split('=')
                            b.push(d)   
                        })
                    })
                    this.arr.comment = b
                    console.log(this.arr.comment)
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
        line-height: calc(160rem / 2 / 67.5);
        font-size: 2.2rem;
    }
}
#centen{
    flex: 1;
    overflow: auto;
    box-sizing: border-box;
    padding-left:calc(80rem / 67.5);
    .ping{
        padding-right: calc(80rem / 67.5);
        border-bottom: 1px solid #e9e7e7;
        p{
            font-size: .8rem;
            margin: .5rem 0 ;
        }
        .user {
            display: flex;
            box-sizing: border-box;
            padding: calc(40rem / 67.5) 0;
            border: none;
            span{
                display: inline-block;
                font-size: .5rem;
                color: #ff6767;
                width: 15%;
                border: 1px solid #ff6767;
                border-radius: 10px;
                text-align: center;
            }
            img {
                width: calc(140rem / 67.5);
                // height: calc(138rem / 67.5);
                border-radius: 50%;
            }
            .ming{
                flex: 1;
            }
            div {
                margin-right: calc(50rem / 67.5);
                div:nth-child(1) {
                    font-size: .7rem;
                    color: #000;
                }
                div:nth-child(2) {
                    font-size: .5rem;
                    color: #807676;
                }
            }
        }
    }
    .user {
        display: flex;
        box-sizing: border-box;
        padding: calc(40rem / 67.5) 0;
        border-bottom: 1px solid #e9e7e7;
        span{
            display: inline-block;
            font-size: .5rem;
            color: #ff6767;
            width: 15%;
            border: 1px solid #ff6767;
            border-radius: 10px;
            text-align: center;
        }
        img {
            width: calc(140rem / 67.5);
            // height: calc(138rem / 67.5);
            border-radius: 50%;
        }
        .ming{
            flex: 1;
        }
        div {
            margin-right: calc(50rem / 67.5);
            div:nth-child(1) {
                font-size: .7rem;
                color: #000;
            }
            div:nth-child(2) {
                font-size: .5rem;
                color: #807676;
            }
        }
    }
    .cont{
        margin: 5% 0;
        margin-right: calc(80rem / 67.5);
        font-size: .8rem;
    }
    .imgarr{
        width: 100%;
        img{
            width: calc(100% - 80rem / 67.5);
        }
    }
    .ti{
        position: relative;
        margin-top: calc(53rem / 67.5);
        padding: calc(40rem / 67.5) 0;
        border-top: 1px solid #e9e7e7;
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
            margin-left: 1rem;
        }
        .ti_r{
            font-size: .2rem;
            color: #929292;
            margin-left: .6rem;
        }
    }
}
footer{
    height: calc(185rem / 67.5);
    display: flex;
    .foo_inp{
        width: 50%;
        position: relative;
        img{
            width: 8%;
            height: 35%;
            position: absolute;
            top: calc(185rem / 67.5 / 2 - 35% / 2);
            left: 12%;
            z-index: 5;
        }
        input{
            width: 90%;
            height: 60%;
            border: none;
            border: 1px solid #f1f1f1;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            box-sizing: border-box;
            padding-left: 20%;
            background: #e9e6e6;
            position: absolute;
            top: calc(185rem / 67.5 / 2 - 60% / 2);
            left: calc(50% - 90% / 2)
        }
        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            font-size: .2rem;
            color:    #000000;
        }
    }
    .foo_b{
        width: 50%;
        display: flex;
        div{
            flex: 1;
            text-align: center;
            p{
                font-size: .2rem;
                color: #adadad;
            }
            img{
                margin-top: 5%;
            }
            .b1{
                width: 55%;
            }
            .b2{
                width: 45%;
            }
            .b3{
                width: 37%;
            }
            .b4{
                width: 40%;
            }
        }
    }
}
</style>