<template>
    <div id="xqy">
        <header id="header">
            <router-link exact to="/" tag="div" class="pageup">
                ＜
            </router-link>
            <div class="subject">专题</div>
            <div class="share">...</div>
        </header>
        <div id="centen">
            <img id="img" :src="this.arr.img_src" alt="">
            <div class="sub_top">
                <router-link exact :to="'/zhuan/'+this.arr.ID" tag="div" class="sub_let">专题</router-link>
                <router-link exact :to="'/zhuan/'+this.arr.ID+'/pag'" tag="div" class="sub_rig">话题</router-link>
            </div>
            <router-view></router-view>
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
            arr:[],
        };
    },
    mounted(){
        var id = this.$route.params.id
        // console.log(this.$router)
        // console.log(id)
        Axios.get('/api/menu/silderPage').then(res=>{
            res.data.forEach(ele => {
                if (id == ele.ID) {
                    this.arr = ele;
                    // console.log(ele)
                }
            });
        })
       
    },
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
        font-size: 1.6rem;
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
    img{
        width: 100%;
    }
    .sub_top{
        width: 100%;
        height: calc(170rem / 67.5);
        line-height: calc(170rem / 67.5);
        font-size: 0.8rem;
        position: relative;
        div{
            display: inline-block;
            text-align: center;
            width: calc(50% - 0.6%);
        }
    }
}
</style>
