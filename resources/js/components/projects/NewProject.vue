<template>
    <div class="flex w-full items-center">
        <div class="w-2/3"><input type="text" v-model="name" name="name" class="w-full px-4 py-2 text-xl text-gray-500 rounded focus-within:border-blue-500" placeholder="Enter Project Name..">
        </div>
        <div class="w-1/3">
            <button @click="addProject()" class="px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-bold font-2xl rounded w-2/3 ml-4">Add Project!</button>
        </div>
    </div>
</template>
<script>
import VueSweetalert2 from "vue-sweetalert2";

export default {
    data(){
        return{
            name:null
        }
    },
    methods:{
        async addProject(){
            this.$store.dispatch('addProject',this.name).then(res=>{
                console.log(res)
                this.$swal({
                    title: 'Added!',
                    text: 'Your project, added!',
                    icon: 'success'
            })

            })
        }
    }
}
</script>
