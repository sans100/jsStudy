import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const POPUP_MARKUP = 'POPUP_MARKUP';
export const ADD_MARKUP_LIST = 'ADD_MARKUP_LIST';

export default new Vuex.Store({
    state: {
        popupMarkupAdd: {
            opened: false,
        },
        markupsData: {
            markups: [],
            depth1: "",
            depth2: "",
            depth3: "",
            listName: "",
            listLink: "",
            doneFlag: 1,
            memo: "",
        },
    }, // vue의 data와 비슷
    getters: {

    }, // vue의 computed와 비슷
    mutations: {
        [POPUP_MARKUP](state) {
            state.popupMarkupAdd.opened = state.popupMarkupAdd.opened === false ? true : false;
        },
        [ADD_MARKUP_LIST](state) {
            state.popupMarkupAdd.opened = state.popupMarkupAdd.opened === false ? true : false;
            console.log(this.markups)
            this.markups.push({
                depth1: '뎁스1',
                depth2: '뎁스2',
                depth3: '뎁스3',
                listName: '메인페이지',
                memo: '메모',
            });
        },
    }, // state를 수정할 때 사용, 동기적으로
    actions: {

    }, // 비동기를 사용할 때, 또는 여러 뮤태이션을 연달아 실행할 때
});