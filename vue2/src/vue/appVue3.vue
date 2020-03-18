<template>
    <ul>
        <li><a v-bind:href=" url ">{{ url }}</a></li>
        <li><a :href=" getUrl('google') ">google</a></li>
        <li :class="attrNameArray">배열 지정</li>
        <li :class="attrNameObject">객체 지정</li>
    </ul>
</template>
<script>
    // v-if 로 작성해보자
    export default {
        data() {
            return {
                url: 'https://github.com/sans100/jsStudy',
                attrNameArray: ['btn', 'btn-p', 'btn-a'],
                attrNameObject: {
                    attrName: true,
                    hideAttr: false,
                    'attr-name': true,
                }
            }
        },
        methods: {
            getUrl: function(name) {
                return 'http://'+ name +'.com';
            },
        },
    };
</script>
