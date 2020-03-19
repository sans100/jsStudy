import Vue from 'vue';
import Router from 'vue-router';
import read from '../vue/read.vue';
import read from '../vue/create.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'read',
            component: read,
        },
        {
            path: '/create',
            name: 'create',
            component: create,
        }
    ]
})