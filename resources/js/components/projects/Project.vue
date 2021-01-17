<template>
    <div class="mx-3 my-2 w-full">
        <div>
            <div class="w-full rounded-2xl bg-white text-black px-5 py-2 text-2xl mb-4">
                <h1 class="text-2xl">Id : #{{project.id}}</h1>
            </div>

        </div>
        <div class="w-full rounded-2xl bg-white text-black px-5 py-2 text-2xl mb-4">
            Name : {{ project.name}}
        </div>
        <div  class="w-full rounded-2xl bg-white text-black px-5 py-2 text-2xl mb-4">
            Image :<img :src="project.image" class="w-15" alt="{{project.name}}">
        </div>
        <div  class="w-full rounded-2xl bg-white text-black px-5 py-2 text-2xl mb-4 items-center">
            <Tasks :project="project"></Tasks>
        </div>
    </div>
</template>
<script>
import { mapGetters} from 'vuex'
import Task from './Task'
import Tasks from './Tasks'
 export default {
    components:{
        Task,
        Tasks
    },
    mounted() {
        console.log(this.$store.dispatch('getProject',this.$route.params.id))
    },
     computed:{
        ...mapGetters(['project'])
     }
 }
</script>
