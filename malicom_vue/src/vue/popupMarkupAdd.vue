<template>
    <div class="pop-form" v-if="opened">
        <div class="add-form">
            <h3>마크업 리스트 등록</h3>
            <div class="form-box">
                <ul>
                    <li>
                        <span>페이지 Depth</span>
                        <div class="page-depth" v-for="(n, depthIndex) in 3" :key="depthIndex">
                            <span>Depth{{n}}</span> <input type="text" placeholder="페이지 Depth">
                        </div>
                    </li>
                    <li>
                        <span>파일명</span>
                        <input type="text" placeholder="파일명" markup-file> <span>.html</span>
                    </li>
                    <li>
                        <span>진행여부</span>
                        <label for="imgFlag"><input type="checkbox" id="imgFlag"><span></span></label><span class="caution">!체크 시 완료</span>
                    </li>
                    <li>
                        <span>메모</span>
                        <textarea name="" id=""></textarea>
                    </li>
                </ul>
                <div class="btn-box">
                    <button type="button" popup-btn-markup-add>확인</button>
                    <button type="button" @click="onClickPopupMarkupAdd">취소</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState({ 
                opened: state => state.popupMarkupAdd.opened,
            }),
        },
        methods: {
            onClickPopupMarkupAdd() {
                this.$store.commit('POPUP_MARKUP_ADD_OPEN');
            },
        },
    };
</script>
<style lang="less">
.pop-form {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(210, 210, 210, .8);
    .add-form {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -300px 0 0 -400px;
        width: 800px;
        background-color: #fff;
        h3 {
            padding: 6px 20px;
            background-color: #444;
            color: #fff;
            font-size: 18px;
            span {
                font-weight: bold;
                color: #dbdbdb;
            }
        }
        .form-box {
            padding: 20px;
            overflow: hidden;
            h4 {
                margin-bottom: 10px;
                font-size: 16px;
                font-weight: bold;
                color: #444;
                &:before {
                    content: "▸";
                }
                &:after {
                    content: "◂";
                }
            }
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1; 
            }
            ::-webkit-scrollbar-thumb {
                background: #aaa; 
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #888; 
            }
            ul {
                //height: 386px;
                overflow-y: auto;
                -ms-overflow-style: none; // IE에서 스크롤바 감춤
                border: 1px solid #ddd;
                background-color: #fcfcfc;
                li {
                    position: relative;
                    margin: 20px 0 20px 30px;
                    font-size: 14px;
                    list-style: square;
                    &.prj-url {
                        input {
                            width: 400px;
                        }
                        button {
                            position: relative !important;
                            margin-top: 0;
                            margin-left: 15px;
                            left: 0;
                        }
                    }
                    > span {
                        width: 150px;
                    }
                    label, input, span, p {
                        display: inline-block;
                        vertical-align: middle;
                    }
                    > label {
                        line-height: 28px;
                    }
                    textarea {
                        width: 520px;
                        max-width: 520px;
                        height: 70px;
                        max-height: 70px;
                        display: inline-block;
                        vertical-align: top;
                        white-space: pre-line;
                    }
                    input[type="text"], textarea {
                        padding: 3px 7px;
                        font-size: 14px;
                        border: 1px solid #ccc;
                        background-color: #fdfdfd;
                    }
                    input[type="text"] {
                        height: 20px;
                    }
                    label {
                        cursor: pointer;
                        input[type="checkbox"] {
                            opacity: 0;
                            cursor: pointer;
                        }
                        span {
                            margin: -3px 3px 0 -20px;
                            width: 17px;
                            height: 17px;
                            background: url(../img/btn_icon.png) no-repeat 0 0;
                            background-size: 34px 17px;
                        }
                        input:checked + span {
                            background-position: -17px 0;
                        }
                    }
                    .page-depth {
                        display: inline-block;
                        margin: 10px 0 0 -48px;
                        + .page-depth {
                            display: block;
                            margin: 10px 0 10px 107px;
                        }
                        span {
                            font-size: 13px;
                            color: #aaa;
                        }
                    }
                    .caution {
                        font-size: 12px;
                        color: #f00;
                    }
                }
            }
            .btn-box {
                margin-top: 20px;
                text-align: center;
                button {
                    display: inline-block;
                    text-align: center;
                    padding: 5px 15px;
                    border: 1px solid #bbb;
                    background-color: #fff;
                    font-size: 14px;
                    line-height: 18px;
                    cursor: pointer;
                    transition: all .2s;
                    &:hover {
                        background-color: #555;
                        color: #fff;
                        border: 1px solid #555;
                    }
                }
            }
        }
    }
}
</style>