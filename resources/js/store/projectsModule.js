// import store from "./index";
import VueSweetalert2 from 'vue-sweetalert2';
const projectsModule={
    state:{
        projects:[],
        project:{}
    },
    mutations:{
        getProjects(state,payload){
            state.projects=payload
        },
        delProject(state,n){
            state.projects.splice(state.projects.findIndex(e=>e.id===n),1)
        },
        addProject(state,n){
            state.projects.push(n)
        }
    },
    actions:{//'Bearer 120|XA2oVvQU06tNemwcl8Uimgiq5uXoz4pLLFPMe7qt'
        async getProjects({commit}){
            await axios.get('/api/projects',{headers:{'Authorization':this.state.token}})
                .then(res => {
                    commit('getProjects',res.data.data.projects)
                })
                .catch(c => {
                    console.log(c)
                })
        },
        async delProject({commit,dispatch},n){
            await axios.delete('/api/projects/'+n.id,{headers: { 'Authorization': this.state.token}})
                .then(res=>{

                    commit('delProject',n.id)

                })
                .catch(err=>console.log(err))
        },
        async addProject({commit,dispatch},project){
            return await axios.post('/api/projects',{name:project},{ headers: {'Authorization': this.state.token}})
                .then(response=>{
                    // commit('addProject',response.data.data)
                    dispatch('getProjects')
                }).catch(err=>console.log(err))
        },
        async getProject({state},payload){
            console.log(payload)
            await axios.get('/api/projects/'+payload,{headers: {'Authorization' : this.state.token}})
                .then(res=> {state.project=res.data.data})
                .catch(err=>{console.log(err)})
        },
        async addTask({dispatch},payload){
            await axios.post('/api/tasks/',payload,{headers:{'Authorization' : this.state.token}})
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err))
            dispatch('getProject',payload.project_id)
        },
        async delTask({},id){
            return await axios.delete('/api/tasks/'+id,{headers:{'Authorization': this.state.token}})
        },
        async updateTask({},payload){
            return await axios.put('/api/tasks/'+payload.id,payload.formData,{headers:{'Authorization': this.state.token}})
        }
    },
    getters:{
        projects(state){
            return state.projects
        },
        project(state){
            return state.project
        }
    }
}

export default projectsModule
