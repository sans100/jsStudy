<template>
    <div>
        <div v-show="isLoginBoxShow">
            <p>비로그인 상태 화면</p>
            <button @click="login">로그인</button>
        </div>
        <div v-show="!isLoginBoxShow">
            <p>로그인 상태 화면</p>
            <button @click="logout">로그아웃</button>
        </div>
    </div>
</template>
<script>
    // v-if 로 작성해보자
    export default {
        data() {
            return {
                isLoginBoxShow: true,
            }
        },
        methods: {
            login() {
                this.isLoginBoxShow = false;
            },
            logout() {
                this.isLoginBoxShow = true;
            },
        },
    };
</script>
