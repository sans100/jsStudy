<template>
    <div>
        <header />
        <router-view />
    </div>
</template>
<script>
    import header from '../components/header.vue';

    export default {
        components: {
            header,
        },
        data() {
            return {

            }
        },
        methods: {
        },
    };
</script>
