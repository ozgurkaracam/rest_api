<template>
    <div class="py-2 px-4 flex">
        <div>
            <h1 class="text-2xl">Welcome {{ user.name }}</h1>
            <div class="bg-white rounded mt-5 py-5 px-4">
                <div class="my-2">
                    You're Register Email : <span class="italic">{{user.email}}</span>
                </div>
                <div class="flex">
                    <div class="mr-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, corporis doloremque eum,
                        exercitationem facilis illum labore laborum magni maiores maxime minus natus necessitatibus placeat
                        quisquam, reprehenderit temporibus unde voluptas.
                    </div>
                    <div class="mr-2">Ad assumenda blanditiis consectetur culpa ducimus enim eum fugiat, harum ipsa iste laborum
                        laudantium libero magni perferendis quam quia quis saepe unde. Ab accusantium cumque deserunt est
                        odio pariatur tenetur.
                    </div>
                    <div class="mr-2">A adipisci consectetur cum, ea esse expedita explicabo facere molestiae molestias nesciunt nobis
                        officiis quos rerum similique sunt! Ducimus esse expedita ipsa magnam nisi nostrum provident quas
                        rerum unde voluptatibus!
                    </div>
                    <div class="mr-2">A ab consequuntur culpa cupiditate ducimus explicabo impedit neque porro quia voluptas. Beatae
                        corporis, doloribus eaque earum esse in minus nobis perferendis, quos repellendus repudiandae sed
                        sit tempora, ut veritatis.
                    </div>
                </div>
            </div>
        </div>
    </div>
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
