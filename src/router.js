import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import EventList from './pages/EventList.vue';
import EventDetails from './pages/EventDetails.vue';
import TagList from './pages/TagList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/events',
            name: 'events',
            component: EventList
        },
        {
            path: '/events/:id',
            name: 'event-detail',
            component: EventDetails
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagList
        },
        {
            path: '/events/tag/:name',
            name: 'tag-events',
            component: EventList
        }
    ]
});

export { router };