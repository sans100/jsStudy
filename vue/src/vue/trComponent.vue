<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="index" :cell-index="index" :row-index="rowIndex"></td-component>
    </tr>
</template>
<script>
    import tdComponent from './tdComponent.vue';

    export default {
        props: {
            rowIndex: Number,
        },
        components: {
            tdComponent,
        },
        computed: {
            rowData() {
                return this.$store.state.tableData[this.rowIndex];
            }
        }
    };
</script>
