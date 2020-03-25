<template>
    <div class="header">
        <h1>Markup List Common Page</h1>
        <select v-for="(value, index) in data" :key="index">
            <option selected="selected" value="프로젝트 선택">프로젝트 선택</option>
            <!--option v-value="value.id">{{value.name}}</option-->
        </select>
        <button>수정</button>
    </div>
</template>
<script>
    import data from '../data-test';
    // const selectBox = $('.header select');
    // this.data.forEach(function(data) {
    //     let selectOpt = `<option value='${data['id']}'>${data['name']}</option>`;
    //     selectBox.append(selectOpt);
    // });
    // selectBox.change(function() {
    //     let selectProjectId = $(this).val();
    // });
    export default {
        data() {
            return {
                data: data,
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