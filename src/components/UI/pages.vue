<template>
    <div class="page">
        <div
                class="page-main"
             v-for="pageN in totalP"
             :key="pageN"
                :class="{
                 'current-page': pageN === page
                }"
                @click="changePage(pageN)"
        >
            {{ pageN }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "pages",
        props: {
            totalP: {
                type: Number,
                required: true
            },
            page: Number
        },
        methods: {
            changePage(page) {
                this.$emit('update:page',page)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page {
        display: flex;
        margin-top: 1rem;
    &-main {
         border: 1px solid black;
         padding: 0.6rem;
     }
    .current-page {
       background: teal;
    }
    }
</style>