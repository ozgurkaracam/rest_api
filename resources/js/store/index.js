import { createStore } from 'vuex'
import projectsModule from "./projectsModule";

const store= createStore({
    state:{
        user:{},
        token:'',
        count:5,
        authenticated:false
    },
    getters:{},
    actions:{
        logout({state,commit}){
            var t=axios.get('api/logout',{ headers: { 'Authorization' : state.token}})
            commit('logout')
            return t
        }
    },
    mutations:{
        increment(){
            console.log('sssss')
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
        },
        logout(state){
            state.user={}
            state.authenticated=false
            state.token=null

        }
    },
    modules:{
        projectsModule
    }
});

export default store
