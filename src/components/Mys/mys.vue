<template>
    <div class="hello">
    <header></header>
    <section>
      <Sto></Sto> 
      <input type="button" @click = 'fnSend' value="传递"/>
    </section>
    
    </div>
</template>

<script>
import Sto from './sto'
export default {
  components:{
    Sto
  },
  data(){
    return{
      msg:0
    }
  },
  methods:{
    fnSend(){
      this.$store.dispatch('addCount',5)
    }
  }
}
</script>

<style>

</style>
