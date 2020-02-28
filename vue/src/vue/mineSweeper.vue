<template>
    <div>
        <mine-form />
        <div>{{timer}}</div>
        <mine-table />
        <div>{{result}}</div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import store, { INCREMENT_TIMER } from '../js/data/store';
    import mineTable from './mineTable.vue';
    import mineForm from './mineForm.vue';

    let interval;
    export default {
        store,
        components: {
            mineTable,
            mineForm,
        },
        computed: {
            ...mapState(['timer', 'result', 'halted']),
        },
        methods: {
        },
        watch: {
            halted(value, oldValue) {
                if (value === false) {
                    interval = setInterval(() => {
                        this.$store.commit(INCREMENT_TIMER);
                    }, 1000);
                } else {
                    clearInterval(interval);
                }
            }
        }
    };
</script>
<style lang="less">
    table {
        border-collapse: collapse;
        td {
            border: 1px solid #000;
            width: 40px;
            height: 40px;
            text-align: center;
        }
    }
</style>