<template>
 <div v-if="posts.length > 0">
     <h3>Список всякого</h3>
     <transition-group name="list">
         <PostItem
                 :post="post"
                 v-for="post in posts"
                 :key="post.id"
                 @remove="$emit('remove',post)"
         />
     </transition-group>

 </div>
    <h2 v-else>
        Тут Пусто :(
    </h2>
</template>

<script>
    import PostItem from "@/components/PostItem";
    export default {
        name: "PostList",
        components: {PostItem},
        props: {
            posts: {
                type:Array,
                required: true
            },
        }
    }
</script>

<style scoped>
    .list-enter-active,
    .list-leave-active {
        transition: all 0.3s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
    .list-move {
        transition: transform 0.4s ease;
    }
</style>