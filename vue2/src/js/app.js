import Vue from 'vue';

import appVue from '../vue/appVue.vue';
import appVue2 from '../vue/appVue2.vue';
import appVue3 from '../vue/appVue3.vue';
import appVue4 from '../vue/appVue4.vue';
import appVue5 from '../vue/appVue5.vue';
import vueMain from '../vue/vue.vue';

new Vue(appVue).$mount('#app');
new Vue(appVue2).$mount('#app2');
new Vue(appVue3).$mount('#app3');
new Vue(appVue4).$mount('#app4');
new Vue(appVue5).$mount('#app5');
new Vue(vueMain).$mount('#board');

