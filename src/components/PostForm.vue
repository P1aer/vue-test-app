<template>
    <form @submit.prevent>
        <h4> Создание</h4>
        <cool-input
                v-model="post.title"
                placeholder="Название"/>
        <cool-input
                v-model="post.body"
                placeholder="Текст"/>
        <cool-btn @click="createPost" class="ok-btn">ok</cool-btn>
    </form>
</template>

<script>
    export default {
        name: "PostForm",
        data()  {
            return {
                post: {
                    title:"",
                    body: ""
                }
            }
        },
        methods: {
            createPost() {
                this.post.id = Date.now()
                this.$emit("create",this.post)
                this.post = {
                    title:"",
                    body: ""
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    form {
        display: flex;
        flex-direction: column;
    .ok-btn {
        align-self: flex-end;
        margin-top: 1rem;
        }
    }
</style>