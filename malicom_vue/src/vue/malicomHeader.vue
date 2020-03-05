<template>
    <div class="header">
        <h1>Markup List Common Page</h1>
        <select>
            <option selected="selected" value="프로젝트 선택">프로젝트 선택</option>
        </select>
        <button>수정</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        }
    };
</script>
<style lang="less">
    .header {
        position: relative;
        width: 100%;
        min-width: 1030px;
        background-color: #444;
        h1 {
            margin-left: 15px;
            font-size: 23px;
            color: #fff;
            line-height: 50px;
        }
        select, button {
            position: absolute;
            top: 10px;
            height: 30px;
            font-size: 15px;
            color: #ddd;
            background-color: #444;
            border: 1px solid #aaa;
        }
        select {
            right: 15px;
            padding: 3px 10px;
            width: 170px;
        }
        button {
            right: 190px;
            width: 60px;
            cursor: pointer;
            transition: all .2s;
            &:hover {
                background-color: #fff;
                border: 1px solid #fff;
                color: #444;
            }
        }
    }
</style>