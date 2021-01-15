<template>
    <header class="min-h-10 bg-blue-300 py-2 px-5 flex justify-between items-center">
        <div class="text-2xl font-bold text-blue-900">Projectify</div>
        <ul class="flex text-blue-500">
            <li class="mr-4 sm:mr-1">
                <router-link tag="a" class="hover:text-black" active-class="text-blue-900 font-black" to="/">Dashboard</router-link>
            </li>

            <li class="mr-4 sm:mr-1">
                <router-link tag="a" class="hover:text-black" active-class="text-blue-900 font-black" to="/projects">Projects</router-link>
            </li>
            <li class="mr-4 sm:mr-1" v-if="!this.$store.state.authenticated">
                <router-link tag="a" class="hover:text-black" active-class="text-blue-900 font-black" to="/login">Login</router-link>
            </li>
            <li class="mr-4 sm:mr-1" v-else>
                <router-link tag="a" class="hover:text-black" active-class="text-blue-900 font-black" to="/logout">Logout</router-link>
            </li>
            <li class="mr-4 sm:mr-1" v-if="this.$store.state.authenticated">
                <router-link tag="a" class="hover:text-black" active-class="text-blue-900 font-black" to="/logout">sasa</router-link>
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
    mounted(){
        this.user=this.$store.state.user
    },
    updated() {
        this.user=this.$store.state.user
    }
}
</script>
