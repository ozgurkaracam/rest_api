<template>
    <div class="justify-center text-center items-center py-3">
        <div v-if="this.$store.state.authenticated">
            <h1>Your Projects!</h1>
            <ul class="w-full">
                <li v-for="item in projects" class="w-1/3 bg-blue-800 text-white hover:text-blue-200 hover:font-black mb-2 rounded border border-blue-500" >
                    {{ item.id }} | {{ item.name }} | Tasks: {{ item.tasks_count}}
                </li>
            </ul>
        </div>
        <div v-else class="justify-center text-center items-center">
            <h1>Please Login!</h1>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            projects:[]
        }
    },
    mounted() {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get('/api/projects',{headers:{'Authorization':this.$store.state.token}})
                .then(res => {
                    console.log(res.data)
                    this.projects=res.data.data.projects
                    console.log(res.data.data.projects)
                })
                .catch(c => {
                    console.log(c)
                })
        })
    }
}
</script>
