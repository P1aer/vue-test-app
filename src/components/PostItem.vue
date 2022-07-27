<template>
    <div class="post" >
        <div>
            <div>
                <strong>Название</strong> {{ post.title}}
            </div>
            <div>
                <strong>Текст</strong> {{ post.body}}
            </div>
        </div>
        <div class="post-btns">
            <cool-btn
                    @click="$emit('remove',post)"
            >убери</cool-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostItem",
        props: {
            post: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .post {
        padding: 1rem;
        border: 2px solid teal;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>