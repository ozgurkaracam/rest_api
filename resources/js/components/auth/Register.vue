<template>

    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 mx-auto bg-blue-50 flex flex-col h-1/3 w-1/3">
        <h2 class="text-3xl my-2 text-gray-300">Register Form</h2>
        <form @submit.prevent="register">
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input v-model="name" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="name" type="text" placeholder="Enter Your Name">
                <p class="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="email@email.com">
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input v-model="password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
                <p class="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">
                    Sign Up
                </button>
            </div>
        </form>
    </div>

</template>
<script>
export default {
    data(){
        return{
            name:'',
            password:'',
            email:''
        }
    },
    methods:{
        async register(){
            await axios.post('/api/register',{email:this.email,name:this.name,password:this.password})
            .then(response=>
                {
                    this.$swal({
                        title:'kayıt oldunuz',
                        text:'kayıt işleminiz başarıyla tamamlandı.',
                        icon:'success'
                    })
                    this.$store.commit('setToken',response.data.access_token)
                    this.$router.push({path:'/'})
                }
            )
            .catch(err=>{
                this.$swal({
                    title:'Bir Problem Oluştu',
                    text:'kaydınızda bir problem oluştu',
                    icon:'error'
                })
            })
        }
    }
}
</script>
