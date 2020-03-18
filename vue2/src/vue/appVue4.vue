<template>
    <div>
        <h1>{{ value }}</h1>
        <input type="text" v-model=" value ">
        <button @click=" setDefault() ">기본값</button>
        <h2>{{ single }}</h2>
        <input type="checkbox" v-model=" single " value="단일"> single
        <h2>{{ multi }}</h2>
        <input type="checkbox" v-model=" multi " value="one"> 1
        <input type="checkbox" v-model=" multi " value="two"> 2
        <input type="checkbox" v-model=" multi " value="three"> 3
        <h2>{{ radio }}</h2>
        <input type="radio" v-model=" radio " value="one"> 1
        <input type="radio" v-model=" radio " value="two"> 2
        <input type="radio" v-model=" radio " value="three"> 3
        <h2>{{ select }}</h2>
        <select v-model="select">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        <h2>{{ textarea }}</h2>
        <textarea v-model="textarea"></textarea>
    </div>
</template>
<script>
    // v-if 로 작성해보자
    export default {
        data() {
            return {
                value: 'default',
                single: true,
                multi: [],
                radio: "",
                textarea: "",
                select: "",
            }
        },
        methods: {
            setDefault: function() {
                this.value = 'default';
            },
        },
    };
</script>
