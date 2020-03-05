<template>
    <div class="wrap">
        <table>
            <colgroup>
                <col width="140px">
                <col width="150px">
                <col width="160px">
                <col width="200px">
                <col width="6.5%">
                <col width="auto">
                <col width="130px">
            </colgroup>
            <thead>
                <tr>
                    <th>1Depth</th>
                    <th>2Depth</th>
                    <th>3Depth</th>
                    <th>URL</th>
                    <th class="check">진행</th>
                    <th>메모</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr sample><!-- 'success'클래스 완료 -->
                    <td depth1></td>
                    <td depth2></td>
                    <td depth3></td>
                    <td link-page><a href="#" target="_blank">test.html</a></td>
                    <td class="check">진행중</td>
                    <td memo></td>
                    <td class="btn-td"><button btn-modify>수정</button><button btn-modified class="btn-modified">완료</button><button type="button" btn-delete>삭제</button><button btn-low-add title="하위 리스트 추가">추가</button></td>
                </tr>
            </tbody>
        </table>
        <button class="btn-markup-add" @click="onClickPopupMarkupAdd">리스트 등록</button>
    </div>
</template>
<script>
    export default {
        computed: {
        },
        methods: {
            onClickPopupMarkupAdd() {
                this.$store.commit('POPUP_MARKUP_ADD_OPEN');
            },
        },
    };
</script>
<style lang="less">
    .wrap {
        max-width: 1300px;
        min-width: 1000px;
        margin: 50px auto 150px;
        padding: 0 15px;
        table {
            width: 100%;
            background-color: #fff;
            border-top: 1px solid #ddd;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            tr {
                &.success {
                    background-color: #fbfbfb;
                    .check {
                        color: #bbb;
                        text-decoration: line-through;
                    }
                }
            }
            th, td {
                padding: 8px;
                border-bottom: 1px solid #ddd;
                &.check {
                    text-align: center;
                }
            }
            th {
                padding-top: 20px;
                color: #888;
                font-size: 11px;
                border-bottom: 1px solid #bbb;
                text-align: left;
            }
            td {
                color: #444;
                border-left: 1px dashed #eee;
                line-height: 17px;
                &.check {
                    color: #5d9f3b;
                    padding: 10px 5px;
                    input[type="checkbox"] {
                        opacity: 0;
                        width: 17px;
                        height: 17px;
                        margin: -2px 0 0 5px;
                        cursor: pointer;
                        vertical-align: middle;
                    }
                    span {
                        vertical-align: middle;
                        display: inline-block;
                        margin: -2px 0 0 -17px;
                        width: 17px;
                        height: 17px;
                        background: url(../img/btn_icon.png) no-repeat 0 0;
                        background-size: 34px 17px;
                    }
                    input:checked + span {
                        background-position: -17px 0;
                    }
                }
                input[type="text"], textarea {
                    font-family: '맑은고딕', 'Malgun Gothic', serif;
                }
                button {
                    margin: 0 1px;
                    height: 24px;
                    font-size: 12px;
                    color: #555;
                    border: 1px solid #bbb;
                    background-color: #fff;
                    cursor: pointer;
                    transition: all .2s;
                    letter-spacing: -0.08em;
                    &:hover {
                        background-color: #555;
                        color: #fff;
                        border: 1px solid #555;
                    }
                }
                textarea {
                    width: 95%;
                    height: 18px;
                    vertical-align: middle;
                    white-space: pre-line;
                }
                &:first-child {
                    input {
                        width: 115px;
                    }
                    + td {
                        input {
                            width: 125px;
                        }
                        + td {
                            input {
                                width: 135px;
                            }
                            + td {
                                input {
                                    width: 140px;
                                }
                            }
                        }
                    }
                }
                &.btn-td {
                    text-align: center;
                    padding: 8px 0;
                    .btn-modified {
                        background-color: #c6e4ff;
                        &:hover {
                            background-color: #0059ab;
                        }
                    }
                }
            }
        }
        .btn-markup-add {
            float: right;
            margin-top: 10px;
            width: 100px;
            height: 30px;
            font-size: 15px;
            color: #000;
            border: 1px solid #bbb;
            background-color: #fff;
            cursor: pointer;
            transition: all .2s;
            &:hover {
                background-color: #eee;
                color: #444;
            }
        }
    }
</style>