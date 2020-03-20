<template>
    <div class="base">
        <router-view></router-view>
    </div>
</template>
<script>
    import router from '../router';
    
    export default {
        router,
        name: 'App',
    };
</script>
<style lang="less">
    .base {
        font-family: 'Avenir', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>