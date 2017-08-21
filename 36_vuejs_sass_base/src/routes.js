/*jshint esversion: 6*/

import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import PageNotFound from "./components/pages/NotFound.vue";

export const routes = [
    {
        path: '/', label: "Accueil", name: "home",
        component: Home
    },
    {
        path: '/about', label: "About", name: "about",
        component: About
    },
    {
        path: "*", label: "404", name:"404",
        component: PageNotFound
    }
];
