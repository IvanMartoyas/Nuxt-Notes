<template>
    <div>
        <b>Найти заметку</b>
        <input type="text" v-model.trim="inputData" @input="Find()">
    </div>
</template>

<script>
import { Utilits } from '~/server/Utilits/Utilits';

    export default {
        emits: [
            'find-data',// возвращает сохранённые данные
            'find-active', // если был совершон поиск
        ],
        data() {
            return {
                oldData: this.OldData,
                newFindingData: [],
                inputData: ''
            }
        },
        methods: {
            Find() {
                if(this.inputData == '') {
                    this.$emit('find-active', false);
                    return;
                }
                try {
                    this.newFindingData = Utilits.findStringInArray(this.oldData, this.inputData, 'Title')
                } catch (e) {
                    this.$emit('find-active', false);
                    console.log("ошибка поиска")
                    return;
                }
                /**
                 * 1 find-data возвращаю найденные данные
                 * 2 find-active говорю что активировать вывод найденного по фильтрам 
                 */
                this.$emit('find-data', this.newFindingData);
                this.$emit('find-active', true);
            }
        },
        props: {
            OldData: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>