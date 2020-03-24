import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import appVue from '../vue/appVue.vue';
import router from '../router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    components: { appVue },
    template: '<appVue/>'
});
