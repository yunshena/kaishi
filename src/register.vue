<template>
    <div id="xqy">
        <header id="header">
            <router-link exact :to="'/list/'+arr.ID" tag="div" class="pageup">
                <img src="/static/img/bannerxq1.jpg" alt="">
            </router-link>
            <div class="subject">登录</div>
            <router-link tag='div' :to="'/pass/'+arr.ID" class="share">免费注册</router-link>
        </header>
        <div class="conten">
            <div class="mobile">
                <input type="text" placeholder="请输入手机号/昵称">
                <input type="text" placeholder="登录密码">
            </div>
            <button class="down">登录</button>
            <div>
                <span class="p1"><a href="#">忘记密码？</a></span>
            </div>
        </div>
        <p class="p">第三方账号 一键登录</p>
        <div class="three">
            <div class="wx">
                <img src="/static/img/wx.jpg" alt="">
                <p>微信</p>
            </div>
            <div class="qq">
                <img src="/static/img/qq.jpg" alt="">
                <p>QQ</p>
            </div>
            <div class="wb">
                <img src="/static/img/wb.jpg" alt="">
                <p>微博</p>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            arr:{},
        }
    },
    mounted(){
        var id = this.$route.params.id
        // console.log(this.$router)
        console.log(id)
       Axios.get('/api/menu/menuList').then(res=>
            res.data.forEach(ele => {
                if (id == ele.ID) {
                    this.arr = ele;
                }
            })
       )
        
    }
}
</script>

<style scoped lang='scss'>
.p{
    font-size: .7rem;
    color:#706464;
    text-align: center;
    padding: 5% 0;
    letter-spacing: 2px;
}
.p1{
    font-size: .7rem;
    color:#706464;
    padding: 5% 0;
    a{
        text-decoration: none;
    }
    letter-spacing: 2px;
}
.three{
    width: 100%;
    display: flex;
    padding-bottom: 10%;
    div{
        flex: 1;
        text-align: center;
        img{
            width: 30%;
        }
        p{
            font-size: .8rem;
            color: rgb(85, 85, 85);
        }
    }
}
#shi{
    margin-top: 10%;
}
a{
    text-decoration: underline;
    color: rgb(104, 104, 104);
}
.down{
    width: 100%;
    height: 2.5rem;
    margin-top: 2rem;
    border: none;
    color: white;
    border-radius: 3px;
    font-size: .7rem;
    background: #ff6767;
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
        font-size: .9rem;
    }
    .share{
        width: calc(240rem / 67.5);
        // line-height: calc(160rem / 2 / 67.5);
        font-size: .7rem;
    }
}
.conten{
    flex: 1;
    box-sizing: border-box;
    padding: .8rem 1rem;
    
    .mobile{
        width: 100%;
        padding: 10px 0 0 10%;
        input{
            width: 100%;
            border: none;
            border-bottom: 1px solid rgba(204, 204, 204, 0.8);
            outline: none;
            padding: 10px 0;
        }
        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            font-size: .7rem;
            letter-spacing: 2px;
            color:    #949494;
        }
    }
    .code{
        width: 100%;
        margin-top: 10px;
        display: flex;
        input{
            width: 70%;
            border: none;
            border-bottom: 1px solid rgba(204, 204, 204, 0.8);
            padding: 10px 0;
            outline: none;
        }
        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            font-size: .7rem;
            letter-spacing: 2px;
            color:    #949494;
        }
        .mtui-cell__ft{
            width: 30%;
            button{
                width: 100%;
                height: 100%;
                background: #ff6767;
                border: none;
                color: white;
                font-size: .7rem;
            }
        }
    }
}
</style>
