import { createStore } from 'vuex'

const store= createStore({
    state:{
        user:{},
        token:null,
        count:5,
        authenticated:false
    },
    getters:{},
    actions:{},
    mutations:{
        increment(state){
            state.count++
        },
        setUser(state,payload){
            state.user=payload
        },
        setToken(state,n){
            this.commit('auth')
            state.token="Bearer "+n;
        },
        auth(state){
          state.authenticated= true
        }
    }
});

export default store
