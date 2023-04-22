import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import gallery from '@/components/gallery'
import about from '@/components/about'
import contact from '@/components/contact'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: home,
            name: 'home'
            
        },
        {
            path: '/blog',
            component: blog,
            name: 'blog'
        },
        {
            path: '/gallery',
            component: gallery,
            name: 'gallery'
        },
        {
            path: '/about',
            component: about,
            name: 'about'
        },
        {
            path: '/contact',
            component: contact,
            name: 'contact'
        }
        
    ]
})