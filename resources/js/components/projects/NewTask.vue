<template>
    <div class="flex w-full items-center">
        <form @submit.prevent="addTask" class="w-full mx-auto">
            <div class="w-2/3 mx-auto">
                <label for="title">Task Name:</label>
                <input v-model="formData.title" type="text" id="title" name="title" class="border-2 mb-3 w-full px-4 py-2 text-xl text-gray-500 rounded focus-within:border-blue-500 border-blue-200" placeholder="Enter Task Name..">
                <label for="due_date">Due Date <span class="text-sm text-red-500"> It can be null</span></label>
                <input v-model="formData.due_date" type="date" id="due_date" name="due_date" class="border-2 mb-3 w-full px-4 py-2 text-xl text-gray-500 rounded focus-within:border-blue-500 border-blue-200" placeholder="Due Date">
            </div>
            <div class="w-1/3 mx-auto">

                <button class="px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-bold font-2xl rounded w-2/3 ml-4">Add Task!</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            formData:{
                title:'',
                due_date:'',
                project_id:this.projectId
            }
        }
    },
    methods:{
        async addTask(){
            this.$store.dispatch('addTask',this.formData)

            this.formData={
                title:'',
                due_date:'',
                project_id: this.projectId
            }
            this.$swal({
                title:'Added!',
                text:'Your Task is added!',
                icon:'success'
            })
        }
    },
    props:['projectId']
}
</script>
