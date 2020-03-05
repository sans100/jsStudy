import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const POPUP_MARKUP_ADD_OPEN = 'POPUP_MARKUP_ADD_OPEN';

export default new Vuex.Store({
    state: {
        popupMarkupAdd: {
            opened: false,
        }
    }, // vue의 data와 비슷
    getters: {

    }, // vue의 computed와 비슷
    mutations: {
        [POPUP_MARKUP_ADD_OPEN](state) {
            state.popupMarkupAdd.opened = state.popupMarkupAdd.opened === false ? true : false;
        },
    }, // state를 수정할 때 사용, 동기적으로
    actions: {

    }, // 비동기를 사용할 때, 또는 여러 뮤태이션을 연달아 실행할 때
});