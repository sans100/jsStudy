import Vue from 'vue';
import Vuex from 'vuex';
import data from '../data-test';
Vue.use(Vuex);

export const POPUP_MARKUP = 'POPUP_MARKUP';
export const ADD_MARKUP_LIST = 'ADD_MARKUP_LIST';

export default new Vuex.Store({
    state: {
        data: data,
        popupMarkupAdd: {
            opened: false,
        },
        depth: '',
    }, // vue의 data와 비슷
    getters: {

    }, // vue의 computed와 비슷
    mutations: {
        [POPUP_MARKUP](state) {
            state.popupMarkupAdd.opened = state.popupMarkupAdd.opened === false ? true : false;
        },
        [ADD_MARKUP_LIST](state) {
            state.popupMarkupAdd.opened = state.popupMarkupAdd.opened === false ? true : false;
            state.data.markups.depths.push({
                depth: this.depth,
            })
        },
    }, // state를 수정할 때 사용, 동기적으로
    actions: {

    }, // 비동기를 사용할 때, 또는 여러 뮤태이션을 연달아 실행할 때
});