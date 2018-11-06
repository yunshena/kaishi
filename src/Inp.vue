<template>
    <div class="search">
        <header>
            <div>
                <router-link to="/home">
                    <img src="/static/picture/return.png" alt="">
                </router-link>
            </div>
            <div class="search">
                <div>搜{{rot[iNow]}}</div>
                <div><input v-on:input="search" placeholder="想找什么，这里输入" type="text"></div>
            </div>
            <div class="imgarr"><img src="/static/picture/1.png" alt=""></div>
        </header>
        <div class="rot">
            <div v-for="(item,index) in rot" :key="index">
                <div v-bind:class="{ ac: iNow == index }" @click="classRot(index)">{{item}}</div>
            </div>
        </div>


        <router-link tag='div' :to="'/list/'+item.ID" class="content-list" v-if="content.length != 0" v-for="item in content" :key="item.index">
            {{item.sub_tit}} 
        </router-link>
    </div>
</template>


<script>
import Axios from 'axios';
export default {
  data() {
    return {
      rot: ["菜谱", "食材", "话题", "商品", "菜单", "会员"],
      iNow: 0,
      content: []
    };
  },


  methods: {
    classRot(i) {
      this.iNow = i;
    },


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
};
</script>


<style lang="scss" scoped>
.search {
    header {
        height: calc((140rem / 67.5));
        background: #ff6769;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: calc((55rem / 67.5));


        div:nth-child(1) {
            width: calc((40rem / 67.5));
            height: calc((60rem / 67.5));


            img {
                width: 100%;
            }
        }


        .search {
            width: calc((722rem / 67.5));
            height: calc((100rem / 67.5));
            background: white;
            border-radius: 20px;
            display: flex;
            align-items: center;
            font-size: 0.6rem;


            div:nth-child(1) {
                width: calc((170rem / 67.5));
                height: calc((60rem / 67.5));
                border-right: 1px solid #dedede;
                text-align: center;
            }


            div:nth-child(2) {
                width: calc((500rem / 67.5));
                height: 100%;
                margin-left: calc((15rem / 67.5));


                input {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    line-height: calc((100rem / 67.5));
                }
                ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                    color:    #939393;
                }
            }
        }


        div:nth-child(3) {
            width: calc((65rem / 67.5));
            height: calc((80rem / 67.5));


            img {
                width: 100%;
                height: 100%;
            }
        }
    }


    .rot {
        display: flex;
        justify-content: space-around;
        font-size: 0.6rem;
        height: calc((145rem / 67.5));
        align-items: center;
        border-bottom: 1px solid #ddd;


        div {
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: calc((145rem / 67.5));
        }


        .ac {
            border-bottom: 1px solid red;
        }
    }


    .content-list {
        height: calc((145rem / 67.5));
        font-size: 0.6rem;
        line-height: calc((145rem / 67.5));
        border-bottom: 1px solid #ddd;
        margin: 0 0.2rem;
    }
}
</style>
