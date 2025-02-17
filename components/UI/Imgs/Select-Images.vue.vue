<template>
  <div class="IMG">
    <div>
      <Select-Img></Select-Img>
     
    </div>
    <div class="IMG__list">
      <button class="IMG__item IMG__add btn btn-outline-secondary" @click="openFileInput">
        <Icon name="mdi-light:plus-circle" size="100" />
      </button>
      <Select-Img 
        class="IMG__item"
        v-for="(img, i) in imgList"
        :key="i"
        :img = "img"
      ></Select-Img>
    </div>


    <form class="d-flex mb-3 gap-3" @submit.prevent.stop=""  ref="imgForm">
      <input type="file" ref="image" class="" hidden @change="addImg"> 
      <button @click.prevent="resetForm()" class="col-2 btn btn-secondary _btn">
          <Icon name="mdi-light:refresh" size="30" />
      </button>
      <!-- <button @click="addImg">добавить</button> -->
    </form>

  </div>
</template>

<script>
import { Utilits } from '~/server/Utilits/Utilits';
import SelectImg from './Select-Img.vue'

  export default {
    data() {
      return {
        imgList:  []
      }
    },
    methods: {
      async addImg() {
   
        // подготовка изображения
        if(this.$refs.image.files[0] != undefined) {

            let img = await Utilits.toBase64InFileV2(this.$refs.image.files[0]);
            this.imgList.push({
                id: Utilits.getRandomIdSeed(),
                type: this.$refs.image.files[0].type,
                name: this.$refs.image.files[0].name,
                lastModifiedDate: this.$refs.image.files[0].lastModifiedDate,
                data: img
            })
         
            this.$emit('save-img',  this.imgList)
        }
      },
      resetForm() {
        this.$refs.imgForm.reset();
      },
      openFileInput() {
          this.$refs.image.click();
      },
    },
    components: {
        'Select-Img': SelectImg
    },
  }
</script>

<style scoped>
.IMG {

}
.IMG__list {
  display: flex;
  justify-content: start;
  gap: .7rem;
  align-items: center;
  padding: .7rem;
  background: #e8e8e8;
  overflow-y: hidden;
  width: 100%;
  border-radius: 8px;
  overflow-x: scroll;
}
.IMG__item {
  flex-basis: 300px;
  height: 150px;
  background: #fff;
  border-radius: 8px;
}
.IMG__add {
  font-size: 100px;
  color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

