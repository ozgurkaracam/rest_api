<template>
    <div class="flex flex-col min-h-screen justify-between">
        <Header></Header>
        <main class="flex flex-grow bg-blue-100">
        <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>
<script>
    import Header from './Shared/Header'
    import Footer from './Shared/Footer'
    export default {
        name: 'App',
        components:{Header, Footer},
        mounted() {

        }
    }
</script>
