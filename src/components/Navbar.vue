<template>
    <div class="navbar">
        <div @click="$router.push('/')"> TEST</div>
        <div class="navbar-links">
            <cool-btn @click="$router.push('/posts')">Списки</cool-btn>
            <cool-btn @click="$router.push('/vue')">Списки но круче</cool-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss" scoped>
 .navbar {
     box-sizing: content-box;
     height: 4rem;
     box-shadow: 2px 2px 4px gray;
     align-items: center;
     padding: 1rem;
     display: flex;
     &-links {
         margin-left:auto;
     }
 }
</style>