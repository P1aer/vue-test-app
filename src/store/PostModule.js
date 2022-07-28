import axios from "axios";

export const PostModule = {
    state: () => ({
        posts: [],
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
    }),
    getters : {
        sortedPosts(state) {
            console.log([...state.posts].sort((a,b)  => a[state.selectSort]?.localeCompare(b[state.selectSort])))
            return [...state.posts].sort((a,b)  => a[state.selectSort]?.localeCompare(b[state.selectSort]))
        },
        sortAndSearch(state,getters) {
            return getters.sortedPosts.filter(p => p.title.includes(state.searchQ))
        }
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload
        },
        setSelectSort(state, payload) {
            state.selectSort = payload
        },
        setSearchQ(state, payload) {
            state.searchQ = payload
        },
        setPage(state, payload) {
            state.page = payload
        },
        setTotalP(state, payload) {
            state.totalP = payload
        },
        setIsLoading(state, payload) {
            state.isLoading = payload
        },
    },
    actions: {
        async fetchData({state,commit}) {
            try {
                commit("setIsLoading" ,true)
                const {data, headers} = await axios.get("https://jsonplaceholder.typicode.com/posts",{
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit("setTotalP", Math.ceil(headers["x-total-count"] / state.limit))
                commit("setPosts", data)
            }
            catch (e) {
                console.log(e.message)
            }
            finally {
                commit("setIsLoading" ,false)
            }
        },
        async fetchMoreData({state,commit}) {
            try {
               commit("setPage",state.page++);
                const {data, headers} = await axios.get("https://jsonplaceholder.typicode.com/posts",{
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit("setTotalP", Math.ceil(headers["x-total-count"] / state.limit))
                commit("setPosts", [...state.posts,...data])
            }
            catch (e) {
                console.log(e.message)
            }
        }
    },
    namespaced: true,
}