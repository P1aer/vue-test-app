<template>
    <div class="main">
        <h1>2  страница</h1>
        <cool-input
                :model-value="searchQ"
                placeholder="поисковик"
                @update:model-value="setSearchQ"

        />
        <div class="main-btns">
            <cool-btn class="btn" @click="diVisible = true">
                тык
            </cool-btn>
            <selector
                   :modelValue="selectSort"
                   @update:modelValue="setSelectSort"
                    :options="options"
            />
        </div>

        <Dialog v-model:show="diVisible" >
            <PostForm @create="createPost"/>
        </Dialog>
        <PostList
                v-if="!isLoading"
                @remove="deletePost"
                :posts="sortAndSearch"/>
        <div v-else>
            Загрузка!
        </div>
        <div v-intersection="fetchMoreData" class="observer"></div>
        <!--   <pages :totalP="totalP" v-model:page="page"/>-->
    </div>

</template>

<script>
    import PostList from "@/components/PostList";
    import PostForm from "@/components/PostForm";
    import axios from "axios"
    import {mapState, mapGetters,mapMutations,mapActions} from "vuex"

    export default  {
        name: 'PageWithStore',
        components: {
            PostForm,PostList
        },
        data() {
            return {
                diVisible: false,
            }
        }, methods: {
            ...mapMutations({
                setPage: "post/setPage",
                setSearchQ: "post/setSearchQ",
                setSelectSort: "post/setSelectSort"
            }),
            ...mapActions({
                fetchData: 'post/fetchData',
                fetchMoreData: "post/fetchMoreData"
            }),
            createPost(post) {
                this.posts.unshift(post)
                this.diVisible = false
            },
            deletePost(post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
        },
        mounted() {
            this.fetchData()
        },
        computed: {
            ...mapState({
                posts: state => state.post.posts,
                isLoading: state => state.post.isLoading,
                selectSort: state => state.post.selectSort,
                searchQ: state => state.post.searchQ,
                page: state => state.post.page,
                totalP: state => state.post.totalP,
                limit: state => state.post.limit,
                options: state => state.post.options,
            }),
            ...mapGetters({
                sortedPosts: "post/sortedPosts",
                sortAndSearch: "post/sortAndSearch"
            })
        },
        watch: {
            /*           page() {
                           this.fetchData()
                       }*/
        }
    }
</script>

<style lang="scss">
    .main {
        padding: 1.25rem;
        &-btns {
            margin: 1rem 0;
            display: flex;
            justify-content: space-between;
        }
    }
    .btn {

    }
    .observer {
        height: 30px;
    }

</style>
