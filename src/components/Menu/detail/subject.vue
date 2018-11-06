<template>
    <div class="zhuan">
        <h5>{{this.arr.theme_tit}}</h5>
        <p>{{this.arr.tit_content}}</p>
        <div v-for="(item,keys) in data" :key="keys">
            <h5 class="h5">{{item.special_tit}}</h5>
            <p>{{item.special_con}}</p>
            <div class="moods" v-for="(i,k) in item.arr" :key="k">
                <div class="mood">
                    <div class="moods_l">
                        <img :src="i.img_src" alt="">
                    </div>
                    <div class="moods_r">
                        <h5>{{i.img_tit}}</h5>
                        <p class="con">{{i.img_con}}</p>
                        <p>{{i.search_key}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            arr:[],
            data:[]
        };
    },
    mounted(){
        var id = this.$route.params.id
        // console.log(this.$router)
        // console.log(id)
        Axios.get('/api/menu/silderPage').then(res=>{
             res.data.forEach(ele => {
                if (id == ele.ID) {
                    this.arr = ele;
                    // console.log(ele)
                }
            });
        })
        Axios.get('/api/menu/page/'+id).then(res=>{
            console.log(res.data)
            this.data = res.data
        })
    },
}
</script>

<style scoped lang='scss'>
.zhuan{
    padding: 0 4%;
    &>h5{
        padding-top: 0.7rem;
        color: rgb(250, 54, 54);
    } 
    p{
        width: 100%;
        font-size: 0.8rem; 
        line-height: 1.3rem;
        padding-top: 0.6rem;
    }
}
.h5{
    padding-top: 0.7rem;
    color: rgb(250, 54, 54);
}
.moods{
    width: 100%;
    // padding-left: calc(80rem / 67.5);
    padding-bottom: calc(60rem / 67.5);
    .mood{
        width: 100%;
        padding: calc(40rem / 67.5) 0;
        display: flex;
        border-bottom: 1px solid #e0e0e0;
        .moods_l{
            width: 34%;
            img{
                width: 100%;
            }
        }
        .moods_r{
            width: 66%;
            padding: calc(15rem / 67.5) calc(30rem / 67.5);
            display: flex;
            flex-direction: column;
            h5{
                flex-grow: 1;
            }
            .con{
                flex: 1.5;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            p{
                flex-grow: 1;
                font-size: 10px;
                color: #aaaaaa;
            }
        }
    }
}   
</style>
