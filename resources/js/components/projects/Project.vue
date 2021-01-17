<template>
    <div class="mx-3 my-2 w-full">
        <div>
            <div class="w-full flex justify-between rounded-2xl bg-white text-black px-5 py-2 text-2xl mb-4">
                <h1 class="text-2xl">Id : #{{project.id}}</h1>
                <div v-if="!formVisible">
                    <button class="uppercase bg-blue-900 hover:bg-blue-400 text-white text-sm px-3 py-2 rounded-2xl" @click="visibleForm()">update</button>
                </div>
                <div v-if="formVisible">
                    <button class="uppercase bg-yellow-600 hover:bg-yellow-400 text-white text-sm px-3 py-2 rounded-2xl" @click="updateProject()">save</button>
                    <button class="uppercase bg-red-600 hover:bg-red-400 text-white text-sm px-3 py-2 rounded-2xl ml-2" @click="formVisible=!formVisible">Cancel</button>
                </div>
            </div>


        </div>
        <div class="w-full rounded-2xl bg-white text-black px-5 py-2 text-2xl mb-4">
            <div v-if="!formVisible">
                Name : {{ project.name}}
            </div>
            <div v-else>
                <label for="name">Name :</label>
                <input type="text" id="name" v-model="formData.name" class="border-2 border-blue-200 py-2 px-1 text-lg ml-2 active:border-blue-400">
                <br> <span class="text-xs text-red-300 italic" v-if="errors!='' ">
                {{errors}}
            </span>
            </div>
        </div>
        <div  class="w-full rounded-2xl bg-white text-black px-5 py-2 text-2xl mb-4">
            Image :<img :src="project.image" class="w-1/5" alt="{{project.name}}">
            <label v-if="formVisible" class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"></path>
                </svg>
                <span class="mt-2 text-base leading-normal">Select a file</span>
                <input type="file" accept="image/*" @change="changeImage($event)" class="hidden">
            </label>
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
        Tasks,
    },
    mounted() {
        this.$store.dispatch('getProject',this.$route.params.id)
    },
     computed:{
        ...mapGetters(['project'])
     },
     methods:{
        async updateProject(){
            await axios.put('/api/projects/'+this.project.id,{name: this.formData.name},{headers:{'Authorization': this.$store.state.token}})
            .then(response=>{
                if(response.data.errors) {
                    console.log(response.data.errors)
                    this.$swal({
                        icon:'error',
                        title:'some problems',
                        text:response.data.errors.name
                    })
                }
                else{
                    console.log(response)
                    this.$store.dispatch('getProject',this.project.id)
                    this.$swal({
                        icon:'success',
                        title:'Updated!!!',
                        text:this.formData.name+" has been updated."
                    })
                    this.formVisible=false
                    this.formData={}
                }
            })
            .catch(err=>console.log(err))
        },
         visibleForm(){
             this.formVisible=!this.formVisible
             this.formData.name=this.project.name
         },
         changeImage(event){
             let data = new FormData();
             data.append('project_id', this.project.id);
             data.append('image', event.target.files[0]);
             axios.post('/api/upload',data,{headers:{'Authorization': this.$store.state.token}})
             .then(res=>{
                 console.log(res)
                 this.$store.dispatch('getProject',this.project.id)
                 this.$swal({
                     icon:'success',
                     title:'Upload Image!!!',
                     text:"Your Image Has Changed!"
                 })
             })
             .catch(err=>console.log(err))
         }
     },
     data(){
        return{
            formData:{
                name:'',
                image:''
            },
            formVisible:false,
            errors:''
        }
     },
     created() {
        this.formData.name=this.project.name
     }
 }
</script>
