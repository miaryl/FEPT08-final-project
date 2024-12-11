import { createWebHashHistory, createRouter } from "vue-router";

import  Home from './views/Home.vue'
import Genre from "./views/Genre.vue";
import MyLibrary from "./views/MyLibrary.vue";


const routes = [
    {path: "/",
        name: "Home",
        component: Home
    },
    {path: "/genre",
        name: "Genre",
        component: Genre
    },
    {path: "/mylibrary",
        name: "MyLibrary",
        component: MyLibrary
    }
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router