<template>
    <tr :class="{ 'bg-red-200' : task.priority=='High' }" class="px-2 py-1">
        <td>{{task.title}}</td>
        <td class="px-4 py-1 ml-3">{{task.priority}}</td>
        <td class="px-4 py-1 ml-3">{{task.due_date ? task.due_date : 'NULL'}}</td>
        <td class="px-4 py-1 ml-3">{{task.created_at}}</td>
        <td class="px-4 py-1 ml-3">
            <button class="uppercase bg-blue-900 hover:bg-blue-400 text-white text-sm px-3 py-2 rounded-2xl">update</button>
            <button @click="delTask(task.id)" class="uppercase bg-red-600 hover:bg-red-400 text-white text-sm px-3 py-2 rounded-2xl ml-2">delete</button>
        </td>
    </tr>
</template>
<script>
export default {
    props:['task'],
    methods:{
        async delTask(id){
            // console.log(id)
            await this.$store.dispatch('delTask',id)
            .then(response=>{
                this.$store.dispatch('getProject',this.task.project_id)
                this.$swal({
                  text:this.task.name+' is Deleted!',
                    title:'Deleted',
                    icon:'error'
                })
            })
            .catch(err=>console.log(err))
        }
    }
}
</script>
