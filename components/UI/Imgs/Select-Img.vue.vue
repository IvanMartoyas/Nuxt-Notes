<template>
  <div v-if="Img.data != null">
    <div class="imgages">
      <div class="imgages__title">{{ Img.name }}</div>
      <img class="imgages__img" :src="Img.data" v-if="Img.data != null"> 
    </div>
  </div>
</template>

<script>
  export default {

  data() {
      return {
        Img: this.img
      }
    },
    methods: {

    },
    props: {
      img: {
        type: Object,
        default: {
          name: '',
          data: null
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.imgages {
  position: relative;
  z-index: 0;
}
.imgages__title {
  position: absolute;
  top: 0;
  padding: .5rem;
  left: 0;
  background: rgba(19 19 19 / 73%);
  color: #fff;
  width: 100%;
  z-index: 999;
}

.imgages__img {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  z-index: -1;
  height: 150px;
}

</style>