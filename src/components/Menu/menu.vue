<template>
  <div class="hello">
    <header>
      <div class="d1">
        <img src="./shou/f.jpg" alt="">
      </div>
      <ul>
        <router-link exact to="/" tag="li">首页</router-link>
        <router-link exact to="/fen" tag="li">分类</router-link>
        <router-link exact to="/food" tag="li">食材</router-link>
        <router-link exact to="/video" tag="li">视频</router-link>
      </ul>
      <router-link tag='div' class="d2" to="/relea" >
        <img src="./shou/fa.jpg" alt="">
        <div>发菜谱</div>
      </router-link>
    </header>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
section{
  width: 100%;
  height: calc(100% - 165rem / 67.5 * 2);
  flex: 1;
  overflow:auto;
  position: absolute;
  top: calc(165rem / 67.5);
}
.hello{
  flex-grow: 1;
  overflow:hidden;
  display: flex;
  flex-direction: column;
}
  ul li.active{
    font-size: calc(54rem / 67.5);
  }
  header{
    height: calc(165rem / 67.5);
    width: 100%;
    display: flex;
    background: #ff6767;
    color: #ffffff;
    position: absolute;
    top: 0;left: 0;
    z-index: 9;
    .d1{
      width: calc(160rem / 67.5);
      text-align: center;
      padding-top: calc(42rem / 67.5);
      img{
        width: 40%;
      }
    }
    ul{
      flex: 1;
      display: flex;
      line-height: calc(165rem / 67.5);
      text-align: center;
      font-size: calc(39rem / 67.5);
      li{
        flex: 1;
      }
    }
    .d2{
      width: calc(196rem / 67.5);
      text-align: center;
      font-size: 10px;
      padding-top: calc(42rem / 67.5);
      position: relative;
      div{
        position: absolute;
        top:58%;
        left: 15%;
        font-size: 10px;
      }
      img{
        width: 30%;
      }
    }
  }
 
</style>
