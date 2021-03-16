import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/views/pages/Home.vue')
    },
    {
        name: "About",
        path: '/about',
        component: () => import('@/views/pages/About.vue')
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
})
