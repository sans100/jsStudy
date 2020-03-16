import Vue from 'vue';
import VueRouter from 'vue-router';
import numberBaseball from './numberBaseball.vue';
import responseCheck from './responseCheck.vue';
import rockPaperScissors from './rockPaperScissors.vue';
import lottoGenerator from './lottoGenerator.vue';
import gameMathcher from './gameMathcher.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/number-baseball', component: numberBaseball },
        { path: '/response-check', component: responseCheck },
        { path: '/rock-paper-scissors', component: rockPaperScissors },
        { path: '/lotto-generator', component: lottoGenerator },
        { path: '/game/:name', component: gameMathcher },
    ],
});