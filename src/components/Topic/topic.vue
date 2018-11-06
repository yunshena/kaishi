<template>
  <div class="hello">
    <header>
      <div class="d1">
        <img src="./hua/f.jpg" alt="">
      </div>
      <ul>
        <router-link exact to="/topic" tag="li">话题</router-link>
        <router-link exact to="/topic/new" tag="li">最新</router-link>
        <router-link exact to="/topic/hot" tag="li">热门</router-link>
        <router-link exact to="/topic/elite" tag="li">精华</router-link>
      </ul>
      <div class="d2">
        <img src="./hua/fa.jpg" alt="">
        <div>发菜谱</div>
      </div>
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
  }
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
