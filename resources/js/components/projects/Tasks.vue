<template>
    <div class="flex justify-between">
        <h1>Tasks</h1>
        <button
            class="px-2 py-1  rounded text-2xl  text-white"
            :class="{ 'bg-red-500 hover:bg-red-400' : formVisible , 'bg-green-500 hover:bg-green-400' : !formVisible }"
            @click="formVisible=!formVisible">
            {{ !formVisible ? 'New Task' : 'Cancel'}}
        </button>
    </div>
    <div v-if="formVisible" class="w-full">
        <new-task :projectId="project.id"></new-task>
    </div>
    <div class="w-full">
        <table class="border-collapse w-4/5 mx-auto border-3 table table-fixed">
            <thead>
            <tr>
                <td>Title</td>
                <td>Priority</td>
                <td>Due Date</td>
                <td>Created At</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            <Task v-for="task in project.tasks" :index="task.id" :task="task"></Task>
            </tbody>
        </table>
    </div>

</template>
<script>
import Task from './Task'
import NewTask from './NewTask'
export default {
    components:{
        Task,
        NewTask
    },
    props:['project'],
    data(){
        return{
            formVisible:false
        }
    }
}
</script>
