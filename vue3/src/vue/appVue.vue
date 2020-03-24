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
<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0 auto;
        color: #2c3e50;
        margin-top: 60px;
        margin-bottom: 60px;
    }
</style>