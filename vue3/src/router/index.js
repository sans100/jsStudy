import Vue from 'vue';
import Router from 'vue-router';
import board from '../components/board.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/board/free',
            name: 'board',
            component: board
        },
    ]
})