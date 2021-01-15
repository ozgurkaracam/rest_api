<template>

        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 mx-auto bg-blue-100 flex flex-col h-1/3 w-1/3">
            <form @submit.prevent="login">
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
                    Sign In
                </button>
            </div>
            </form>
        </div>

</template>
<script>
export default {
    data(){
        return{
            email:null,
            password:null
        }
    },
    methods:{
        async login(){
            console.log("ok")
            await axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/authenticate',{email:this.email,password:this.password})
                .then(response=>{
                    this.$store.commit('setToken',response.data.access_token)
                    this.$router.push({path:'/'})
                }).catch(c=>{
                    console.log(c)
                })
            });
        }
    }
}
</script>
