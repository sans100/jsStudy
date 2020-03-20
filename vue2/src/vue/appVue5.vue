<template>
    <div>
        <!--ul v-for=" i in 9 " :key="i" style="display: inline-block">
            <li v-for="j in 9" :key="j">
                {{ i }} x {{ j }} = {{ i * j }}
            </li>
        </ul>
        <p><span v-for=" item in arr " :key="item">{{ item }}</span></p>
        <p><span v-for=" item in obj " :key="item">{{ item }}</span></p>
        <p v-for=" (item, index) in arr " :key="item">{{ index }} => {{ item }}</p>
        <p v-for=" (item, key) in obj " :key="item">{{ key }} => {{ item }}</p>
        <p v-for=" (item, key, index) in obj " :key="item">{{ index }} => {{ key }} : {{ item }}</p-->
        <ul>
            <li v-for=" (no, i) in arr2 " :key="no">
                <button @click="remove(i)">x</button>{{ no }}
            </li>
            <li>
                <button @click="append(1)">+1</button>
                <button @click="append(5)">+5</button>
                <button @click="append(10)">+10</button>
            </li>
        </ul>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                arr: ['A', 'B', 'C', 'D'],
                obj: {
                    one: 1,
                    two: 2,
                    three: 3,
                },
                arr2: [],
                cur: 0
            }
        },
        methods: {
            append: function(x) {
                for(let i = 0; i < x; i++) {
                    this.arr2.push(++this.cur);
                }
            },
            remove: function(idx) {
                this.arr2.splice(idx, 1);
            }
        },
    };
</script>
