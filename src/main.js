import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from "@/components/UI/index"
import Vintersection from "@/directives/Vintersection";


const app = createApp(App)

components.forEach(comp => {
    app.component(comp.name,comp)
})

app.directive('intersection',Vintersection)

app
    .use(router)
    .use(store)
    .mount('#app')
