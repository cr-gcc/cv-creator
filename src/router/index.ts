import { createRouter, createWebHistory } from 'vue-router'
import Login from "@domains/auth/Login.vue";
import Admin from "@domains/admin/Admin.vue";

const base = import.meta.env.VITE_BASE_URL || "/";
const routes = [
    {
        path: "/",
        alias: "/home",
        component: Admin,
        meta: {
            layout: 'main',
        },
    },
    {
        path: "/login",
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
