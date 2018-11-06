<template>
    <div id="id12">
        {{txt}}
    </div>
</template>

<script>
export default {
     
    data () {
        return {
            txt: '精华',
        }
    },
    methods:{
    },
    mounted () {
        let self=this;
        this.bus.$on('too', function (aa) {
            
            self.txt=aa;
        })
    }
}
</script>

<style>

</style>