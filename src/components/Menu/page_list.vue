<template>
    <div id="xqy">
        <header id="header">
            <router-link exact to="/" tag="div" class="pageup">
                <img src="/static/img/bannerxq1.jpg" alt="">
            </router-link>
            <div class="subject">{{this.arr.sub_tit}}</div>
            <div class="share">...</div>
        </header>
        <div id="centen">
            <router-link :to="'/tu/'+arr.ID+'/1'" tag="div">
            <div class="top">
                <img class="con_img" :src="this.imges" alt="">
                <div v-if="this.length>1" class="img_num">成品图({{this.length}})</div>
            </div>
            </router-link>
            <div class="sect">
                <h4>{{this.arr.sub_tit}}</h4>
                <div class="user_img">
                    <img :src="this.arr.author_src" alt="">
                    <p class="user_name">{{this.arr.author_name}}</p>
                    <p class="shou">1收藏</p>
                    <p class="intro"></p>
                    <ul class="xiao" >
                        <li v-for="(i,k) in xiao" :key="k">
                            <img :src="i[1]" alt=""> 
                            <p>{{i[0]}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="materia_bt">材料</div>
            <div class="materia" v-for="(a,e) in materia" :key="e">
                <div class="mate_l">{{e}}</div>
                <div class="mate_c">{{a}}</div>
                <div class="mate_r"></div>
            </div>
            <div class="ti">
                <div class="d_yuan">
                    <div class="x_yuan"></div>
                </div>
                <span class="ti_l">步骤与贴士</span>
                <span class="ti_r">点击步骤进入全屏模式</span>
            </div>
            <router-link :to="'/tu/'+arr.ID+'/2'"  tag='div' id="b_img" v-for="(liimg,liname,index) in list_img" :key="index">
                <div class="indexs">{{index+1}}</div>
                <img :src="liimg" alt="">
                <p>{{liname}}</p>
            </router-link>
        </div>
        <footer>
            <div class="foo_inp">
                <img src="/static/img/b.png" alt="">
                <router-link :to="'/pass/'+arr.ID"><input type="text" placeholder="写评论/上传作品..."></router-link>
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
            arr:{},
            imges:'',
            length:'',
            xiao:[],
            // materia:[]
            materia:{},
            list_img:{}
        };
    },
    mounted(){
        var id = this.$route.params.id
        // console.log(this.$router)
        console.log(id)
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
                            console.log(i)
                        }
                    })
                        console.log(a)
                    this.length = a.length
                    console.log(this.length)
                    //获取第一张大图
                    var img_1 = a.splice(0,1)
                    this.imges = img_1
                    //截取小图标的路径
                    var x = ele.demand_json.split('&')
                    x.map(xi=>{
                        var xt = xi.split('=');
                        // console.log(xt)
                        this.xiao.push(xt)
                    })
                    // console.log(this.xiao)
                    //截取材料 object 对象
                    var mate = ele.list_materia.split('&');
                    // var object={}
                    mate.map((i,a)=>{
                        // this.materia.push(i.split('='))
                        var c = i.split('=')
                        for(var z = 0; z<c.length; z++){
                            this.materia[c[0]]=c[1]
                        }
                    })
                    // console.log(object)
                    // console.log(this.materia)
                    var list = ele.list_order.split('&');
                    // var object={}
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
    )}
}
</script>

<style scoped lang='scss'>
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
    // flex: 1;
    height: calc(100% - 185rem / 67.5 * 2);
    overflow: auto;
    #b_img{
        box-sizing: border-box;
        padding: 0 2.5rem 1rem;
        position: relative;
        .indexs{
            position: absolute;
            left: 1.5rem;top: calc(50% - 2rem);
            color: #929292;  
        }
        img{
            width: 100%;
        }
        p{
            box-sizing: border-box;
            font-size: .8rem;
            padding-top: .5rem;
        }
    }
    .ti{
        position: relative;
        margin-left: calc(53rem / 67.5);
        padding: calc(50rem / 67.5) 0;
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
            font-weight: 600;
            margin-left: 1rem;
        }
        .ti_r{
            font-size: .2rem;
            color: #929292;
            margin-left: .6rem;
        }
    }
    .materia_bt{
        box-sizing: border-box;
        margin-left: calc(53rem / 67.5);
        padding: calc(43rem / 67.5 / 2) 0;
        border-bottom: 1px solid #dadada;
        font-size: .2rem;
        color: #626262;
    }
    .materia{
        box-sizing: border-box;
        margin-left: calc(53rem / 67.5);
        padding: calc(43rem / 67.5) 0;
        border-bottom: 1px solid #dadada;
        display: flex;
        position: relative;
        .mate_l{
            flex: 1;
            font-size: .8rem;
            font-weight: 600;
        }
        .mate_c{
            flex: 1;
            font-size: .2rem;
            color: #626262;
        }
        .mate_r{
            // flex: 1;
            position: absolute;
            width: calc(28rem / 67.5);
            height: 35%;top:calc(50% - 35% / 2) ;
            right:calc(53rem / 67.5) ;
            background:url(/static/img/lg.png) no-repeat;
            background-size: 100% 100%;
        }
    }
    .sect{
        box-sizing: border-box;
        padding: 0 calc(53rem / 67.5);
        h4{
            text-align: center;
            // margin: .5rem 0;
            color: #0a0a0a;
        }
        .user_img{
            text-align: center;
            &>img{
                width: calc(105rem / 67.5);
                border-radius: 50%;
            }
            .user_name{
                font-size: .6rem;
                font-weight: 600;
                color: #0a0a0a;
            }
            .shou{
                font-size: .2rem;
                color: #969696;
            }
            ul{
                width: 100%;
                height: calc(180rem / 67.5);
                display: flex;
                padding: 0 calc(160rem / 67.5);
                // margin: calc(65rem / 67.5) 0;
                justify-content: center;
                li{
                    text-align: center;
                    flex: 1;
                    img{
                        height: 50%;
                    }
                    p{
                        font-size: .2rem;
                        color: #626262;
                    }
                }
            }
        }
    }
    .top{
        position: relative;
        .con_img{
            width: 100%;
            height: calc(1086rem / 67.5);
        }
        .img_num{
            position: absolute;
            left:calc(100% / 2 - 22% / 2) ;bottom: 5%;
            text-align: center;
            font-size: 10px;
            color: white;
            width: 22%;
            border: 1px solid #fff;
            border-radius: 10px;
            background: rgba(26, 25, 25, 0.7)
        }
    }
    
}
</style>
