<template>

  <div v-if="Images != undefined" class="d-flex gap-3 mt-4 mb-4 images_list">
    <!-- img list 
    {{ Images.name }} -->
    <!-- <div v-for="image in Images" :key="image.id">
      <b>Название {{ image.name }}</b>
      <img :src="image.data" :alt="image.id">
    </div> -->
    <div class="col-4 images_list__image card p-3">

        <div class="d-flex gap-2 pb-2">
          <div class="pb-3 col-8"><b >{{ Images.name.split('.',[1])[0] }} </b></div> 
          <div class="col-4 text-right pr-2">
            <button class="btn btn-danger pt-2"> <Icon name="mdi-light:delete" size="25" title="Удалить" /></button>
          </div>
        </div>

        <img :src="Images.data" :alt="Images.id " class="" @click="show = !show">
        <teleport to='#modal_massage' >
          <FullImg-Modal :img="Images" :backDrop="true" v-if="show" @Close="show = false"></FullImg-Modal>
        </teleport>
    </div>
  </div>
</template>

<script>
  import FullImg from '~/components/Modal/ImgModalPrevuew';

  export default {
    props: ['Images'],
    data() {
        return {
          show: false,
        }
    },
    methods: {

    },
    components: {
      'FullImg-Modal': FullImg
    },
  }
</script>

<style scoped lang="scss">
.images_list {

}
.topPanel {

}
.images_list__image {
  cursor: pointer;
}

</style>