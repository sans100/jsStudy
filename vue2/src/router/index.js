import Vue from 'vue';
import Router from 'vue-router';
import read from '../vue/read.vue';
import create from '../vue/create.vue';
import detail from '../vue/detail.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'read',
            component: read,
        },
        {
            path: '/create/:contentId?',
            name: 'create',
            component: create,
        },
        {
            path: '/detail/:contentId',
            name: 'detail',
            component: detail,
        },
    ]
})