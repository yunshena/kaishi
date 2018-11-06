<template>
    <div class="hello">
    <header></header>
    <section>
      {{state.count}}
    </section>
    
    </div>
</template>

<script>
export default {
  data(){
    return{
      state:this.$store.state
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
