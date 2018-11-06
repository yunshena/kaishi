<template>
    <div>

    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data() {
        return {
            content: []
        };
    },
    methods: {
       
        search(e) {
        if ( e.target.value.indexOf(" ") != 0 &&e.target.value != "" ) {
            Axios.get("api/menu/find/" + e.target.value).then(res => {
            this.content = res.data;
            });
        } else {
            this.content = "";
        }
        console.log(this.content);
        }
    }
}
</script>

<style>

</style>
