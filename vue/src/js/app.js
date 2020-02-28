import Vue from 'vue';

import numberBaseball from '../vue/numberBaseball.vue';
import responseCheck from '../vue/responseCheck.vue';
import rockPaperScissors from '../vue/rockPaperScissors.vue';
import lottoGenerator from '../vue/lottoGenerator.vue';
import ticTacToe from '../vue/ticTacToe.vue';
import mineSweeper from '../vue/mineSweeper.vue';

new Vue(numberBaseball).$mount('#root');

new Vue(responseCheck).$mount('#root2');

new Vue(rockPaperScissors).$mount('#root3');

new Vue(lottoGenerator).$mount('#root4');

new Vue(ticTacToe).$mount('#root5');

new Vue(mineSweeper).$mount('#root6');