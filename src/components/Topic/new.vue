<template>
    <div>
        <Header :title-txt="showTitleTxt"></Header>
        <Eli></Eli>
    </div>
</template>

<script>
import Header from './hot'
import Eli from './elite'
export default {
    components: {
        Header,
        Eli
    },
    data () {
        return {
            showTitleTxt: '父传子'
        }
    }
}
</script>

<style>

</style>