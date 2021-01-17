import {createRouter,createWebHistory} from 'vue-router'
import Dashboard from '../components/dashboard/Dashboard'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import Projects from '../components/projects/Projects'
import Register from '../components/auth/Register'
import Project from '../components/projects/Project'

const router=createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: Dashboard },
        { path: '/login', component: Login },
        { path: '/projects', component: Projects },
        { path: '/logout', component: Logout },
        { path:'/register',component:Register},
        { path:'/projects/:id', component: Project , name: 'projectDetail'}
    ]
});

export default router;
