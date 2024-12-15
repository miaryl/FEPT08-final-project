import { createWebHashHistory, createRouter } from "vue-router";

import  Home from './views/Home.vue'
import MyMovies from "./views/MyMovies.vue";
import Details from "./views/Details.vue";


const routes = [
    {path: "/",
        name: "Home",
        component: Home
    },

    {path: "/my-movies",
        name: "MyMovies",
        component: MyMovies
    },
    {path: "/details/:id",
        name: "Details",
        component: Details
    },

    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router