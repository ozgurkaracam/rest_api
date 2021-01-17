<template>
    <div class="w-2/3 mx-auto py-5">
        <div v-if="this.$store.state.authenticated">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-3xl font-bold my-2 mx-3">Your Projects!</h1>
                </div>
                <div>
                    <button @click="newProject= !newProject" class="px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-bold font-3xl rounded">
                        {{ !newProject ? 'New Project' : 'Close' }}
                    </button>
                </div>
            </div>
            <div v-if="newProject">
                <new-project></new-project>
            </div>
                <div class="items-center justify-center">
                    <table class="table-fixed border border-collapse">
                        <thead>
                        <td class="w-/5">Name</td>
                        <td class="w-1/5">Task Count</td>
                        <td class="w-1/5">Create Date</td>
                        <td class="w-1/5">Image</td>
                        <td class="w-1/5">Actions</td>
                        </thead>
                        <tbody>
                        <tr v-for="project in projects" :key="project.id">
                            <td>{{project.name}}</td>
                            <td>{{project.tasks_count}}</td>
                            <td>{{project.created_at}}</td>
                            <td><img :src="project.image" alt=""></td>
                            <td>
                                <div class="flex">
                                    <button @click="$router.push({name:'projectDetail', params: { 'id' : project.id}})" class="uppercase px-8 py-2 bg-yellow-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Update</button>
                                    <button @click="delProject(project)" class="uppercase px-8 py-2 bg-red-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Delete</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        <div v-else class="justify-center text-center items-center">
            <h1>Please Login!</h1>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import NewProject from './NewProject'
export default {
    components:{ NewProject },
    beforeCreate() {
        this.$store.dispatch('getProjects')
    },
    computed:{
        ...mapGetters([
            'projects'
        ])
    },
    data(){
      return {
          newProject:false
      }
    },
    methods:{
        delProject(project){
            this.$store.dispatch('delProject',project)
            this.$swal({
                title: 'Deleted',
                text:project.name+" Deleted!!",
                icon: 'error'
            })
        }
    }
}
</script>
