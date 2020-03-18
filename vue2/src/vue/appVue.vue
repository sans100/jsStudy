<template>
    <div>
        <h1>Hello {{ str }} world!</h1>
        <p>{{ ('내'+'힘들다').split('').reverse().join('') + "!" }}</p>
        <p>반지름 {{ radius }}cm인 둘레의 길이는 {{ circumference(radius) }}cm이고, 원의 넓이는 {{ circleArea(radius) }}cm<sup>2</sup>입니다.</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                str: 'Vue.js',
                radius: 10,
            }
        },
        methods: {
            circumference: function( r ){
                return Math.round( 2*Math.PI*r *100 )/100;
            },
            circleArea: function( r ){
                return Math.round( Math.PI*r*r *100 )/100;
            },
        },
    };
</script>
