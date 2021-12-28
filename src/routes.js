import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import Login from "./components/Login.vue"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name : "Home",
        component: Home,
        path : "/"
    },
    {
        name : "SignUp",
        component: SignUp,
        path : "/sign-up"  // you can write anything here,this will be the path
    },
    {
        name : "Login",
        component: Login,
        path : "/login"  // you can write anything here,this will be the path
    },
   


]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router

