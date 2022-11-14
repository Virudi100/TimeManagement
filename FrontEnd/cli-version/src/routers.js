import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Workingtime from './components/Workingtime.vue'
import User from './components/User.vue'

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "Login",
        component: Login,
        path: "/login"
    },
    {
        name: "Workingtime",
        component: Workingtime,
        path: "/working-time"
    },
    {
        name: "User",
        component: User,
        path: "/user"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;