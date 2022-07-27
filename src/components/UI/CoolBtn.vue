<template>
    <button class="ok-btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "CoolBtn"
    }
</script>

<style scoped>
    .ok-btn {
        padding: 1.25rem;
        background: none;
        border: 1px solid teal;
        color: teal;
    }
</style>