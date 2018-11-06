<template>
    <div id="xqy">
        <header id="header">
            <div class="pageup">
                <img src="/static/img/bannerxq1.jpg" alt="">
            </div>
            <!-- <router-link exact :to="'/list/'+arr.ID" tag="div" class="pageup">
                <img src="/static/img/bannerxq1.jpg" alt="">
            </router-link> -->
            <div class="subject">免费注册</div>
            <router-link tag='div' :to="'/register/'+arr.ID" class="share">登录</router-link>
        </header>
        <div class="conten">
            <p class="p1">手机免费注册，美食天下不会泄露您的手机号</p>
            <div class="mobile">
                <input v-model="tovalue" type="text" placeholder="请输入手机号">
            </div>
            <div class="code">
                <input type="text" placeholder="请输入验证码">
                <div class="mtui-cell__ft" @click="getCode">
                    <button class="mtui-vcode-btn mtui-text-center" v-if="flag">获取验证码</button>
                    <button class="mtui-vcode-btn mtui-text-center" v-if="!flag">({{second}}秒)重新获取</button>
                </div>
            </div>
            <button @click="rele" class="down">下一步</button>
            <div>
                <input type="checkbox" name="shi" id="shi" value="false">
                <label  for="shi"></label >
                <span class="p1">已阅读并同意《<a href="#">美食天下用户协议</a>》</span>
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
            tovalue:'',
            arr:{},
            second: 120,
            flag: true,
            timer: null, // 该变量是用来记录定时器的,防止点击的时候触发多个
            setIntervalgetStorage() {            
                let localDelay = {};            
                localDelay.delay = localStorage.getItem("dalay");            
                localDelay.sec = localStorage.getItem("_time");            
                return localDelay;        
            },
        }
    },
    mounted(){
        var id = this.$route.params.id
        console.log(this.$router)
        console.log(id)
       Axios.get('/api/menu/menuList').then(res=>
            res.data.forEach(ele => {
                if (id == ele.ID) {
                    this.arr = ele;
                }
            })
       )
        
    },
    
    methods:{
        relew(){
            this.$store.commit('login')
            console.log(this.$store.state.user)        
        },
        getCode() {            
            let that = this;  
            if(this.tovalue == ""){
                alert('请输入手机号')
            }else if(this.tovalue.length != 11){
                alert('请输入正确的手机号')
            }else{
                //短信验证
                Axios.post("message/xsend.json", {
                    appid: "28206",//申请的id
                    to: that.tovalue,//要接受的手机号
                    project: "W1JdH",//详情
                    signature: "3de95248acbd79087c70fa3b064a0f73",
                    content: ""//短信模板
                }).then(res => {
                    console.log(res);
                });          
                if (that.flag) {                
                    that.flag = false;                
                    let interval = window.setInterval(function() {                    
                        that.setStorage(that.second);                    
                        if (that.second-- <= 0) {                        
                            that.second = 60;                        
                            that.flag = true;                        
                            window.clearInterval(interval);                    
                        }                
                    }, 1000);            
                }      
            }
        },
        setStorage(parm) {            
            localStorage.setItem("dalay", parm);            
            localStorage.setItem("_time", new Date().getTime());        
        },  
        judgeCode() {           
            let that = this;            
            let localDelay = that.getStorage();            
            let secTime = parseInt(                
                (new Date().getTime() - localDelay.sec) / 1000);            
                console.log(localDelay);
        }
    },
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
        width: calc(160rem / 67.5);
        // line-height: calc(160rem / 2 / 67.5);
        font-size: .7rem;
    }
}
.conten{
    flex: 1;
    box-sizing: border-box;
    padding: .8rem 1rem;
    .p1{
        font-size: .5rem;
        letter-spacing: 2px;
        color: rgb(104, 104, 104);
    }
    .mobile{
        width: 100%;
        margin-top: 10px;
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
