<template>
    <div class="main">
        <h1>1 страница</h1>
        <cool-input v-model="searchQ" placeholder="поисковик"/>
        <div class="main-btns">
            <cool-btn class="btn" @click="diVisible = true">
                тык
            </cool-btn>
            <selector
                    v-model="selectSort"
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
        <pages :totalP="totalP" v-model:page="page"/>
    </div>

</template>

<script>
    import PostList from "@/components/PostList";
    import PostForm from "@/components/PostForm";
    import axios from "axios"

   export default  {
       components: {
           PostForm,PostList
       },
     data() {
       return {
           posts: [],
           diVisible: false,
           isLoading: true,
           selectSort: "",
           searchQ: "",
           page: 1,
           totalP: 0,
           limit: 10,
           options: [
               {
                   value:"title",
                   name: "Название"
               },
               {
                   value:"body",
                   name: "Текст"
               },

           ]
       }
     }, methods: {
         createPost(post) {
             this.posts.unshift(post)
             this.diVisible = false
         },
           deletePost(post) {
             this.posts = this.posts.filter(p => p.id !== post.id)
           },
           async fetchData() {
             try {
                 this.isLoading = true
                 const {data, headers} = await axios.get("https://jsonplaceholder.typicode.com/posts",{
                     params: {
                         _page: this.page,
                         _limit: this.limit
                     }
                 });
                 this.totalP =Math.ceil(headers["x-total-count"] / this.limit)
                 this.posts = data
             }
             catch (e) {
                 console.log(e.message)
             }
             finally {
                 this.isLoading = false
             }
           }
       },
       mounted() {
           this.fetchData()
       },
       computed: {
           sortedPosts() {
               return [...this.posts].sort((a,b)  => a[this.selectSort]?.localeCompare(b[this.selectSort]))
           },
           sortAndSearch() {
               return this.sortedPosts.filter(p => p.title.includes(this.searchQ))
           }
       },
       watch: {
           page() {
               this.fetchData()
           }
       }
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

</style>
