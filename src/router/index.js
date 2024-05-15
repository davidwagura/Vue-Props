import {createRouter, createWebHistory} from 'vue-router'

import ChildPage from '@/components/ChildPage.vue';

import ParentPage from '../components/ParentPage.vue'

const routes =
[

    {path:'/child', component:ChildPage},

    {path:'/parent', component:ParentPage}
]

const router = createRouter({

    history: createWebHistory(),

    routes,

});

export default router;