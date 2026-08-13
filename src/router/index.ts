import { createRouter, createWebHistory } from 'vue-router'
import Login from "@domains/auth/Login.vue";
import Home from "@domains/admin/Home.vue";
import Sections from "@domains/admin/Sections.vue";

const base = import.meta.env.VITE_BASE_URL || "/";
const routes = [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: Home,
        meta: {
            layout: 'main',
        },
    },
    {
        path: "/sections",
        name: "sections",
        component: Sections,
        meta: {
            layout: 'main',
        },
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            layout: 'blank',
        },
    }
];

export default createRouter({
    history: createWebHistory(base),
    routes,
});
