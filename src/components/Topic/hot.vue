<template>
    <header  class="a">
        {{thisTitleTxt}}
        <button @click = "changeTitleTxt">点击1</button>
        <button @click = "changeTitle">点击2</button>
    </header>
</template>

<script>
export default {
    props: {
        titleTxt: String
    },
    data () {
        return {
            thisTitleTxt: this.titleTxt,
            aa:'子父',
        }
    },
    methods: {
        changeTitleTxt () {
            console.log(1)
            this.thisTitleTxt = '子父'
        },
        changeTitle () {
            this.bus.$emit('too','兄弟')
        }
    }
}
</script>

<style>

</style>