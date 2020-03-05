<template>
    <div>
        <malicom-header />
        <malicom-list />
        <popup-markup-add />
    </div>
</template>
<script>
    import store from '../js/data/store';
    import malicomHeader from './malicomHeader.vue';
    import malicomList from './malicomList.vue';
    import popupMarkupAdd from './popupMarkupAdd.vue';

    export default {
        store,
        components: {
            malicomHeader,
            malicomList,
            popupMarkupAdd,
        },
        methods: {
        },
        watch: {
        }
    };
</script>