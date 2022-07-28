<template>
    <div>
        <Navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    export default {
        components: {Navbar}
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
</style>