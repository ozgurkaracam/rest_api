<template>
    <h1>
        Welcome {{user.email}}
    </h1>
</template>
<script>
export default {
    data(){
        return{
            user:this.$store.state.user
        }
    },
    mounted(){
        console.log(this.$store.state.token)
        axios.get('/api/user',{headers:{'Authorization': this.$store.state.token}}).then(res=>{
            console.log(res.data)
            this.$store.commit('setUser',res.data)
            this.user=res.data
            console.log(this.$store.state.user)
        }).catch(e=>{
            console.log(e)
        })
    }
}
</script>
