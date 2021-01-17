import {createRouter,createWebHistory} from 'vue-router'
import Dashboard from '../components/dashboard/Dashboard'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import Projects from '../components/projects/Projects'
import Register from '../components/auth/Register'
import Project from '../components/projects/Project'
import store from "../store";

const router=createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: Dashboard , meta: { requiresAuth:true} },
        { path: '/login', component: Login },
        { path: '/projects', component: Projects , meta: { requiresAuth:true} },
        { path: '/logout', component: Logout , meta: { requiresAuth:true} },
        { path:'/register',component:Register},
        { path:'/projects/:id', component: Project , name: 'projectDetail' , meta: { requiresAuth:true}}
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.state.authenticated) {
            next({
                path: '/login',
                // query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})
export default router;
