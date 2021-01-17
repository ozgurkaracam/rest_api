<template>
    <header class="min-h-10 bg-blue-300 py-2 px-5 flex justify-between items-center">
        <div class="text-2xl font-bold text-blue-900 cursor-pointer" @click="this.$router.push({path:'/'})">Projectify</div>
        <ul class="flex text-blue-500">
            <li class="mr-4 sm:mr-1">
                <router-link tag="a" class="hover:text-black" v-if="this.authenticated" active-class="text-blue-900 font-black" to="/">Dashboard</router-link>
            </li>

            <li class="mr-4 sm:mr-1">
                <router-link tag="a" v-if="this.authenticated" class="hover:text-black" active-class="text-blue-900 font-black" to="/projects">Projects</router-link>
            </li>
            <li class="mr-4 sm:mr-1" v-if="!this.authenticated">
                <router-link tag="a" class="hover:text-black" active-class="text-blue-900 font-black" to="/login">Login</router-link>
            </li>
            <li class="mr-4 sm:mr-1">
                <router-link tag="a" v-if="!this.authenticated" class="hover:text-black" active-class="text-blue-900 font-black" to="/register">Register</router-link>
            </li>
            <li class="mr-4 sm:mr-1" v-if="this.authenticated">
                <button class="hover:text-black" v-on:click="logout" >Logout</button>
            </li>
        </ul>
    </header>
</template>
<script>
export default{
    data(){
        return {
            user:null
        }
    },
    computed:{
        authenticated(){
            if(!this.$store.state.authenticated)
                this.$router.push({path:'/login'})
            return this.$store.state.authenticated
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('logout').then(res=>console.log(res));
        }
    }
}
</script>
