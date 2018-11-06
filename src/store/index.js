import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,
    state:{
        count:0,
        user:0  //存储用户登录状态
    },
    mutations:{
        addCount(state,arg){
            state.count +=1
        },
        login(state){
            state.user = 1
        },
        logout(state,user){
            state.user = false
        }
    },
    actions:{
        addCount({commit},arg){
          commit('addCount',arg)  
        }
    },
    // getters:{
    //     addCount:function(state){
    //         return state.count +=1
    //     }
    // }
})