<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
html,body,div,ul,li,p,a,footer,section,header,input,button,dl,dd,dt,h5,img{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
html,body,#app,.box,#xqy{
  width: 100%;
  height: 100%;
}
#xqy{
  display: flex;
  flex-direction: column;
}
header{
  height: calc(165rem / 67.5);
  width: 100%;
  background: #ff6767;
  display: flex;
}
// footer{
//   height: calc(185rem / 67.5);
//   width: 100%;
//   border-top: 2px solid #dddddd;
//   background: #fff;
//   display: flex;
//   width: 100%;
//   position: absolute;
//   bottom: 0;left:0 ;
//   z-index: 3;
// }
</style>
