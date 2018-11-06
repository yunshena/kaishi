<template>
    <div class="box">
        <keep-alive><router-view/></keep-alive>
        <footer>
            <router-link exact to="/">
                <img src="../static/img/b1.jpg" alt="">
                <div>菜谱</div>
            </router-link>
            <router-link to="/topic">
                <img src="../static/img/b2.jpg" alt="">
                <div>话题</div>
            </router-link>
            <router-link to="/atten">
                <img src="../static/img/b3.jpg" alt="">
                <div>关注</div>
            </router-link>
            <router-link to="/mys">
                <img src="../static/img/b4.jpg" alt="">
                <div>我的</div>
            </router-link>
        </footer>
    </div>
</template>

<script>
export default {

}
</script> 

<style scoped lang='scss'>
    .box{
        display: flex;
        flex-direction: column;
    }
   footer{
        height: calc(185rem / 67.5);
        width: 100%;
        border-top: 2px solid #dddddd;
        background: #fff;
        display: flex;
        width: 100%;
        position: absolute;
        bottom: 0;left:0 ;
        z-index: 3;
       a{
           display: inline-block;
            flex: 1;
            height: 100%;
            text-align: center;
            padding-top: 0.1rem;
            color: #999999;
            img{
                width: 20%;
            }
            div{
                font-size: 10px;
            }
       }
       a:nth-child(1){
           img{
               width: 15%;
           }
       }
   }
</style>
