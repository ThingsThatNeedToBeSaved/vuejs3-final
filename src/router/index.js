import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Portfolio from "../components/Portfolio.vue";
import Stocks from "../components/Stocks.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio,
    },
    {
        path: "/stocks",
        name: "Stocks",
        component: Stocks,
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "Home" } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
