<template>
    <div v-if="load">
        <h1 class="mb-3">Добавить заметку</h1>
        <form @submit.prevent.stop="CreateNote" ref="formCreate">
            <input type="text" class="mb-3 form-control" v-model="note.Title">
            <textarea type="text" class="mb-3 form-control" v-model="note.Content" rows="5"></textarea>
  
            
            <div><b>Выберите изображение</b></div>
            <Select-Images @save-img="(imgList)=>{ note.Img = imgList}"></Select-Images>

            <div class="row">
                <div class="col-3">
                    <button type="submit" class="btn btn-secondary">Добавить</button><br>
                </div>
                <div class="col-2">
                    <button @click.prevent.stop="note.Fixed = !note.Fixed" title="Закрепить" v-if="!note.Fixed" class="btn btn-outline-secondary p-0"> <Icon  size="30" class="mt-1" name="mdi-light:pin"/></button>
                    <button @click.prevent.stop="note.Fixed = !note.Fixed" title="Открепить" v-if="note.Fixed"  class="btn btn-secondary p-0"> <Icon  size="30" class="mt-1" name="mdi-light:pin-off"/></button>
                </div>
            </div>           
     
         </form>
        <Teleport to="#modal_massage">
            <Small-Massage :backDrop="false" :text="textMeasage" v-if="show" @Close="show = fales"> </Small-Massage>
        </Teleport>
    </div>
</template>

<script>
import SmallMassage from '~/components/Modal/Small-Massage.vue';
import SelectImages from '~/components/UI/Imgs/Select-Images.vue';

import axios from 'axios';
import { Utilits } from '~/server/Utilits/Utilits';

    export default {
        data() {
            return {
                show: false,
                textMeasage: '',
                load: false,

                note: {
                    Title: 'test  3',
                    Content: 'Content 3',
                    Fixed: false,
                    Img: null
                }   
            }
        },
        methods: {
            // async CreateNote() {
            async CreateNote() {


                let response = await axios.post('/api/v1/notes/create', {
                    body: {
                        note: this.note,
                        action: 'create'
                    },
                });

                console.log("response ", response.data);

                if(response.status == 200) {
                    this.show = true;
                    this.textMeasage = response.data.textStatus;
                }
            },
        },
        mounted() {
            // console.log("response img ", Utilits.toBase64InFile('addNoteImage', 'img2'));
            this.load = true;
   
        },
        components: {
            'Small-Massage': SmallMassage,
            'Select-Images': SelectImages,
        },
        computed: {
            // Image: Utilits.toBase64InFile('addNoteImage', 'img2'),
        }
    }
</script>

<style lang="scss" scoped>
form {
    max-width: 500px;
}
</style>