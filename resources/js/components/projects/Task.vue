<template>
    <tr :class="{ 'bg-red-200' : task.priority=='High' }" class="px-2 py-1 text-sm" v-if="!updateTask">
        <td>{{task.title}}</td>
        <td class="px-4 py-1 ml-3">{{task.priority}}</td>
        <td class="px-4 py-1 ml-3">{{task.due_date ? task.due_date : 'NULL'}}</td>
        <td class="px-4 py-1 ml-3">{{task.created_at}}</td>
        <td class="px-4 py-1 ml-3">
            <button class="uppercase bg-blue-900 hover:bg-blue-400 text-white text-sm px-3 py-2 rounded-2xl" @click="updateTask=!updateTask">update</button>
            <button @click="delTask(task.id)" class="uppercase bg-red-600 hover:bg-red-400 text-white text-sm px-3 py-2 rounded-2xl ml-2">delete</button>
        </td>
    </tr>
    <tr class="px-2 py-1 text-sm" v-else>
        <td>
            <input type="text" v-model="formData.title" class="shadow appearance-none border text-sm rounded py-2 px-3 text-grey-darker" ><br>
            <span v-if="errors" v-for="error in errors" class="text-xs text-red-600">
                {{error}}
            </span>
        </td>
        <td class="px-4 py-1 ml-3">{{task.priority}}</td>
        <td class="px-4 py-1 ml-3">
            <input type="date" class="text-sm" v-model="formData.due_date">
        </td>
        <td class="px-4 py-1 ml-3">{{task.created_at}}</td>
        <td class="px-4 py-1 ml-3">
            <button class="uppercase bg-yellow-600 hover:bg-yellow-400 text-white text-sm px-3 py-2 rounded-2xl" @click="updateeTask(task.id)">save</button>
            <button class="uppercase bg-red-600 hover:bg-red-400 text-white text-sm px-3 py-2 rounded-2xl ml-2" @click="updateTask=!updateTask">Cancel</button>
        </td>
    </tr>
</template>
<script>
export default {
    props:['task'],
    data(){
        return{
            updateTask:false,
            formData:{
                title:this.task.title,
                due_date:this.task.due_date,
                project_id:this.task.project_id
            },
            errors:null
        }
    },
    methods:{
        async delTask(id){
            // console.log(id)
            await this.$store.dispatch('delTask',id)
            .then(response=>{
                this.$store.dispatch('getProject',this.task.project_id)
                this.$swal({
                  text:this.task.title+' is Deleted!',
                    title:'Deleted',
                    icon:'error'
                })
            })
            .catch(err=>console.log(err))
        },
        async updateeTask(id){
            const payload={
                id,
                formData: this.formData
            }
            await this.$store.dispatch('updateTask',payload)
            .then(response=>{
                if(response.data.errors)
                    this.errors=response.data.errors.title
                else{

                    this.updateTask=false
                    this.$store.dispatch('getProject',this.task.project_id)
                    this.$swal({
                        title:'Updated!',
                        text:'Your task is updated',
                        icon:'warning'
                    })
                }
            }).catch(err=>console.log(err))
        }
    }
}
</script>
